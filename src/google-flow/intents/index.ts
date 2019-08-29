import log from '../log';

// Your google dialog flow project id
const projectId = 'goofymsg';

const intentMapping = new Map<string, (req: FullfillmentRequest) => FullFillmentResponse>();
const addIntent = (id: string, fn: any) => {
  log(`Add intent ${id}`);
  intentMapping.set(`projects/${projectId}/agent/intents/${id}`, fn);
}

import openLed from './open-led';
import { FullfillmentRequest, FullFillmentResponse } from '../webhook.model';

addIntent('aca435ca-8967-4f58-be3a-cef720c4c4b2', openLed);

export default (req: FullfillmentRequest): FullFillmentResponse => {
  const intent = intentMapping.get(req.queryResult.intent.name);
  if (intent) {
    log(`Intent ${req.queryResult.intent.name} matched.`);
    return intent(req);
  }
  log(`Intent ${req.queryResult.intent.name} not define.`);
  return {
    fulfillmentText: `Sorry, I don't know how to handle your message.`,
  };
};
