Object.defineProperty(Array.prototype,"sum",{
    get:function(){
        return this.reduce((arg,acc)=>{return arg+acc});
    }
})

Object.defineProperty(Array.prototype,"average",{
    get:function(){
        return this.reduce((e,i)=>e+i)/this.length
    }
})

Object.defineProperty(Array.prototype,"min",{
    get:function(){
        let arr=this.sort((e,i)=>{
            return e-i
        })
        return arr[0];
    }
})

Object.defineProperty(Array.prototype,"max",{
    get:function(){
        let arr=this.sort((e,i)=>{
        return e-i
    })
    return arr[this.length-1]
    }
})

Object.defineProperty(Object.prototype,"log",{
    get:function(){
        console.log(this);
    }
})

Object.defineProperty(Object.prototype,"type",{
    get:function(){return typeof this}
})

Object.defineProperty(Array.prototype,"pickRandom",{
    get:function(){
        let randomIndex=Math.floor(Math.random()*this.length);
        return this[randomIndex];
    }
})