const objtest = {
    method1: (msg)=>{
        console.log(this)
        // console.log(this instanceof global)
    },

    method2: function (msg){
        console.log(this)
        // console.log(this instanceof global) 
    },

    aaa: "fjdjfsajlfdajl"
}


objtest.method1('fff')
objtest.method2('gggg')