import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("main-scene");
  }

  preload() {
    this.load.image("sky", "/sky.png");
    this.load.image("ground", "/platform.png");
    this.load.image("star", "/star.png");
    this.load.image("bomb", "/bomb.png");
    this.load.spritesheet("dude", "/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(400, 300, "sky");
  }

  update() {}
}