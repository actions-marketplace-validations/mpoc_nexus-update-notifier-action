const fetch = require('node-fetch');
const core = require("@actions/core");

(async () => {
    try {
        const nexusUrl = core.getInput('nexus-url');
        const assignmentId = core.getInput('assignment-id');

        const endpoint = `${nexusUrl}/assignments/${assignmentId}/edit_from_git_json`;

        const response = await fetch(endpoint).then((res) => res.json());
        console.log(response);

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
