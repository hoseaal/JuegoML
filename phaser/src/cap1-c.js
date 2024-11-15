// Cap1.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js'

export class Cap1c extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap1c' });
    }

    preload() {
        this.load.image('c1', './assets/juego/cap1/c1.png');
        this.load.image('arrow', './assets/bomb.png');
    }

    create() {
        this.add.image(0, 0, 'c1').setOrigin(0, 0);

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
                displayNextDialogue(this, 'Cap1d')
            });

        // Texto de ejemplo para la narrativa
        this.dialogues = [
            "Alex rastrea la IP hasta un servidor externo ubicado en otro país, lo que lo lleva a una red de ciberdelincuentes. \n\nSe rastrea un correo sospechoso enviado al computador de uno de los trabajadores de la empresa.",
            "Vamos a confrontar al sospechoso llamado Roberto Perez"
        ];
        this.dialogueIndex = 0;  // Índice para llevar el progreso de los diálogos

        // Iniciar el primer diálogo
        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

}



