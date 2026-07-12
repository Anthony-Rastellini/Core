class StartScreen extends Phaser.Scene {
    constructor() {
        super("startScene");
    }

    init() {
    //Varibles and other values go here
    }

    preload() {
    //where you initualize assets
    }

    create() {
    //normal code
    this.add.text(100, 100, "Core", {
        fontSize: "16px",
        color: "#84a5ed"
    })
    }

    update() {
    //code that runs 60 times a second
    }
}