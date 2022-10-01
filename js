Webcam.set(
    {
        width:350,
        height:300,
        image_format:"png",
        png_quality:90
    }
);
camera= document.getElementById("camera");
Webcam.attach(camera);
function Capture(){
    Webcam.snap( function(data_uri) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    } );
}
console.log("ml5 version:",ml5.version);
calssifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/We8LBOE1v/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}