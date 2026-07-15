class StartScreen extends Phaser.Scene {
    constructor() {
        super("StartScreen");
    }

    init() {
    //Varibles and other values go here
    }

    preload() {
        this.load.image("startBackground", "./assets/StartBackround.png"); //Start image


    //where you initualize assets
    }

    create() {
        this.background = this.add.image(
            this.scale.width / 2,
            this.scale.height / 2,
            "startBackground"
        );

        this.background.setOrigin(0.5);

        this.resizeBackground(this.scale.width, this.scale.height);

        this.scale.on("resize", this.handleResize, this);
    
        const buttons = this.add.graphics();
        buttons.fillStyle(0xFEDC56, 1);

        buttons.fillRect(
            // X and Y Coords
            this.scale.width / 2 - 180,
            this.scale.height / 2 + 180,
            // Width & Height
            300,
            80
        );

        buttons.lineStyle(4, 0x000000, 1);

        buttons.strokeRect(
            this.scale.width / 2 - 180,
            this.scale.height / 2 + 180,
            300,
            80
        );

        // Game Title
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 6,
            "Stone Age: Core", 
        
            {
                fontFamily: "Runescape UF",
                fontSize: "72px",
                color: "#84a5ed"

            }
        ).setOrigin(0.5);
    }
    

    resizeBackground(width, height) {
      const scaleX = width / this.background.width;
      const scaleY = height / this.background.height;

      // Use the larger scale so the background covers the window.
      const scale = Math.max(scaleX, scaleY);

      this.background
         .setPosition(width / 2, height / 2)
         .setScale(scale);
    }

    handleResize(gameSize) {
      const width = gameSize.width;
      const height = gameSize.height;

      this.resizeBackground(width, height);
   }
    //normal code
        
    

    update() {
    //code that runs 60 times a second
    }
}