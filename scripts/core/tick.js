import { Game } from './game.js';

document.addEventListener("DOMContentLoaded", () => {
    fetch('/data/settings.json')
        .then(response => response.json())
        .then(data => {
            const settingsData = data.settings[0];
            const GAME = new Game(settingsData);
            GAME.setWindowFrame();
            // Create and append the FPS container to #game-frame

            GAME.load();


            const tick = (now) => {
                GAME.tick(now);

                // Main game loop logic here
                requestAnimationFrame(tick); // Loop continuously
            };
            requestAnimationFrame(tick); // Start the loop
        })
        .catch(error => console.error('Error loading settings:', error));
});
