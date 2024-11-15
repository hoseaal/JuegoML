// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap2b extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2b' });
    }

    preload() {
        this.load.image('a2', './assets/juego/cap2/a2.png');
        this.load.image('arrow', './assets/bomb.png'); // Suponiendo que usarás la misma imagen de flecha
    }

    create() {
        let a2 = this.add.image(675, 300, 'a2').setAlpha(0);

        this.tweens.add({
            targets: a2,
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
            "Alex, hemos encontrado una base de datos con información personal de nuestros clientes publicada en un sitio web oscuro. Necesitamos actuar rápido antes de que esta información se siga propagando.",
            "¿Que deberia hacer Alex?:"
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = 'Voy a investigar cómo se filtró esta información y quién tuvo acceso recientemente a la base de datos.';
        const option2Text = 'Voy a intentar acceder al sitio web y eliminar los datos filtrados por mi cuenta.';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Cap2c'); 
        } else if (option === 'option2') {
            this.scene.start('Lose', { reasons: ['razon4', 'Articulo20'], nextScene: 'Cap2a'});
        }
    }
}