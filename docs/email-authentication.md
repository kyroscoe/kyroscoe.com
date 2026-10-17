# Kyroscoe email authentication

Preparation only. No DNS or Microsoft 365 settings have been changed.

Owner-confirmed configuration:

- DNS hosting: Netlify.
- Outbound email: Microsoft 365 only.
- Domain: kyroscoe.com.
- The owner reports that Microsoft Defender shows kyroscoe.com with Status `NoDKIMKeys` and the toggle Disabled. Generate/view its DKIM keys before copying the CNAME targets; do not infer the targets from the tenant name.

## Inspect the current configuration

1. Open Netlify DNS for kyroscoe.com and the Microsoft 365 admin tenant in authenticated sessions.
2. Confirm the existing SPF TXT record. There should be one SPF policy for the root domain. Microsoft 365-only sending normally uses `v=spf1 include:spf.protection.outlook.com -all`; inspect the actual configuration before changing it.
3. Open the Microsoft Defender DKIM settings for kyroscoe.com. Copy the two exact CNAME names and target values generated for this tenant. Do not derive targets from the domain name: tenant-specific formats vary.
4. Add only the missing CNAME records in Netlify, preserving all unrelated DNS records.
5. After Microsoft recognizes the records, enable DKIM signing for kyroscoe.com.
6. Send an authorized test message and inspect its received headers for SPF, DKIM, and alignment with the From domain.

## Roll out DMARC

1. Confirm a dedicated reporting mailbox, alias, or reporting service before choosing the aggregate-report destination. No reporting recipient has been selected or created yet.
2. Inspect any existing `_dmarc` TXT record before creating or replacing it. Do not create duplicate policies.
3. Start a new rollout in monitoring mode while validating legitimate messages. A template is:

   - Type: TXT
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=none; rua=mailto:CONFIRMED-REPORTING-ADDRESS`

   This is a template, not a record ready to paste. Replace the reporting-address placeholder only after confirming the destination. An external reporting service may require authorization records.

4. Verify public DNS and actual received-message headers, including domain alignment.
5. Review aggregate reports and resolve legitimate failures before moving to quarantine and then reject. Monitoring mode alone does not request rejection of spoofed messages.
6. Revisit the sender inventory before adding CRM, invoice, marketing, or other email-sending systems.

## References

- Microsoft DKIM: https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dkim-configure
- Microsoft DMARC: https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure

## Remaining website verification

- Certification images are supplied by the owner, who confirmed active status. Public issuer/credential verification URLs are still needed; no certification is marked independently verified.
- The watermarked Cisco AI image is excluded pending a clean official asset.
- The owner confirmed Microsoft Solutions Partner and AWS Managed Service Provider designations. Supplied images are displayed; public partner-directory verification URLs are still pending.
- The owner permitted naming TrueML and NELSD in the website examples.
- Security engagements are attributed to the founder's professional experience; their contracting entity has not been confirmed.
- No W-9 or tax document belongs in public website assets or this repository.
- Contact-form intake and notification delivery are confirmed by the owner. The first automated test was stored in Netlify's Spam view; the owner confirmed that contact notifications are configured for info@kyroscoe.com and subsequently received the email. Keep spam protection enabled.
- Public DNS still returns the Microsoft 365 SPF policy and no DMARC TXT record. Neither of the two standard Microsoft 365 DKIM selector CNAME names returned a record. This alone does not establish the signing status of actual outgoing messages; the tenant settings and message headers still need inspection.
