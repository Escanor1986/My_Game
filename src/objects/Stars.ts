import Phaser from "phaser";

export class Stars {
  group: Phaser.Physics.Arcade.Group;

  constructor(scene: Phaser.Scene) {
    this.group = scene.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.group.children.iterate((child) => {
      const physicsChild = child as Phaser.Physics.Arcade.Sprite;
      physicsChild.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
  }

  collectStar(player: Phaser.Physics.Arcade.Sprite, star: Phaser.Physics.Arcade.Image): void {
    star.disableBody(true, true);
  }
}

