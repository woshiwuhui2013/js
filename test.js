
arr = ['a', 'b', 'c']

for (val in arr) {
    // console.log(key)
    console.log(val)
}


console.log(arr.length)

res = arr.reduce((a,b)=>a+b, 0)

str = "ssstate=a12 abc"
const patterstr = /state=a(\w+)/ig

console.log(patterstr.exec(str))


const conditionpattern = /^([0-9a-zA-Z.]+)==([0-9a-zA-Z.]+)$/i

str2 = "state==fjalk.fjdafj"
console.log(conditionpattern.exec(str2))