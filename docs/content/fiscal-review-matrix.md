# Fiscal content review matrix

**Reference year:** 2025  
**Official-source review date:** 15 July 2026  
**Professional review:** not yet completed

This register prevents provisional interface content from being mistaken for a verified fiscal
claim. The seven sections are SteuerNotta UX groupings, not official ELSTER sections.

## Review rules

Each final field, option, explanation and translation must receive one decision:

- `Approved` — supported for the stated 2025 scope.
- `Revise` — may remain after a documented correction.
- `Remove` — misleading, unnecessary or unsupported.
- `Out of scope` — may appear only as a neutral complexity signal.
- `Pending` — no reviewer decision yet.

An approval record needs the exact German and translated UI text, reference year, official source,
reviewer name/role, review date, decision and related issue or commit.

## Scope statement to review

> The frontend draft organises selected 2025 fields for individuals resident in Germany who
> receive German wage-taxed employment income. Foreign income, cross-border work,
> self-employment, business or rental income, pensions, complex investment income and other
> special situations remain outside the current implementation scope.

This is a product-scope description, not a legal test of filing obligations.

## Content groups

| ID | UX section | Proposed content group | Primary reference | Status | Review note |
|---|---|---|---|---|---|
| SCOPE-01 | Case screening and scope | Tax year 2025 | ELSTER `ESt 1 A` 2025 | Pending | Do not imply support for another year. |
| SCOPE-02 | Case screening and scope | Residence / habitual abode prompts | `§ 1 EStG`; ESt 1 A | Pending | Must not decide tax residence. |
| SCOPE-03 | Case screening and scope | Compulsory vs voluntary filing | `§ 46 EStG` | Pending | No automated determination. |
| SCOPE-04 | Case screening and scope | Cross-border and other-income flags | Relevant ELSTER forms | Pending | Neutral complexity signals only. |
| MAIN-01 | Return and personal details | Person, address and household concepts | `Hauptvordruck ESt 1 A` 2025 | Pending | Confirm the final necessary fields. |
| MAIN-02 | Return and personal details | Partner details | ESt 1 A 2025 | Pending | Review conditional wording and joint-filing logic. |
| MAIN-03 | Return and personal details | Bank information | ESt 1 A 2025 | Pending | Reconsider while no refund/payment flow exists. |
| EMP-01 | Employment income | Employer-reported wage data | 2025 `Lohnsteuerbescheinigung`; `§ 41b EStG` | Pending | Certificate and `Anlage N` must remain distinct. |
| EMP-02 | Employment income | `Anlage N` employment concepts | ELSTER help for `Anlage N` 2025 | Pending | Do not equate the annex with the certificate. |
| EMP-03 | Employment income | Substitute-income benefits | ESt 1 A / ELSTER help 2025 | Pending | Review thresholds and legal meaning. |
| WORK-01 | Work expenses | `Entfernungspauschale` | Anlage N help 2025 | Pending | Separate commuting from business travel. |
| WORK-02 | Work expenses | `Arbeitsmittel` | Anlage N help 2025 | Pending | No entitlement or calculation claim. |
| WORK-03 | Work expenses | `Fortbildungskosten` | Anlage N help 2025 | Pending | Distinguish continuing from initial education. |
| WORK-04 | Work expenses | Home-office concepts | Anlage N help 2025 | Pending | Keep distinct current-year concepts. |
| WORK-05 | Work expenses | Work-related travel | Anlage N help 2025 | Pending | Use precise German terminology. |
| DED-01 | Additional areas | Insurance and pension items | `Anlage Vorsorgeaufwand` 2025 | Pending | Explain electronically reported data. |
| DED-02 | Additional areas | Special expenses | `Anlage Sonderausgaben` 2025 | Pending | Review each category separately. |
| DED-03 | Additional areas | Children | `Anlage Kind` 2025 | Pending | A simplified block is not complete coverage. |
| DED-04 | Additional areas | Household services / craftspeople | Official 2025 form/help | Pending | These are tax reductions, not generic deductions. |
| DED-05 | Additional areas | Extraordinary burdens | Official 2025 form/help | Pending | Do not infer deductibility from an entered value. |
| DOC-01 | Documents | Records and local file selectors | ELSTER evidence guidance | Pending | Selection in the browser is not upload or proof of sufficiency. |
| REVIEW-01 | Final review | Coverage checklist and notes | Project product rules | Pending | Not fiscal validation or submission. |
| REVIEW-02 | Final review | Disabled actions and processing notice | Project technical rules | Pending | Browser interaction only; no persistence or transmission. |

## Current route-level implementation inventory

The current ES/DE, EN/DE and DE/DE routes share the following source-oriented groups. Their
structural parity does not change any `Pending` content to `Approved`.

| Research ID | Page area | Primary 2025 source | Status | Publication rule |
|---|---|---|---|---|
| FULL-SCOPE | Neutral scope screening | ELSTER `ESt 1 A` entry and attachment selection | Pending research draft | Must not decide residence, filing duty or eligibility. |
| FULL-MAIN | People, address, household and supplementary data | `Hauptvordruck ESt 1 A` 2025 | Pending research draft | Fields have no operational filing or payment effect. |
| FULL-EMP | Employment and employer certificate | `Anlage N` 2025; modified 2025 `Lohnsteuerbescheinigung` | Pending research draft | Certificate and annex remain separate. |
| FULL-WORK | Employment-related expenses | `Anlage N` 2025 | Pending research draft | No calculation or eligibility inference. |
| FULL-DED | Selected additional areas | Relevant 2025 annexes and ELSTER help | Pending research draft | Official annexes remain distinct labelled blocks. |
| FULL-DOC | Records and supporting documents | ELSTER evidence guidance | Pending research draft | Local selectors do not upload, save or transmit files. |
| FULL-REVIEW | Coverage review | Project technical/content rules | Pending research draft | No fiscal validation, result, download or submission. |

## Official starting references

- [ELSTER — Income-tax return forms](https://www.elster.de/eportal/formulare-leistungen/alleformulare/est)
- [ELSTER — Help for the 2025 income-tax return / Anlage N](https://www.elster.de/elsterweb/helpGlobal?themaGlobal=help_est_ufa_10_2025)
- [BMF — Modified 2025 electronic Lohnsteuerbescheinigung template](https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Lohnsteuer/2025-02-20-geaen-ausdruck-elektron-LSt-besch-2025.html)
- [LStH 2025 — Lohnsteuerbescheinigung, Anhang 23](https://ao.bundesfinanzministerium.de/lsth/2025/B-Anhaenge/Anhang-23/uebersicht.html)
- [`§ 1 EStG`](https://www.gesetze-im-internet.de/estg/__1.html)
- [`§ 41b EStG`](https://www.gesetze-im-internet.de/estg/__41b.html)
- [`§ 46 EStG`](https://www.gesetze-im-internet.de/estg/__46.html)
- [ELSTER — Pre-filled tax return / electronic data](https://www.elster.de/elsterweb/infoseite/belegabruf_%28privatpersonen%29?locale=de_DE)
- [ELSTER — Official evidence-handling leaflet](https://download.elster.de/download/dokumente/Merkblatt_Umgang_mit_Belegen.pdf)

ELSTER's English interface does not validate SteuerNotta translations: ELSTER states that forms
and completion help are excluded from its machine translation. Issue #13 remains the professional
review gate before production use or real-data handling.
