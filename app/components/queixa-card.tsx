import { ChevronRightIcon } from "./icons";
import { whatsappLink } from "@/lib/site-config";

export function QueixaCard({
  icon,
  title,
  description,
  message,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  message: string;
}) {
  return (
    <a className="queixa-card" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
      <span className="queixa-icon">{icon}</span>
      <span className="queixa-text">
        <span className="t">{title}</span>
        <span className="d">{description}</span>
      </span>
      <span className="queixa-go">
        <ChevronRightIcon />
      </span>
    </a>
  );
}
