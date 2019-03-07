var x = 30;
var x1 = 30;
var r;
var g;
var b;
var r1;
var g1;
var b1;
var i = 30;
var lx = 30;
var lx1 = 700;
var lx2 = 30;
var lx3 = 700;
var lx4 = 500;
var s = 2;
var hx = 500;
var hy = 50;
var ex = 5;
var my = 50;
var sz = 10;
var hxf = 400;
var hyf = 650;
var o = 1;

function preload() {
  // load any assets (images, sounds etc.) here
  cha = loadImage("assets/man.png");
  clouds = loadImage("assets/clouds.png");
  sun = loadImage("assets/sun.png")
  light = loadImage("assets/light.png")
  hope = loadImage("assets/hope.png")
  eye = loadImage("assets/eye.png")
  monster = loadImage("assets/monster.png")
  windmill = loadImage("assets/windmill.png")
  eye1 = loadImage("assets/eye1.png")
  final = loadImage("assets/final.png")
  tree = loadImage("assets/tree.png")
  house = loadImage("assets/house.png")
  sun1 = loadImage("assets/sun1.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    frameRate(60);

}

function draw() {
    // your "draw loop" code goes here
    if (x1>=30&&x1<=windowWidth/2){
        r = 135;
        g = 206;
        b = 250;
        r1 = 0;
        g1 = 204;
        b1 = 0;
        
    }
    
    background(r, g, b);
    noStroke();
    fill(r1,g1,b1);
    ellipse(windowWidth/2, windowHeight, windowWidth+500, windowHeight/2);
    
    if(keyIsDown(RIGHT_ARROW)){
        x += s;
        x1 += s;
    }
    effects();
    image (cha, x, 0.8*windowHeight, cha.width/50, cha.height/50);
    
    if (x>windowWidth){
        x = 10;
    }  
}

function effects() {
    if (x1>=0&&x1<=windowWidth){
        image(windmill, 0.5*windowWidth, 0.5*windowHeight, windmill.width/2, windmill.height/2);
        image(tree, 0.6*windowWidth, 0.4*windowHeight, tree.width/10, tree.height/10);
        image(sun1, 0.35*windowWidth, 0.005*windowHeight, sun1.width/2, sun1.height/2);
    }
    if (x1 >= windowWidth&&x1<2*windowWidth){
        r = 0;
        g = 0;
        b = 102;

        r1 = 0;
        g1 = 102;
        b1 = 0;

        image(sun, 0, 0);
        image(light, lx, 600, light.width/50, light.height/50);
        image(light, lx1, 600, light.width/50, light.height/50);
        image(light, lx2, 600, light.width/50, light.height/50);
        image(light, lx3, 600, light.width/50, light.height/50);
        image(light, lx4, 600, light.width/50, light.height/50)

        smallPosition();
    }
    if (x1 >= 2*windowWidth&&x1<=7*windowWidth){
        r = 100;
        g = 100;
        b = 100;
        r1 = 153;
        g1 = 153;
        b1 = 0;
        image (clouds, i-150, 10);
        image (clouds, i, 10);
        image (clouds, i+150, 10);
        image (clouds, i+250, 10);
        image (clouds, i+500,10)
        cloudPosition();
    }
    if (x1 >= 2*windowWidth&&x1<3*windowWidth){
        image(house, 0.5*windowWidth, 0.25*windowWidth, house.width/10, house.height/10);
    }

    if (x1>=3*windowWidth){
        s = 1; 
        image (hope, hx, hy, o*hope.width/sz, o*hope.height/sz)
        if(x1 >= 3*windowWidth+500){
            hx = x;
            hy = 0.78*windowHeight;
            s = 2;
        }
        hopePosition();

    }

    if (x1>=4*windowWidth&&x1<5*windowWidth){
        s = 2;
        image(eye, ex, windowHeight/3);
        image(eye, ex-50, windowHeight/3+100);
        sz = 15;
        eyePosition();
    }

    if(x1>=5*windowWidth&&x1<=6*windowWidth){
        s = 2;
        r = 10;
        g = 10;
        b = 10;
        r1 = 64;
        g1 = 64;
        b1 = 64;
        sz = 20;
    }

    if(x1>6*windowWidth&&x1<=7*windowWidth){
        s = 1;
        r = 10;
        g = 10;
        b = 10;
        r1 = 64;
        g1 = 64;
        b1 = 64;
        image(monster, windowWidth/2, my-250);
        sz = 25;
        monsterPosition();
    }

    if(x1>7*windowWidth&&x1<8*windowWidth){
        s = 2;
        sz = 35;
        r1 = 0; 
        g1 = 0;
        b1 = 0; 
        r = 1; 
        g = 1;
        b = 1; 
        image(eye1, windowWidth/2-100, windowHeight/2-100);
        
    }

    if(x1>=8*windowWidth&&x1<8.7*windowWidth){
        s = 1;
        image(final, 0, 0, final.width/1, final.height/1);
    }

    if(x1>=8.7*windowWidth){
        s = 0;
        hx = hxf;
        hy = hyf;
        lightSize();
        lightPosition();
        
    }

    if (hxf==99&&hyf==29&&o==61){
        r = 135;
        g = 206;
        b = 250;

        r1 = 0;
        g1 = 102;
        b1 = 0;
        
    }
    
    function lightPosition(){
        if(hxf>=100){
            hxf = hxf - 1;
        }
        if(hyf>=10){
            hyf = hyf - 1;
        }
    }
    
    function lightSize(){
        if (o<=60){
            o = o + 1;
        }
    }

    function smallPosition(){
        lx = lx + 1;
        if (lx>windowWidth){
            lx = 10;
        }
        lx1 = lx1 - 3;
        if(lx1<10){
            lx1 = windowWidth - 30;
        }
        lx2 = lx2 + 2;
        if (lx2>windowWidth){
            lx2 = 10;
        }
        lx3 = lx3 - 1;
        if(lx3<10){
            lx3 = windowWidth - 30;
        }
        lx4 = lx4 - 1;
        if(lx4<10){
            lx4 = windowWidth - 30;
        }
    }

    function eyePosition(){
        ex = ex + 3;
        if (ex >= windowWidth){
            ex = 30;
        }  
    }
    
    function cloudPosition(){
        i = i + 1;
        if (i >= windowWidth - 100){
            i = 0;
        }
    }

    function hopePosition(){
        if(hy<=0.8*windowHeight){
            hy = hy + 2; //change to 1
        }
    }

    function monsterPosition(){
        if(my<=600){
            my = my + 1;
        }
    }

}




