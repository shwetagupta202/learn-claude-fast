# AGENTS.md

## Rules
- Webinar date/time live only in `src/lib/webinar.ts` (`WEBINAR_DATE`, `WEBINAR_TIME`); pages must import from there, never hardcode them — so a date change updates landing, thank-you, and all other pages at once.
