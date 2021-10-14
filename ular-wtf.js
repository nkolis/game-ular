function init(){

const c = document.querySelector('canvas');
const btn = document.querySelectorAll('button');
const p = document.querySelector('p');
document.querySelector('.footer').innerHTML = "$kolis";

c.width = 300;
c.height = c.width;

const part = c.width/25;
const ctx = c.getContext('2d');

const posX = [];
const posY = [];
const buah = [];

let length = 2;
let score = 0;
const fps = 1000/8;

for(let i=0; i<c.width; i+=part){
    for(let j=0; j<c.height; j+=part){
        buah.push(j);
    }
};

function Colision(){
    posX.forEach( ($,i) => {
    if(posX[i+1]==this.x&&posY[i+1]==this.y){
    clearInterval(mulai);
    alert('SCORE : '+score);
    window.location.reload()
    }
    });
}
            
function gambarUlar(x, y){

this.x = x;
this.y = y;
ctx.beginPath();
ctx.fillStyle = "#FFF";
ctx.rect(x, y, part, part);
ctx.fill();
posX.unshift(x);
posY.unshift(y);
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.rect(x+0.5, y+0.5, part-1, part-1);
ctx.stroke();
    
if(posX.length+2>=length&&posY.length>=length+2){
posX.pop();posY.pop();}}    
gambarUlar(c.width - part * 15, c.height - part * 15);

function setMakanan(mx, my){  

this.mx = mx;
this.my = my;
posX.forEach( ($,i) => {
while(posX[i]==buah[this.mx]&&posY[i]==buah[this.my]){
this.mx = Math.floor(Math.random() * buah.length-1);
this.my = Math.floor(Math.random() * buah.length-1);

}
});
    
ctx.beginPath();
ctx.fillStyle = "red";
ctx.rect(buah[this.mx], buah[this.my], part, part);
ctx.fill();
ctx.beginPath();
ctx.strokeStyle = "#fff";
ctx.rect(buah[this.mx]+1, buah[this.my]+1, part-2, part-2);
ctx.stroke();
}
setMakanan(this.x, this.y)

function hapusPart(){
ctx.clearRect(posX[posX.length-1], posY[posY.length-1], part, part);
}

arah = [];
key = [];

btn.forEach( (n) => {
n.addEventListener('click', function(e){
  arah[0] = e.target;
  const target = e.target;
  if(target==btn[0]){
      btn[0].disabled=true;
      btn[3].disabled=true;
      btn[1].disabled=false;
      btn[2].disabled=false;
      }
  if(target==btn[1]){
      btn[1].disabled=true;
      btn[2].disabled=true;
      btn[0].disabled=false;
      btn[3].disabled=false;
      }
   if(target==btn[2]){
      btn[2].disabled=true;
      btn[1].disabled=true;
      btn[0].disabled=false;
      btn[3].disabled=false;
      }
    if(target==btn[3]){
      btn[3].disabled=true;
      btn[0].disabled=true;
      btn[2].disabled=false;
      btn[1].disabled=false;
      }
  });
  });

const mulai = setInterval(main, fps);
function main(){
    if(arah[0]==btn[0]||btn[0].value==key[0]){
    this.y-=part;    
    }
    if(arah[0]==btn[1]||btn[1].value==key[0]){
    this.x-=part;  
    }    
    if(arah[0]==btn[2]||btn[2].value==key[0]){
    this.x+=part; 
    }
    if(arah[0]==btn[3]||btn[3].value==key[0]){
    this.y+=part;  
    }
    if(buah[this.mx]==this.x && buah[this.my]==this.y){ 
setMakanan(this.x, this.y);
length+=1;
score+=1;
p.innerHTML = "SCORE : "+score;
};

gambarUlar(this.x, this.y, part, part);

if(this.x+part>c.width||this.y+part>c.height||this.x<0||this.y<0){
    clearInterval(mulai);
    alert('SCORE : '+score);
    window.location.reload();   
}

if(arah[0]!=undefined){
hapusPart();
Colision();
}
}
}

init();
