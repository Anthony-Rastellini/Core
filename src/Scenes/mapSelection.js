class mapSelection extends Phaser.Scene {
    constructor() {
        super("mapSelection");
    }

    init() {
    //Varibles and other values go here
    }

    preload() {
    //where you initualize assets
    }

    create() {
    //normal code
        this.add.text(100, 100, "Maps"), {
            fontSize: "40px",
            color: "#ffffff"
        }

    }

    update() {
    //code that runs 60 times a second
    }
}