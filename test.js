


const regex = /(Activity|event|gateway)/gi;
const str1 = "FlowState.Event_1xqvzz8"
const result2 = regex.exec(str1)
console.log(result2)
console.log(result2[1].toLowerCase())