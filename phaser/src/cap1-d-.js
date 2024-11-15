// Cap1.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap1d extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap1d' });
    }

    preload() {
        this.load.image('d1', './assets/juego/cap1/d1.jpg');
        this.load.image('arrow', './assets/bomb.png'); // Suponiendo que usarás la misma imagen de flecha
    }

    create() {
        let d1 = this.add.image(675, 300, 'd1').setAlpha(0);

        this.tweens.add({
            targets: d1,
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
            "Roberto Pérez: No sé de qué estás hablando, Alex. No tengo nada que ver con este ataque. Solo hago mi trabajo.",
            "¿Que debería hacer Alex? Elige una opción:"
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = 'Voy a buscar en tu computadora sin tu permiso para encontrar pruebas.';
        const option2Text = 'Sabemos que recibiste un correo extraño antes del ataque. Necesito ver ese correo.';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Lose', { reasons: ['razon3', 'Articulo20'], nextScene: 'Cap1a' }); 
        } else if (option === 'option2') {
            this.scene.start('Cap1e'); // Razones para opción 2
        }
    }
}
