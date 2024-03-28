// Import the functions to be tested
const { loadGame, play, startRepeat, endGame, showResult } = require('./script');

document.getElementById = jest.fn();

describe('loadGame', () => {
    beforeEach(() => {
        // Reset document.getElementById mock
        document.getElementById.mockReset();
    });

    test('should set display property to "none" for each element', () => {
        // Call loadGame function
        loadGame();

        // Check if document.getElementById has been called for each element
        expect(document.getElementById).toHaveBeenCalledTimes(6);

        // Check if display property is set to "none" for each element
        for (let i = 1; i < 7; i++) {
            expect(document.getElementById).toHaveBeenCalledWith(`op-${i}`);
            expect(document.getElementById.mock.calls[i - 1][0].style.display).toBe('none');
        }
    });
});

describe('play', () => {
    test('should set display property to "inline" for two elements', () => {
        // Mock Math.random to always return 0.5
        Math.random = jest.fn(() => 0.5);

        // Call play function
        play();

        // Check if display property is set to "inline" for two elements
        expect(document.getElementById).toHaveBeenCalledTimes(2);
        expect(document.getElementById).toHaveBeenCalledWith('op-3');
        expect(document.getElementById).toHaveBeenCalledWith('op-6');
        expect(document.getElementById.mock.calls[0][0].style.display).toBe('inline');
        expect(document.getElementById.mock.calls[1][0].style.display).toBe('inline');
    });
});

describe('startRepeat', () => {
    test('should not start repeat if state is true', () => {
        // Set state to true
        state = true;

        // Call startRepeat function
        startRepeat();

        // Check if setInterval is not called
        expect(setInterval).not.toHaveBeenCalled();
    });
});
