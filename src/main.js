"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.AUTO,
    

    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    },

    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },

    scene: [
        StartScreen, 
        Platformer,
        mapSelectorOne,
        mapSelectorTwo,
        Map1,
        mapSelection,
        settingsPage
    ]
}

var cursors;
const SCALE = 2.0;
var my = {sprite: {}, text: {}};

const game = new Phaser.Game(config);