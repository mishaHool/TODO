let createOne = document.getElementsByClassName("butt")[0];
let menu = document.getElementsByClassName('topper-div')[0];
let cancel = document.getElementsByClassName('cancel')[0];
let apply = document.getElementsByClassName('apply')[0];
let titlee = document.getElementsByClassName('tittle')[0];
let deesc = document.getElementsByClassName('desc')[0];
let prio = document.getElementsByClassName('prior')[0];
let tasks = document.getElementById('tasks');
let triTochki;
let ddone;
class fileSystem{
    constructor(){
       this.taskss = [];
    }
   addTask(title, desc, prior){
    this.refresh();
    let data = Date.now();
    this.tasks
    this.taskss.push({
       index: data,
       title: title.value,
       desc: desc.value,
       prior: prior.value,
       done: false,
    })
   }
   changeTask(title, desc, prior, index){
    console.log("consol")
   }
   removeTask(index){
    console.log('c')
   }
   refresh(){
       let cs = document.getElementById('cs')
       if(cs != null)  tasks.removeChild(cs)
    
   }
   doneTask(index){
    index.classList.add('backgroundGray')
   }

}
let file = new fileSystem();






createOne.addEventListener("click", function(){
    menu.style.display = "flex";
});
cancel.addEventListener('click', function(){
    clearData()
    menu.style.display = "none";
})
function clearData(){
    titlee.value = '';
    deesc.value = ' ';
}
apply.addEventListener('click', function(){
    let ar = file.addTask(titlee, deesc, prio)
    clearData();
    menu.style.display = "none";
    showTasks(file.taskss);
    triTochki = document.getElementsByClassName("tri-tochki");
    ddone = document.getElementsByClassName('DoNe')
    for(i=0; i<triTochki.length; i++){
        let a = triTochki[i];
        a.addEventListener('click', function(e){
            e.target.nextElementSibling.classList.toggle('displayBlock');
        })
    }    
    for(i=0; i<ddone.length; i++){
    let aa = ddone[i];
    aa.addEventListener('click', function(){
    console.log(aa);
    let aaa = DoNe.getAttribute('data-index')
    file.doneTask(aaa);
        })
    }

    })

function showTasks(arr){
    let b = document.getElementById('css');
    if(b != null)   b.remove()
    let cs = document.createElement('div');
    cs.id = "css"
    
    for(i=0; i!=arr.length; i++){
        let taask = document.createElement("div");
        taask.className = "task";
        if(arr[i].done) taask.classList.add('backgroundGray')
    
        let ttittle = document.createElement("div");
        ttittle.className = "title";
        ttittle.innerText = arr[i].title;
        taask.appendChild(ttittle);
        
        let descrip = document.createElement('div');
        descrip.className = 'descr';
        descrip.innerText = arr[i].desc;
        taask.appendChild(descrip);
    

        let bott = document.createElement('div')
        bott.className = 'bott';
        taask.appendChild(bott);
    
        let prior = document.createElement('div');
        prior.className = 'prio';
        prior.innerText = arr[i].prior;
        bott.appendChild(prior);
    
        let menu = document.createElement('div');
        menu.className = 'menu';
    
        let triTochki = document.createElement('div');
        triTochki.className = 'tri-tochki';
        triTochki.innerText = '...'
        menu.appendChild(triTochki);
    
        let menUvIPaD = document.createElement('div')
        menUvIPaD.className = "menu-vipad";
        menu.appendChild(menUvIPaD);
    
        let ArrOwUp = document.createElement('div');
        ArrOwUp.className = 'arrow-up'
        menUvIPaD.appendChild(ArrOwUp);
    
        let DoNe = document.createElement('div');
        DoNe.className = 'done';
        DoNe.innerText = 'done'
        DoNe.dataset.index = arr[i]['index'];
        menUvIPaD.appendChild(DoNe);
    
        let DeL = document.createElement('div');
        DeL.className = 'del';
        DeL.innerText = 'delete'
        DeL.dataset.index = arr[i]['index'];
        menUvIPaD.appendChild(DeL);
    
        let EdIt = document.createElement('div');
        EdIt.className = 'edit';
        EdIt.innerText = 'edit';
        EdIt.dataset.index = arr[i]['index'];
        menUvIPaD.appendChild(EdIt)
    
        bott.appendChild(menu)
        cs.appendChild(taask)
    }
    tasks.appendChild(cs)
   
    
}


