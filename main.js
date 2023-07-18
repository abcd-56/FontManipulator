rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(500, 70);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized');
}function draw()
{
    background("#63dbcb");
    textSize(80)
    fill("#1df296");
    stroke("#1df2e0");
    text('Aditya Is Pro', 40, 200)
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differnce = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX +"difference = "+ differnce);
       
    }
}