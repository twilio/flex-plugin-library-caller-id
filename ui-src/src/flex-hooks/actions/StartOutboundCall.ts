import * as Flex from '@twilio/flex-ui';
import { Analytics, Event} from '../../utils/Analytics';

import AppState, { reduxNamespace } from '../../types/AppState';

export default function applySelectedCallerIdForDialedNumbers(flex: typeof Flex, manager: Flex.Manager) {
  flex.Actions.addListener(`beforeStartOutboundCall`, async (payload, _abortFunction) => {
    const state = manager.store.getState() as AppState;
    const { selectedCallerId } = state[reduxNamespace];

    if (!payload.callerId && selectedCallerId) {
     
      Analytics.track(Event.CALLER_ID_SELECTED,{
        taskSid: payload.task.taskSid
      });
     
      payload.callerId = selectedCallerId;
    }
  });
}
