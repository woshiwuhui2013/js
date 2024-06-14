
const fs = require('fs')
const xml2js = require('xml2js');




class AssebleXml{
    constructor(filepath){
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

    }

    //addEvent()
    //addTask()
    
}

const assembleXml  = new AssebleXml('./template.xml')




