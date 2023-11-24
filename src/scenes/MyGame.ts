import Phaser from "phaser";
import { createPlayerAnimations } from "../animations/PlayerAnimations";
import { Player } from "../objects/Player";
import { Platforms } from "../objects/Platforms";
import { Stars } from "../objects/Stars";

export default class MyGame extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private player!: Player;
  private platforms!: Platforms;
  private stars!: Stars;

  constructor() {
    super('my-game');
  }

  preload(): void {
    console.log('preload');
    this.load.setBaseURL('http://localhost:5173')
    this.load.image("sky", "/sky.png");
    this.load.image("ground", "/platform.png");
    this.load.image("star", "/star.png");
    this.load.image("bomb", "/bomb.png");
    this.load.spritesheet("dude", "/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create(): void {
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    this.platforms = new Platforms(this);
    this.player = new Player(this);
    createPlayerAnimations(this);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.stars = new Stars(this);
    this.physics.add.collider(this.stars.group, this.platforms.group);
    this.physics.add.overlap(this.player.sprite, this.stars.group, this.stars.collectStar, undefined, this);

  }

  update(time: number, delta: number): void {
    this.player.update(this.cursors);
    this.platforms.update();
  }
}
