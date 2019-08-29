/** Google flow fullfillment request
 * https://cloud.google.com/dialogflow/docs/fulfillment-how
 */
export interface FullfillmentRequest {
  responseId: string;
  session: string;
  queryResult: QueryResult;
  originalDetectIntentRequest: DiagnosticInfo;
}
/** Google flow fullfillment response
 * https://cloud.google.com/dialogflow/docs/fulfillment-how
 */
export interface FullFillmentResponse {
  fulfillmentText?: string;
  fulfillmentMessages?: FulfillmentMessage[];
  source?: string;
  payload?: Payload;
  outputContexts?: OutputContext[];
  followupEventInput?: FollowupEventInput;
}

interface FollowupEventInput {
  name: string;
  languageCode: string;
  parameters: GFParameters;
}

interface OutputContext {
  name: string;
  lifespanCount: number;
  parameters: GFParameters;
}

interface Payload {
  google: Google;
  facebook: Facebook;
  slack: Facebook;
}

interface Facebook {
  text: string;
}

interface Google {
  expectUserResponse: boolean;
  richResponse: RichResponse;
}

interface RichResponse {
  items: Item[];
}

interface Item {
  simpleResponse: SimpleResponse;
}

interface SimpleResponse {
  textToSpeech: string;
}

interface FulfillmentMessage {
  card: Card;
}

interface Card {
  title: string;
  subtitle: string;
  imageUri: string;
  buttons: Button[];
}

interface Button {
  text: string;
  postback: string;
}

interface QueryResult {
  queryText: string;
  parameters: GFParameters;
  allRequiredParamsPresent: boolean;
  fulfillmentText: string;
  fulfillmentMessages: FulfillmentMessage[];
  outputContexts: OutputContext[];
  intent: Intent;
  intentDetectionConfidence: number;
  diagnosticInfo: DiagnosticInfo;
  languageCode: string;
}

interface DiagnosticInfo {
}

interface Intent {
  name: string;
  displayName: string;
}

interface OutputContext {
  name: string;
  lifespanCount: number;
  parameters: GFParameters;
}

interface FulfillmentMessage {
  text: Text;
}

interface Text {
  text: string[];
}

interface GFParameters {
  param: string;
}