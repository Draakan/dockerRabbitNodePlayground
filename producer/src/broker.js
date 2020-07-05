const amqp = require('amqplib');

module.exports.start = async () => {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE);

  const channel = await connection.createChannel();
  await channel.assertExchange('tasks', 'fanout', { durable: false });

  setTimeout(() => {
    Array(2)
      .fill()
      .forEach(async (_, y) => {
        channel.publish('tasks', '', Buffer.from(JSON.stringify({ message: `${ y + 1 }` })));
        console.log(`message ${ y + 1 } sent`);
      });
  }, 1500);
};
