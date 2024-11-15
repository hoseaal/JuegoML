// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js'

export class Cap2e extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2e' });
    }

    preload() {
        this.load.image('e2', './assets/juego/cap2/e2.jpg');
        this.load.image('arrow', './assets/bomb.png');
    }

    create() {
        this.add.image(0, 0, 'e2').setOrigin(0, 0);

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
                displayNextDialogue(this, 'Cap2f')
            });

        // Texto de ejemplo para la narrativa
        this.dialogues = [
            "descubre en una conversación grabada que Carlos Jiménez estaba bajo presión del Sr. Martínez (Su jefe) para proporcionar información personal de una empleada. En la grabación, se escucha al Sr. Martínez decir:",
            "Sr. Martínez: 'Carlos, necesito que me consigas el número de la chica del departamento de finanzas. Es para una evaluación de desempeño más cercana.' \n\nCarlos Jiménez: 'Pero, ¿no debería pedirle a ella directamente?' \n\nSr. Martínez: 'No quiero que sospeche nada. Además, si no colaboras, tus evaluaciones también pueden verse afectadas.'"
         ];
        this.dialogueIndex = 0;  // Índice para llevar el progreso de los diálogos

        // Iniciar el primer diálogo
        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }
}