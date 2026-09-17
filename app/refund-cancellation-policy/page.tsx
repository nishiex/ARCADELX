import type { Metadata } from "next";
import RefundPolicyPage from "../../components/RefundPolicyPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | ARCADELX",
  description:
    "Learn about ARCADELX gaming payment cancellations, refunds, failed transactions, and gaming-session issues. ARCADELX is a product of Nilee Games and Future Technologies Pvt. Ltd.",
  alternates: {
    canonical: "/refund-cancellation-policy",
  },
};

export default function Page() {
  return <RefundPolicyPage />;
}
