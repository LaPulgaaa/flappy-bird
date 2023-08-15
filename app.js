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
    ux:-30,

    
}
let upper2={
    x:400,
    y:0,
    ux:-30,
}
let upper3={
    x:550,
    y:0,
    ux:-30,
}
let lower1={
    x:200,
    y:400,
    ux:-30,

}
let lower2={
    x:420,
    y:350,
    ux:-30,

}
let lower3={
    x:550,
    y:400,
    ux:-30,

}
//drawing image

const update=()=>{
    
    if(birdReady)
    ctx.drawImage(flappy,bird.x,bird.y,40,40);
    if(upper1Ready)
    {
        ctx.drawImage(up1,upper1.x,upper1.y,70,150)
        ctx.drawImage(up1,upper2.x,upper2.y,70,200)
        ctx.drawImage(up1,upper3.x,upper3.y,70,180)

    }
    if(lower1Ready)
    {
        ctx.drawImage(low1,lower1.x,lower1.y,70,250);
        ctx.drawImage(low1,lower2.x,lower2.y,70,300);
        ctx.drawImage(low1,lower3.x,lower3.y,70,300)
    }
    

}
let birdReady=false;
const flappy=new Image();
flappy.src="./Assets/bird.png"
flappy.onload=()=>birdReady=true;
let upper1Ready=false;
const up1=new Image();
up1.src="./Assets/upper.png";
up1.onload=()=>upper1Ready=true;
let lower1Ready=false;
const low1=new Image();
low1.src="./Assets/lower.png"
low1.onload=()=>lower1Ready=true;

const state=(delta)=>{

    //moving the pipes 
    upper1.x+=(upper1.ux)*delta;
    upper2.x+=upper2.ux*delta;
    upper3.x+=upper3.ux*delta;
    lower1.x+=lower1.ux*delta;
    lower2.x+=lower2.ux*delta;
    lower3.x+=lower3.ux*delta;

}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    const now=Date.now();
    const delta=(now-then)/1000;
    state(delta)
    update();
}
const then=Date.now();
animate();

