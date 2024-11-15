// dialogueUtils.js

export function typewriterEffect(scene, text) {
    scene.dialogueText.setText('');
    scene.isTyping = true;

    let charIndex = 0;
    scene.typewriterTimer = scene.time.addEvent({
        callback: () => {
            if (charIndex < text.length) {
                scene.dialogueText.setText(scene.dialogueText.text + text[charIndex]);
                charIndex++;
            } else {
                scene.isTyping = false;
            }
        },
        repeat: text.length - 1,
        delay: 50
    });
}

export function displayNextDialogue(scene, nextAction) {
    if (scene.isTyping) {
        scene.typewriterTimer.remove();
        scene.isTyping = false;
    }

    scene.dialogueIndex++;
    if (scene.dialogueIndex < scene.dialogues.length) {
        typewriterEffect(scene, scene.dialogues[scene.dialogueIndex]);
    } else {
        // Ejecutar la acción pasada, que puede ser una función o un nombre de escena
        if (typeof nextAction === 'string') {
            scene.scene.start(nextAction);
        } else if (typeof nextAction === 'function') {
            nextAction();
        }
    }
}
