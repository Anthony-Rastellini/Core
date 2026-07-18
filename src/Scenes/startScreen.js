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

        this.roundedButton(20, 20, 130, 50, "Maps", () =>{
            this.scene.start("mapSelection")
        })

        this.roundedButton(this.scale.width - 150, 20, 130, 50, "Settings", () => {
            this.scene.start("settingsPage")
        })

        this.roundedButton(this.scale.width / 2 - 150, 420, 300, 80, "Begin", () => {
            this.scene.start("platformerScene")
        })
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
        
   roundedButton(x, y, width, height, text, callback) {
      const button = this.add.graphics();

      button.fillStyle(0xFEDC56, 1);
      button.fillRoundedRect(x, y, width, height, 15);
      button.lineStyle(3, 0x000000, 1);
      button.strokeRoundedRect(x, y, width, height, 15);

      const range = this.add.rectangle(
        x + width / 2,
        y + height / 2,
        width,
        height,
        0x000000,
        0
      ).setInteractive()

      this.add.text(
        x + width /2,
        y + height /2,
        text,
        {
            fontFamily: "RuneScape UF",
            fontSize: "26px",
            color: "#000000"
        }
      ).setOrigin(0.5);

      range.on("pointerdown", callback);
   }

    update() {
    //code that runs 60 times a second
    }
}