const { PhoneNumbersUtils } = require('@twilio/flex-plugins-library-utils');

/**
 * @param {object} parameters the parameters for the function
 * @param {number} parameters.attempts the number of retry attempts performed
 * @param {object} parameters.context the context from calling lambda function
 * @returns {Array<PhoneNumber>} An array of phone numbers for the account
 * @description the following method is used to robustly retrieve
 *   the phone numbers for the account
 */

exports.listPhoneNumbers = async function listPhoneNumbers(parameters) {
  const { context } = parameters;

  const config = {
    attempts: 3,
  };
  
  const client = context.getTwilioClient();
  const phoneNumberClient = new PhoneNumbersUtils(client, config);
  try {
    const phoneNumbers = await phoneNumberClient.listPhoneNumbers(config);

    return {
      ...phoneNumbers,
    };
  } catch (error) {
    return { success: false, status: error.status, message: error.message };
  }
};
