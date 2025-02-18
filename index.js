





  const Creatomate = require('creatomate');
const { createScene1 } = require('./createScene1');
// const { createScene2 } = require('./createScene2');
// const { createScene3 } = require('./createScene3');
// const { createScene4 } = require('./createScene4');

const client = new Creatomate.Client('dbe24dea44f84af3b38130ffe9cdd2c2b8f93d1af751be0b826764bcdbd125bd602ab5a51a93a4dd1894c29d5770a2a8');

const source = new Creatomate.Source({

  // Create a video (mp4). This can also be set to 'gif', 'jpg', or 'png'.
  outputFormat: 'mp4',

  // Dimensions of the output video
  width: 1080,
  height: 1920,

  // Frame rate in frames per second
  frameRate: 60,

  // Extract a still image from the video to be used as thumbnail or poster
  snapshotTime: 3.5,

  // Content of the video
  elements: [

    // Background music
    new Creatomate.Audio({
      source: 'https://creatomate-static.s3.amazonaws.com' +
          '/demo/pixabay-best-summer-128473.mp3',
      duration: null,
      audioFadeOut: 2,
    }),

    createScene1(),
    // createScene2(),
    // createScene3(),
    // createScene4(),
  ],
});

console.log('Please wait while your video is being rendered...');

client.render({ source })
  .then((renders) => {
    console.log('Completed:', renders);
  })
  .catch((error) => console.error(error));