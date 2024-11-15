export class buttonStart {
    constructor(Scene){
        this.relatedScene = Scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('button', './assets/Modules/start-button.png', { frameWidth: 95, frameHeight: 49 });
    }

    create() {
        this.startButton = this.relatedScene.add.sprite(675, 400, 'button').setInteractive();

        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
          });
          this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
          });
          this.startButton.on('pointerdown', () => {
            this.relatedScene.scene.start('Explain');
          });
    }
}

