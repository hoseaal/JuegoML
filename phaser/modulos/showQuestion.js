export function showQuestion(scene, option1Text, option2Text) {
    scene.dialogueText.setText('¿Que debería hacer Alex? Elige una opción:');

    const option1 = scene.add.text(scene.textBox.x, scene.textBox.y, option1Text, {
        fontSize: '15px',
        color: '#ffffff',
        backgroundColor: '#123456',
        padding: { left: 20, right: 20, top: 10, bottom: 10 },
        align: 'center',
        borderRadius: '10px',
        wordWrap: { width: 550 }
    }).setOrigin(0.5).setInteractive();

    const option2 = scene.add.text(scene.textBox.x, scene.textBox.y + 50, option2Text, {
        fontSize: '15px',
        color: '#ffffff',
        backgroundColor: '#123456',
        padding: { left: 20, right: 20, top: 10, bottom: 10 },
        align: 'center',
        borderRadius: '10px',
        wordWrap: { width: 550 }
    }).setOrigin(0.5).setInteractive();

    // Deja los eventos de clic en el código principal
    option1.on('pointerdown', () => {
        scene.handleOptionSelection('option1');
    });

    option2.on('pointerdown', () => {
        scene.handleOptionSelection('option2');
    });
}
