import type { Metadata } from "next";
import TermsPage from "../../components/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | ARCADELX",
  description:
    "ARCADELX Terms & Conditions — rules, obligations, and legal terms governing the use of ARCADELX products and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function Page() {
  return <TermsPage />;
}
