import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        {/* Pricing placeholder section to complete the anchor navigation */}
        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-700">Start free. Upgrade when you need more power.</p>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="mt-2 text-3xl font-bold">$0</p>
                <ul className="mt-4 space-y-2 text-left text-sm text-gray-700">
                  <li>• Core blocks</li>
                  <li>• Basic exports</li>
                  <li>• Community support</li>
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Get started</a>
              </div>
              <div className="rounded-2xl border-2 border-gray-900 bg-gradient-to-b from-white to-gray-50 p-6 shadow-md">
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="mt-2 text-3xl font-bold">$19<span className="text-base font-medium text-gray-600">/mo</span></p>
                <ul className="mt-4 space-y-2 text-left text-sm text-gray-700">
                  <li>• All blocks + AI</li>
                  <li>• Unlimited projects</li>
                  <li>• Priority support</li>
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Upgrade</a>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Team</h3>
                <p className="mt-2 text-3xl font-bold">$49<span className="text-base font-medium text-gray-600">/mo</span></p>
                <ul className="mt-4 space-y-2 text-left text-sm text-gray-700">
                  <li>• Collaboration</li>
                  <li>• Role-based access</li>
                  <li>• Shared libraries</li>
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Contact sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
