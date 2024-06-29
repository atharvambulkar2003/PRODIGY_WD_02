let watch=document.querySelector(".stopwatch");
let start=document.querySelector(".start");
let reset=document.querySelector(".reset");
let lap=document.querySelector(".lap");
let stop=document.querySelector(".stop");
let ul=document.querySelector(".lap-result ul");
let id=null;
let millsec=0;
let mins=0;
let sec=0;

start.addEventListener("click",()=>{
    if(id!=null){
        clearInterval(id);
    }
    startWatch();
});

function startWatch(){
    id=setInterval(()=>{
        millsec++;
        if(millsec==100){
            millsec=0;
            sec++;
        }
        if(sec==60){
            millsec=0;
            sec=0;
            mins++;
        }
        watch.innerText=`${mins}:${sec}:${millsec}`;
    },10);
}

reset.addEventListener("click",()=>{
    millsec=0;
    sec=0;
    mins=0;
    if(id!=null){
        clearInterval(id);
    }
    
    let id1=setInterval(()=>{
        let lists=ul.children;
        for(let list of lists){
            list.remove();
        }
    },1);
    setTimeout(()=>{
        clearInterval(id1);
    },100);
    watch.innerText=`${mins}:${sec}:${millsec}`;
});

stop.addEventListener("click",()=>{
    clearInterval(id);
});

lap.addEventListener("click",()=>{
    let data=watch.innerText;
    let li=document.createElement("li");
    li.innerText=data;
    li.classList.add("design");
    ul.appendChild(li);
});