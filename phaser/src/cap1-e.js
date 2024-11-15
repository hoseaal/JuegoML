// Cap1.js
import { typewriterEffect, displayNextDialogue } from '../modulos/typewriterEffect.js'

export class Cap1e extends Phaser.Scene {
    constructor() {
        super({ key: 'Cap1e' });
    }

    preload() {
        this.load.image('e1', './assets/juego/cap1/e1.png');
        this.load.image('arrow', './assets/bomb.png');
    }

    create() {
        this.add.image(0, 0, 'e1').setOrigin(0, 0);

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
                displayNextDialogue(this, 'Cap1f')
            });

        // Texto de ejemplo para la narrativa
        this.dialogues = [
            "Roberto accede a cooperar y mostrar el correo electronico a Alex",
            "Asunto: ¡Oferta exclusiva para mejorar tus datos personales! \n\nHola Roberto, \n\n¡No dejes pasar esta oportunidad única! Hemos seleccionado tu cuenta para un servicio exclusivo de actualización de datos. Solo necesitas hacer clic en el archivo adjunto para confirmar tu solicitud y acceder a increíbles beneficios. \n\n¡Hazlo ahora! No puedes dejar pasar esta oferta! \n\nAtentamente \n\nEquipo de Ofertas Exclusivas",
            "Al investigar los registros, Alex descubre que el archivo contenía un troyano que permitió a los atacantes acceder a los sistemas de la empresa y robar información sensible, incluidos nombres, direcciones y números de teléfono de clientes."
        ];
        this.dialogueIndex = 0;  // Índice para llevar el progreso de los diálogos

        // Iniciar el primer diálogo
        typewriterEffect(this, this.dialogues[this.dialogueIndex]);
    }
}
