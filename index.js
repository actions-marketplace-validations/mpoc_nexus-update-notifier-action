const fetch = require('node-fetch');
const core = require("@actions/core");

(async () => {
    try {
        const apiEndpoint = core.getInput('api-endpoint');

        const response = await fetch(apiEndpoint)
            .catch(error => { throw new Error(`Invalid request to server: ${error.message}`) });

        if (!response.ok) {
            const errorText = `${response.statusText} - ${await response.text()}`;
            throw new Error(`Invalid response from server ${apiEndpoint}: ${errorText}`);
        }

        const responseJson = await response.json()
            .catch(error => { throw new Error(`Unable to parse JSON from server response: ${error.message}`) });

        if (!responseJson.success) {
            const failMessage = `Nexus received update message, but failed updating assignment: ${responseJson.error}`;
            core.setFailed(failMessage);
        } else {
            console.log('Success updating assignment');
        }
    } catch (error) {
        core.setFailed(error.message);
    }
})();
