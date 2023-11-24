import Phaser from "phaser";

export class Player {
  sprite: Phaser.Physics.Arcade.Sprite;
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.sprite = this.scene.physics.add.sprite(100, 450, 'dude');

    this.sprite.setBounce(0.2);
    this.sprite.setCollideWorldBounds(true);
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    // Logique de mouvement horizontale
    if (cursors.left.isDown) {
      this.sprite.setVelocityX(-160);
      this.sprite.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.sprite.setVelocityX(160);
      this.sprite.anims.play('right', true);
    } else {
      this.sprite.setVelocityX(0);
      this.sprite.anims.play('turn');
    }

    // Logique de saut
    if (cursors.up.isDown) {
      this.sprite.setVelocityY(-330);
    }
  }
}
