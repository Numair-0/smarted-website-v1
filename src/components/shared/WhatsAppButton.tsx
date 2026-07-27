import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Smarted Systems on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ledger-900 text-white shadow-lifted transition-transform duration-300 hover:-translate-y-1 hover:bg-ledger-700"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
