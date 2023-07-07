const input=document.getElementById('wordCount')
const container=document.querySelector('.paragraph-box')


const generateword=(n)=>{
    const letters="abcdefghijklmnopqrstuvwxyz";
    let word="";
    for(let i=0;i<n;i++)
    {
     word+=letters[(Math.random()*25).toFixed(0)]
    }
    return word;
}
const generateParagraph=()=>{
    let paragraph=document.querySelector('.paragraph');
    if(paragraph!=null)
    paragraph.remove();
    const number=Number(input.value);
    let content="";
    for(let i=0;i<number;i++)
    {
        const randomnumber=(Math.random()*12).toFixed(0);
        content+=generateword(randomnumber);
        content+=' ';
    }
    paragraph=document.createElement('p');
    paragraph.innerText=content;
    paragraph.setAttribute('class','paragraph');
    container.append(paragraph);
}

