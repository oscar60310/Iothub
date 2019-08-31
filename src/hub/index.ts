import * as amqp from 'amqplib';
import log from './log';

export const connect = async () => {
  const rabbitmqHost = process.env.RABBITMQ_HOST;
  if (!rabbitmqHost) {
    log('Rabbitmq server address not define, please set environment variable RABBITMQ_HOST');
    return;
  }
  try {
    const connection = await amqp.connect(rabbitmqHost);
    log('Connect successfully');

  } catch (e) {
    log('AMQP connect fail');
    console.log(e);
  }
};
