import SafeSpline from './SafeSpline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: gradient as safe fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />

      {/* 3D scene (won't block interaction if it fails) */}
      <div className="absolute inset-0">
        <SafeSpline scene="https://prod.spline.design/7o3bK1z5c8m8Z2Jm/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Now in public beta
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Design, build and launch polished websites in minutes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 max-w-xl">
            A modern site builder that blends generative design with production-ready components so you can ship faster with confidence.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">Get Started</a>
            <a href="#showcase" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-black/10 hover:bg-gray-50">View Showcase</a>
          </div>
        </div>
      </div>

      {/* Soft overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  );
}
