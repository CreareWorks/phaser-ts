import Phaser from "phaser";
import practiceScene from "./scenes/practiceScene";

// ゲームの基本設定
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 700,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: 3000 
      },
    },
  },
  scene: practiceScene,
};
new Phaser.Game(config);
