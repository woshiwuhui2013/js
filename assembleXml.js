
const fs = require('fs')
const xml2js = require('xml2js');

class AssebleXml {
  constructor(filepath) {
    const parser = new xml2js.Parser();

    const xmlString = fs.readFileSync('./template.xml')

    let _this = this;
    parser.parseString(xmlString, (err, result) => {
      // result is the JavaScript object
      //   console.log(result)
      console.log("this = ", this)
      this.xmlobj = result;
    });

    console.log(this.xmlobj)
    this.elems = []

  }

  addElem(name, x, y, type) {
    this.elems.push({ type: type, name: name, x: x, y: y })
  }

  toXml() {
    let definitions = this.xmlobj["bpmn2:definitions"]
    let process = definitions["bpmn2:process"][0]
    let diagram = definitions["bpmndi:BPMNDiagram"][0]
    let plane = diagram["bpmndi:BPMNPlane"][0]

    for (let e of this.elems) {
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
      } else if (e.type == "task") {
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
      }
      const xmlbuilder = new xml2js.Builder()
      const xmlstr = xmlbuilder.buildObject(this.xmlobj);
      fs.writeFileSync("./tmp.xml", xmlstr)
    }
  }
}

const assembleXml = new AssebleXml('./template.xml')
assembleXml.addElem("evnet_Test", 300, 100, "startevent")
assembleXml.addElem("task_Test", 100, 100, "task")
assembleXml.toXml()




