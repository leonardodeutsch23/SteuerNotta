# SteuerNotta

SteuerNotta is a completed multilingual **frontend MVP** for organising selected German
income-tax information in German, Spanish and English. The responsive homepage and three
seven-section form routes are implemented. Functional form behaviour, calculation, storage,
transmission and submission are not yet connected.

[Repository](https://github.com/leonardodeutsch23/SteuerNotta) ·
[Live site](https://leonardodeutsch23.github.io/SteuerNotta/) ·
**Reference year:** 2025 · **Status:** frontend MVP completed

## Current scope and limits

- SteuerNotta does not calculate tax, refunds, eligibility or filing obligations.
- It is not connected to ELSTER, a tax authority, a backend or a database.
- The browser can display and locally validate entered values, but SteuerNotta does not upload,
  persist or transmit them.
- File controls only expose the browser's local file-selection interface; selected files are not
  uploaded or saved.
- Reset and submission actions remain disabled until a processing architecture is implemented.
- Real personal, banking, fiscal or document data must not be entered in the current version.
- The current field set and translations have not received professional fiscal or linguistic
  approval.

These limits describe the present development stage, not the intended final capability.

## MVP status

| Stage | Status | Meaning |
|---|---|---|
| Frontend MVP | Completed | The responsive homepage, three language routes, long-form structure, navigation, accessibility work, deployment and frontend QA are complete. |
| Functional MVP | Pending | JavaScript must validate the form locally, manage conditional fields, provide a review summary and connect the reset/review/completion flow without claiming submission. |
| Production-ready tax product | Not ready | Real-data handling requires an approved processing architecture, privacy and security controls, a frozen fiscal scope and the professional review tracked in Issue #13. |

The next reasonable goal is a **local-only functional MVP**:

> A user can complete fictitious information, receive understandable validation feedback and
> review a generated summary in the browser without the application saving or transmitting data.

This next milestone does not need to calculate tax or connect to ELSTER. Those capabilities require
separate technical, fiscal, privacy and security decisions.

## Implemented pages

### Homepage

`index.html` contains:

1. responsive Bootstrap navigation with Scrollspy;
2. hero content and a three-image Bootstrap carousel;
3. Problem section;
4. three-step How It Works section;
5. four-card Benefits section;
6. Spanish, English and German language cards;
7. footer with internal navigation.

### Forms

- `form-es-de.html` — German terms with Spanish explanations.
- `form-en-de.html` — German terms with English explanations.
- `form-de-de.html` — German-only version.

All routes share 318 ordered controls and seven main sections:

1. case screening and scope;
2. main return and personal information;
3. employment income;
4. work-related expenses;
5. additional tax areas and deductions;
6. records and supporting documents;
7. final review.

The forms are long, normally scrolling pages rather than JavaScript-driven wizards. Their fields
reflow from one column on mobile to two columns on tablets and appropriate two- or three-column
layouts on larger screens. Unpaired tablet fields and document cards are centred.

There are no completion pages in the current milestone. They were intentionally removed because a
meaningful completion flow depends on form-processing behaviour that is not implemented yet.

## Language and structural parity

The ES/DE, EN/DE and DE/DE routes have been compared using:

- seven main `fieldset.form-section` elements;
- ordered control tags, IDs, names and types;
- select option values;
- label targets and accessible descriptions;
- document selectors;
- shared navigation and footer destinations.

The comparison found 318 controls on each route, no control-signature or select-value differences,
no duplicate control IDs and no unresolved label targets. German field labels in translated forms
include `lang="de"`. Current evidence is in
[docs/testing/form-es-qa.md](docs/testing/form-es-qa.md).

## Responsive and accessibility behaviour

The CSS is mobile-first and defines layouts for:

- mobile widths below `768px`;
- tablets from `768px` through `991.98px`;
- laptops and larger screens from `992px`;
- wider desktop refinements from `1200px`.

Implemented accessibility features include:

- semantic header, navigation, main and footer landmarks;
- skip links on the homepage and all three form routes;
- associated labels and unique control IDs;
- language metadata and German-language markers in translated forms;
- visible keyboard focus;
- meaningful alternative text for informative images;
- accessible carousel controls and indicators;
- descriptions for local-only file selectors;
- scroll offsets below the fixed navigation.

## Technology stack

- Semantic HTML5.
- Mobile-first CSS3 with custom properties.
- Bootstrap 5.3.8 CSS and JavaScript bundle from jsDelivr.
- A small inline script that closes the collapsed homepage navigation after choosing an in-page
  destination.
- Git, GitHub Issues, GitHub Projects and GitHub Pages.

No external font or separate icon library is loaded. The interface uses system font stacks and
local image assets.

## Repository structure

```text
SteuerNotta/
├── index.html
├── form-es-de.html
├── form-en-de.html
├── form-de-de.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── styleform.css
│   ├── docs/wireframes/
│   │   ├── homepage-responsive.svg
│   │   └── form-responsive.svg
│   └── images/
└── docs/
    ├── audit/consistency-audit.md
    ├── content/fiscal-review-matrix.md
    ├── planning/github-plan.md
    └── testing/form-es-qa.md
```

## Testing status

| Check | Current result |
|---|---|
| Seven-section structure | Passed on all three forms |
| Ordered control parity | Passed: 318 controls per form |
| Unique control IDs | Passed: zero duplicates |
| Label associations | Passed: zero unresolved targets |
| Select option parity | Passed: zero differences |
| Responsive widths | Passed at 375px, 768px and 1440px in Chrome |
| Horizontal overflow | None detected at the three target widths |
| Homepage links and local asset paths | Passed |
| HTML validation | Passed: 0 errors and 0 warnings on all four routes |
| CSS validation | Passed: 0 errors on both stylesheets; compatibility notices documented |
| Lighthouse | Home: 83/100/100/100; Spanish form: 83/100/100/100 |
| Interaction smoke tests | Mobile menu, internal offsets and carousel controls passed in Chrome |
| Keyboard and browser matrix | Passed manually in Edge, Firefox and Safari; user-confirmed |

Test evidence distinguishes automated structural checks, browser smoke tests and professional
content review. A browser pass is not fiscal approval.

## Project management

- [GitHub Project board](https://github.com/users/leonardodeutsch23/projects/5)
- [Milestone issues](https://github.com/leonardodeutsch23/SteuerNotta/issues)
- [Planning record](docs/planning/github-plan.md)
- [Fiscal review matrix](docs/content/fiscal-review-matrix.md)

Issues #1–#12 for the current frontend milestone are closed. Issue #9 was closed as not planned
because completion pages were removed from the current scope. Issue #13 remains open and deferred
until the field set is frozen and professional review can be commissioned.

## Remaining work

1. Add JavaScript for required-field validation, understandable error messages and conditional
   field behaviour.
2. Generate a local review summary and connect the reset, review and eventual completion state.
3. Test the JavaScript flow with fictitious data and confirm that values never enter URLs or
   external services.
4. Decide whether later versions remain local-only or require a backend, persistence and document
   handling.
5. Define privacy, security and consent requirements before any real-data handling.
6. Freeze the supported field set and fiscal scope.
7. Complete the professional German fiscal and specialist Spanish/English linguistic review in
   Issue #13.
8. Run regression, accessibility and cross-browser tests after functional behaviour is added.

## Credits and licences

- Project design, HTML, CSS and written interface structure: Leonardo Deutsch.
- The responsive-navbar closing pattern was adapted from Leonardo Deutsch's earlier Boardwalk
  Games implementation.
- The logo, carousel scenes, Problem illustration, benefit graphics, How It Works graphics and
  language-card graphics in `assets/images/` were created for SteuerNotta with generative-image
  assistance and edited/exported as local project assets. No third-party stock-image source is
  claimed.
- The SVG wireframes in `assets/docs/wireframes/` were created specifically for SteuerNotta.
- [Bootstrap 5.3.8](https://github.com/twbs/bootstrap) is distributed under the MIT License and is
  loaded from [jsDelivr](https://www.jsdelivr.com/).
- No affiliation with ELSTER, a German tax authority or a tax-advisory firm is claimed.

No project licence has been selected. Public repository visibility does not grant permission to
copy, modify or redistribute SteuerNotta.

## Author

Created by [Leonardo Deutsch](https://github.com/leonardodeutsch23).
