# Flex Caller-Id Plugin for Native Dialpad

### How it works

<img src="screenshots/1.gif" alt="Caller Id" width="50%"/>

- This feature enables the user to define which number on the Twilio account to use when dialing outbound using the dialpad.
- The Flex Dialpad must be enabled in order to be able to place outbound calls from within Flex. If this has not yet been configured, you will not be able to use this feature. This can be enabled in the Twilio Console > Flex > Manage > Voice, or by using the Flex Configuration API


**Note** - Plugin will be ready to use if it is installed via [plugins library](https://flex.twilio.com/admin/plugins/library) and the browser window is refreshed.
But if you wish to customize the plugin and deploy as a custom plugin then follow along to know how to setup, develop and deploy this plugin

## Customization
### Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd

# If you use npm
npm install
```

### Development

In order to develop locally, you can use the Twilio CLI to run the plugin locally. Using your commandline run the following command from the root of the project,

```bash
cd ui-src
twilio flex:plugins:start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`.

When you make changes to your code, the browser window will be automatically refreshed.

## Deployment

### Twilio Serverless Deployment

We need to first deploy the serverless so the serverless domain can be used while deploying the plugin frontend.

You will need the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) and the [serverless plugin](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started) to deploy the functions inside the `fucntions` folder of this project. You can install the necessary dependencies with the following commands:

`npm install twilio-cli -g`

and then

`twilio plugins:install @twilio-labs/plugin-serverless`

#### How to use

1. Setup all dependencies above: the workflow and Twilio CLI packages.

2. Clone this repository

3. Copy `.env.example` to `.env` and set the following variables:

    - TWILIO_FLEX_WORKSPACE_SID=
    - TWILIO_ACCOUNT_SID=
    - TWILIO_AUTH_TOKEN=

4. run `npm install`
5. run the following command

`twilio serverless:deploy`

6. Note down the serverless domain you get after the deployment. This would be used while deploying the plugin frontend.

### Plugin Deployment

Once you are happy with your plugin, you have to deploy then release the plugin for it to take affect on Twilio hosted Flex.

Copy `.env.example` to `.env` inside the ui-src folder and set the serverless domain you got from step-6:

```FLEX_APP_SERVERLESS_FUNCTONS_DOMAIN=``` 

Run the following command from the ```ui-src``` to start the deployment:


`twilio flex:plugins:deploy --major --changelog "Notes for this version" --description "Functionality of the plugin"`

After your deployment runs you will receive instructions for releasing your plugin from the bash prompt. You can use this or skip this step and release your plugin from the Flex plugin dashboard here https://flex.twilio.com/admin/plugins

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.