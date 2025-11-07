import { Sparkles, Layers, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI powered blocks',
    desc: 'Compose beautiful sections in seconds with smart defaults and on-brand styles.',
  },
  {
    icon: Layers,
    title: 'Production-grade',
    desc: 'Clean, accessible HTML and Tailwind classes that ship to production without rework.',
  },
  {
    icon: Shield,
    title: 'Best practices',
    desc: 'SEO, performance, and accessibility baked in so you can focus on content.',
  },
  {
    icon: Rocket,
    title: 'Launch-ready',
    desc: 'Deploy anywhere. Export code or publish directly with one click.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Everything you need to ship</h2>
          <p className="mt-4 text-lg text-gray-700">A complete toolkit to design, build, and launch polished websites — no context switching.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
