const body=document.body;
const options=[{id:1,name:"reverse string"},{id:2,name:"get all vowels"}]
const selectionlist=()=>{
    const select=document.createElement('select');

    select.id="selectionList";

    options.map((item)=>{
        let o=document.createElement("option")
        o.text=item.name;
        o.value=item.id;
        select.appendChild(o);
    })
    return select;
}

const reverseString=()=>{
    const d=document.getElementById("selectionList");
    let selectedValue="";
    let str="";
    d.addEventListener("change",(e)=>{
        selectedValue=e.target.value;
    })
    const inp=document.getElementById("strinp");
    inp.addEventListener("change",(e)=>{
        str=e.target.value;
    })
    console.log(str);
};
export function contest(){
    const d= document.createElement("div");
    d.classList.add("vinod");

    const p=document.createElement('p');

    p.textContent="add your string here";
    d.appendChild(p);

    const inp=document.createElement('input');

    inp.setAttribute("type","text");
    inp.setAttribute("id","strinp");
    
    d.appendChild(inp);
    const se=selectionlist();
    d.appendChild(se);
    const revStringbutton=document.createElement("button");
    revStringbutton.textContent="reverse string";
    revStringbutton.addEventListener("click",(e)=>{
        e.preventDefault();
        reverseString();
    })
    d.appendChild(revStringbutton);

    body.appendChild(d);
}


export const buttoncontainer=()=>{
    const button=document.createElement("button");
    button.classList.add("btne");
    button.textContent="click here";
    body.appendChild(button);
    button.addEventListener("click",()=>{
        console.log("working");
    })
};
