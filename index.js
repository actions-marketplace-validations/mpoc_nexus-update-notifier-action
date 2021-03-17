const fetch = require('node-fetch');
const core = require("@actions/core");

(async () => {
    try {
        const endpoint = core.getInput("nexus-receiver-endpoint");

        const response = await fetch(endpoint).then((res) => res.json());

        if (!response.success) {
            const failMessage = `Nexus received update message, but failed updating assignment: ${response.error}`;
            core.setFailed(failMessage);
        } else {
            console.log('Success updating assignment');

        }
    } catch (error) {
        core.setFailed(error.message);
    }
})();
