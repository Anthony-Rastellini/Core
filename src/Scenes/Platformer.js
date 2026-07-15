class Platformer extends Phaser.Scene {
    constructor() {
        super("platformerScene");
    }

    init() {
    //Varibles and other values go here
    }

    preload() {
    //where you initualize assets
    }

    create() {
    //normal code
        this.add.text(100, 100, "RuneScape UF"), {
            fontSize: "16px",
            color: "#ffffff"
        }

    }

    update() {
    //code that runs 60 times a second
    }
}