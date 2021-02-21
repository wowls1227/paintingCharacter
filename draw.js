

function setup(){
    createCanvas(600,600);
    background("white");

    pickColor =createColorPicker("black");
    slider = createSlider(1,30,3);
    

    

}

function draw(){
    mousePressed();
}

function mousePressed(){

    if(mouseIsPressed){
    stroke(pickColor.color());
    strokeWeight(slider.value());
    line(pmouseX,pmouseY,mouseX,mouseY);
    }else{

    }
}