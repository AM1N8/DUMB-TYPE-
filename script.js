const container = document.querySelector("#text");
textlist = ["THIS IS GOING TO BE","BIIIIIIIIIIIIIIG SHIT","JUST WAIT UNTIL","I'M DONE","AWA A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A"];
let i = 0;
let ind = 0;
update();
function update(){
    ronda = Math.random()*300
    container.innerHTML = `${textlist[i].slice(0,ind)}`;
    ind++;
    if(ind == textlist[i].length){
        setTimeout(() => {
            i++;
            ind=0;
          }, 1000); 
    }
    setTimeout(update,ronda);
}

