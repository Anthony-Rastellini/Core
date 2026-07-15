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