export type FieldType = "text" | "email" | "tel" | "textarea" | "select";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean;
  minLength?: number;
};

export type ApplicationType = "PARTNER" | "SELLER" | "AGENCY";

export type ApplicationConfig = {
  type: ApplicationType;
  heading: string;
  subtitle: string;
  submitLabel: string;
  consent?: string;
  fields: FieldConfig[];
};

const contact: FieldConfig[] = [
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "mobileNumber", label: "Mobile Number", type: "tel", required: true },
  { name: "whatsappNumber", label: "WhatsApp Number", type: "tel", required: true },
];

export const APPLICATIONS: Record<ApplicationType, ApplicationConfig> = {
  PARTNER: {
    type: "PARTNER",
    heading: "Partner With Zigo",
    subtitle: "Tell us about yourself and how you would like to work with Zigo.",
    submitLabel: "Submit Partnership Request",
    consent: "I agree that the information provided is accurate.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "companyName", label: "Company / Business Name", type: "text" },
      ...contact,
      { name: "country", label: "Country", type: "text", required: true },
      { name: "state", label: "State", type: "text", required: true },
      { name: "city", label: "City", type: "text" },
      {
        name: "partnerType",
        label: "Partner Type",
        type: "select",
        required: true,
        options: [
          "Business Partner",
          "Marketing Partner",
          "Distribution Partner",
          "Strategic Partner",
          "Investment Partner",
          "Technology Partner",
          "Other",
        ],
      },
      { name: "website", label: "Website", type: "text" },
      { name: "socialMedia", label: "Instagram / Social Media", type: "text" },
      { name: "experience", label: "Business Experience", type: "text" },
      {
        name: "investmentCapacity",
        label: "Expected Monthly Business / Investment Capacity",
        type: "text",
      },
      {
        name: "expectedMonthlyBusiness",
        label: "How would you like to partner with Zigo?",
        type: "text",
        full: true,
      },
      {
        name: "description",
        label: "Message / Description",
        type: "textarea",
        required: true,
        full: true,
        minLength: 20,
      },
    ],
  },
  AGENCY: {
    type: "AGENCY",
    heading: "Become a Zigo Agency",
    subtitle: "Build your host network and grow your agency with Zigo.",
    submitLabel: "Submit Agency Request",
    consent: "I agree that the information provided is accurate.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "agencyName", label: "Agency Name", type: "text", required: true },
      ...contact,
      { name: "country", label: "Country", type: "text", required: true },
      { name: "state", label: "State", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "numberOfHosts", label: "Number of Hosts / Talent", type: "text" },
      { name: "experience", label: "Previous Agency Experience", type: "text" },
      { name: "currentPlatform", label: "Current Platform / Agency Name", type: "text" },
      {
        name: "socialMedia",
        label: "Website / Social Media (Instagram, YouTube, Facebook, other)",
        type: "text",
        full: true,
      },
      { name: "hearAboutZigo", label: "How did you hear about Zigo?", type: "text", full: true },
      {
        name: "description",
        label: "Description / Message",
        type: "textarea",
        required: true,
        full: true,
        minLength: 20,
      },
    ],
  },
  SELLER: {
    type: "SELLER",
    heading: "Become a Zigo Coin Seller",
    subtitle: "Start your own coin-selling business and serve thousands of Zigo users.",
    submitLabel: "Apply as Coin Seller",
    consent: "I agree that the information provided is accurate.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "companyName", label: "Business Name", type: "text" },
      ...contact,
      { name: "country", label: "Country", type: "text", required: true },
      { name: "state", label: "State", type: "text", required: true },
      { name: "city", label: "City", type: "text" },
      { name: "experience", label: "Business Experience", type: "text" },
      {
        name: "expectedMonthlyBusiness",
        label: "Expected Monthly Recharge Volume",
        type: "text",
      },
      {
        name: "currentPlatform",
        label: "Current Recharge / Reselling Experience",
        type: "text",
      },
      {
        name: "investmentCapacity",
        label: "Payment / Business Details (no card, bank PIN or OTP)",
        type: "text",
        full: true,
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        required: true,
        full: true,
        minLength: 20,
      },
    ],
  },
};
