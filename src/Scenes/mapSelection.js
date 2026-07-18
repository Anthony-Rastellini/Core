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
        const panelX = 30;
        const panelY = 30;
        const panelWidth = this.scale.width - 60;
        const panelHeight = this.scale.height - 60;
        const titleSpace = 80;

        this.cameras.main.setBackgroundColor(0xFFD95A);
        const mapCircle = this.add.graphics();
        mapCircle.fillStyle(0xD66D36, 1);
        mapCircle.lineStyle(4, 0x1F1A17, 1);

        mapCircle.strokeRoundedRect(
            panelX,
            panelY,
            panelWidth,
            panelHeight,
            12
        );

        mapCircle.fillRoundedRect(
            panelX, 
            panelY,
            panelWidth,
            panelHeight,
            12
        );

        this.add.text(
            panelX + panelWidth / 2,
            panelY + titleSpace / 2, 
            "Maps",
            {
                fontFamily: "RuneScape UF",
                fontSize: "36px",
                color: "#1F1A17"
            }
        ).setOrigin(0.5);

        const gridY = panelY + titleSpace;
        const gridHeight = panelHeight - titleSpace;
        // Want 3 grids long by 2 high
        const colWidth = panelWidth / 3;
        const rowHeight = gridHeight /2;

        mapCircle.lineBetween(
            panelX,
            gridY,
            panelX + panelWidth,
            gridY
        );

        mapCircle.lineBetween(
            panelX,
            gridY + rowHeight,
            panelX + panelWidth,
            gridY + rowHeight
        );

        for (let i = 1; i < 3; i++){
            const x = panelX + colWidth * i;
            mapCircle.lineBetween(
                x,
                gridY,
                x,
                gridY + gridHeight
            );
        }
    }

    update() {
    //code that runs 60 times a second
    }
}