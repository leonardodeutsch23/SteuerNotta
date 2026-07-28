# SteuerNotta consistency audit

**Audit date:** 15 July 2026  
**Source conversation:** 115 user prompts audited  
**Repository checked:** `leonardodeutsch23/SteuerNotta`  
**Purpose:** establish one implementable milestone specification without treating provisional AI output as verified fact.

## Authority by domain

- **Product and UX intent:** the user's latest explicit decision in the project interview.
- **Implemented/current repository state:** the verified live state of `leonardodeutsch23/SteuerNotta`.
- **Fiscal or legal fact:** current primary official sources plus documented professional review where interpretation is required.
- **Implementation guide:** the corrected `README.md`, fiscal review matrix and two canonical SVG wireframes in this repository.
- **Non-authoritative material:** earlier assistant proposals, generated forms, raster mockups and drafts.

No mockup, generated form or assistant statement overrides a later confirmed decision or an authoritative factual source.

## Findings and resolutions

| # | Severity | Inconsistency or unsupported claim | Resolution | Status |
|---:|---|---|---|---|
| 1 | Critical | The broader product vision was repeatedly described as a functional tax app, while the current frontend has no backend, calculations, storage or ELSTER integration. | Describe it consistently as a **functional frontend draft in active development**, with processing capabilities still pending. | Resolved in README |
| 2 | Critical | The generated form was initially described as “correct and complete”. The assistant later retracted that wording; no field-by-field professional validation exists. | Treat the seven sections and all fields as provisional UX/content research. Track every field in the fiscal review matrix. | Resolved; professional review pending |
| 3 | Major | The form moved from 19 blocks to an accidental 10-section proposal and finally to seven main sections. The ten-section proposal also omitted Documents. | Seven sections are canonical: Scope; Return/Personal; Employment; Work Expenses; Deductions; Documents; Review/Confirmation. | Resolved |
| 4 | Major | Early flow alternated between one and three localised success pages. | Remove completion pages from the current milestone. A meaningful completion state will be designed only with the future processing flow. | Resolved by scope decision |
| 5 | Critical | A superseded chat-generated `form-es.html` redirected to `success.html` and contained unsupported author metadata. | Delete the superseded page and keep only the three current German-source form routes. | Resolved |
| 6 | Critical | A GET form action would put entries into the URL/history while the copy claims nothing is sent. | Keep form processing and reset actions disabled until an approved processing architecture exists. | Resolved for current milestone |
| 7 | Major | “Does not process data” is technically false because the browser renders and validates values locally. | Say “does not upload, transmit or persist form data”; describe local browser validation precisely. | Resolved |
| 8 | Major | Early raster mockups add Login, Pricing, FAQ, Contact, Resources and separate legal pages. | Exclude them from the milestone; keep raster images as non-canonical visual exploration only. | Resolved |
| 9 | Critical | Form mockups show a wizard, Back/Continue controls, dynamic progress, Save & exit, stored answers, uploads, review/download and encryption claims. | Canonical form is one long page with seven open sections, no real uploads/storage/calculation/progress/download/security claims. | Resolved |
| 10 | Major | The generated `homepage-responsive.svg` added a desktop navbar `Start Now` CTA not present in the approved navbar, showed only two mobile language cards and omitted the mobile footer. | Replace it with the repository SVG: approved nav only; all three language cards and footer at every breakpoint. | Resolved in replacement SVG |
| 11 | Major | The original form wireframe combined the long form with a completion flow that is no longer in scope. | Replace it with `form-responsive.svg`, showing only the seven-section form and disabled processing state at all target widths. | Resolved in replacement SVG |
| 12 | Major | The carousel decision changed from manual to autoplay. | The implemented carousel is manually controlled and does not force motion on users. | Resolved in implementation |
| 13 | Major | The exact hero copy emphasises claiming money back and some images include a calculator, while the current frontend performs no eligibility or calculation. | Keep the copy and imagery documented as part of the functional draft until calculation logic is implemented and reviewed. | Resolved in README |
| 14 | Critical | “Basic employee tax return” was treated as an official scope. No such legal/ELSTER category exists, and foreign employees may have cross-border complexity. | Narrow the prototype to selected 2025 concepts for German-resident people with German wage-taxed income; screening only flags out-of-scope situations. | Resolved |
| 15 | Major | The seven sections were presented as if they were official ELSTER sections. | State that they are SteuerNotta UX groupings and map them cautiously to official materials. | Resolved |
| 16 | Major | Employment Income was equated with the `Lohnsteuerbescheinigung`; that certificate is issued/transmitted by the employer and is not `Anlage N`. | Explain the distinction and keep the selected concepts separated in the functional draft. | Resolved |
| 17 | Major | “Deductions” combines insurance, special expenses, children, household-service reductions and extraordinary burdens as if they were one mechanism. | Keep the user-approved navigation label but distinguish the official subgroups in copy and review. | Resolved; content review pending |
| 18 | Major | Documents copy can imply that evidence is submitted with every return. | Describe a non-exhaustive records checklist; documents are generally retained and supplied when instructions or the Finanzamt require them. | Resolved |
| 19 | Major | Tax year 2025 and Bootstrap 5.3.8 were introduced by generated output without an explicit user decision. | Adopt 2025 only as an explicit working reference because the 2025 annual return is the current ELSTER filing set; state review date and exclude 2026+. Specify only Bootstrap 5 until the implementation pins and verifies a version/SRI. | Resolved |
| 20 | Major | ELSTER's generic English page was treated as proof of translated fiscal wording. ELSTER excludes forms/help from its machine-translated interface. | Use official German material for concepts and require independent Spanish/English linguistic and professional review. | Resolved |
| 21 | Major | Font Awesome, Bootstrap Icons, Figma, Balsamiq and Google Fonts were listed before use was proven. | Document only Bootstrap, system font stacks and the local project graphics that are actually used. | Resolved in README |
| 22 | Major | Taxfix was mentioned as a successful model and risked becoming a fiscal source. | Treat Taxfix only as optional UX benchmarking; use no product claim without current verification and never use it as fiscal authority. | Resolved |
| 23 | Major | The family tax firm was described as a potential promoter/collaborator, but the relationship remained undecided. | Claim no formal affiliation, endorsement, validation or company name. | Resolved |
| 24 | Major | Generated design artefacts contained placeholder logos and inconsistent visual systems. | Use the implemented local SteuerNotta logo, system typography and Nordic Ledger palette consistently. | Resolved |
| 25 | Major | The original chat claimed the repository was empty without live verification. | GitHub was checked on 15 July 2026: public repo, `main`, README containing only `# SteuerNotta`, no open issues and no code. | Verified |
| 26 | Critical | The initial workspace root contains an unrelated “Buscando Venezuela” project and an invalid empty `.git` directory. Editing its README would corrupt another project. | Clone the verified SteuerNotta repository into a separate `SteuerNotta/` subfolder and make all changes there. | Resolved |
| 27 | Minor | The earlier README overstated “complete guided tax forms” and omitted the actual implementation state. | Describe the current pages as a functional frontend draft and document only code that exists. | Resolved |
| 28 | Minor | The German flag/Spanish flag/UK flag decision can confuse language and nationality. | Keep the confirmed flags, but make language names and ES/EN/DE codes the primary text; use flags decoratively and write useful alt text only if they convey meaning. | Documented |
| 29 | Minor | A public repository with no licence can be mistaken for open source. | State explicitly that no licence is granted until a licence file is selected. | Resolved |
| 30 | Minor | Early page-order notes conflicted with the approved mockup and implementation. | Keep the final approved order: Home, How It Works, Benefits, Languages. | Resolved |
| 31 | Major | Approved hero/problem copy used “potential deductions”, “what they can claim” and “case may be relatively simple” without professional validation. | Preserve the product intent while recording that the current copy belongs to an unvalidated frontend draft. | Resolved in README |
| 32 | Minor | Language-card content was inconsistent between early boards and the implementation. | Keep all three language choices, visible names/codes and their correct form destinations at every width. | Resolved |
| 33 | Major | Early copy said “No data processed”, which is too absolute because the browser renders and validates local values. | State precisely that SteuerNotta does not upload, persist or transmit values; local browser handling remains possible. | Resolved |
| 34 | Critical | “Foreign employees living or working in Germany” included cross-border and foreign-income situations that the corrected fiscal scope excludes. | Define the current audience as German residents with German wage-taxed employment income and state that cross-border cases are outside scope. | Resolved |
| 35 | Critical | Early GitHub Pages deployment plus Issues 7–8 could have published specific fiscal copy while Issue 13 still marked it Pending. | Make fiscal review/neutralisation depend only on the form foundation, require Issues 7–8 to depend on it, and permit only unmistakably generic placeholders until review. | Resolved in GitHub plan |
| 36 | Minor | Static section anchors and the approved three-image carousel had inconsistent Must/Should/Could priorities across README and issue criteria. | Keep anchors optional (`Could Have`) and make the confirmed carousel `Must Have` everywhere. | Resolved |

## Canonical artefacts

- `README.md` — product and implementation guide.
- `index.html`, `form-es-de.html`, `form-en-de.html` and `form-de-de.html` — current implemented routes.
- `assets/css/style.css` and `assets/css/styleform.css` — shared homepage and form styling.
- `assets/docs/wireframes/homepage-responsive.svg` — homepage layout at the three reference widths.
- `assets/docs/wireframes/form-responsive.svg` — long-form layout at the three reference widths.
- `docs/content/fiscal-review-matrix.md` — truth-status register for fiscal content.
- `docs/planning/github-plan.md` — issue and board plan.

Earlier generated raster boards, completion-page drafts, `form-es.html` and the deleted custom
JavaScript file are not canonical implementation sources.

## Remaining uncertainties

- Exact field list, translations and help copy remain subject to Issue #13.
- No separate icon library or external font delivery is used.
- Bootstrap 5.3.8 is pinned through jsDelivr.
- Final validator, accessibility, browser and Lighthouse results are recorded in the tracked QA
  evidence once the deployed commit is available.
- The live site is `https://leonardodeutsch23.github.io/SteuerNotta/`.

These items must remain labelled `Pending` rather than being filled with assumed results.
