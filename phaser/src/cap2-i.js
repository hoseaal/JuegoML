// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js'

export class Cap2i extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2i' });
    }

    preload() {
        this.load.image('i2', './assets/juego/cap2/i2.jpg');
        this.load.image('arrow', './assets/bomb.png');
    }

    create() {
        this.add.image(0, 0, 'i2').setOrigin(0, 0);

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
                displayNextDialogue(this, 'Win')
            });

        // Texto de ejemplo para la narrativa
        this.dialogues = [
            "El Sr. Martínez recibe una sanción administrativa y una multa de 300 UT por negligencia en el uso de información personal. Violando el articulo 20 (Violación de la Privacidad de la Data o Información de Carácter Personal) de la ley contra los delitos informaticos",
            "José Gómez recibe 4 años de carcer por violar el articulo 6 (Acceso Indebido) y el articulo 22 (Revelación Indebida de Data o Información de Carácter Personal) de la ley contra los delitos informaticos"
         ];
        this.dialogueIndex = 0;  // Índice para llevar el progreso de los diálogos

        // Iniciar el primer diálogo
        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }
}