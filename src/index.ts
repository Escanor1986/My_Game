import "./style/style.css";
import Game from "./utils/Game/Game";

window.onload = () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container", // Assurez-vous que cet élément existe dans le HTML
    // Ajoutez d'autres configurations si nécessaire
  };

  new Game(config);
};
