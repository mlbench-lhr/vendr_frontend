import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions – VendorTracker',
  description: 'By accessing or using VendorTracker, you agree to these Terms & Conditions.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <article className="prose">
      <h1 className="text-2xl">Terms & Conditions – VendorTracker</h1>
      <p className="text-sm text-gray-400">Last Updated: 16 Jan 2026</p>
      <p>By accessing or using VendorTracker, you agree to the following Terms & Conditions.</p>
      <h2>1. App Usage</h2>
      <p>
        VendorTracker allows users to discover and track nearby vendors such as food trucks, pop-up
        shops, and mobile vendors. Vendors can manage their profiles and menus through the app.
      </p>
      <h2>2. User Responsibilities</h2>
      <ul className="list-disc ml-6">
        <li>Users must provide accurate profile information</li>
        <li>Users agree not to misuse the app or attempt unauthorized access</li>
        <li>Location access is required for core features</li>
      </ul>
      <h2>3. Vendor Responsibilities</h2>
      <ul className="list-disc ml-6">
        <li>
          Vendors are responsible for the accuracy of their profile, menu, pricing, and availability
        </li>
        <li>VendorTracker is not responsible for vendor services, quality, or transactions</li>
      </ul>
      <h2>4. Notifications</h2>
      <ul className="list-disc ml-6">
        <li>Notifications are optional and customizable</li>
        <li>VendorTracker is not liable for missed notifications</li>
      </ul>
      <h2>5. Ratings & Reviews</h2>
      <ul className="list-disc ml-6">
        <li>Reviews must be honest and respectful</li>
        <li>VendorTracker reserves the right to remove inappropriate content</li>
      </ul>
      <h2>6. Availability</h2>
      <p>
        We strive to keep the app available at all times, but we do not guarantee uninterrupted
        service.
      </p>
      <h2>7. Intellectual Property</h2>
      <p>
        All app content, design, and code are the property of VendorTracker. Unauthorized copying or
        redistribution is prohibited.
      </p>
      <h2>8. Limitation of Liability</h2>
      <ul className="list-disc ml-6">
        <li>VendorTracker is not responsible for vendor behavior or service quality</li>
        <li>VendorTracker is not responsible for losses resulting from app downtime</li>
        <li>VendorTracker is not responsible for incorrect vendor information</li>
      </ul>
      <h2>9. Termination</h2>
      <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
      <h2>10. Changes to Terms</h2>
      <p>
        We may update these Terms & Conditions at any time. Continued use of the app implies
        acceptance of updates.
      </p>
      <h2>11. Governing Law</h2>
      <p>These terms shall be governed according to applicable local laws.</p>
      <h2>12. Contact</h2>
      <p>
        For questions regarding these terms, contact:{' '}
        <span className="text-gray-300">support@vendr.app</span>
      </p>
    </article>
  );
}
