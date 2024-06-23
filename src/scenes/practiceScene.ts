import Phaser from "phaser";

class PracticeScene extends Phaser.Scene {
  constructor() {
    super({ key: 'practiceScene' });
  }

  // ゲーム素材を読み込む(最初に読み込んでおく必要がある)
  preload() {
    // 素材リソースのベースとなるURLを指定
    this.load.setBaseURL("https://labs.phaser.io");

    /**
     * (例) https://labs.phaser.io/assets/skies/space3.pngを指定している状態
     * 第一引数には、読み込んだ素材を識別するためのキーを指定
     * 第二引数に対象の画像を指定
     */
    this.load.image("sky", "assets/skies/space4.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("blue", "assets/particles/blue.png");
  }

  // ゲーム画面の初期化
  create() {
    // 背景画像の追加
    // 画像の表示位置は、x: 400, y: 300
    // preloadで読み込んだsky画像を指定
    this.add.image(400, 300, 'sky');

    //パーティクルエミッターを設定
    const particles = this.add.particles(0, 0, 'blue', {
        speed: 50, // 速度
        scale: { start: 1, end: 0 }, // 初期位置
        blendMode: 'SCREEN' // 発行モードを指定
    });

    // this.physics.add.imageで物理エンジンの影響を受ける画像を指定(壁にぶつかる,重量の影響などの挙動)
    const logo = this.physics.add.image(400, 100, 'logo');
    // 初速度を設定
    logo.setVelocity(100, 200);
    // バウンド係数を設定1,1の場合は完全反発(衝突時にエネルギーを失わない)
    logo.setBounce(1, 1);
    // 背景の境界にぶつかるように設定
    logo.setCollideWorldBounds(true);

    // ロゴ画像をパーティクルエミッターが追従するように設定
    particles.startFollow(logo);
  }

  // update ゲーム画面の更新 操作など(画面を表示するだけなので今回は使わない)
  // update() {}

}

export default PracticeScene;  