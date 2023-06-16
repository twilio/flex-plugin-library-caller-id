import * as Flex from '@twilio/flex-ui';
import { reduxNamespace } from '../../types/AppState';
import reducers from '../states/OutboundCallerIDSelector';

export default (flex: typeof Flex, manager: Flex.Manager) => {
  if (!manager.store.addReducer) {
    // tslint: disable-next-line
    console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`);
    return;
  }

  manager.store.addReducer(reduxNamespace, reducers);
};
