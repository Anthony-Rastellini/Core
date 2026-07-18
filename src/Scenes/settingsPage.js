class settingsPage extends Phaser.Scene {
    constructor() {
        super("settingsPage");
    }

    init() {
    //Varibles and other values go here
    }

    preload() {
    //where you initualize assets
    }

    create() {
    //normal code
        this.add.text(100, 100, "Settings"), {
            fontSize: "32px",
            color: "#ffffff"
        }

    }

    update() {
    //code that runs 60 times a second
    }
}