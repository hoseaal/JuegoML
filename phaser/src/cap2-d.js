// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap2d extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2d' });
    }

    preload() {
        this.load.image('d2', './assets/juego/cap2/d2.jpg');
        this.load.image('arrow', './assets/bomb.png'); // Suponiendo que usarás la misma imagen de flecha
    }

    create() {
        let d2 = this.add.image(675, 300, 'd2').setAlpha(0);

        this.tweens.add({
            targets: d2,
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
            "No sabía que esto era ilegal. Mi jefe me pidió que le consiguiera la información de contacto de una chica que le gusta. Solo lo hice porque él me ofreció un poco de dinero.",
            "¿Que deberia hacer Alex?:"
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = '¿Por qué no dijiste nada antes? Necesitamos tu cooperación completa para resolver esto.';
        const option2Text = 'Voy a revisar tu computadora para confirmar si realmente actuaste por presión de tu jefe.';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Cap2e'); 
        } else if (option === 'option2') {
            this.scene.start('Lose', { reasons: ['razon5', 'Articulo20'], nextScene: 'Cap2a'});
        }
    }
}