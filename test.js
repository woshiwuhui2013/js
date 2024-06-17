const graph = {
    "a":"b",
    "a":"c",
    "c":"d",
    "d":"f",
    "e":"a",
    "g":"a"

}


const keys = Object.keys(graph)
console.log(keys)

console.log(graph["a"].length)