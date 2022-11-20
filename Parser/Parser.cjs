export const HTMLParser=(html,to)=>{
    let parser=new DOMParser();
    parser=parser.parseFromString(html,"text/html");
    if(to){
        document.querySelectorAll(to).forEach((element)=>{
            element.textContent="";
            element.append(parser.body.childNodes[0])
        })
    }else{
        return parser.body.childNodes[0];
    }
}