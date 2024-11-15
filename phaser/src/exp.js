import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js'

export class Explain extends Phaser.Scene {
    constructor() {
        super({ key: 'Explain' });
    }

    preload() {
        this.load.image('Alex', './assets/juego/generales/exp.jpg');
        this.load.image('arrow', './assets/bomb.png');
    }

    create() {
        this.add.image(0, 0, 'Alex').setOrigin(0, 0);

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
                displayNextDialogue(this, 'Cap1a')
            });

        // Texto de ejemplo para la narrativa
        this.dialogues = [
            "¡Bienvenido a 'Misión Ciberjusticia'! \n\n¿Estás listo para convertirte en un héroe digital? En esta aventura, tendrás que resolver crímenes informáticos, descubrir secretos ocultos y enfrentar a personajes de todo tipo en el mundo virtual. ¿Podrás hacerlo sin terminar tras las rejas? ¡Eso está por verse!",
            "¿Cómo funciona el juego? \n\nEs simple: te enfrentarás a una serie de casos en los que tendrás que tomar decisiones clave. ¡Pero cuidado! Cada decisión tiene consecuencias. Si eliges mal, ¡terminarás arrestado y tendrás que reiniciar el capítulo! Solo los más astutos logran resolver cada caso sin caer en las trampas de la ley. A medida que avances, aprenderás sobre los delitos informáticos y cómo evitarlos (¡y no meterte en problemas tú mismo!).",
            "Ficha del Personaje Principal \n\nNombre: Alex Sánchez \n\nRol: Analista Cibernético \nPersonalidad: Curioso, detallista y con un toque de humor sarcástico. \n\nMisión: Resolver delitos informáticos en una compañía de tecnología, aplicar justicia y evitar las trampas legales. \n\nPrepárate para un reto único. Esta es una aventura donde el conocimiento es tu mejor arma y cada elección cuenta. ¡Pon a prueba tu intuición y tu sentido de la justicia!"
        ];
        this.dialogueIndex = 0;  // Índice para llevar el progreso de los diálogos

        // Iniciar el primer diálogo
        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }

}


