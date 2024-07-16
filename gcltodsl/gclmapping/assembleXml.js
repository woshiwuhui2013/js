
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
    this.bpmntype = configuration;

  }

  getBpmnType(name) {
    const regex = /(Activity|event|gateway)/gi;
    const res = regex.exec(name)
    let type;
    if (res != undefined) {
      type = res[0].toLowerCase()
    } else {
      type = "task"
    }
    return type
  }

  pushElem(name) {
    for (let e of this.graphobj.elems) {
      if (e.name == name) {
        return false;
      }
    }

    return true;
  }
  addElem(cur, next, type) {
    let x = 100, y = 100

    let newtail = []
    for (let c of this.tails) {
      if (c.name == cur) {

        for (let i = 0; i < next.length; i++) {
          x = c.x + 150
          y = c.y + 150 * i


          if (this.pushElem(next[i])) {
            this.graphobj.elems.push({ type: this.getBpmnType(next[i]), name: next[i], x: x, y: y })
            this.tails.add({ name: next[i], x: x, y: y })
            
          }

        }
        this.tails = new Set([...this.tails].filter(e=>e.name!=cur))
       
        return
      }
    }
    // 新的流程
    let offset = this.graphobj.tails.length;
    x = x;
    y = y + 200 * offset;

    if (this.pushElem(cur)){
      this.graphobj.elems.push({ type: this.getBpmnType(cur), name: cur, x: x, y: y })
    }
   
    for (let i = 0; i < next.length; i++) {
      const x1 = x + 150
      const y1 = y + 150 * i

      if (this.pushElem(next[i])){
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
      if (e.type == "event") {
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
      } else if (e.type == "activity") {
        let shapes = plane["bpmndi:BPMNShape"]
        let tasks = process["bpmn2:task"];
        if (tasks == undefined) {
          tasks = []
          process["bpmn2:task"] = tasks
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
    const xmlbuilder = new xml2js.Builder()
    const xmlstr = xmlbuilder.buildObject(this.xmlobj);
    fs.writeFileSync(filepath, xmlstr)
  }
}

// const assembleXml = new AssebleXml('./sample.xml')
// assembleXml.addElem("evnet_Test", 300, 100, "startevent")
// assembleXml.addElem("task_Test", 100, 100, "task")
// assembleXml.toXml()


module.exports = {AssebleXml}



