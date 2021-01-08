const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
  var engine,world,object,ball,ball_options;
  function setup(){
     var canvas = createCanvas(400,400); 
    engine = Engine.create(); 
    world = engine.world;
     var object_options = { isStatic:true} 
     object = Bodies.rectangle(200,380,400,50,object_options);
      World.add(world,object); 
      ball_options = {restitution:2.0}
      ball = Bodies.circle(200,200,20,ball_options)
World.add(world,ball);







    }
     function draw(){ background(0);
       Engine.update(engine);
        rectMode(CENTER);
        rect(object.position.x,object.position.y,400,50);
        ellipseMode(RADIUS);
        ellipse(ball.position.x,ball.position.y,20,20)
       }





