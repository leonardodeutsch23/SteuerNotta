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
| 6 | Build the shared seven-section long-form foundation | Must Have | feature, accessibility | 1, 2 |
| 7 | Implement the Spanish educational form content | Must Have | content, translation | 6, 13 |
| 8 | Create English and German form parity | Must Have | translation, content | 7, 13 |
| 9 | Create localised success pages and safe demo completion | Must Have | feature, accessibility | 6–8 |
| 10 | Complete responsive and accessibility quality work | Must Have | accessibility, testing | 3–9 |
| 11 | Validate, test and document the deployed milestone | Must Have | testing, bug | 1–10, 13 |
| 12 | Finalise README, credits and delivery evidence | Must Have | documentation | 1–11, 13 |
| 13 | Validate or neutralise fiscal content before publication | Must Have | content, translation | 6 |

## Planned issues

### 1. Set up repository foundation and early deployment

**Labels:** `Must Have`, `feature`, `documentation`

**User story**  
As the project owner, I want a clean repository and early live deployment so that every later feature can be tracked and checked in production.

**Acceptance criteria**

- The agreed directory structure exists without superseded drafts.
- A valid minimal `index.html` loads CSS and JavaScript through case-correct relative paths.
- GitHub Pages deploys from `main` and `/ (root)`.
- README contains the verified live URL only after deployment succeeds.
- Commits are small and focused on `main`.

**Checklist**

- [ ] Add page and asset skeleton.
- [ ] Add `.gitignore` and baseline metadata.
- [ ] Commit and push the minimum valid site.
- [ ] Enable GitHub Pages.
- [ ] Verify the public URL and record the result.

### 2. Finalise responsive information architecture and design tokens

**Labels:** `Must Have`, `design`, `documentation`

**User story**  
As a developer, I want one approved structural and visual reference so that all seven pages remain consistent.

**Acceptance criteria**

- Canonical SVG wireframes show the same content at mobile, tablet and desktop widths.
- Homepage and form/success wireframes contain no out-of-scope features.
- Provisional colour, type, spacing, card and icon roles are documented as tokens.
- Logo/illustration placeholders are clearly marked until assets are selected.

**Checklist**

- [ ] Review both SVGs against the consistency audit.
- [ ] Define CSS custom properties.
- [ ] Decide font delivery and one icon library.
- [ ] Create asset-source/credit placeholders.

### 3. Build the responsive homepage shell and navigation

**Labels:** `Must Have`, `feature`, `accessibility`

**User story**  
As a visitor, I want clear navigation so that I can understand and move through the one-page introduction.

**Acceptance criteria**

- Semantic page landmarks and skip link are present.
- Navbar contains only logo, Home, Benefits, How It Works and Languages, matching the page order.
- Bootstrap collapse works at small sizes.
- The adapted local script closes the mobile menu after an internal link and is credited.
- Focus remains visible and anchors land on labelled sections.

**Checklist**

- [ ] Build header, navbar and section skeleton.
- [ ] Add skip link and focus styles.
- [ ] Adapt and comment the mobile-navbar script.
- [ ] Check keyboard and responsive behaviour.

### 4. Implement the hero, accessible carousel and Problem section

**Labels:** `Must Have`, `feature`, `accessibility`

**User story**  
As a resident employee with German wage-taxed income, I want the opening content to explain the prototype without promising a tax result or implying that cross-border cases are covered.

**Acceptance criteria**

- Qualified headline/supporting copy cannot be read as a refund promise.
- `Start Now` and `How It Works` target the correct sections.
- Three coherent local illustrations do not imply calculations or submission.
- Carousel includes controls, indicators and visible pause/resume.
- Autoplay is disabled for reduced-motion users and pauses on focus/hover.
- Problem copy and illustration introduce no new feature.

**Checklist**

- [ ] Implement responsive hero composition.
- [ ] Create/source, optimise and credit three illustrations.
- [ ] Configure Bootstrap carousel and accessible control.
- [ ] Add Problem section.
- [ ] Test focus, motion and target widths.

### 5. Implement Benefits, How It Works, Languages and footer

**Labels:** `Must Have`, `feature`, `content`

**User story**  
As a visitor, I want to understand the benefits, journey and language options before opening a form.

**Acceptance criteria**

- Four benefits use the approved, non-promissory meaning.
- How It Works has five steps and labels step five as future only.
- ES, EN and DE cards are equally prominent at every breakpoint.
- Every card retains its approved description and localised CTA when the grid reflows.
- Local flags have recorded source/licence; language name/code is the primary cue.
- Footer includes demo, no-advice and no-ELSTER notices plus agreed internal links.

**Checklist**

- [ ] Build four-card Benefits layout.
- [ ] Build responsive five-step How It Works layout.
- [ ] Add and credit local flag assets.
- [ ] Link all three cards to the correct forms.
- [ ] Build the agreed footer.

### 6. Build the shared seven-section long-form foundation

**Labels:** `Must Have`, `feature`, `accessibility`

**User story**  
As a form user, I want one readable long page with consistent sections and help so that I can explore it without a hidden wizard.

**Acceptance criteria**

- Exactly seven main sections appear in the approved order.
- There is no wizard, saved progress, dynamic percentage, upload or calculation.
- Labels, IDs and controls are unique and correctly associated.
- If included, static section anchors work without claiming progress; they remain optional scan aids.
- Complex fields can use one reusable, accessible Bootstrap modal pattern.
- Browser-validation limits are stated visibly.

**Checklist**

- [ ] Build common form header and disclaimer; add section navigation only if it remains useful and accessible.
- [ ] Add seven semantic `fieldset` groups.
- [ ] Add responsive field-layout utilities.
- [ ] Build accessible help-modal pattern.
- [ ] Add non-serialising finish handler foundation.

### 7. Implement the Spanish educational form content

**Labels:** `Must Have`, `content`, `translation`

**User story**  
As a Spanish-speaking employee, I want German terms followed by Spanish explanations so that I can learn the terminology while exploring the prototype.

**Acceptance criteria**

- German appears first with `lang="de"`; Spanish follows consistently.
- Only selected 2025 concepts within the documented prototype scope appear.
- Out-of-scope prompts do not determine eligibility and direct users to official/professional help.
- Documents is a non-exhaustive records checklist without file controls.
- Every field/help string has a fiscal-matrix ID.
- No specific fiscal statement remains visibly `Pending`: it is reviewed first or replaced by an unmistakably generic prototype placeholder.

**Checklist**

- [ ] Map proposed controls to matrix IDs.
- [ ] Implement seven Spanish sections.
- [ ] Add plain-language limits and examples.
- [ ] Review terminology, required fields and fake-data examples.
- [ ] Validate HTML.

### 8. Create English and German form parity

**Labels:** `Must Have`, `translation`, `content`

**User story**  
As an English- or German-speaking user, I want the same educational structure in my language.

**Acceptance criteria**

- EN and DE have the same section/control intent and help coverage as ES.
- English pages keep German first and English below.
- German pages use natural German without duplicated translations.
- IDs are page-local, unique and consistent enough for maintenance.
- No version introduces an extra feature or removes a notice.
- No translated specific fiscal guidance is published unless Issue 13 records an approved source/review decision; otherwise use generic placeholders.

**Checklist**

- [ ] Create an explicit parity checklist from ES.
- [ ] Implement EN content.
- [ ] Implement DE content.
- [ ] Cross-check all three routes, controls, notices and matrix IDs.

### 9. Create localised success pages and safe demo completion

**Labels:** `Must Have`, `feature`, `accessibility`

**User story**  
As a user who finishes the demo, I want a clear confirmation in the same language without sending my entries.

**Acceptance criteria**

- ES, EN and DE forms open their matching success page.
- Submit handler prevents serialisation/transmission of form values.
- Button label is equivalent to `Finish demo`, not tax-return submission.
- Every success page repeats all four agreed messages/actions at every breakpoint.
- No answer summary, download or next-steps content appears.

**Checklist**

- [ ] Implement and comment the finish handler.
- [ ] Create three localised success pages.
- [ ] Add Home and Return to Form actions to all layouts.
- [ ] Test invalid and valid completion paths.

### 10. Complete responsive and accessibility quality work

**Labels:** `Must Have`, `accessibility`, `testing`

**User story**  
As a user on any target device, I want the same readable and operable journey.

**Acceptance criteria**

- No content is removed at approximately 375px, 768px or 1440px.
- No horizontal overflow occurs.
- Contrast, focus, labels, alt text, headings and modal names meet the documented requirements.
- Primary journey passes a keyboard smoke test.
- Carousel motion controls behave as specified.

**Checklist**

- [ ] Review all seven pages at target widths.
- [ ] Run contrast and focus review.
- [ ] Check headings, landmarks, labels and alt text.
- [ ] Run keyboard smoke test.
- [ ] Fix and retest logged defects.

### 11. Validate, test and document the deployed milestone

**Labels:** `Must Have`, `testing`, `bug`

**User story**  
As an assessor, I want reproducible evidence so that planned quality is distinguishable from tested quality.

**Acceptance criteria**

- HTML and CSS validator results are recorded for the final deployed version.
- Lighthouse evidence is recorded without hiding failures.
- Links, forms, modals, carousel, redirects and asset paths are manually tested.
- Chrome, Firefox, Edge and Safari method/results are documented.
- Each defect records expected, actual, fix and retest result.

**Checklist**

- [ ] Run validators.
- [ ] Run Lighthouse.
- [ ] Complete link/form interaction tests.
- [ ] Complete responsive/browser matrix.
- [ ] Fix and retest issues.

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

- [ ] Reconcile README against code and deployed site.
- [ ] Add final screenshots and test evidence.
- [ ] Complete credits and source licences.
- [ ] Record known issues and future development.
- [ ] Perform final broken-link review.

### 13. Validate or neutralise fiscal content before publication

**Labels:** `Must Have`, `content`, `translation`

**User story**  
As the project owner, I want every specific fiscal statement reviewed or neutralised so that provisional content is not mistaken for validated tax guidance.

**Acceptance criteria**

- Every displayed field, option and help entry has a matrix decision, or is replaced by an unmistakably generic prototype placeholder.
- German, Spanish and English wording are reviewed separately.
- Reviewer, role, date, reference year and official source are recorded.
- Rejected/out-of-scope content is removed or clearly flagged before any claim of validation.
- No unreviewed specific fiscal guidance is published from `main`; use unmistakably generic prototype placeholders until review is complete.
- The milestone cannot close while unreviewed specific fiscal guidance is presented as factual.

**Checklist**

- [ ] Expand the matrix to one row per field/help entry.
- [ ] Obtain German fiscal-content review.
- [ ] Obtain Spanish and English linguistic review.
- [ ] Apply corrections and link commits/issues.

## Workflow

1. Move only one or a small number of cards to `In Progress`.
2. Commit each focused change directly to `main`.
3. Deploy and check early rather than waiting for completion.
4. Close an issue only after its acceptance criteria and evidence are complete.
5. Promote a checklist item into its own issue only when independent tracking is useful.
