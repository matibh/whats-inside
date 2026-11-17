# WHAT'S INSIDE?

A bilingual ingredient-discovery game: identify the ingredients listed on real food products.

## Catalog architecture

The complete editorial catalog and answer data are maintained in the private repository [whats-inside-catalog](https://github.com/matibh/whats-inside-catalog).

This public repository still contains a historical snapshot of 200 products (80 Argentina-market and 120 international) in `data/`. Those records and their answers are already public, including in Git history, so they are **Practice-only** and must never be used for competitive Daily challenges.

Do not add new answer-bearing product records, aliases, or ingredient statements to this public repository. New products belong in the private catalog and are imported into the protected Supabase answer store. The public game must receive only safe product metadata; answer validation belongs on the server.

## Game

- 15-second rounds
- English / Spanish interface
- Ingredient entry separated by commas
- Instant feedback and scoring
- Results reveal found and missed ingredients
- Dark theme with saved preference

## Deploy

This repository is published with GitHub Pages using GitHub Actions. Every push to `main` triggers a deployment.

## Run locally

Open `index.html` in a browser.

## Security reminder

Never change the private catalog repository's visibility to public. The historical data in this repository cannot be made secret merely by deleting files from the latest commit; previous Git history may still contain them.
