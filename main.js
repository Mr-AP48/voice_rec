var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
    console.log("started");
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);

    if (Content == "take my selfie") {
        console.log(Content);
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie within 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(Camera);

    setTimeout(function () {
        takeSnapshot();
        save();
    }, 5000);
}

Camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpg',
    jpg_quality: 90
})

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}