// Cap1.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap1b extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap1b' });
    }

    preload() {
        this.load.image('b1', './assets/juego/cap1/b1-a.jpg');
        this.load.image('arrow', './assets/bomb.png'); // Suponiendo que usarás la misma imagen de flecha
    }

    create() {
        let b1 = this.add.image(675, 300, 'b1').setAlpha(0);

        this.tweens.add({
            targets: b1,
            alpha: 1,
            duration: 2000,
            ease: 'Power1'
        });

        this.textBox = this.add.rectangle(this.scale.width / 2, this.scale.height - 100, 600, 150, 0x123456, 0.5);
        this.textBox.setOrigin(0.5, 0.5);

        this.dialogueText = this.add.text(this.textBox.x - 275, this.textBox.y - 60, '', {
            fontSize: '18px',
            color: '#ffffff',
            wordWrap: { width: 550 }
        });

        this.arrow = this.add.image(this.scale.width / 2, this.scale.height - 30, 'arrow')
            .setScale(1)
            .setInteractive()
            .on('pointerdown', () => {
                displayNextDialogue(this, this.showQuestionCallback.bind(this));
            });

        this.dialogues = [
            "Bien hecho, Alex. Parece que has encontrado una pista importante. Tenemos una dirección IP que no reconocemos.",
            "¿Qué hacemos ahora?"
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = 'Voy a rastrear esta IP utilizando un software de localización para ver dónde nos lleva.';
        const option2Text = 'Intentaré hackear el sistema desde esa IP para descubrir la identidad del atacante.';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Cap1c'); 
        } else if (option === 'option2') {
            this.scene.start('Lose', { reasons: ['razon2', 'Articulo6'], nextScene: 'Cap1a' }); // Razones para opción 2
        }
    }
}
