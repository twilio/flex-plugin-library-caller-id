import * as Flex from '@twilio/flex-ui';

export const reduxNamespace = 'callerID';

// Register all component states under the namespace
export default interface AppState {
  flex: Flex.AppState;
  [reduxNamespace]: any;
}
