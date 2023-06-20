function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,450);
    canvas.position(560,90);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw(){
    background('#D3D3D3');

}

function modelLoaded(){
    console.log('POSENET IS INITIALISED');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}