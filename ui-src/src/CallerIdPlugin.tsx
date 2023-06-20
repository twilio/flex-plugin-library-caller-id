import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import applySelectedCallerIdForDialedNumbers from './flex-hooks/actions/StartOutboundCall';
import ConfigureFlexStrings from './flex-hooks/strings';
import CustomizePasteElements from './utils/PasteThemeProvider';
import {addOutboundCallerIdSelectorToMainHeader} from './flex-hooks/components/OutboundDialerPanel'
import AddReducers from './flex-hooks/redux';
const PLUGIN_NAME = 'CallerID';

export default class ConferencePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const initializers = [
      AddReducers,
      ConfigureFlexStrings,
      CustomizePasteElements,
      addOutboundCallerIdSelectorToMainHeader,
      applySelectedCallerIdForDialedNumbers,
    ];

    initializers.forEach((initializer) => initializer(flex, manager));
  }
}
