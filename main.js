nose_x=0;
nose_y=0;
wrist_right=0;
wrist_left=0;
diff=0;

function preload(){

}

function setup(){
    camera= createCapture(VIDEO);
    camera.size(500,500);
    canvas= createCanvas(550,550);
    canvas.position(560,100);
    posenet= ml5.poseNet(camera,modelLoaded);
    posenet.on('pose',gotPoses);

    }

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose_x is "+nose_x+" nose_y is" +nose_y);
        wrist_left=results[0].pose.leftWrist.x;
        wrist_right=results[0].pose.rightWrist.x;
        diff=Math.floor(wrist_left-wrist_right);
        console.log(diff);
        
    }
}

function draw(){
background("pink");
textSize(diff);
fill("red");
text('juanita',nose_x, nose_y);
}

