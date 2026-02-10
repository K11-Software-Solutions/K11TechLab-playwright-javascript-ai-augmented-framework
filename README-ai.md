
# Playwright Basic to Advanced Learning (with K11softwaresolutions.com Demos)

Before leveraging AI-powered test generation, this framework provides a comprehensive suite of Playwright demo tests—ranging from basic to advanced—using real-world scenarios on [K11softwaresolutions.com](https://k11softwaresolutions.com).

**What you'll learn:**
- Playwright setup and configuration
- Writing your first E2E test
- Advanced selectors and assertions
- Component and API testing
- Context-aware flows with XState
- Data-driven and parameterized testing
- Robust error handling and reporting

Explore the `tests/` directory for hands-on examples and best practices. These demos serve as a foundation for mastering Playwright before moving to AI-augmented automation.

# AI Test Generator (OpenAI-powered)

This module enables AI-driven Playwright test generation using OpenAI's API and prompt templates.

## Features
- AI-powered Playwright test generation from prompt templates and config data
- CSV-driven test data, API endpoints, and DB config support
- Secure API key management via `.env`

## Usage
1. **Set up OpenAI API Key:**
   - Copy `.env.example` to `.env` and add your OpenAI API key:
     ```
     OPENAI_API_KEY=your-openai-api-key-here
     ```
2. **Install dependencies:**
   - Run:
     ```
     npm install
     ```
3. **Configure appConfig:**
   - Edit `config/appConfig.js` to set paths for test data, API endpoints, and DB config.
4. **Edit prompt templates:**
   - Update or create prompt files in `prompts/` (e.g., `playwright_login_test_generation.txt`).
5. **Run the generator:**
   - Execute:
     ```
     node ai/generate_generic_tests_ai.js
     ```
   - The generated test will be saved to `tests/mab/AI_GeneratedTest.spec.js`.

## Customization
- Add new prompt templates for different test scenarios
- Update `ai/generate_generic_tests_ai.js` to use your desired prompt file
- Extend demo tests in `tests/` for new learning modules

## Security
- `.env` is gitignored by default.
- Never commit your API key.

## Troubleshooting
- Ensure your OpenAI API key is valid and set in `.env`.
- If you see `Missing credentials` errors, check your `.env` setup.
- For OpenAI API errors, verify your network and API quota.

## Example Prompt Template
See `prompts/playwright_login_test_generation.txt` for a sample login test prompt.

## License
MIT

**Experimental Stage:**
This framework is currently in an experimental phase. Features and workflows may change, and reliability is not guaranteed for production use. Feedback and contributions are welcome!

## Future Enhancements Planned

- More advanced Playwright demo modules
- Support for Playwright API and DB test generation
- Multi-prompt scenario chaining
- Improved error handling and reporting
- Integration with CI/CD pipelines
- Customizable output file locations
- Enhanced prompt templating and variable injection
- Support for other AI providers (Azure, Anthropic, etc.)
- Automated test validation and coverage analysis