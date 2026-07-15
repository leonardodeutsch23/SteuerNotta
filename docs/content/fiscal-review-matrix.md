# Fiscal content review matrix

**Reference year:** 2025  
**Official-source review date:** 15 July 2026  
**Professional review:** not yet completed

This file prevents provisional AI-generated content from becoming an undocumented fiscal claim. The seven sections are SteuerNotta UX groupings, not official ELSTER sections.

## Review rules

Each field, option, explanation and translation must receive one decision:

- `Approved` — supported for the stated 2025 prototype scope.
- `Revise` — concept may remain after the documented correction.
- `Remove` — misleading, unnecessary or unsupported.
- `Out of scope` — may appear only as a neutral prompt that directs the user away from the prototype.
- `Pending` — no reviewer decision yet.

An approval record needs:

- exact UI text in German and each translation;
- reference year;
- official source and precise section/line where possible;
- reviewer name/role and review date;
- decision and notes;
- related GitHub issue or commit.

## Scope statement to review

> The educational prototype illustrates selected fields for tax year 2025 for individuals resident in Germany who receive German wage-taxed employment income. Foreign income, cross-border work, self-employment, business or rental income, pensions, complex investment income and other special situations are outside scope and require the official forms or qualified advice.

This is a product-scope description, not a legal test of filing obligations.

## Initial matrix

| ID | UX section | Proposed content group | Primary reference | Status | Reviewer / date | Notes |
|---|---|---|---|---|---|---|
| SCOPE-01 | Case Screening and Scope | Tax year 2025 | ELSTER `ESt 1 A` 2025 | Pending | — | Do not imply support for 2026+. |
| SCOPE-02 | Case Screening and Scope | Residence / habitual abode prompts | `§ 1 EStG`; ESt 1 A | Pending | — | Prompt may flag complexity; it must not decide tax residence. |
| SCOPE-03 | Case Screening and Scope | Compulsory vs voluntary filing guidance | `§ 46 EStG` | Pending | — | No automated determination in the milestone. |
| SCOPE-04 | Case Screening and Scope | Self-employment, rental, pension, foreign/cross-border and investment flags | Relevant ELSTER forms | Pending | — | Neutral out-of-scope flags only. |
| MAIN-01 | Tax Return and Personal Details | Person, address, household and assessment concepts | `Hauptvordruck ESt 1 A` 2025 | Pending | — | Confirm which fields are necessary for an educational prototype. |
| MAIN-02 | Tax Return and Personal Details | Partner details | ESt 1 A 2025 | Pending | — | Review conditional wording and avoid incomplete joint-filing logic. |
| MAIN-03 | Tax Return and Personal Details | Bank information | ESt 1 A 2025 | Pending | — | Must use obvious fictitious examples only; consider removing because no refund is paid. |
| EMP-01 | Employment Income | Employer-reported wage data | 2025 `Lohnsteuerbescheinigung`; `§ 41b EStG` | Pending | — | Explain that the employer issues/transmits the certificate. |
| EMP-02 | Employment Income | `Anlage N` employment concepts | ELSTER help for `Anlage N` 2025 | Pending | — | Do not equate Anlage N with the certificate. |
| EMP-03 | Employment Income | Substitute-income benefits | ESt 1 A / ELSTER help 2025 | Pending | — | Review thresholds and legal meaning before explanatory copy. |
| WORK-01 | Work-related Expenses | `Entfernungspauschale` | Anlage N help 2025 | Pending | — | Distinguish home-to-first-workplace travel from business travel. |
| WORK-02 | Work-related Expenses | `Arbeitsmittel` | Anlage N help 2025 | Pending | — | No entitlement or amount calculation. |
| WORK-03 | Work-related Expenses | `Fortbildungskosten` | Anlage N help 2025 | Pending | — | Distinguish from initial education where relevant. |
| WORK-04 | Work-related Expenses | Home-office day allowance / home office | Anlage N help 2025 | Pending | — | Keep distinct concepts and current-year rules. |
| WORK-05 | Work-related Expenses | Work-related travel | Anlage N help 2025 | Pending | — | Use precise German terminology. |
| DED-01 | Deductions | Insurance and pension items | `Anlage Vorsorgeaufwand` 2025 | Pending | — | Avoid duplicating electronically reported data without explanation. |
| DED-02 | Deductions | Special expenses | `Anlage Sonderausgaben` 2025 | Pending | — | Review each category separately. |
| DED-03 | Deductions | Children | `Anlage Kind` 2025 | Pending | — | A single-child simplified block is not complete. |
| DED-04 | Deductions | Household services / craftspeople | Official 2025 form/help | Pending | — | These are tax reductions, not generic income deductions. |
| DED-05 | Deductions | Extraordinary burdens | Official 2025 form/help | Pending | — | Do not infer deductibility from a value. |
| DOC-01 | Documents | Records checklist | ELSTER evidence-retention guidance | Pending | — | Generally retain evidence; supply when required/requested. |
| REVIEW-01 | Review and Confirmation | Fictitious-data confirmation | Project safety rule | Pending | — | Not a fiscal declaration or consent to real processing. |
| REVIEW-02 | Review and Confirmation | Browser-validation explanation | Project technical rule | Pending | — | Format/presence only; not legal/fiscal validation. |

## Implemented provisional UI inventory

The following anchors are implemented in `form-es.html` or `success-es.html` only as clearly marked prototype content. Every row remains `Pending`; this inventory records traceability, interaction state and either an exact short label or the purpose of a guarded placeholder. It is **not** a verbatim register of every surrounding notice and is **not** professional fiscal or linguistic approval. Generic controls collect fictitious demonstration values only, and static fiscal cards accept no values.

| UI ID | Parent | German shown first | Spanish UI text or purpose | Control | Status / publication rule |
|---|---|---|---|---|---|
| SCOPE-01-UI-01 | SCOPE-01 | `Referenzjahr` | `Año fiscal de referencia` | Read-only `2025` | Pending; fixed project reference only. |
| SCOPE-02-UI-01 | SCOPE-02 | — | `Pregunta de residencia pendiente` | Static pending panel | Pending; no residence question or response control is published. |
| SCOPE-03-UI-01 | SCOPE-03 | — | `Sin diagnóstico automático` notice | Static notice | Pending; must never produce a filing decision. |
| SCOPE-04-UI-01 | SCOPE-04 | — | `Pregunta transfronteriza pendiente` | Static pending panel | Pending; no cross-border question or response control is published. |
| SCOPE-04-UI-02 | SCOPE-04 | — | `Pregunta sobre otros ingresos pendiente` | Static pending panel | Pending; no list of income types or response control is published. |
| MAIN-01-DEMO-01 | MAIN-01 | `Vorname (fiktiv)` | `Nombre ficticio` | Optional generic text input | Pending generic placeholder; no claim that the official return requires it here. |
| MAIN-01-DEMO-02 | MAIN-01 | `Nachname (fiktiv)` | `Apellidos ficticios` | Optional generic text input | Pending generic placeholder; fictitious values only. |
| MAIN-01-DEMO-03 | MAIN-01 | `Geburtsdatum (fiktiv)` | `Fecha de nacimiento ficticia` | Optional date input | Pending generic placeholder; no tax validation. |
| MAIN-01-DEMO-04 | MAIN-01 | `Anschrift (fiktiv)` | `Dirección ficticia` | Optional generic text input | Pending generic placeholder; fictitious values only. |
| MAIN-02-UI-01 | MAIN-02 | — | Partner content is explicitly not implemented. | Static pending panel | Pending; no partner or joint-filing logic. |
| MAIN-03-UI-01 | MAIN-03 | — | Banking content is explicitly not implemented. | Static pending panel | Pending; no IBAN, BIC or refund-payment implication. |
| EMP-01-DEMO-01 | EMP-01 | `Arbeitgeber (fiktiv)` | `Empleador ficticio` | Optional generic text input | Pending generic placeholder; no wage amount. |
| EMP-01-UI-01 | EMP-01 | `Lohnsteuerbescheinigung` | Question and explanation withheld pending review. | Static pending panel | Pending; no certificate question, amount or response control is published. |
| EMP-01-UI-02 | EMP-01 | — | `Contenido salarial pendiente de revisión profesional` | Static pending panel | Pending; no employer-reported amounts. |
| EMP-02-UI-01 | EMP-02 | `Anlage N` | Prototype is not an official `Anlage N`. | Static pending panel | Pending; no operational fields. |
| EMP-03-UI-01 | EMP-03 | — | Substitute-income content is not implemented. | Static pending panel | Pending; no thresholds or legal explanation. |
| WORK-01-UI-01 | WORK-01 | `Entfernungspauschale` | `Referencia estructural; sin distancia, días, importes ni cálculo.` | Static term card | Pending; no entitlement statement. |
| WORK-02-UI-01 | WORK-02 | `Arbeitsmittel` | `Referencia estructural; sin importe ni conclusión fiscal.` | Static term card | Pending; no entitlement statement. |
| WORK-03-UI-01 | WORK-03 | `Fortbildungskosten` | `Referencia estructural; traducción y alcance pendientes.` | Static term card | Pending; no operational field. |
| WORK-04-UI-01 | WORK-04 | `Tagespauschale` | `Referencia independiente; sin reglas, días, límites ni importes.` | Static term card | Pending; kept separate from home-office room content. |
| WORK-04-UI-02 | WORK-04 | `Häusliches Arbeitszimmer` | `Referencia independiente; sin reglas, condiciones, límites ni importes.` | Static term card | Pending; kept separate from the day allowance. |
| WORK-05-UI-01 | WORK-05 | `Reisekosten bei beruflich veranlasster Auswärtstätigkeit` | `Referencia estructural; sin cálculo ni determinación de aplicabilidad.` | Static term card | Pending; no operational field. |
| DED-01-UI-01 | DED-01 | `Vorsorgeaufwendungen` | `Encabezado educativo sin campos ni importes.` | Static term card | Pending; no explanation or operational field. |
| DED-02-UI-01 | DED-02 | `Sonderausgaben` | `Encabezado educativo sin condiciones ni conclusión fiscal.` | Static term card | Pending; no explanation or operational field. |
| DED-03-UI-01 | DED-03 | `Anlage Kind` | `Referencia estructural; no representa un bloque completo.` | Static term card | Pending; no child logic. |
| DED-04-UI-01 | DED-04 | `Haushaltsnahe Aufwendungen` | `Encabezado educativo sin condiciones, importes ni explicación fiscal.` | Static term card | Pending; no tax-reduction claim. |
| DED-05-UI-01 | DED-05 | `Außergewöhnliche Belastungen` | `Encabezado educativo sin importes ni inferencias.` | Static term card | Pending; no entitlement statement. |
| DOC-01-DEMO-01 | DOC-01 | `Fiktives Beispiel einer Lohnsteuerbescheinigung 2025` | `Ejemplo ficticio de Lohnsteuerbescheinigung 2025` | Optional checklist item | Pending generic example; no upload or sufficiency claim. |
| DOC-01-DEMO-02 | DOC-01 | `Fiktiver Beleg zu einer Ausgabe` | `Ejemplo ficticio de justificante relacionado con un gasto` | Optional checklist item | Pending generic example; no upload or sufficiency claim. |
| DOC-01-DEMO-03 | DOC-01 | `Weitere erfundene Testinformation` | `Otra información inventada para probar la interfaz` | Optional checklist item | Pending generic example; no upload. |
| REVIEW-01-UI-01 | REVIEW-01 | `Ich habe ausschließlich erfundene Daten verwendet.` | `Confirmo que he usado exclusivamente datos inventados.` | Required demo confirmation | Pending product-safety copy; required only to finish the demo. |
| REVIEW-01-UI-02 | REVIEW-01 | `Diese Aktion beendet nur die Demonstration.` | `Entiendo que esta acción solo finaliza la demostración y no presenta una declaración fiscal.` | Required demo confirmation | Pending product-safety copy; not a fiscal declaration. |
| REVIEW-01-UI-03 | REVIEW-01 | — | `Finalizar demostración` | Submit button handled locally | Pending linguistic copy; must never imply tax submission. |
| REVIEW-02-UI-01 | REVIEW-02 | — | Explanation of non-serialising local completion | Static technical summary | Pending technical copy; implementation uses no `FormData`, request or storage. |
| REVIEW-02-UI-02 | REVIEW-02 | — | `Demostración finalizada` | Success heading | Pending linguistic copy; never “tax return completed”. |
| REVIEW-02-UI-03 | REVIEW-02 | — | SteuerNotta received and saved no form values; no declaration was filed and there is no ELSTER connection. | Success notice | Pending product/linguistic copy; no answer summary or download. |

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
- [BMF — 2026 Lohnsteuerbescheinigung template, for change awareness only](https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Lohnsteuer/2025-08-29-ausdruck-elektr-lstbesch-2026.html)

ELSTER's English interface does not validate SteuerNotta translations: ELSTER states that forms and completion help are excluded from its machine translation.
