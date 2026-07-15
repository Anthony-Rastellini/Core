class StartScreen extends Phaser.Scene {
    constructor() {
        super("StartScreen");
    }

    init() {
    //Varibles and other values go here
    }

    preload() {
    //where you initualize assets
    }

    create() {
    //normal code
        
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

    update() {
    //code that runs 60 times a second
    }
}