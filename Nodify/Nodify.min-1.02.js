let nodes=[];const nodeValueEqualizer=()=>{nodes.length&&nodes.forEach(e=>{let d=Function("return "+e.value)();e.node.nodeValue!=d&&(e.node.nodeValue=d)})},createTextNode=(e,d,o)=>{document.querySelectorAll(e).forEach(e=>{let t=document.createTextNode(Function("return "+d)());nodes.push({node:t,value:d,id:o}),e.appendChild(t)})},destroyNodes=(e,d)=>{let o=nodes.filter(d=>d.id==e);d&&o.forEach(e=>{e.node.nodeValue=""}),nodes=nodes.filter(d=>d.id!=e)},convertToTextNode=(e,d)=>{document.body.querySelectorAll(e).forEach(o=>{let t=o.getAttribute("data"),n=document.createTextNode(Function(d)());nodes.push({node:n,value:d||t,id:e}),o.parentNode.replaceChild(n,o)})};document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",()=>{nodeValueEqualizer()}),nodeValueEqualizer();});