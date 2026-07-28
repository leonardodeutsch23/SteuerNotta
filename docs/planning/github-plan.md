# GitHub delivery plan

**Project:** `SteuerNotta Milestone Project`  
**Board statuses:** `Todo` · `In Progress` · `Done`  
**Milestone:** `SteuerNotta Milestone Project`  
**Due date:** 31 July 2026  
**Planning checkpoint:** 18 July 2026  
**Working language:** English

## Labels

Priorities:

- `Must Have`
- `Should Have`
- `Could Have`

Types:

- `feature`
- `documentation`
- `design`
- `testing`
- `bug`
- `accessibility`
- `content`
- `translation`

## Issue index

| # | Title | Priority | Type | Depends on |
|---:|---|---|---|---|
| 1 | Set up repository foundation and early deployment | Must Have | feature, documentation | — |
| 2 | Finalise responsive information architecture and design tokens | Must Have | design, documentation | — |
| 3 | Build the responsive homepage shell and navigation | Must Have | feature, accessibility | 1, 2 |
| 4 | Implement the hero, accessible carousel and Problem section | Must Have | feature, accessibility | 2, 3 |
| 5 | Implement Benefits, How It Works, Languages and footer | Must Have | feature, content | 2, 3 |
| 6 | Build the shared guided-form foundation | Must Have | feature, accessibility | 1, 2 |
| 7 | Implement the Spanish guided form content | Must Have | content, translation | 6 |
| 8 | Implement English and German guided-form parity | Must Have | translation, content | 6, 7 |
| 9 | Remove completion pages from the current frontend scope | Not planned | scope decision | 6–8 |
| 10 | Complete responsive and accessibility quality work | Must Have | accessibility, testing | 3–8 |
| 11 | Validate, test and document the deployed milestone | Must Have | testing, bug | 1–10 |
| 12 | Finalise README, credits and delivery evidence | Must Have | documentation | 1–11 |
| 13 | Complete professional fiscal and linguistic review before production use | Must Have | content, translation | 6–8 |

## Planned issues

### 1. Set up repository foundation and early deployment

**Labels:** `Must Have`, `feature`, `documentation`

**User story**  
As the project owner, I want a clean repository and early live deployment so that every later feature can be tracked and checked in production.

**Acceptance criteria**

- The agreed directory structure exists without superseded drafts.
- A valid `index.html` loads CSS and required Bootstrap resources through case-correct paths.
- GitHub Pages deploys from `main` and `/ (root)`.
- README contains the verified live URL only after deployment succeeds.
- Commits are small and focused on `main`.

**Checklist**

- [x] Add page and asset skeleton.
- [x] Add `.gitignore` and baseline metadata.
- [x] Commit and push the minimum valid site.
- [x] Enable GitHub Pages.
- [x] Verify the public URL and record the result.

### 2. Finalise responsive information architecture and design tokens

**Labels:** `Must Have`, `design`, `documentation`

**User story**  
As a developer, I want approved structural and visual references so that the homepage and three
form routes remain consistent.

**Acceptance criteria**

- Canonical SVG wireframes show the same content at mobile, tablet and desktop widths.
- Homepage and form wireframes contain no out-of-scope features.
- Provisional colour, type, spacing, card and icon roles are documented as tokens.
- Implemented logo and illustrations use documented local assets.

**Checklist**

- [x] Review both SVGs against the consistency audit.
- [x] Define CSS custom properties.
- [x] Use system font stacks and no separate icon library.
- [x] Record the source/credit status of local assets.

### 3. Build the responsive homepage shell and navigation

**Labels:** `Must Have`, `feature`, `accessibility`

**User story**  
As a visitor, I want clear navigation so that I can understand and move through the one-page introduction.

**Acceptance criteria**

- Semantic header, main, footer and navigation landmarks are present, together with a skip link.
- Navbar contains the logo, Home, How It Works, Benefits, Languages and the Start Now action.
- Bootstrap collapse works on mobile and tablet layouts.
- The adapted Boardwalk Games script closes the collapsed menu after an internal link.
- Scrollspy, visible focus and section offsets keep navigation understandable below the fixed navbar.

**Checklist**

- [x] Build header, navbar and section skeleton.
- [x] Add skip link and focus styles.
- [x] Adapt and comment the mobile-navbar script.
- [x] Check internal targets and responsive collapse behaviour.

### 4. Implement the hero, accessible carousel and Problem section

**Labels:** `Must Have`, `feature`, `accessibility`

**User story**  
As a visitor, I want a clear introduction and visual overview before choosing a form language.

**Acceptance criteria**

- The responsive hero contains the approved headline, supporting copy and two primary actions.
- `Start Now` and `How It Works` target the correct sections.
- Three local 16:9 illustrations appear in the Bootstrap carousel.
- Previous/next controls and clickable indicators expose the carousel state.
- The responsive Problem section contains its approved picture sources, heading, copy and four-item list.

**Checklist**

- [x] Implement responsive hero composition.
- [x] Add three optimised local illustrations.
- [x] Configure Bootstrap carousel controls and indicators.
- [x] Add the responsive Problem section.
- [x] Check CTA targets and carousel accessible names.

### 5. Implement Benefits, How It Works, Languages and footer

**Labels:** `Must Have`, `feature`, `content`

**User story**  
As a visitor, I want to understand the benefits, journey and language options before opening a form.

**Acceptance criteria**

- Four Benefits cards remain visible and readable at every target breakpoint.
- How It Works presents the approved three-step journey: choose a language, complete the guided form and review the information.
- ES, EN and DE cards are equally prominent at every breakpoint.
- Every language card keeps its local flag image, language name and localised CTA when the grid reflows.
- The language cards link to `form-es-de.html`, `form-en-de.html` and `form-de-de.html`.
- Footer contains the SteuerNotta copyright and internal links to the implemented homepage sections.

**Checklist**

- [x] Build four-card Benefits layout.
- [x] Build responsive three-step How It Works layout.
- [x] Add local language-card assets.
- [x] Link all three cards to the correct forms.
- [x] Build the agreed footer.

### 6. Build the shared guided-form foundation

**Labels:** `Must Have`, `feature`, `accessibility`

**User story**  
As a form user, I want one readable long page with consistent sections and help so that I can explore it without a hidden wizard.

**Acceptance criteria**

- Exactly seven main sections appear in the approved order.
- There is no wizard, saved progress, dynamic percentage, calculation or connected submission.
- Labels, IDs and controls are unique and correctly associated.
- Document controls only expose the browser's local file selector; no file is uploaded, stored or transmitted.
- Responsive utilities preserve the seven sections at mobile, tablet and desktop widths.
- The final section states that processing is not connected and keeps reset/submit actions disabled.

**Checklist**

- [x] Build the common form header, navigation and footer.
- [x] Add seven semantic `fieldset` groups.
- [x] Add responsive field-layout utilities.
- [x] Associate labels and accessible descriptions with existing controls.
- [x] Keep processing actions unavailable until backend behaviour is implemented.

### 7. Implement the Spanish guided form content

**Labels:** `Must Have`, `content`, `translation`

**User story**  
As a Spanish-speaking employee, I want German terms followed by Spanish explanations so that I can complete the current functional draft more easily.

**Acceptance criteria**

- German appears first with `lang="de"`; Spanish follows consistently.
- The seven implemented sections cover the selected 2025 draft scope in the documented order.
- Out-of-scope prompts collect review signals without calculating eligibility or a tax result.
- Document selectors remain local browser controls and perform no upload, persistence or transmission.
- Every main section records a `data-field-group` matrix reference and source-oriented subgroups use `data-source-ref`.
- The final review section explains that processing is not connected and that the current controls do not submit data.

**Checklist**

- [x] Map the seven main areas to matrix group IDs.
- [x] Implement all seven Spanish/German sections.
- [x] Keep German labels first and mark them with `lang="de"`.
- [x] Confirm local-only document selection and disabled processing actions.
- [x] Validate identifiers, labels, references and control structure.

### 8. Implement English and German guided-form parity

**Labels:** `Must Have`, `translation`, `content`

**User story**  
As an English- or German-speaking user, I want the same functional form structure in my language.

**Acceptance criteria**

- EN and DE have the same section/control intent and help coverage as ES.
- English keeps German first with `lang="de"` and English immediately below.
- German uses the same controls without visible duplicate translations.
- IDs, names, control types, option values and document selectors match across all three pages.
- No version introduces an extra feature or removes a notice.
- Each form links back to the same homepage sections and states the same no-processing behaviour in its own language.

**Checklist**

- [x] Create an explicit parity record from ES.
- [x] Implement and verify EN content.
- [x] Implement and verify DE content.
- [x] Cross-check all three routes, 318 controls, notices, IDs and matrix groups.

### 9. Remove completion pages from the current frontend scope

**Status:** closed as `Not planned`

**Scope decision**
The current forms require future JavaScript and processing work before a completion state can be
meaningful. Completion pages are therefore excluded from this milestone.

**Acceptance criteria**

- No completion page or completion handler remains in the current routes.
- Form submission and reset actions remain disabled.
- The interface does not claim that a tax return was completed or submitted.
- Documentation records this as a deliberate scope decision, not missing functionality.

**Checklist**

- [x] Remove the Spanish success-page draft.
- [x] Remove completion-page references from current documentation and wireframes.
- [x] Keep processing actions disabled.
- [x] Record future processing as separate product work.

### 10. Complete responsive and accessibility quality work

**Labels:** `Must Have`, `accessibility`, `testing`

**User story**  
As a user on any target device, I want the same readable and operable journey.

**Acceptance criteria**

- No required content is removed at approximately 375px, 768px or 1440px.
- No horizontal overflow occurs.
- Contrast, focus, labels, alt text, headings and accessible control names meet the documented requirements.
- Primary journey passes a keyboard smoke test.
- Carousel controls and indicators are keyboard operable and clearly named.

**Checklist**

- [x] Review the homepage and all three form routes at target widths.
- [x] Run contrast and focus review.
- [x] Check headings, landmarks, labels and alt text.
- [ ] Run keyboard smoke test.
- [x] Fix and retest logged defects.

### 11. Validate, test and document the deployed milestone

**Labels:** `Must Have`, `testing`, `bug`

**User story**  
As an assessor, I want reproducible evidence so that planned quality is distinguishable from tested quality.

**Acceptance criteria**

- HTML and CSS validator results are recorded for the final version.
- Lighthouse evidence is recorded without hiding failures.
- Links, disabled form actions, carousel controls and asset paths are manually tested.
- Chrome, Firefox, Edge and Safari method/results are documented.
- Each defect records expected, actual, fix and retest result.

**Checklist**

- [x] Run validators.
- [x] Run Lighthouse.
- [x] Complete link/form interaction tests.
- [ ] Complete responsive/browser matrix.
- [x] Fix and retest issues.

### 12. Finalise README, credits and delivery evidence

**Labels:** `Must Have`, `documentation`

**User story**  
As an assessor or future contributor, I want the README to match the delivered repository exactly.

**Acceptance criteria**

- Planned, implemented, tested and future items are clearly separated.
- Screenshots/test results are added only after they exist.
- Live URL, repository structure, technologies and known issues match the final commit.
- Every external/adapted/generated asset and script has an accurate credit.
- No formal tax-firm affiliation or open-source licence is implied.

**Checklist**

- [x] Reconcile README against code and deployed site.
- [x] Add final test evidence.
- [x] Complete credits and source licences.
- [x] Record known issues and future development.
- [x] Perform final broken-link review.

### 13. Complete professional fiscal and linguistic review before production use

**Labels:** `Must Have`, `content`, `translation`

**User story**  
As the project owner, I want the frozen field set and translations reviewed professionally before
SteuerNotta is presented for production use.

**Research input**
The current ES/EN/DE forms are frontend drafts. They intentionally perform no calculation,
persistence, upload or transmission. Professional review is deferred until the shared field set
and supported scope are frozen; it does not block the current non-processing milestone.

**Acceptance criteria**

- The final field set and explanatory copy are frozen before review begins.
- Every displayed field, option and help entry receives a matrix decision.
- German, Spanish and English wording are reviewed separately.
- Reviewer, role, date, reference year and official source are recorded.
- Rejected or out-of-scope content is corrected before real-data handling or production use.
- No professional validation, filing capability or tax-result calculation is claimed until this review is complete.

**Checklist**

- [ ] Freeze the final field set, explanations and supported scope.
- [ ] Expand the matrix to one row per final field/help entry.
- [ ] Review every `FULL-*` field, option, translation and official source locator.
- [ ] Obtain German fiscal-content review.
- [ ] Obtain Spanish and English linguistic review.
- [ ] Apply corrections and link commits/issues.

## Workflow

1. Move only one or a small number of cards to `In Progress`.
2. Commit each focused change directly to `main`.
3. Deploy and check early rather than waiting for completion.
4. Close an issue only after its acceptance criteria and evidence are complete.
5. Promote a checklist item into its own issue only when independent tracking is useful.
