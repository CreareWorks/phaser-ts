import Phaser from "phaser";
import ScrollScene from "./scenes/scrollScene";

// ゲームの基本設定を指定
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO, // レンダリングタイプを指定(CANVS, WEBGL, AUTOがある)
  width: 800,
  height: 600,
  // 物理エンジンの設定
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  input: {
    keyboard: true // ここでキーボード入力を有効にする
  },
  scene: ScrollScene,
};
// Phaser起動させるプロセスを開始
new Phaser.Game(config);