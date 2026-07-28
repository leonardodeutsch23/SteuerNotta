# SteuerNotta frontend QA

**Audit date:** 28 July 2026

**Routes under test:** `index.html`, `form-es-de.html`, `form-en-de.html`,
`form-de-de.html`

**Published implementation commit:** `be07392`

**Current stage:** published implementation audit

This document records implementation evidence for the current non-processing frontend draft. It
is not professional fiscal review, linguistic certification, ELSTER compatibility evidence or
approval for real-data handling.

## Test environment

- Local site served from `http://127.0.0.1:5500/`.
- Published site checked at `https://leonardodeutsch23.github.io/SteuerNotta/`.
- Chrome/Chromium rendering used for automated responsive and interaction checks.
- Lighthouse 13.4.1 run with installed Google Chrome.
- HTML checked with the W3C Nu HTML Checker.
- CSS checked with the W3C Jigsaw CSS Validator.

GitHub Pages completed its build and deployment workflow successfully for implementation commit
`be07392`. All four published routes and the two canonical CSS/wireframe assets returned HTTP 200;
the removed `form-es.html` and `success-es.html` routes returned HTTP 404. The project owner
subsequently confirmed that the physical keyboard-only and cross-browser checks passed.

## Structural and language parity

| Check | Result |
|---|---|
| Main sections | Passed: 7 `fieldset.form-section` groups on every form |
| Ordered controls | Passed: 318 on every form; identical tag, ID, name, type and select-value signatures |
| Control IDs | Passed: 306 on every form; no duplicate IDs |
| Labels | Passed: 315 on every form; 304 explicit `for` associations and 11 wrapped controls |
| Descriptions | Passed: 127 `aria-describedby` references on every form; no missing targets |
| File selectors | Passed: 28 on every form |
| Select elements | Passed: 35 on every form; identical option values |
| Matrix groups | Passed: `FULL-SCOPE`, `FULL-MAIN`, `FULL-EMP`, `FULL-WORK`, `FULL-DED`, `FULL-DOC`, `FULL-REVIEW` |
| Local references | Passed: no missing local `src` or `href` target |

## Official validator results

| File | HTML errors | HTML warnings |
|---|---:|---:|
| `index.html` | 0 | 0 |
| `form-es-de.html` | 0 | 0 |
| `form-en-de.html` | 0 | 0 |
| `form-de-de.html` | 0 | 0 |

Both `assets/css/style.css` and `assets/css/styleform.css` returned **0 CSS errors**. At the
validator's detailed warning level, it reported 199 and 84 non-blocking compatibility/static
analysis notices respectively, primarily for custom properties and modern CSS that the validator
cannot fully resolve. These notices did not identify an invalid rule.

## Responsive browser checks

The homepage and all three forms were rendered locally and again from GitHub Pages at 375px, 768px
and 1440px.

| Check | 375px | 768px | 1440px |
|---|---|---|---|
| Required content present | Passed | Passed | Passed |
| Horizontal page overflow | None | None | None |
| Broken loaded images | 0 | 0 | 0 |
| Duplicate IDs | 0 | 0 | 0 |
| Missing image `alt` attributes | 0 | 0 | 0 |
| Missing `aria-describedby` targets | 0 | 0 | 0 |
| Form sections | 7 per form | 7 per form | 7 per form |
| Enabled submit/reset actions | 0 | 0 | 0 |

Lazy images that were still below the viewport were recorded as pending, not broken. Every loaded
image had a non-zero natural width, and static path checks found no missing asset.

## Interaction and accessibility checks

- The mobile navigation opens, exposes `aria-expanded="true"` and closes after choosing an
  in-page destination.
- Choosing Benefits produces `#benefits`, closes the collapsed menu and places the section 76px
  below the viewport top, clear of the fixed navbar.
- Carousel Next moves both the active slide and active indicator from index 0 to index 1.
- Previous/next controls and all three indicators have accessible names.
- Carousel indicator click targets render at 24px by 24px.
- Every route has exactly one `h1`, semantic landmarks and a skip link to the main content.
- Visible focus rules exist for links, buttons and form controls.
- Primary text/ivory, cobalt/ivory and white/cobalt combinations exceed WCAG AA contrast for normal
  text. Amber backgrounds use dark text.

A true keyboard-only journey was not inferred from synthetic events. It was completed manually on
the deployed site and reported as passed by the project owner.

## Lighthouse 13.4.1

| Route | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| `index.html` | 83 | 100 | 100 | 100 |
| `form-es-de.html` | 83 | 100 | 100 | 100 |

Homepage metrics: FCP 2.1s, LCP 4.4s, TBT 50ms, CLS 0 and Speed Index 2.3s.

Spanish form metrics: FCP 3.0s, LCP 3.8s, TBT 0ms, CLS 0 and Speed Index 3.0s.

The remaining performance findings are documented rather than hidden: large local image delivery,
Bootstrap and project CSS that Lighthouse considers partly unused, unminified project CSS, and
render-blocking stylesheet requests. The local Live Server WebSocket also prevents the back/forward
cache during this test; that is a development-server condition.

## Processing safety

- The form routes have no connected submission or reset action.
- There is no project JavaScript file that serialises form values.
- No `fetch`, `XMLHttpRequest`, `FormData`, Web Storage or query-string construction is used.
- Completion pages are intentionally outside the current milestone and were removed.
- The pages explicitly warn against entering real personal, banking, fiscal or document data.

## Manual validation

The project owner reported the following results after testing the deployed site:

| Manual check | Result |
|---|---|
| Keyboard-only navigation, skip link, menu, carousel and representative form controls | Passed |
| Visible focus and absence of keyboard traps | Passed |
| Edge browser check | Passed |
| Firefox browser check | Passed |
| Safari browser check | Passed |

These results are recorded as user-confirmed manual evidence and remain distinct from the automated
Chrome/Chromium checks above.
