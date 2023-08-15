const canvas=document.getElementById('canvas');
const ctx=canvas.getContext("2d");

canvas.height=600;
canvas.width=800;

canvas.style.backgroundImage="url('./Assets/background.png')";
canvas.style.backgroundSize="contain";
//position of bird and poles 
let bird={
    x:20,
    y:100,
    dx:4,
    dy:1,
    acc:3.8,
    u:0,
    v:0,
}
let upper1={
    x:200,
    y:0,
    
}
let upper2={
    x:400,
    y:80,
}
let upper3={
    x:550,
    y:80,
}
let lower1={
    x:300,
    y:450,

}
let lower2={
    x:300,
    y:450,

}
let lower3={
    x:300,
    y:450,

}
//drawing image

const update=()=>{
    
    if(birdReady)
    ctx.drawImage(flappy,bird.x,bird.y,40,40);
    if(upper1Ready)
    ctx.drawImage(up1,upper1.x,upper1.y,70,150)


}
let birdReady=false;
const flappy=new Image();
flappy.src="./Assets/bird.png"
flappy.onload=()=>birdReady=true;
let upper1Ready=false;
const up1=new Image();
up1.src="./Assets/upper.png";
up1.onload=()=>upper1Ready=true;
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    
    update();
}
animate();

