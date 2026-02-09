const TestContext = require('../uitestengine/testcontext');
const UIElementActions = require('../utils/UIElementActions');
const { baseUrl } = require('../config/appConfig');

class TestLabPage extends TestContext {
    constructor() {
        super();
        this.elementAction = new UIElementActions(this.page);
        this.title = '#tech-lab-title';
        this.grid = '#tech-lab-grid';
        this.automationLabCard = '#tech-lab-card-automation-lab';
        this.fullStackLabCard = '#tech-lab-card-full-stack-development-lab';
        this.aiLabCard = '#tech-lab-card-ai-development-lab';
        this.llmTestHubCard = '#tech-lab-card-llm-test-hub';
    }

    async goto() {
        await this.goToBaseUrl(`${baseUrl}/tech-lab`);
    }
}

module.exports = TestLabPage;
