# Diduny subscriptions: release and merchant readiness

Updated on 2026-10-16. This is a draft delivery record, not confirmation that payments are live or that the site is legally complete.

## Coordinated changes

- Backend PR: https://github.com/rmarinsky/diduny-backend/pull/27
- macOS PR: https://github.com/rmarinsky/Diduny/pull/76
- This site PR: Ukrainian/English pricing, one-time annual access, digital delivery, renewal/cancellation, refund requests, support contact and separate optional analytics consent.
- UAH150 monthly recurring; UAH1500 for twelve months with yearly renewal, or UAH1500 for one-time twelve-month access without renewal. Supported bank installments have at most three payments and do not renew one-time access. Two free cloud hours per calendar month. Local models have no hourly charge.
- Email sign-in is required for every app mode. Optional account-linked statistics default off for Free and Pro; payment does not enable them. Only duration, local/cloud mode and feature category are sent. No audio, text or filenames. Mandatory cloud metering is separate. Withdrawal stops new client sends immediately and is synchronized to the server when online; events have a thirty-day cleanup cutoff.
- Existing backend monthly-price configuration overrides its default. Verify that the deployed catalog and this public copy agree before accepting payments.

## Remaining seller and gateway blockers

WayForPay's own website requirements are at https://help.wayforpay.com/uk/view/13729832 . They require seller contact/identity details, refund rules, service terms and a public offer. This PR does not claim to complete all of them.

Roman previously chose to provide a confirmed public version of seller details. It has not been supplied here. Before publishing the offer or requesting live merchant approval, confirm and add the registered seller name, tax/company identifier, legal and actual addresses, phone and the correct public seller email. Do not copy private merchant records into public Git history without that confirmation. Draft placeholders were removed from rendered pages rather than published as if they were facts.

The current support address, roman@rmarinsky.com.ua, was already public. It is not proof of the seller's legal identity or that the mailbox is monitored. Confirm delivery/monitoring and seller identity, then finalize the public offer and any jurisdiction-specific service/refund timing. Existing text preserves mandatory statutory rights and the approved refund principle (unprovided paid access or where required by law); it does not invent bank posting deadlines.

Merchant login is needed to inspect the actual Diduny store, moderation feedback, live/test status, allowed payment methods and callback settings. Do not change payout accounts, sign new agreements or submit real charges as part of this PR.

## Release sequence

1. Complete confirmed seller/public-offer details and publish the reviewed website through the normal main -> GitHub Pages workflow. Keep this PR draft until those blockers are resolved.
2. Review/merge the backend through its normal minor-release workflow. Existing billing settings and merchant credentials must be correct; agents do not mutate Fly directly. The owner may use reviewed operator steps for secret setup.
3. Verify the deployed public billing catalog and signed callback/return URLs for the Diduny merchant. Do not assume a monthly environment override is UAH150.
4. Complete the gateway's controlled test flow; the payer performs any real payment. Verify monthly and annual full charges, twelve-month one-time access with no renewal, cancellation preserving paid access and the absence of duplicate recurring rules. Confirm bank installments and merchant fees in the gateway; simulation does not prove them.
5. Review/merge the companion app minor release after the backend and public policy are available. CI handles signing, notarization, tags and Sparkle. Confirm the released app shows matching monthly/yearly prices and working Ukrainian/English public-policy links and optional analytics choice.

Tariffs are supplied per signed checkout by the backend; no manually created pair of duplicate recurring products is required in the merchant dashboard. The store's legal approval and recurring-payment capability still need verification.

## Evidence and limits

- Existing live /diduny/ and /legal/ were inspected in the browser; they did not show the new subscription terms or full seller details.
- Built Ukrainian and English pages were checked by `npm run build` and `node scripts/check-diduny-commerce.mjs`; the new check first failed on old proposed pricing and then passed on the agreed catalog.
- Two independent source reviews requested; confirmed findings about stale dates, monthly-price assertion and product privacy were addressed.
- This PR does not deploy itself. Its main-branch merge automatically publishes the website, so merge only after the publication blockers above are resolved.


## Current integration evidence (2026-10-16)

- Read-only production check: proxy v1.9.0, git `aa46ec8`, healthy, public billing disabled. This does not identify the reason or confirm merchant approval.
- The public Ukrainian/English policy pages already showed UAH150/1500, but did not yet contain the new one-time access and opt-in statistics text.
- Backend PR #27 passes lint/types and 598 tests. Its new real-HTTP test signs in with an actual OTP session, buys each of the three plan modes through signed synthetic callbacks, verifies unchanged default-off analytics, separate consent/withdrawal, logout rejection and old-event cleanup.
- Actual Swift AuthService, BillingService and AnalyticsService from app PR #76 passed against the local backend for monthly recurring, annual recurring and one-time yearly access. The provider was simulated; no real charge, third-party email, production data, microphone or real Keychain storage was used.
- App PR #76 full TEST run: 477 passed, 7 skipped, 0 failed. The later tests above verify HTTP integration, not full native layout or onboarding. Native UK/EN relaunch/layout and gateway/bank UX still need manual verification.
- The website check asserts that privacy navigation labels match the app's Ukrainian and English settings. It failed before the Ukrainian copy correction and passed after rebuilding.
- These PRs are coordinated source changes. Until reviewed merges and deployment verification complete, do not describe the new payment and consent flow as live.
