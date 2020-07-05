const broker = require('./broker');

broker.start().catch((err) => {
  console.log(err);
});
