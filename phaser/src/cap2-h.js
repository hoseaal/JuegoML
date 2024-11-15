// Cap2.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js';
import { showQuestion } from '../modulos/showQuestion.js';

export class Cap2h extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap2h' });
    }

    preload() {
        this.load.image('h2', './assets/juego/cap2/h2.jpg');
        this.load.image('arrow', './assets/bomb.png'); // Suponiendo que usarás la misma imagen de flecha
    }

    create() {
        let h2 = this.add.image(675, 300, 'h2').setAlpha(0);

        this.tweens.add({
            targets: h2,
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
            "Alex Sánchez finalmente descubre el papel del Sr. Martínez, quien había solicitado datos personales por razones personales y no había protegido la información adecuadamente.",
            "Un empleado llamado 'José Gomez' aprovechó la vulnerabilidad creada para descargar datos adicionales, que luego vendió en la web oscura para obtener ganancias. \n\n¿Sabía usted que su solicitud de información personal terminaría perjudicando tanto a la empresa?",
            "Con esta nueva información, queda claro que tanto el Sr. Martínez como José Gómez tienen un rol en esta violación. Debemos aplicar sanciones proporcionales."
        ];
        this.dialogueIndex = 0;

        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

    showQuestionCallback() {
        // Aquí puedes definir los textos para cada opción específicos para este capítulo
        const option1Text = 'Sugiero una sanción diferenciada: el Sr. Martínez debe responder por mal manejo de datos, y José Gómez por distribuir datos en la web oscura.';
        const option2Text = 'Ambos deben enfrentar las mismas consecuencias, ya que su falta de ética perjudicó a muchas personas.';
        
        showQuestion(this, option1Text, option2Text);
    }

    handleOptionSelection(option) {
        if (option === 'option1') {
            this.scene.start('Cap2i'); 
        } else if (option === 'option2') {
            this.scene.start('Lose', { reasons: ['razon7'], nextScene: 'Cap2a'});
        }
    }
}