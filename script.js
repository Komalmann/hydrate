function handleSubmit(event)
{
 event.preventDefault();
 let entry = document.querySelector("#entry").value;
 document.querySelector("form").reset();

 if(entry<=0)return;
 document.getElementById("target").innerText = entry;
}

function update(value){
    document.getElementById("progressTotal").innerText = value;
}

function calGoal()
{
    const totalValue = document.getElementById("progressTotal").innerText;
    const target = document.getElementById("target").innerText;
    const completed = (totalValue)/(target/100);

    const progressCircle = document.querySelector("#progressCircle");
    progressCircle.style.background = `conic-gradient(#2e68dd ${completed}%, #2d3740 ${completed}% 100%)`;

    if(completed>100) completed ===100;

    progressCircle.style.background = `conic-gradient(#70db70 ${completed}%, #2d3740 ${completed}% 100)`  
}
function addV(){

  let progressTotal = Number(document.getElementById("progressTotal").innerText);

  let target = Number(document.getElementById("target").innerText);

  if(progressTotal>=target) 
     return;

  progressTotal = progressTotal+1;
 
  update(progressTotal);

  calGoal();
}

function subV(){

  let progressTotal = Number(document.getElementById("progressTotal").innerText);

  if(progressTotal<=0)return;

  progressTotal = progressTotal-1;
 
  update(progressTotal);
  
  calGoal();
}

const form = document.querySelector('.inputs').addEventListener('submit',handleSubmit);

document.getElementById("add").addEventListener('click',addV);

document.getElementById("sub").addEventListener('click',subV);