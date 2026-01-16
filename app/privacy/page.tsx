import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – VendorTracker',
  description:
    'VendorTracker respects your privacy. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose">
      <h1 className="text-2xl">Privacy Policy – VendorTracker</h1>
      <p className="text-sm text-gray-400">Last Updated: 16 Jan 2026</p>
      <p>
        VendorTracker respects your privacy and is committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and protect your data when
        you use the VendorTracker mobile application.
      </p>
      <h2>1. Information We Collect</h2>
      <h3>User Information</h3>
      <ul className="list-disc ml-6">
        <li>Name and profile details</li>
        <li>Location data (to show nearby vendors)</li>
        <li>Preferences and favorite vendors</li>
        <li>Device information for analytics and crash reporting</li>
      </ul>
      <h3>Vendor Information</h3>
      <ul className="list-disc ml-6">
        <li>Vendor name and type</li>
        <li>Location and hours of operation</li>
        <li>Menu items, prices, images, and descriptions</li>
        <li>Contact information</li>
      </ul>
      <h2>2. Location Data</h2>
      <p>VendorTracker uses real-time location data to:</p>
      <ul className="list-disc ml-6">
        <li>Display nearby vendors on the map</li>
        <li>Notify users when vendors are nearby</li>
      </ul>
      <p>
        Location data is only used while the app is active or as permitted by your device settings.
      </p>
      <h2>3. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul className="list-disc ml-6">
        <li>Provide vendor tracking and discovery services</li>
        <li>Display vendor profiles and menus</li>
        <li>Send push notifications (configurable by users/vendors)</li>
        <li>Improve app performance using Firebase Analytics</li>
        <li>Detect crashes using Firebase Crashlytics</li>
      </ul>
      <h2>4. Data Storage & Security</h2>
      <ul className="list-disc ml-6">
        <li>Data may be stored using Firebase, MySQL, or SQLite</li>
        <li>Industry-standard security practices are used to protect your data</li>
        <li>We do not sell or share your personal data with third parties</li>
      </ul>
      <h2>5. Notifications</h2>
      <p>
        Users and vendors can customize notification preferences at any time from within the app.
      </p>
      <h2>6. Third-Party Services</h2>
      <p>VendorTracker uses:</p>
      <ul className="list-disc ml-6">
        <li>Firebase Analytics</li>
        <li>Firebase Crashlytics</li>
        <li>Firebase Realtime Database / Firestore</li>
      </ul>
      <p>These services follow their own privacy policies.</p>
      <h2>7. Your Rights</h2>
      <p>You may:</p>
      <ul className="list-disc ml-6">
        <li>Edit your profile information</li>
        <li>Disable location access or notifications</li>
        <li>Request account deletion</li>
      </ul>
      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Continued use of the app means you
        accept the updated policy.
      </p>
      <h2>9. Contact Us</h2>
      <p>
        For any privacy concerns, please contact us at:{' '}
        <span className="text-gray-300">support@vendrtracker.vercel.app</span>
      </p>
    </article>
  );
}
