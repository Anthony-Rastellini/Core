class Map1 extends Phaser.Scene {
    constructor() {
        super("Map1");
    }

    init() {
    }

    preload() {
        this.load.setPath("./assets/");

        this.load.image(
            "backround1",
            "background_day1.png"
        );
        this.load.image(
            "backround2",
            "background_day3.png"
        );
        this.load.image(
            "backround3",
            "background_day4D.png"
        );

        this.load.image(
            "map_tiles",
            "MainLevBuild.png"
        );

        this.load.image(
            "decoration_tiles",
            "Decoratives.png"
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

        // Exact names from Tiled
        const background1Tiles = map.addTilesetImage(
            "Backround1",
            "backround1"
        );

        const background2Tiles = map.addTilesetImage(
            "Backround 3 Mountins",
            "backround2"
        );

        const background3Tiles = map.addTilesetImage(
            "Backround",
            "backround3"
        );

        const decorationTiles = map.addTilesetImage(
            "Items and Trees",
            "decoration_tiles"
        );

        const groundTiles = map.addTilesetImage(
            "Main Level Ground",
            "map_tiles"
        );

        const tilesets = [
            background1Tiles,
            background2Tiles,
            background3Tiles,
            decorationTiles,
            groundTiles
        ];

        // Exact layer names from Tiled
        this.backround2 = map.createLayer(
            "Backround2",
            tilesets,
            0,
            0
        );

        this.backround3 = map.createLayer(
            "Backround 3",
            tilesets,
            0,
            0
        );

        this.backround = map.createLayer(
            "Backround",
            tilesets,
            0,
            0
        );

        this.backround = map.createLayer(
            "Backround 1/2",
            tilesets,
            0,
            0
        );

        this.tree3 = map.createLayer(
            "Tree 3",
            tilesets,
            0,
            0
        );

        this.trees2 = map.createLayer(
            "Trees 2",
            tilesets,
            0,
            0
        );

        this.trees1 = map.createLayer(
            "Trees 1",
            tilesets,
            0,
            0
        );

        this.groundDetail = map.createLayer(
            "Ground Detail",
            tilesets,
            0,
            0
        );

        this.shrubs1 = map.createLayer(
            "Shrubs 1",
            tilesets,
            0,
            0
        );

        this.newGround = map.createLayer(
            "New Ground",
            tilesets,
            0,
            0
        );

        this.grass = map.createLayer(
            "Grass",
            tilesets,
            0,
            0
        );

        this.mushroomsAndFlowers = map.createLayer(
            "Mushrooms and Flowers",
            tilesets,
            0,
            0
        );

        this.rocks = map.createLayer(
            "Rocks",
            tilesets,
            0,
            0
        );

        this.foreground = map.createLayer(
            "Foreground",
            tilesets,
            0,
            0
        );

//=================Camera=====================

        this.cameras.main.setBounds(
            0,
            250,
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