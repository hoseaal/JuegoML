// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js'

export class Cap2g extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2g' });
    }

    preload() {
        this.load.image('g2', './assets/juego/cap2/g2.jpg');
        this.load.image('arrow', './assets/bomb.png');
    }

    create() {
        this.add.image(0, 0, 'g2').setOrigin(0, 0);

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
                displayNextDialogue(this, 'Cap2h')
            });

        // Texto de ejemplo para la narrativa
        this.dialogues = [
            "Alex Sánchez confronta al Sr. Martínez en una reunión organizada por el juez Ramírez:",
            "Alex Sánchez: 'Sabemos que usaste tu posición para forzar a un empleado a realizar una acción ilegal. Esto constituye abuso de poder y violación de la privacidad.' \n\nSr. Martínez: 'No tienes pruebas. Además, ¿qué puedes hacer en contra de mí?' \n\nJuez Ramírez: 'Tenemos una grabación que muestra su abuso de poder. Esto se considera delito según el Artículo 18. La empresa tomará medidas y se abrirá un caso penal en su contra.'",
            "Ahora la pregunta es, ¿Como llegó la base de datos entera a ese sitio web oscuro?"
         ];
        this.dialogueIndex = 0;  // Índice para llevar el progreso de los diálogos

        // Iniciar el primer diálogo
        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }
}