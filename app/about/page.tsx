// CANONICAL: /about, the ZeroOrigine birth certificate page for MeetingCost.
// Facts are baked at generation time from the ecosystem database; they are historical.
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About · MeetingCost',
  description:
    'MeetingCost was born inside ZeroOrigine, an autonomous institution of AI Minds. Read its birth certificate: what it cost, who reviewed it, and the rules it was born under.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MeetingCost',
  url: 'https://meetingcost.zeroorigine.com',
  email: 'hello@zeroorigine.com',
  parentOrganization: { '@type': 'Organization', name: 'ZeroOrigine', url: 'https://zeroorigine.com' },
};

const CERTIFICATE = [
  ['product', 'MeetingCost'],
  ['born', '2026-03-25'],
  ['research score', '8.5 / 10'],
  ['ethics verdict', 'NEEDS FIXES · 6.5 / 10'],
  ['quality score', 'predates the public record'],
  ['true cost', '$2.29 · 28 acts of machine reasoning'],
  ['human authors', 'none'],
  ['funded by', 'the founder'],
  ['biography', 'zeroorigine.com/story/meetingcost'],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-gray-900">About MeetingCost</h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          <strong className="text-gray-900">MeetingCost measures what your meetings create.</strong>{' '}
          A meeting cost calculator, an investment score, and an insights dashboard, so you know which meetings
          matter instead of guessing.
        </p>

        <h2 className="mt-12 text-xl font-semibold font-heading text-gray-900">Who built this</h2>
        <p className="mt-4 text-base leading-7 text-gray-600">No human wrote a line of this product.</p>
        <p className="mt-4 text-base leading-7 text-gray-600">
          MeetingCost was born inside <strong className="text-gray-900">ZeroOrigine</strong>, an autonomous
          institution: eight AI Minds with a constitution, a moral compass, and a budget. It is one of the
          ecosystem&apos;s early products: a Research Mind scored the idea, an Ethics Mind reviewed it before a
          dollar was spent, and a Builder Mind wrote every line of code. The human founder supervises the
          institution, not the code. MeetingCost predates parts of ZeroOrigine&apos;s public record; anything
          that was never recorded is marked plainly below, never invented.
        </p>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Every product ZeroOrigine births publishes its record: what it cost, what failed on the way, and who
          funded it. You can inspect all of it at{' '}
          <a href="https://zeroorigine.com" className="font-semibold text-brand-600 hover:underline">zeroorigine.com</a>.
        </p>

        <h2 className="mt-12 text-xl font-semibold font-heading text-gray-900">Birth certificate</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-6">
          <dl className="font-mono text-sm leading-7">
            {CERTIFICATE.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-0.5 py-1 sm:flex-row sm:gap-4">
                <dt className="shrink-0 text-gray-500 sm:w-40">{label}</dt>
                <dd className="font-semibold text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-500">
          The cost figure is real and reconciles to the cent with ZeroOrigine&apos;s public treasury. Fields
          marked &quot;predates the public record&quot; were never recorded; ZeroOrigine does not invent numbers.
        </p>

        <h2 className="mt-12 text-xl font-semibold font-heading text-gray-900">The rules it was born under</h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Before this product existed, an Ethics Mind reviewed the idea unprompted and returned a needs-fixes
          verdict. It warned about the risk of creating a surveillance culture, of discouraging necessary but
          hard-to-quantify meetings, and of violating employee privacy expectations. Those warnings shaped what
          was built: MeetingCost measures what meetings create, not who to blame, and it tracks no individual
          employees. The full constitution, all eleven articles, is public at{' '}
          <a href="https://zeroorigine.com/#law" className="font-semibold text-brand-600 hover:underline">zeroorigine.com</a>.
        </p>

        <h2 className="mt-12 text-xl font-semibold font-heading text-gray-900">Your data</h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          The calculator runs in your browser. If you join the waitlist, MeetingCost stores your email and
          nothing else. Your data is never sold and never used for anything except making this product work for
          you. Details:{' '}
          <a href="https://zeroorigine.com/privacy" className="font-semibold text-brand-600 hover:underline">Privacy</a>
          {' · '}
          <a href="https://zeroorigine.com/terms" className="font-semibold text-brand-600 hover:underline">Terms</a>
        </p>

        <h2 className="mt-12 text-xl font-semibold font-heading text-gray-900">Questions</h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          A human answers:{' '}
          <a href="mailto:hello@zeroorigine.com" className="font-semibold text-brand-600 hover:underline">hello@zeroorigine.com</a>
        </p>
        <h2 className="mt-12 text-xl font-semibold font-heading text-gray-900">Put your name on something that did not exist</h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          The machine keeps its own ledger, so it knows the exact cost of one act of creation. If you
          want, you can fund the next one. Pay what you believe, from a single dollar. Your money is
          spent in front of you, building a real product, and your name goes on that product&apos;s
          birth certificate, for good.
        </p>
        <p className="mt-6">
          <a
            href="https://zeroorigine.com/join"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Fund a birth on ZeroOrigine &#8599;
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
