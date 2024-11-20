// Lose.js
import { loseReasons } from '../modulos/loseReasons.js';

export class Lose extends Phaser.Scene {
    constructor() {
        super({ key: 'Lose' });
    }

    init(data) {
        this.reasons = data.reasons;
        this.nextScene = data.nextScene; // Recibir la siguiente escena
    }

    preload() {
        this.load.image('Lose', './assets/juego/generales/lose.webp'); // Imagen de fondo para mantener la coherencia con las otras escenas

    }

    create() {
        let loseBackground = this.add.image(0, 0, 'Lose').setOrigin(0, 0).setAlpha(0);

        this.tweens.add({
            targets: loseBackground,
            alpha: 1,
            duration: 2000,
            ease: 'Power1'
        });
    
        // Crear el recuadro de texto
        this.textBox = this.add.rectangle(this.scale.width - 100, this.scale.height / 2, 500, 550, 0x123456, 0.5);
        this.textBox.setOrigin(1, 0.5);

        let text = "";
        this.reasons.forEach(reason => {
            text += loseReasons[reason] + "\n\n"; // Agregar cada razón al texto con un salto de línea
        });

        this.dialogueText = this.add.text(this.textBox.x - 450, this.textBox.y - 200, text, {
            fontSize: '18px',
            color: '#ffffff',
            wordWrap: { width: 280 }
        });

        // Añadir la flecha para reiniciar o volver a intentar
        this.arrow = this.add.image(this.scale.width - 50, this.scale.height - 30, 'arrow')
            .setScale(1)
            .setInteractive()
            .on('pointerdown', () => {
                this.scene.start(this.nextScene); // Usar la siguiente escena recibida
            });
    }
}


