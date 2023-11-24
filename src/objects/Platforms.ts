import Phaser from "phaser";

export class Platforms {
  group: Phaser.Physics.Arcade.StaticGroup;
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.group = this.scene.physics.add.staticGroup();

    // Création des plateformes
    this.group.create(400, 568, 'ground').setScale(2).refreshBody();
    this.group.create(600, 400, 'ground');
    this.group.create(50, 250, 'ground');
    this.group.create(750, 220, 'ground');
  }

  update(): void {
}
}
