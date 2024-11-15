// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js'

export class Cap2c extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2c' });
    }

    preload() {
        this.load.image('c2', './assets/juego/cap2/c2.png');
        this.load.image('arrow', './assets/bomb.png');
    }

    create() {
        this.add.image(0, 0, 'c2').setOrigin(0, 0);

        // Crear el recuadro de texto
        this.textBox = this.add.rectangle(this.scale.width - 100, this.scale.height / 2, 500, 550, 0x123456, 0.5);
        this.textBox.setOrigin(1, 0.5);

        this.dialogueText = this.add.text(this.textBox.x - 450, this.textBox.y - 200, '', {
            fontSize: '18px',
            color: '#ffffff',
            wordWrap: { width: 280 }
        });

        // Añadir la flecha en la parte inferior
        this.arrow = this.add.image(this.scale.width - 50, this.scale.height - 30, 'arrow')
            .setScale(1)
            .setInteractive()
            .on('pointerdown', () => {
                console.log('Flecha clicada'); // Añadir log para ver si el clic se registra
                displayNextDialogue(this, 'Cap2d')
            });

        // Texto de ejemplo para la narrativa
        this.dialogues = [
            "Alex descubre que Carlos Jiménez tuvo acceso no autorizado a la base de datos justo antes de la filtración, lo que lo convierte en un sospechoso."
         ];
        this.dialogueIndex = 0;  // Índice para llevar el progreso de los diálogos

        // Iniciar el primer diálogo
        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }
}
