var dog = 0;
var cat = 0;

function Classification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KTOlNU3Y-/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = "Directed voice is of  - " + results[0].label;
        
        img = document.getElementById("ear.gif");
        if(results[0].label == "cat") {
            img.src = "cat-meow.gif";
            cat = cat + 1;
        } else if(results[0].label == "dog") {
            img.src = "barking.gif";
            dog = dog + 1;
        } else {
            img.src = "ear.gif";
        }
    }
}