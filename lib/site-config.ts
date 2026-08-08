export const siteConfig = {
  name: "Luan Eduardo",
  role: "Psicólogo Clínico",
  crp: "CRP 13/11238",
  instagramHandle: "@luan.eduardopsi",
  instagramUrl: "https://www.instagram.com/luan.eduardopsi/",
  whatsappNumber: "5583996029910",
};

/** Builds a wa.me link with a pre-filled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
