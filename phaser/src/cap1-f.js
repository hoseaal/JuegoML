// Cap1.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap1f extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap1f' });
    }

    preload() {
        this.load.image('f1', './assets/juego/cap1/f1.jpg');
        this.load.image('arrow', './assets/bomb.png'); // Suponiendo que usarás la misma imagen de flecha
    }

    create() {
        let f1 = this.add.image(675, 300, 'f1').setAlpha(0);

        this.tweens.add({
            targets: f1,
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
            "Después de una investigación profunda, Alex informa a las autoridades y recomienda que se inicie un proceso judicial contra los atacantes. Aunque el daño fue significativo, Roberto Pérez no tuvo intención maliciosa y no cometió ningún delito, ya que fue víctima del phishing. Se decide aplicar una sanción menor en su caso.",
            "¿Cuantos años de prisión deberian recibir los atacantes?:"
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = '6 años de prisión';
        const option2Text = '2 años de prisión';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Cap2a'); 
        } else if (option === 'option2') {
            this.scene.start('Lose', { reasons: ['razon8'], nextScene: 'Cap1a'});
        }
    }
}