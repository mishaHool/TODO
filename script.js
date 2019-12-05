let createOne = document.getElementsByClassName("butt")[0];
let menu = document.getElementsByClassName('topper-div')[0];
let cancel = document.getElementsByClassName('cancel')[0];
let apply = document.getElementsByClassName('apply')[0];
let titlee = document.getElementsByClassName('tittle')[0];
let deesc = document.getElementsByClassName('desc')[0];
let prio = document.getElementsByClassName('prior')[0];
let tasks = document.getElementById('tasks');
let update = document.getElementsByClassName('update')[0];
let notSelect = document.getElementById('not-select');
let eas = document.getElementById('easy');
let mid = document.getElementById('mid');
let hard = document.getElementById('hard')
let triTochki;
let DoNe;
let DeL;
let ddone;
let cs;
let EdIt;
let itle;
let escip;
let rio;



class fileSystem{
    constructor(){
       this.taskss = [];
    }
   addTask(){
    this.refresh();
    let data = Date.now();
    this.taskss.push({
       index: data,
       title: titlee.value,
       desc: deesc.value,
       prior: prio.value,
       done: false,
       hiddened: false,
    });
    console.log(this.taskss)
   }
   changeTask(index){
    for(i=0;i<this.taskss.length;i++){
        let tass = this.taskss[i];
        if(tass.index == index){
            itle = tass.title;
            escip = tass.desc;
            rio = tass.prior;
            menu.style.display = "flex";
            titlee.value = itle;
            deesc.value = escip;
            prio.value = rio;
            this.removeTask(index);
            update.addEventListener('click', function() {
                tass.title = itle;
                tass.desc = escip;
                tass.prior = rio;
                menu.style.display = 'none';
                file.addTask(file.taskss);
                file.taskss.splice(i, 1);
                showTasks(file.taskss);
                clearData()
            });
        }
    }
   }
   removeTask(index){
    for(i=0; i<this.taskss.length;i++){
        let tass = this.taskss[i];
        if(tass.index == index){
            this.taskss.splice(i,1);
            showTasks(this.taskss)
        }
    }
   }
   refresh(){
       let cs = document.getElementById('css');
       if(cs != null)  tasks.removeChild(cs)
   }
   doneTask(index){
       for(i=0; i<this.taskss.length; i++){
           let tass = this.taskss[i];
           if(tass.index == index){
               tass.done = true;
               showTasks(this.taskss)
            }
       }
   }
   filterPrio(priori){
       for(i=0; i<this.taskss.length; i++){
           let tass = this.taskss[i];
           if(tass.prior != priori){
                tass.hiddened = true;
                showTasks(this.taskss)
           }
       }
   }
}
let file = new fileSystem();

createOne.addEventListener("click", function(){
    menu.style.display = "flex";
    tasks.style.display = 'none'
    if(update.classList.contains('removed') == false){
        update.classList.add('removed')
    }
    if(apply.classList.contains('removed')){
        apply.classList.toggle('removed')
    }
});
cancel.addEventListener('click', function(){
    clearData();
    menu.style.display = "none";
});
function clearData(){
    titlee.value = '';
    deesc.value = ' ';
}


apply.addEventListener('click', function(){
    file.addTask(titlee, deesc, prio);

    clearData();
    menu.style.display = "none";
    tasks.style.display = 'flex';
    showTasks(file.taskss);


    });

eas.addEventListener('click', function(){
    file.filterPrio('easy')
})

function addClicksToMenu(){
    DeL = document.getElementsByClassName('del');
    DoNe = document.getElementsByClassName('done');
    triTochki = document.getElementsByClassName("tri-tochki");
    EdIt = document.getElementsByClassName('edit');

    for(i=0; i<triTochki.length; i++){
        let a = triTochki[i];
        a.addEventListener('click', function(e){
            e.target.nextElementSibling.classList.toggle('displayBlock');
        })
    }
    for(i=0; i<DoNe.length; i++){
    let el = DoNe[i];
    el.addEventListener('click', function(){
        let ind = el.getAttribute('data-index');
        file.doneTask(ind)
       })
    }
    for(i=0; i<DeL.length; i++){
        let b = DeL[i];
        b.addEventListener('click', function(){
            let ind = b.getAttribute('data-index');
            file.removeTask(ind)
        })
    }
    for(i=0; i<EdIt.length; i++){
        let bb = EdIt[i];
        bb.addEventListener('click', function(){
            let ind = bb.getAttribute('data-index');
            if(update.classList.contains('removed')){
                update.classList.toggle('removed')
            }
            if(apply.classList.contains('removed') == false){
                apply.classList.add('removed')
            }
            file.changeTask(ind)
           })
        }
}
function showTasks(arr){
    let b = document.getElementById('css');
    if(b != null)   b.remove();
    cs = document.createElement('div');
    cs.id = "css";


    for(i=0; i != arr.length; i++){
        let taask = document.createElement("div");
        taask.className = "task";

        if(arr[i].done == true){
            taask.classList.add('backgroundGray')
        }

        if(arr.hiddened == true){
            taask.classList.add('filtred')
        }

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

        ddone = document.createElement('div');
        ddone.className = 'done';
        ddone.innerText = 'done'
        ddone.dataset.index = arr[i]['index'];
        menUvIPaD.appendChild(ddone);

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
   addClicksToMenu();

}