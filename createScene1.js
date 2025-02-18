const Creatomate = require('creatomate');

function createScene1() {
  return new Creatomate.Composition({
    track: 1,
    duration: 7, // Display for 7 seconds
    elements: [
      // Background with a gradient effect
      new Creatomate.Rectangle({
        width: '100%',
        height: '100%',
        fillColor: '#1E1E1E',
        gradient: {
          type: 'linear',
          colors: ['#1E1E1E', '#343434'], // Dark gradient
          angle: 90,
        },
      }),

      // Title Text: "What is Deadlock in an OS?"
      new Creatomate.Text({
        text: "What is Deadlock in an Operating System?",
        font: 'Arial Black',
        fontSize: 54,
        color: '#000000', // Gold color for emphasis
        x: '50%',
        y: '30%',
        alignment: 'center',
        bold: true,
        animations: [
          new Creatomate.Fade({ duration: 1 }),
        ],
      }),

      // Definition Text
      new Creatomate.Text({
        text: "A deadlock is a situation \nwhere two or more\n processes are unable\n to proceed because each \nis waiting for\n the other to release a resource.",
        font: 'Arial',
        fontSize: 36,
        color: '#FFFFFF', // White text for readability
        x: '50%',
        y: '60%',
        alignment: 'center',
        maxWidth: '80%', // Keeps text from stretching too much
        lineSpacing: 1.5, // Increases readability
        animations: [
          new Creatomate.Slide({ direction: 'bottom', duration: 1 }), // Smooth slide-in effect
        ],
      }),
    ],
  });
}

module.exports = { createScene1 };
