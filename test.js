
const str = "state=fjajlfld?jfdjalflj:jfdajfldjlf"
const regularpatterngateway = /^state=([0-9a-zA-Z._;]+)\?([0-9a-zA-Z._;]+):([0-9a-zA-Z._;]+)$/ 
const result = regularpatterngateway.exec(str)
console.log(result)