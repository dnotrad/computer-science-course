const concurrently = require('concurrently');

const args = process.argv.slice(2);

const lessonId = args[0] || 1;

concurrently(
  [
    { command: 'tsc -w', prefixColor: 'blue', name: 'typescript' },
    {
      command: `nodemon dist/homework_${lessonId}/index.js`,
      prefixColor: 'magenta',
      name: `lesson-${lessonId}`,
    },
  ],
  {
    killOthers: ['failure', 'success'],
  }
);
