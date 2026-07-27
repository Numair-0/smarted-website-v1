import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  /**
   * INTEGRATION POINT
   * ------------------------------------------------------------------
   * This route currently validates and logs the submission. To make it
   * production-live, wire it to a real transactional email provider
   * (e.g. Resend, Postmark, SES) and send the parsed data to
   * `siteConfig.email`. Keep provider credentials in environment
   * variables — see README.md → Environment Variables.
   *
   * Example (Resend):
   *
   * await resend.emails.send({
   *   from: "website@smartedsystems.in",
   *   to: siteConfig.email,
   *   subject: `New project inquiry — ${parsed.data.company}`,
   *   text: JSON.stringify(parsed.data, null, 2),
   * });
   */
  console.log(`[contact] New inquiry for ${siteConfig.name}:`, parsed.data);

  return NextResponse.json({ ok: true });
}
