// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap2f extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2f' });
    }

    preload() {
        this.load.image('f2', './assets/juego/cap2/f2.jpg');
        this.load.image('arrow', './assets/bomb.png'); // Suponiendo que usarás la misma imagen de flecha
    }

    create() {
        let f2 = this.add.image(675, 300, 'f2').setAlpha(0);

        this.tweens.add({
            targets: f2,
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
            "¿Que deberia hacer Alex?:"
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = 'Voy a confrontar directamente al Sr. Martínez antes de llevar esto a la corte.';
        const option2Text = 'Esta situación cambia todo. Carlos actuó bajo presión y coacción de su jefe.';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Lose', { reasons: ['razon6'], nextScene: 'Cap2a'}); 
        } else if (option === 'option2') {
            this.scene.start('Cap2g');
        }
    }
}