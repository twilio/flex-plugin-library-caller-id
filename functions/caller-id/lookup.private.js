const { PhoneNumbersUtils } = require('@twilio/flex-plugins-library-utils');

/**
 * @param {object} parameters the parameters for the function
 * @param {number} parameters.attempts the number of retry attempts performed
 * @param {object} parameters.context the context from calling lambda function
 * @param {string} parameters.phoneNumber the phone number to validate
 * @returns {object} https://www.twilio.com/docs/lookup/v2-api#making-a-request
 * @description the following method is used to validate a phone number
 */
exports.validatePhoneNumber = async function validatePhoneNumber(parameters) {
  const { context, phoneNumber } = parameters;
  const config = {
    attempts: 3,
    phoneNumber,
  };

  const client = context.getTwilioClient();
  const phoneNumberClient = new PhoneNumbersUtils(client, config);

  try {
    const phoneNumber = await phoneNumberClient.validatePhoneNumber(config);

    return { success: true, lookupResponse: phoneNumber, status: 200 };
  } catch (error) {
    return { success: false, status: error.status, message: error.message };
  }
};
