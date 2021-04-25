var canvas= new fabric.Canvas('myCanvas');
block_image_width=100;
block_image_height=100;
playerx=10;
playery=10;
player_object="";
function Player_Update(){
fabric.Image.fromURL("Legend.png    ",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:playery,
        left:playerx
    });
    canvas.add(player_object);

});
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed=='80'){
        block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;

    }
    
    if(e.shiftKey==true && keypressed=='77'){
        block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
    }
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("righT");
}
if(keypressed=='66'){
    new_image('Keeper.jpg');
    console.log("B is preessed");
}
if(keypressed=='71'){
    new_image('Bowler.png');
    console.log("G is pressed");
}


if(keypressed=='76'){
    new_image('Legend.png');
    console.log("L is pressed");
}
if(keypressed=='84'){
    new_image('TennisBall.jpg');
    console.log("T is pressed");
}
if(keypressed=='82'){
    new_image('RedBall.png');
    console.log("R is pressed");
}
if(keypressed=='89'){
    new_image('WhiteBall.png');
    console.log("Y is pressed");
}
if(keypressed=='68'){
    new_image('PinkBall.png');
    console.log("D is pressed");
}


}
function up(){
    if(playery>=0){
        playery=playery-block_image_height;
        canvas.remove(player_object);
        Player_Update();
    }
}

function down(){
    if(playery<=500){
        playery=playery+block_image_height;
        canvas.remove(player_object);
        Player_Update();
    }
}

function right(){
    if(playerx<=800){
        playerx=playerx+block_image_width;
        canvas.remove(player_object);
        Player_Update();
    }
}

function left(){
    if(playerx>=0){
        playerx=playerx-block_image_width;
        canvas.remove(player_object);
        Player_Update();
    }
}