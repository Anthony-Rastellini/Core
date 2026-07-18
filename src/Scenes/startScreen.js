class StartScreen extends Phaser.Scene {
    constructor() {
        super("StartScreen");
    }

    init() {
    //Varibles and other values go here
    }

    preload() {
        this.load.image("startBackground", "./assets/StartScreen.png"); //Start image
        this.load.bitmapFont("Runescape", "./assets/Pixelta.png", "./assets/Pixelta.xml");

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
    
        // DISPLAY XML FONT: Use add.bitmapText instead of add.text
        // Parameters: (x, y, fontKey, textString, fontSize)
        this.titleText = this.add.bitmapText(560, 160, "Runescape", "CORE", 200);

        const startButton = this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2 + 180,
            400,
            70,
            0xFEDC56
        )

        startButton.setStrokeStyle(4, 0x000000);
        startButton.setInteractive();

        const startButtonText = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 + 180,
            "Begin",
            {
                fontFamily: "RuneScape UF",
                fontSize: "20px",
                color: "#000000"
            }
        ).setOrigin(0.5);
        
        startButton.on("pointerdown", () => {
            this.scene.start("platformerScene");
        });

        const settingsButton = this.add.rectangle(
            // X, Y, Width, Height, Color
            this.scale.width - 85,
            30,
            160,
            50,
            0xFEDC56
        );

        settingsButton.setStrokeStyle(3, 0x000000)
        settingsButton.setInteractive();

        this.add.text(
            this.scale.width - 85,
            30,
            "Settings",
            {
                fontFamily: "RuneScape UF",
                fontSize: "20px",
                color: "#000000"
            }
        ).setOrigin(0.5);

        settingsButton.on("pointerdown", () => {
            this.scene.start("settingsPage");
        });

        const mapButton = this.add.rectangle(
            this.scale. width / 2 - 640, 
            this.scale.height / 2 + 50,
            200,
            70,
            0xFEDC56
        )

        mapButton.setStrokeStyle(3, 0x000000)
        mapButton.setInteractive();

        this.add.text(
            this.scale.width / 2 - 640,
            this.scale.height / 2 + 50,
            "Maps",
            {
                fontFamily: "RuneScape UF",
                fontSize: "20px",
                color: "#000000"
            }
        ).setOrigin(0.5);

        mapButton.on("pointerdown", () => {
            this.scene.start("mapSelection");
        });
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