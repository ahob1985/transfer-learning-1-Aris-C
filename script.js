// Author: Aris Carter

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let buttonDiv;
let happyButton;
let sadButton;
let trainButton;


// Global ML Variables
let featureExtractor;
let classifier;
let video;
let happies;
let sads;
let isModelReady;
let isTrainingComplete;

function setup() {
  canvasDiv = createDiv;
  canvas = createCanvas(640,480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading please wait...");
  textP.parent(textDiv);
  buildButtons();
  //initialize happy and sad at 0
  happies = 0;
  sads = 0;
  isModelReady = false;
  isTrainingComplete = false;
  //load video
  video = createCapture(VIDEO, videoReady);


}

function draw() {

}

function buildButtons() {
  buttonDiv = createDiv();
  happyButton = createButton("Happy");
  happyButton.parent(buttonDiv);
  happyButton.mousepressed(function(){
    
  });
}

function videoReady() {

}

function featureExtractorLoaded() {

}

function modelReady() {

}

function whileTraining(loss) {

}

function gotResults(error, results) {

}
