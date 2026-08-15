import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Srinivasan (KRS) Ramarao — Data, AI & Visual Stories";
const description = "Data engineer, analytics leader, GenAI explorer, visual storyteller, hiker, filmmaker, nature explorer, and dog lover.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "krs-builder-profile.krsrini.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      apple: "/krs-icon.svg",
    },
    openGraph: { title, description, type: "website", images: [`${origin}/og.png`] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
