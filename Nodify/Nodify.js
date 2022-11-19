let nodes=[];

const nodeValueEqualizer=()=>{
    if(nodes.length){
        nodes.forEach((node)=>{
            let values=(new Function("return "+node.value)());
            node.node.nodeValue!=values?node.node.nodeValue=values:""
        })
    }
}

const createTextNode=(to,value,id)=>{
    document.querySelectorAll(to).forEach((item)=>{
        const countNode=document.createTextNode((new Function("return "+value)()));
        nodes.push({node:countNode,value,id:id})
        item.appendChild(countNode)
    })
}

const destroyNodes=(id,deletes)=>{
    let deletedNodes=nodes.filter((node)=>{
        return node.id==id
    })
    if(deletes){
        deletedNodes.forEach((node)=>{
            node.node.nodeValue=""
        })
    }
    nodes=nodes.filter((node)=>{
        return node.id!=id
    })
}

const convertToTextNode=(item,value)=>{
    document.body.querySelectorAll(item).forEach((items)=>{
        let dataVal=items.getAttribute("data");
        const countNode=document.createTextNode((new Function("return "+value?value:dataVal)()));
        nodes.push({node:countNode,value:value?value:dataVal,id:item})
        items.parentNode.replaceChild(countNode,items);
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener("click",()=>{nodeValueEqualizer()})
})
