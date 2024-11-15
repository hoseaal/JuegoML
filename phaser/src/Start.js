import { buttonStart } from "../modulos/button-start.js";

export class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'Start', active: true });
        this.buttonStart = new buttonStart(this);
    }

    preload() {
        this.background = this.load.image('background', './assets/fondos/fondo2.jpg');
        this.buttonStart.preload();
    }

    create() {
        const backgroundImage = this.add.image(675, 300, 'background');
         backgroundImage.setAlpha(0.5);
        this.buttonStart.create();

        // Agregar título grande y centrado con estilos personalizados
        const titleStyle = {
            fontFamily: '"Doto", sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: '<weight>',
            fontStyle: 'normal',
            fontVariationSettings: '"ROND" 0',
            fontSize: '48px', // Tamaño de fuente que ya habíamos definido
            fill: '#ffffff', // Color de texto que ya habíamos definido
            align: 'center' // Alineación de texto que ya habíamos definido
        };
        this.add.text(675, 100, 'MISIÓN \nCIBERJUSTICIA', titleStyle).setOrigin(0.5);
    }

    update() {
    }
}



