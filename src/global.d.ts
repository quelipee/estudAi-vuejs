import Pusher from 'pusher-js';

// Adiciona Pusher ao objeto global window
declare global {
    interface Window {
        Pusher: typeof Pusher;
    }
}