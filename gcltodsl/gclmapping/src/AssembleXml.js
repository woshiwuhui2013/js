
const fs = require('fs')
const xml2js = require('xml2js');


class AssebleXml {
  constructor(filepath, configuration) {
    const parser = new xml2js.Parser();

    const xmlString = fs.readFileSync(filepath)

    let _this = this;
    parser.parseString(xmlString, (err, result) => {
      // result is the JavaScript object
      //   console.log(result)
      console.log("this = ", this)
      this.xmlobj = result;
    });

    console.log(this.xmlobj)
    this.graphobj = { elems: [] }
    this.tails = new Set();
    this.flowPair = [];

    this.bpmntype = configuration;

  }

  getElemBound(type) {
    if (["usertask", "scripttask", "reglangtask", "authlangtask", "cryptlangtask"].includes(type)) {
      return { width: 100, height: 80 }
    } else if (["endevent", "startevent"].includes(type)) {
      return { width: 36, height: 36 }
    } else if (["gateway"].includes(type)) {
      return { width: 50, height: 50 }
    } else {
      return { width: 50, height: 50 }
    }

  }
  getBpmnType(name) {
    for (let elem of this.bpmntype) {
      if (name === elem.name) {
        return elem.type
      }
    }

    return "activity"
  }

  pushElem(name) {
    for (let e of this.graphobj.elems) {
      if (e.name == name) {
        return false;
      }
    }

    return true;
  }
  getElem(name) {
    for (let e of this.graphobj.elems) {
      if (e.name == name) {
        return e;
      }
    }

    return undefined;
  }
  addElem(cur, next, type) {
    let x = 100, y = 100

    let newtail = []
    for (let c of this.tails) {
      if (c.name == cur) {

        for (let i = 0; i < next.length; i++) {
          x = c.x + 150
          y = c.y + 150 * i


          this.flowPair.push([cur, next[i]])
          if (this.pushElem(next[i])) {
            this.graphobj.elems.push({ type: this.getBpmnType(next[i]), name: next[i], x: x, y: y })
            this.tails.add({ name: next[i], x: x, y: y })

          }

        }
        this.tails = new Set([...this.tails].filter(e => e.name != cur))

        return
      }
    }
    // 新的流程
    let offset = this.tails.length;
    if (offset == undefined) {
      offset = 0;
    }
    x = x;
    y = y + 200 * offset;

    if (this.pushElem(cur)) {
      this.graphobj.elems.push({ type: this.getBpmnType(cur), name: cur, x: x, y: y })
    }

    for (let i = 0; i < next.length; i++) {
      const x1 = x + 150
      const y1 = y + 150 * i
      this.flowPair.push([cur, next[i]])
      if (this.pushElem(next[i])) {
        this.graphobj.elems.push({ type: this.getBpmnType(next[i]), name: next[i], x: x1, y: y1 })
        this.tails.add({ name: next[i], x: x1, y: y1 })
      }
    }

  }

  toXml(filepath) {
    let definitions = this.xmlobj["bpmn2:definitions"]
    let process = definitions["bpmn2:process"][0]
    let diagram = definitions["bpmndi:BPMNDiagram"][0]
    let plane = diagram["bpmndi:BPMNPlane"][0]

    for (let e of this.graphobj.elems) {
      if (e.type == "startevent") {
        let shapes = plane["bpmndi:BPMNShape"]
        let startevents = process["bpmn2:startEvent"];
        if (startevents == undefined) {
          startevents = []
          process["bpmn2:startEvent"] = startevents
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 36,
                height: 36
              }
            }
          }
        )
        startevents.push(
          {
            $: { id: e.name },
            "bpmn2:outgoing": [],
            "bpmn2:incoming": []
          }
        )
      } else if (e.type == "endevent") {
        let shapes = plane["bpmndi:BPMNShape"]
        let startevents = process["bpmn2:endEvent"];
        if (startevents == undefined) {
          startevents = []
          process["bpmn2:endEvent"] = startevents
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 36,
                height: 36
              }
            }
          }
        )
        startevents.push(
          {
            $: { id: e.name },
            "bpmn2:outgoing": [],
            "bpmn2:incoming": []
          }
        )
      }
      else if (e.type == "usertask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["bpmn2:userTask"];
        if (tasks == undefined) {
          tasks = []
          process["bpmn2:userTask"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
      else if (e.type == "usertask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["bpmn2:userTask"];
        if (tasks == undefined) {
          tasks = []
          process["bpmn2:userTask"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
      else if (e.type == "usertask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["bpmn2:userTask"];
        if (tasks == undefined) {
          tasks = []
          process["bpmn2:userTask"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
      else if (e.type == "usertask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["bpmn2:userTask"];
        if (tasks == undefined) {
          tasks = []
          process["bpmn2:userTask"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
      else if (e.type == "scripttask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["bpmn2:scriptTask"];
        if (tasks == undefined) {
          tasks = []
          process["bpmn2:scriptTask"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
      else if (e.type == "reglangtask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["flowable:regLang"];
        if (tasks == undefined) {
          tasks = []
          process["flowable:regLang"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
      else if (e.type == "cryptlangtask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["flowable:criptLang"];
        if (tasks == undefined) {
          tasks = []
          process["flowable:cryptLang"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
      else if (e.type == "autlangtask") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["flowable:authLang"];
        if (tasks == undefined) {
          tasks = []
          process["flowable:authLang"] = tasks
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 100,
                height: 80
              }
            }
          }
        )
        tasks.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      } else if (e.type == "gateway") {
        let shapes = plane["bpmndi:BPMNShape"]
        let gateways = process["bpmn2:exclusiveGateway"];
        if (gateways == undefined) {
          gateways = []
          process["bpmn2:exclusiveGateway"] = gateways
        }
        if (shapes == undefined) {
          shapes = []
          plane["bpmndi:BPMNShape"] = shapes
        }
        shapes.push(
          {
            $: { id: e.name + "_di", bpmnElement: e.name },
            "dc:Bounds": {
              $: {
                x: e.x,
                y: e.y,
                width: 50,
                height: 50
              }
            }
          }
        )
        gateways.push({
          $: { id: e.name },
          "bpmn2:outgoing": [],
          "bpmn2:incoming": []
        })
      }
    }

    for (let pair of this.flowPair) {
      const fromelem = this.getElem(pair[0])
      const frombound = this.getElemBound(fromelem.type)
      const toelem = this.getElem(pair[1])
      const tobound = this.getElemBound(toelem.type)

      const edgeName = "flow_" + pair[0].substring(pair[0].length - 3) + "to" + pair[1].substring(pair[1].length - 3)

      let edges = plane["bpmndi:BPMNEdge"]
      let sequenceFlows = process["bpmn2:sequenceFlow"];
      if (sequenceFlows == undefined) {
        sequenceFlows = []
        process["bpmn2:sequenceFlow"] = sequenceFlows
      }
      if (edges == undefined) {
        edges = []
        plane["bpmndi:BPMNEdge"] = edges
      }
      edges.push(
        {
          $: { id: edgeName + "_di", bpmnElement: edgeName },
          "di:waypoint": [{
            $: {
              x: fromelem.x + frombound.width,
              y: fromelem.y + frombound.height/2
            }
          },
          {
            $: {
              x: toelem.x,
              y: toelem.y + tobound.height/2
            }
          }


          ]
        }
      )
      sequenceFlows.push({
        $: { id: edgeName, sourceRef: fromelem.name, targetRef: toelem.name }

      })

    }


    const xmlbuilder = new xml2js.Builder()
    const xmlstr = xmlbuilder.buildObject(this.xmlobj);
    fs.writeFileSync(filepath, xmlstr)
  }
}

module.exports = { AssebleXml }



