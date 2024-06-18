const {GCLMap} = require('./gclMap')
const {AssebleXml} = require('./assembleXml')

const gclmap = new GCLMap('./RegLang .gcl')
gclmap.parseGcl()

const assemble = new AssebleXml('./template.xml')

for (let e of gclmap.graph){

    assemble.addElem(e[0], e[1], "")
}

