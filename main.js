var canvas=new fabric.Canvas('myCanvas');
power_ranger_x=1;
power_ranger_y=1;
var power_ranger_image="";
var power_ranger_width=350;
var power_ranger_height=430;

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        power_ranger_image=Img

        power_ranger_image.scaleToWidth(power_ranger_width);
        power_ranger_image.scaleToHeight(power_ranger_height);
        power_ranger_image.set({
            top:power_ranger_y,
            left:power_ranger_x
        });
        canvas.add(power_ranger_image)
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='82'){
        new_image('red ranger.png')
        console.log("r")
    }

    if(keyPressed=='71'){
        new_image('green ranger.png')
        console.log("g")
    }

    if(keyPressed=='89'){
        new_image('yellow ranger.png')
        console.log("y")
    }

    if(keyPressed=='80'){
        new_image('pink ranger.png')
        console.log("p")
    }

    if(keyPressed=='66'){
        new_image('blue_ranger.png')
        console.log("b")
    }
    
}