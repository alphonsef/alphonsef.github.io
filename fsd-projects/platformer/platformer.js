$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 650, 150, 20);
    createPlatform(100, 530, 100, 20)
    createPlatform(200, 400, 100, 20)
    createPlatform(100, 270, 100, 20)
    createPlatform(200, 140, 100, 20)
    createPlatform(400, 200, 100, 20)
    createPlatform(600, 300, 100, 20)
    createPlatform(800, 400, 100, 20)
    createPlatform(1100, 400, 200, 350)
    
    // TODO 3 - Create Collectables
    createCollectable("curry", 100, 220)
    createCollectable("curry", 400, 150)
    createCollectable("curry", 600, 250)
    createCollectable("curry", 800, 350)

   // TODO 4 - Create Cannons
    createCannon("top", 200, 1000, 30 );
    createCannon("right", 200, 1000, 30)
    createCannon("right", 450, 1000, 30)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
