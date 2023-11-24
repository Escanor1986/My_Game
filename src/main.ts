import "./style/style.css";
import Phaser from "phaser";
import { config } from "./config/GameConfig";

window.onload = () => {
  const game = new Phaser.Game(config);
};



// import Phaser from "phaser";

// class MyGame extends Phaser.Scene {

//   private platforms!: Phaser.Physics.Arcade.StaticGroup;
//   private player!: Phaser.Physics.Arcade.Sprite;

//   constructor() {
//     super('my-game');
//   }

//   preload(): void {
//     console.log('preload');
//     this.load.setBaseURL('http://localhost:5173')
//     this.load.image("sky", "sky.png");
//     this.load.image("ground", "platform.png");
//     this.load.image("star", "star.png");
//     this.load.image("bomb", "bomb.png");
//     this.load.spritesheet("dude", "dude.png", {
//       frameWidth: 32,
//       frameHeight: 48,
//     });
//   }

//   create(): void {
//     // background setting
//     this.add.image(0, 0, 'sky').setOrigin(0, 0);

//     // Platforms settings
//     this.platforms = this.physics.add.staticGroup();
//     this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
//     this.platforms.create(600, 400, 'ground');
//     this.platforms.create(50, 250, 'ground');
//     this.platforms.create(750, 220, 'ground');

//     // Player settings
//     this.player = this.physics.add.sprite(100, 450, 'dude');

//     this.player.setBounce(0.2);
//     this.player.setCollideWorldBounds(true);

//     this.anims.create({
//       key: 'left',
//       frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
//       frameRate: 10,
//       repeat: -1
//     });

//     this.anims.create({
//       key: 'turn',
//       frames: [ { key: 'dude', frame: 4 }],
//       frameRate: 20
//     })

//     this.anims.create({
//       key: 'right',
//       frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//       frameRate: 10,
//       repeat: -1
//     })
//   }

//   update(time: number, delta: number): void {
//     // La logique de mise à jour du jeu va ici
//   }
// }

// const config: Phaser.Types.Core.GameConfig = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   parent: "game-container",
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: { y: 300 }, 
//       debug: false
//     }
//   },
//   scene: MyGame,
//   scale: {
//     mode: Phaser.Scale.FIT,
//     autoCenter: Phaser.Scale.CENTER_BOTH 
//   }
// };

// const game = new Phaser.Game(config);
