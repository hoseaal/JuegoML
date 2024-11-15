// Cap1.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap1a extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap1a' });
    }

    preload() {
        this.load.image('a1', './assets/juego/cap1/a1-a.jpg');
        this.load.image('arrow', './assets/bomb.png', { frameWidth: 95, frameHeight: 49 });
    }

    create() {
        let a1 = this.add.image(675, 300, 'a1').setAlpha(0);

        this.tweens.add({
            targets: a1,
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
            "Gracias por venir tan rápido, Alex. Nuestra empresa ha sido atacada con ransomware, y nuestros sistemas están comprometidos. Necesitamos tu ayuda para descubrir cómo sucedió y quién está detrás de esto.",
            "¿Que debería hacer Alex? Elige una opción:"
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = 'Déjame revisar los registros de acceso para ver si detecto algo sospechoso.';
        const option2Text = 'Voy a intentar neutralizar el ransomware accediendo a la red directamente.';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Cap1b'); 
        } else if (option === 'option2') {
            this.scene.start('Lose', { reasons: ['razon1', 'Articulo6'], nextScene: 'Cap1a'}); // Razones para opción 2
        }
    }
}
