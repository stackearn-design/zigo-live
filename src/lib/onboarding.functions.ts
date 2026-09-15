import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const applicationSchema = z.object({
  type: z.enum(["PARTNER", "SELLER", "AGENCY"]),
  fullName: z.string().trim().min(2).max(100),
  companyName: z.string().trim().max(120).optional().or(z.literal("")),
  agencyName: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  mobileNumber: z.string().trim().min(7).max(20),
  whatsappNumber: z.string().trim().min(7).max(20),
  country: z.string().trim().min(2).max(80),
  state: z.string().trim().max(80).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  partnerType: z.string().trim().max(60).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  socialMedia: z.string().trim().max(400).optional().or(z.literal("")),
  experience: z.string().trim().max(1000).optional().or(z.literal("")),
  numberOfHosts: z.string().trim().max(60).optional().or(z.literal("")),
  investmentCapacity: z.string().trim().max(120).optional().or(z.literal("")),
  expectedMonthlyBusiness: z.string().trim().max(120).optional().or(z.literal("")),
  currentPlatform: z.string().trim().max(120).optional().or(z.literal("")),
  hearAboutZigo: z.string().trim().max(200).optional().or(z.literal("")),
  description: z.string().trim().min(20).max(2000),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

const clean = (value?: string) => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
};

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;

    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabase.from("onboarding_requests").insert({
      type: data.type,
      full_name: data.fullName,
      company_name: clean(data.companyName),
      agency_name: clean(data.agencyName),
      email: data.email,
      mobile_number: data.mobileNumber,
      whatsapp_number: data.whatsappNumber,
      country: data.country,
      state: clean(data.state),
      city: clean(data.city),
      partner_type: clean(data.partnerType),
      website: clean(data.website),
      social_media: clean(data.socialMedia),
      experience: clean(data.experience),
      number_of_hosts: clean(data.numberOfHosts),
      investment_capacity: clean(data.investmentCapacity),
      expected_monthly_business: clean(data.expectedMonthlyBusiness),
      current_platform: clean(data.currentPlatform),
      hear_about_zigo: clean(data.hearAboutZigo),
      description: data.description,
      status: "PENDING",
    });

    if (error) {
      console.error("onboarding insert failed", error.message);
      throw new Error("submission_failed");
    }

    return { ok: true as const };
  });
