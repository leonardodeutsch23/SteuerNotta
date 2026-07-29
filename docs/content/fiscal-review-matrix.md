# Fiscal content review matrix

**Reference year:** 2025

**Last scope update:** 29 July 2026

**Professional fiscal and linguistic review:** not yet completed

This register prevents provisional interface content from being mistaken for a verified fiscal
claim. SteuerNotta currently presents a small static form draft. Its seven UX sections are not
official ELSTER sections, and the controls do not calculate eligibility, tax or refunds.

## Review rules

Before production use, each final field, option, explanation and translation must receive one
professional decision:

- `Approved` — supported for the stated reference year and audience;
- `Revise` — permitted after a documented correction;
- `Remove` — misleading, unnecessary or unsupported;
- `Out of scope` — not included in the intended product;
- `Pending` — no reviewer decision yet.

An approval record must identify the exact interface text, language, reference year, source,
reviewer and review date. Structural HTML parity is not professional approval.

## Current milestone inventory

| Matrix ID | UX section | Current representative content | Status | Publication rule |
|---|---|---|---|---|
| FULL-SCOPE | Case review and scope | Reference year, residence prompt and German payroll-withholding prompt | Pending | Must not determine residence, filing duty or eligibility. |
| FULL-MAIN | Personal information | Fictitious 11-digit tax ID and marital status | Pending | Fictitious data only; no identity verification. |
| FULL-EMP | Employment | Fictitious employer and gross wages | Pending | No certificate interpretation or tax calculation. |
| FULL-WORK | Work expenses | One optional total | Pending | An entered amount does not imply deductibility. |
| FULL-DED | Other expenses | One optional special-expenses total | Pending | An entered amount does not imply deductibility. |
| FULL-DOC | Documents | Optional local PDF/JPG/PNG selector | Pending | Selection does not upload, save, transmit or prove sufficiency. |
| FULL-REVIEW | Final review | Required fictitious-data confirmation and optional notes | Pending | No fiscal validation, result, download or submission. |

All three form routes contain these same twelve controls. Supporting text changes by language, but
IDs, names, types, constraints and option values match.

## Current scope statement to review

> The frontend draft introduces selected 2025 concepts for people organising basic information
> related to German wage-taxed employment. It does not establish filing obligations, tax residence,
> eligibility, deductions, tax results or professional advice.

## Official starting references

- [ELSTER — Income-tax return forms](https://www.elster.de/eportal/formulare-leistungen/alleformulare/est)
- [ELSTER — Help for the 2025 income-tax return](https://www.elster.de/elsterweb/helpGlobal?themaGlobal=help_est_ufa_10_2025)
- [BMF — Modified 2025 electronic Lohnsteuerbescheinigung template](https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Lohnsteuer/2025-02-20-geaen-ausdruck-elektron-LSt-besch-2025.html)
- [LStH 2025 — Lohnsteuerbescheinigung, Anhang 23](https://ao.bundesfinanzministerium.de/lsth/2025/B-Anhaenge/Anhang-23/uebersicht.html)
- [ELSTER — Pre-filled tax return / electronic data](https://www.elster.de/elsterweb/infoseite/belegabruf_%28privatpersonen%29?locale=de_DE)
- [ELSTER — Official evidence-handling leaflet](https://download.elster.de/download/dokumente/Merkblatt_Umgang_mit_Belegen.pdf)

Issue
[#13](https://github.com/leonardodeutsch23/SteuerNotta/issues/13) remains the professional review
gate before real-data or production use.
