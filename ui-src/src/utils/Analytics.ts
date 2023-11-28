import FlexTelemetry from '@twilio/flex-ui-telemetry';
import packageJSON from '../../package.json';

export enum Event {
  CALLER_ID_SELECTED = 'Caller Id Selected',
}

export const Analytics = new FlexTelemetry({
  source: 'flexui',
  role: packageJSON.name,
  plugin: packageJSON.name,
  pluginVersion: packageJSON.version,
  originalPluginName: packageJSON.id,
});
