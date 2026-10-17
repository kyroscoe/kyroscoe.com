import { partnerBadges } from './siteData';

export function PartnerBadges() {
  return <ul className="partner-badges" aria-label="Partner designations">
    {partnerBadges.map((badge) => <li key={badge.name}>
      <img src={badge.image} alt={badge.name} width="240" height="140" loading="lazy" />
    </li>)}
  </ul>;
}
