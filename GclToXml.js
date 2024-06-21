const {GCLMap} = require('./gclMap')
const {AssebleXml} = require('./assembleXml')

const gclmap = new GCLMap('./RegLang .gcl')
gclmap.parseGcl()

const assemble = new AssebleXml('./template.xml')
let arr = Object.keys(gclmap.graph)

for (let key of arr){
    
    assemble.addElem(key, gclmap.graph[key], "task")
}

assemble.toXml()
