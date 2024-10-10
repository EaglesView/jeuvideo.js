import { Game } from './game.js';

document.addEventListener("DOMContentLoaded", () => {
    fetch('/data/settings.json')
        .then(response => response.json())
        .then(data => {
            const settingsData = data.settings[0];
            const GAME = new Game(settingsData);
            GAME.setWindowFrame();
            // Create and append the FPS container to #game-frame
            const fpsContainer = document.createElement('div');
            fpsContainer.id = 'fps-container';
            fpsContainer.style.position = 'absolute';
            fpsContainer.style.top = '10px';
            fpsContainer.style.right = '10px';
            fpsContainer.style.color = 'white';
            fpsContainer.style.backgroundColor = 'black';
            fpsContainer.style.fontFamily = 'monospace';
            fpsContainer.style.zIndex = 1000; // Ensure it stays on top
            document.querySelector('#game-frame').appendChild(fpsContainer);

            // Start the game loop with FPS display
            let lastFrameTime = performance.now();
            let frameCount = 0;
            let fps = 0;

            const tick = (now) => {
                // Calculate FPS
                const delta = now - lastFrameTime;
                frameCount++;
                if (delta >= 1000) {  // Update every second
                    fps = (frameCount / delta) * 1000;
                    frameCount = 0;
                    lastFrameTime = now;
                }

                // Update the FPS container text
                fpsContainer.innerText = `FPS: ${Math.round(fps)}`;

                // Main game loop logic here
                requestAnimationFrame(tick); // Loop continuously
            };

            requestAnimationFrame(tick); // Start the loop
        })
        .catch(error => console.error('Error loading settings:', error));
});
