import React from 'react';
import { Trans } from '@lingui/macro';

export const getInvestorFeaturePricing = () => ({
  angelFeatures: [
    <Trans>Up to 10 companies</Trans>,
    <Trans>One investor portfolio with custom and startup-curated entries</Trans>,
    <Trans>Receive reports, KPIs, documents, and sign documents</Trans>,
    <Trans>Limited support</Trans>,
  ],
  fundFeatures: [
    <Trans>Unlimited companies</Trans>,
    <Trans>Unlimited portfolios for your fund</Trans>,
    <Trans>Unlimited admin seats</Trans>,
    <Trans>Premium support and onboarding assistance</Trans>,
  ],
});
