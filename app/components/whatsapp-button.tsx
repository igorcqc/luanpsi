import { ArrowRightIcon } from "./icons";
import { whatsappLink } from "@/lib/site-config";

export function WhatsAppButton({ message, children }: { message: string; children: React.ReactNode }) {
  return (
    <a className="cta-primary" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="arrow">
        <ArrowRightIcon />
      </span>
    </a>
  );
}
