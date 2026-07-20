class Map1 extends Phaser.Scene {
    constructor() {
        super("Map1");
    }

    init() {
    }

    preload() {
        this.load.setPath("./assets/");

        this.load.image(
            "detail_tiles",
            "TX Village Props.png"
        );

        this.load.image(
            "map_tiles",
            "TX Tileset Ground.png"
        );

        this.load.tilemapTiledJSON(
            "start_level",
            "1st Map.tmj"
        );
    }

    create() {

//========================== Map ==============================
        const map = this.make.tilemap({
            key: "start_level"
        });

        const detailTiles = map.addTilesetImage(
            "Detail",
            "detail_tiles"
        );

        const groundTiles = map.addTilesetImage(
            "Ground",
            "map_tiles"
        );

        if (!detailTiles || !groundTiles) {
            console.error(
                "Could not connect the Tiled tilesets."
            );
            return;
        }

        const tilesets = [
            groundTiles,
            detailTiles
        ];

        this.behindLayer = map.createLayer(
            "Behind",
            tilesets,
            0,
            0
        );

        this.backgroundLayer = map.createLayer(
            "Background",
            tilesets,
            0,
            0
        );

        this.background2Layer = map.createLayer(
            "Background2",
            tilesets,
            0,
            0
        );

        this.background3Layer = map.createLayer(
            "Background 3",
            tilesets,
            0,
            0
        );

        this.buildingsLayer = map.createLayer(
            "Buildings",
            tilesets,
            0,
            0
        );

        this.logsLayer = map.createLayer(
            "Logs",
            tilesets,
            0,
            0
        );

        this.groundLayer = map.createLayer(
            "Ground",
            tilesets,
            0,
            0
        );

        this.foregroundLayer = map.createLayer(
            "Foreground",
            tilesets,
            0,
            0
        );

        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels / 3,
            map.heightInPixels 
        );

        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );


    }

    update() {
    }
}