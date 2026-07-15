# Spanish form implementation QA

**Run date:** 15 July 2026

**Browser used:** Google Chrome 150.0.7871.115, headless device emulation plus an interactive Chrome smoke test

**Files under test:** `form-es.html`, `success-es.html`, `assets/css/style.css`, `assets/js/script.js`

This is implementation evidence for the first Spanish slice. It is not a professional fiscal or linguistic review, a formal accessibility audit, a Lighthouse result, a W3C validation certificate or a cross-browser claim.

## Responsive and structural checks

| Expected result | Test performed | Actual result | Conclusion |
|---|---|---|---|
| Same seven open sections at every target width | Counted direct `fieldset.form-section` children at 375px, 768px and 1440px | `7` at all three widths | Pass |
| No horizontal page overflow | Compared document `scrollWidth` with the emulated viewport | 360/375, 753/768 and 1425/1440; overflow flag `false` at each width | Pass |
| Mobile fields stack; larger layouts use related columns | Read computed grid columns | One column at 375px; two columns at 768px and 1440px | Pass |
| Every input has an explicit associated label | Counted inputs without `id`, labels without `for` and unresolved `label[for]` targets | `11` inputs; `0` missing IDs, `0` labels without `for`, `0` unresolved targets | Pass |
| IDs remain unique | Compared all rendered `id` attributes | `0` duplicates | Pass |
| Documents contains no upload control | Counted `input[type="file"]` | `0` | Pass |
| Form does not use GET | Read the rendered form method | `post` | Pass |
| Success keeps both current actions at every width | Counted the return-to-form and temporary GitHub-project actions at 375px, 768px and 1440px | `2` at all three widths, with no horizontal overflow | Pass |

The top, final review section and matching success state were visually inspected at the target layouts. The blue/white hierarchy, readable labels, visible status chips, one-column mobile layout and desktop field alignment matched the canonical wireframe direction. The success action count/layout also matches; the target Home destination remains intentionally pending and is temporarily represented by the documented GitHub-project action.

## Completion flow

| Expected result | Test performed | Actual result | Conclusion |
|---|---|---|---|
| Missing required safety confirmations prevent completion | Activated `Finalizar demostración` with both confirmations clear | Page remained on `form-es.html`, form validity was `false` and focus moved to `confirm-fictitious` | Pass |
| Valid completion creates no query string | Checked both confirmations and activated the button | Browser navigated to `success-es.html`; `location.search` was empty | Pass |
| Success page contains no form or answer summary | Inspected the rendered success DOM | Heading was `Demostración finalizada`; no form was present | Pass |
| Script does not serialise or transmit values | Inspected `assets/js/script.js` | No `FormData`, `fetch`, storage call or query-string construction; controls reset before local navigation | Pass |
| JavaScript-disabled fallback cannot submit values | Loaded the page with script execution disabled | All seven top-level fieldsets remained disabled and there were `0` enabled named controls | Pass |
| Success return link resolves locally | Activated the main `Volver al formulario` action | Browser returned to `form-es.html` and rendered the expected heading | Pass |

## Content and traceability guard

- Every implemented `data-matrix-id` occurs in `docs/content/fiscal-review-matrix.md`: 38 distinct IDs, 0 missing.
- Operational fiscal amounts, tax-certificate lines, bank data, eligibility decisions, refund calculations and file inputs are absent.
- Fiscal questions whose German or Spanish wording remains `Pending` are rendered as static cards or explicit pending panels, not response controls or factual guidance.
- Required controls are limited to the two fictitious-data/demo-only confirmations.

## Targeted accessibility regression checks

These calculated pairs cover the three colour defects found during this implementation review; they do not replace a full-page accessibility or contrast audit.

| Pair | Calculated contrast | Relevant threshold | Conclusion |
|---|---:|---:|---|
| Normal control border `#64748b` on white | `4.76:1` | `3:1` for visible control boundaries | Pass |
| Placeholder text `#5f6b76` on white at full opacity | `5.45:1` | `4.5:1` for normal text | Pass |
| Warning text `#704200` on the declared pale warning tint | `7.52:1` | `4.5:1` for normal text | Pass |

## Work still required before milestone completion

- Run an official HTML and CSS validator and record the result.
- Run Lighthouse and a complete manual keyboard/contrast review.
- Test Chrome, Firefox, Edge and Safari using the final deployed build.
- Obtain documented German fiscal-content review and separate Spanish linguistic review.
- Implement and test EN/DE parity, the canonical homepage/Home action and the final deployment.
