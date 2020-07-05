const amqp = require('amqplib');

module.exports.start = async () => {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE);

  const channel = await connection.createChannel();

  await channel.assertExchange('tasks', 'fanout', { durable: false });

  const { queue } = await channel.assertQueue('', { exclusive: true });

  channel.bindQueue(queue, 'tasks', '');

  channel.consume(queue, async (message) => {
    const content = message.content.toString();
    const task = JSON.parse(content);

    channel.ack(message, true);

    console.log(task, 'received');
  });
};
