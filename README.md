# Zigo Connect

create this website 
CARD 1:
Become a User

Text:
“Join Zigo and explore live entertainment, connect with people, chat, enjoy live streams and discover new experiences.”

Button:
“Join Zigo →”

ACTION:
Directly redirect to:

https://play.google.com/store/apps/details?id=com.stackearn.zigo.live

CARD 2:
Become a Host

Text:
“Go live, showcase your talent, build your audience, receive virtual gifts and grow with Zigo.”

Button:
“Become a Host →”

ACTION:
Directly redirect to:

https://play.google.com/store/apps/details?id=com.stackearn.zigo.live

CARD 3:
Become a Partner

Text:
“Partner with Zigo and explore business, marketing, distribution and strategic growth opportunities.”

Button:
“Become a Partner →”

ACTION:
Open an animated Partner Application form on the same page or in a premium modal.

CARD 4:
Become a Coin Seller

Text:
“Build your own Zigo coin-selling business and serve Zigo users with flexible recharge opportunities.”

Button:
“Become a Seller →”

ACTION:
Open an animated Seller Application form.

CARD 5:
Become an Agency

Text:
“Build your host network, recruit talent, manage your team and grow your agency with Zigo.”

Button:
“Become an Agency →”

ACTION:
Open an animated Agency Application form.

IMPORTANT LAYOUT:
On desktop:
- First row: User + Host
- Second row: Partner + Coin Seller + Agency

This layout should visually emphasize User and Host as the main app entry points while keeping business opportunities below them.

On tablet/mobile:
- Automatically stack cards beautifully.
- Maintain equal card heights where possible.

--------------------------------------------------

6. PARTNER APPLICATION FORM

When the user clicks “Become a Partner”, open a premium animated modal or dedicated animated section.

Use a smooth scale/fade/slide animation.

Heading:

“Partner With Zigo”

Subtitle:

“Tell us about yourself and how you would like to work with Zigo.”

Fields:

Full Name *
Company / Business Name
Email Address *
Mobile Number *
WhatsApp Number *
Country *
State *
City
Partner Type *
Website
Instagram / Social Media
Business Experience
Expected Monthly Business / Investment Capacity
How would you like to partner with Zigo?
Message / Description *

Partner Type options:
- Business Partner
- Marketing Partner
- Distribution Partner
- Strategic Partner
- Investment Partner
- Technology Partner
- Other

Add:
“I agree that the information provided is accurate.”

Submit button:

“Submit Partnership Request →”

Show loading state while submitting.

Prevent duplicate submissions while the request is being processed.

Validate:
- required fields
- email format
- mobile number
- WhatsApp number
- minimum message length where appropriate

--------------------------------------------------

7. AGENCY APPLICATION FORM

When the user clicks “Become an Agency”, open the same style premium animated form.

Heading:

“Become a Zigo Agency”

Subtitle:

“Build your host network and grow your agency with Zigo.”

Fields:

Full Name *
Agency Name *
Email Address *
Mobile Number *
WhatsApp Number *
Country *
State *
City *
Number of Hosts / Talent
Previous Agency Experience
Current Platform / Agency Name
Website / Social Media
How did you hear about Zigo?
Description / Message *

Add optional:
- Instagram
- YouTube
- Facebook
- Other social profile

Submit button:

“Submit Agency Request →”

Use proper validation and loading state.

--------------------------------------------------

8. COIN SELLER APPLICATION FORM

Also create the seller form because Zigo will have a coin seller/reseller ecosystem.

Heading:

“Become a Zigo Coin Seller”

Fields:

Full Name *
Business Name
Email *
Mobile Number *
WhatsApp Number *
Country *
State *
City
Business Experience
Expected Monthly Recharge Volume
Current Recharge / Reselling Experience
Payment / Business Details
Description *

Submit:

“Apply as Coin Seller →”

Do NOT ask for sensitive financial information such as passwords, card numbers, bank PINs or OTPs.

--------------------------------------------------

9. FORM SUBMISSION BACKEND

This is NOT a frontend-only form.

Create a proper backend/API submission system.

Every submission must be stored in the database.

Create a collection/model such as:

OnboardingRequest

Fields:

_id
type
fullName
companyName
agencyName
email
mobileNumber
whatsappNumber
country
state
city
partnerType
website
socialMedia
experience
numberOfHosts
investmentCapacity
expectedMonthlyBusiness
currentPlatform
hearAboutZigo
description
status
adminNote
createdAt
updatedAt

type values:

USER
HOST
PARTNER
SELLER
AGENCY

For User and Host, no form is required because their CTA directly opens Google Play.

For Partner, Seller and Agency:
Save the submitted application with:

status: "PENDING"

--------------------------------------------------

10. ADMIN EMAIL

After every successful Partner / Seller / Agency form submission:

Send an email to:

stackearn@gmail.com

Subject examples:

“New Zigo Partner Application”
“New Zigo Agency Application”
“New Zigo Coin Seller Application”

The email must contain all submitted application information in a clean professional HTML email.

Include:

Application Type
Full Name
Company / Agency
Email
Mobile
WhatsApp
Country
State
City
Business Experience
Relevant type
Social links
Website
Investment / expected volume information
Description
Submission Date & Time

The email should clearly show:

“New Zigo Lead / Application”

Do not expose sensitive data in the email.

--------------------------------------------------

11. SUCCESS CONFIRMATION

After successful submission:

Show a beautiful animated success dialog.

Icon:
✓

Heading:

“Application Submitted Successfully!”

Message:

“Thank you for partnering with Zigo. Our team will review your request and contact you within 24 hours.”

Add:

“Your application has been received successfully.”

Button:

“Back to Zigo”

Also show a small success toast/notification:

“Your request has been submitted successfully.”

If the API fails, show:

“Something went wrong. Please try again.”

Do not show raw server errors to the user.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://zigo-live.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/94c0632a-543f-46b0-a677-53bfa9e06e9d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
