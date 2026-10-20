# Roger Sandoval — Digital Aligner Planning website prototype

Responsive, English-language one-page website concept for a professional digital clear aligner treatment planning service aimed at dental practices in the United States.

## Preview locally

1. Unzip the project folder.
2. Open `index.html` in a modern browser.
3. Internet access is needed for the optional Google Fonts. The page otherwise uses local HTML, CSS, and JavaScript.

## Included

- Responsive navigation and layout
- Services and workflow sections
- Three clinical-case placeholders
- Professional profile placeholders
- Two testimonial placeholders
- Inquiry form prepared for Formspree integration
- Basic SEO metadata and accessibility considerations

## Important: connect the form to Roger's email

The form is **not live yet**. Do not publish it as a working contact form until the steps below are completed. No email address was provided, so none has been hard-coded.

1. Roger (or the person who manages the business) should create an account at [Formspree](https://formspree.io/).
2. Create a new form and set Roger's business email as the recipient. Verify the recipient address using Formspree's confirmation process.
3. Copy the form endpoint shown by Formspree. It looks like `https://formspree.io/f/xxxxxxxx`.
4. In `index.html`, find `https://formspree.io/f/REPLACE_WITH_FORM_ID` and replace `REPLACE_WITH_FORM_ID` with the actual form ID. Keep the full URL structure.
5. Submit a test from the published site and confirm that the message arrives in Roger's inbox. Also test the reply-to email and spam folder.
6. Review Formspree's plan limits, privacy terms, and spam controls before choosing it for production. Formspree recommends using its form-ID endpoint rather than exposing an email address in the form URL.

Official guide: [Formspree HTML forms](https://formspree.io/html/). Spam-prevention guidance: [Formspree documentation](https://help.formspree.io/articles/troubleshooting/how-to-prevent-spam/).

**Privacy note:** this general inquiry form explicitly warns visitors not to submit patient names, photographs, radiographs, or protected health information. Do not use it to transfer clinical records.

## Recommended publishing path

For a simple static marketing site, use **Netlify for hosting** and **GoDaddy for domain registration**. The domain and hosting are separate services.

1. Confirm the final content and remove all placeholders.
2. Create a Netlify account and deploy the contents of this folder (the folder containing `index.html`, `styles.css`, and `script.js`).
3. Netlify will provide a temporary public `*.netlify.app` address for testing. Check the mobile layout and test all links and the contact form.
4. Search for and register an available domain through [GoDaddy](https://www.godaddy.com/domains). Suggested naming patterns are `roger-sandoval.com`, `sandovaldigitalplanning.com`, or `sandovalalignerplanning.com`; these are ideas only, not verified available domains. Prefer a short, easy-to-spell `.com`.
5. In Netlify, open **Domain management** and add the domain you purchased.
6. Follow the DNS records shown in the Netlify dashboard and enter those exact records in GoDaddy's DNS settings. Do not guess or copy DNS values from another site; use the values Netlify assigns to this specific deployment. DNS changes can take time to propagate.
7. Wait for HTTPS/SSL to be provisioned, then test both the root domain and `www` address. Keep domain auto-renewal enabled and save access to the GoDaddy and Netlify accounts securely.

Official docs: [Netlify custom domains](https://docs.netlify.com/domains-https/custom-domains/) and [external DNS configuration](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/).

## Domain price reminder

GoDaddy pricing varies by promotion, term, and renewal rate. Check the checkout total and the renewal price before purchase; do not base the decision only on a first-year promotion. The domain itself does not include the work of deploying and configuring this website.

## Before launch

- Add Roger's exact verified professional title, qualifications, experience, and software expertise.
- Add approved clinical cases, images, captions, and accurately documented outcomes.
- Add genuine doctor testimonials and written permission to publish names, credentials, practice names, and quotes.
- Add the business email and scheduling link if used.
- Confirm services, deliverables, software compatibility, revision policy, and turnaround expectations.
- Add a privacy notice and any required business/legal language.
- Test the form after it is connected.

The design uses an original teal/navy palette inspired by the clear-aligner sector; it does not use official Invisalign branding or imply affiliation. Confirm business-name and domain availability before launch.
