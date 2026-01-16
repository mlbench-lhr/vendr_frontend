import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="grid sm:grid-cols-2 gap-6 b-red-400">
      <article className="car p-6">
        <h2 className="text-lg font-semibold mb-2 text-white">Privacy Policy</h2>
        <p className="text-gray-300 mb-4">
          Learn how VendorTracker collects, uses, and protects your data.
        </p>
        <Link href="/privacy" className="link">
          Read Privacy Policy
        </Link>
      </article>
      <article className="car p-6">
        <h2 className="text-lg font-semibold mb-2 text-white">Terms & Conditions</h2>
        <p className="text-gray-300 mb-4">
          Understand the rules for using the VendorTracker application.
        </p>
        <Link href="/terms" className="link">
          Read Terms & Conditions
        </Link>
      </article>
    </section>
  );
}
