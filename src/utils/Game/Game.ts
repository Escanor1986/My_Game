import Phaser from "phaser";
import MainScene from "../MainScene/MainScene";

export default class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
    this.scene.add("MainScene", MainScene);
    this.scene.start("MainScene");
  }
}
