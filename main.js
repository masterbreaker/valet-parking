//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d')

//Give specific height and width to the car image
greencar_width = 75;
greencar_height =100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x= 5;
greencar_y= 100;
function add() {
	//upload car, and background images on the canvas.

	﻿
function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

function uploadgreencar() {
ctx.drawImage(greencar_imgTar, creencar_x,greencar_y, greencar_width, greencar_height	
}





﻿
function add() {
background_imgTag = new Image(); background_imgTag.onload = uploadBackground; 
background_imgTag.src = background_image;
greencar_imgTag = new Image(); 
greencar_imgTag.onload = uploadgreencar; 
greencar_imgTag.src = greencar_image;
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencary >=0)
	x = " + greencar_x+y = " +greencar_y;
	greencar_y - greencary - 10;  
	uploadBackground(); uploadgreencar();
}

function down()
{
	//Define function to move the car downward
	if(greencary <=0)
	x = " + greencar_x+y = " +greencar_y;
	greencar_y - greencary - 10;  
	uploadBackground(); uploadgreencar();
}

function left()
{
	//Define function to move the car left side
	if(greencary >=0)
	x = " + greencar_x+y = " +greencar_y;
	greencar_x - greencary - 10;  
	uploadBackground(); uploadgreencar();
}

}

function right()
{
	//Define function to move the car right side
	if(greencary >=0)
	x = " + greencar_x+y = " +greencar_y;
	greencar_x - greencary - 10;  
	uploadBackground(); uploadgreencar();
}
}
