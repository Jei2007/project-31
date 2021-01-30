const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = []

function preload(){
    
}

function setup(){
   var canvas = createCanvas(300,800)
   
   engine = Engine.create();
   world = engine.world;


    createDrops()
    
}

function draw(){
    background(0);
    Engine.update(engine);

}   

function createDrops() {
    var maxDrops = 100
    if (frameCount % 150 === 0) {
        for (var i = 0; i < maxDrops; i++) {
            drops.push(new Drops(random(0,400),random(0,400))) 
        }
    }
}

