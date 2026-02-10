# K11TechLab Overview

## Locators Lab ([https://k11softwaresolutions.com/labs/locators](https://k11softwaresolutions.com/labs/locators))

The Locators Lab is a dedicated playground for mastering Playwright selector strategies. It features intentionally complex and varied UI patterns, allowing you to practice and validate:
- Text, CSS, XPath, nth, attribute, role, label, and test id selectors
- Shadow DOM and iframe element targeting
- Deep search and advanced locator scenarios

### Key Sections
- **Sandbox Area**: Contains all practice elements and sections.
- **Dummy Form**: Includes multiple input fields, disabled fields, and a submit button for form automation.
- **User Table**: Practice table row and cell selection.
- **Shadow DOM**: Elements inside open shadow roots for deep selector practice.
- **Popups & Actions**: Buttons to trigger alerts, prompts, modals, and file downloads.
- **iframe Lab (srcDoc)**: Embedded iframe with its own form, table, and note for cross-frame automation.

## Form Elements in Locators Lab 

The Dummy Form section provides a variety of form elements:
- **User Email**: `<input id="userEmail" type="email">`
- **Password**: `<input id="userPass" type="password">`
- **Company Name**: `<input id="companyName" type="text">`
- **Mobile**: `<input id="mobile" type="tel">`
- **Country**: `<input id="country" type="text">`
- **Disabled Name**: `<input id="disabledName" type="text" disabled>` (can be enabled)
- **Submit Button**: `<button id="locators-lab-run-btn">Submit</button>`

These elements are ideal for:
- Practicing input, fill, and validation actions
- Testing attribute-based and role-based selectors
- Demonstrating form automation and error handling


## Labs Forms Page ([https://k11softwaresolutions.com/labs/forms](https://k11softwaresolutions.com/labs/forms))

The Labs Forms page (`/labs/forms`) is a dedicated area for practicing form automation, validation, and error handling. It includes:
- Multiple input fields (email, password, company, etc.)
- Form validation scenarios
- Disabled/enabled fields
- Submit and reset buttons

This page is ideal for:
- Focused form automation and validation tests
- Demonstrating error handling and edge cases
- Practicing attribute-based and role-based selectors

Use a dedicated page object for Labs Forms if you want maintainable selectors and robust test coverage.



## Automation Lab Tables Page ([https://k11softwaresolutions.com/automation-lab/tables](https://k11softwaresolutions.com/automation-lab/tables))

The Automation Lab Tables page is designed for practicing advanced table selectors and automation. It includes:
- Multiple tables with varied structures and attributes
- Demo table with headers, rows, and cells for selector practice
- Cells with custom attributes (e.g., `data-status`)
- Realistic data for row/cell selection

This page is ideal for:
- Practicing text, CSS, XPath, nth, attribute, role, and partial text selectors on tables
- Validating table automation scenarios (row/cell selection, header targeting)
- Demonstrating robust selector strategies for tabular data

Refer to SelectorsAdvanced.spec.js for comprehensive table selector demos.

---


## Usage
- Use the LocatorsLabPage page object for robust, maintainable selectors.
- Refer to SelectorsAdvanced.spec.js for comprehensive selector demos.
- Explore advanced scenarios like shadow DOM and iframe element targeting.
- Use Labs Forms page for focused form automation and validation.

---
For more details, see:
- [doc/playwright-basics/advanced-selectors.md](doc/playwright-basics/advanced-selectors.md)
- [tests/selectors/SelectorsAdvanced.spec.js](tests/selectors/SelectorsAdvanced.spec.js)
- [pages/LocatorsLabPage.js](pages/LocatorsLabPage.js)
