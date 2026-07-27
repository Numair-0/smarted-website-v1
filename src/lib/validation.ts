import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  company: z.string().trim().min(2, "Enter your company name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(20, "Enter a valid phone number."),
  requirements: z
    .string()
    .trim()
    .min(20, "Give us at least a couple of sentences on what you need."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
