const canvas=document.getElementById('canvas');
const ctx=canvas.getContext("2d");

canvas.height=600;
canvas.width=700;

canvas.style.backgroundImage="url('./Assets/background.png')";
canvas.style.backgroundSize="contain";
// canvas.style.display="relative"


//position of bird and poles 
let bird={
    x:20,
    y:100,
    dx:8,
    dy:1,
    acc:3,
    u:0,
    v:0,
    score:0,
}


let upper1={
    x:200,
    y:0,
    ux:-10,
    dx:4,

    
}
let upper2={
    x:480,
    y:0,
    ux:-10,
    dx:4,
}
let upper3={
    x:710,
    y:0,
    ux:-10,
    dx:4,
}
let upper4={
    x:740,
    y:0,
    dx:4,
}
let lower1={
    x:200,
    y:400,
    ux:-10,
    dx:4,

}
let lower2={
    x:480,
    y:350,
    ux:-10,
    dx:4,

}
let lower3={
    x:700,
    y:400,
    ux:-10,
    dx:4,

}
let lower4={
    x:750,
    y:350,
    dx:4,
}
//drawing image

const update=()=>{
    
    if(birdReady)
    ctx.drawImage(flappy,bird.x,bird.y,40,40);
    if(upper1Ready)
    {
        ctx.drawImage(up1,upper1.x,upper1.y,70,150)
        ctx.drawImage(up1,upper2.x,upper2.y,70,180)
        ctx.drawImage(up1,upper3.x,upper3.y,70,240)
        // ctx.drawImage(up1,upper4.x,upper4.y,70,200)

    }
    if(lower1Ready)
    {
        ctx.drawImage(low1,lower1.x,lower1.y,70,250);
        ctx.drawImage(low1,lower2.x,lower2.y,70,250);
        ctx.drawImage(low1,lower3.x,lower3.y,70,350);
        // ctx.drawImage(low1,lower4.x,lower4.y,70,300)
    }
    ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("score: " +bird.score, 12, 32);

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
//score board




const reset=()=>{
    bird.score=0;
    bird.y=100;
    upper1.x=200;
    upper2.x=480;
    upper3.x=710;
    lower1.x=200;
    lower2.x=480;
    lower3.x=700
}
const updateScore=()=>{
    // display.innerText=bird.score;
    bird.score++;
    
}

const state=(delta)=>{

    //moving the pipes 
    upper1.x-=(upper1.dx)
    upper2.x-=upper2.dx
    upper3.x-=upper3.dx
    lower1.x-=lower1.dx
    lower2.x-=lower2.dx
    lower3.x-=lower3.dx
    upper4.x-=upper4.dx;
    lower4.x-=upper4.dx;

    //updating position

    if(upper1.x<=-80)
    upper1.x=700;
    if(upper2.x<=-80)
    upper2.x=700;
    if(upper3.x<=-80)
    upper3.x=700;
    if(lower1.x<=-80)
    lower1.x=700;
    if(lower2.x<-80)
    lower2.x=700;
    if(lower3.x<-80)
    lower3.x=700;
    if(upper4.x<=-80)
    upper4.x=700;
    if(lower4.x<=-80)
    lower4.x=700;

    //adding gravity to bird's motion

    bird.v=bird.u+bird.acc*delta;
    bird.dy=bird.v+(bird.acc*(delta*2+1))/2;
    bird.y+=bird.dy;
     
     if(bird.x==upper1.x || bird.x==upper2.x || bird.x==upper3.x)
     updateScore();
    //collison detection

    if(bird.y<=150 && Math.abs(upper1.x-bird.x)<=20)
    {
        console.log("hit")
        console.log(upper1.y +"--"+ bird.y)
        reset();
    }
    
    else if(bird.y>=400 && Math.abs(lower1.x-bird.x)<=20)
    {
        reset();
        
    }
     
    
    


    document.addEventListener("keydown",(event)=>{
        if(event.key=="ArrowUp")
        {
            bird.u=-5;
            then=Date.now();
        }
    })

}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    const now=Date.now();
    const delta=(now-then)/1000;
    state(delta)
    update();
    console.log(bird.score)
}
let then=Date.now();
animate();

