import { FullfillmentRequest, FullFillmentResponse } from '../webhook.model';

export default (req: FullfillmentRequest): FullFillmentResponse => {
  return {
    fulfillmentText: 'light opened',
  };
};
