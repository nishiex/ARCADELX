import type { Metadata } from "next";
import PrivacyPolicyPage from "../../components/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | ARCADELX",
  description:
    "ARCADELX Privacy Policy — how Nilee Games collects, uses, and protects information across its motion-sensing gaming kiosks. Learn about our privacy-first approach: no player photographs, no facial recognition, secure payment handling.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
