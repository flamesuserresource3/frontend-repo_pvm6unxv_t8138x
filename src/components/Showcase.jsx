const items = [
  {
    title: 'Elegant SaaS Landing',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Grid',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Product Marketing',
    img: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Startup Website',
    img: 'https://images.unsplash.com/photo-1529336953121-c9a05221482a?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Built with Orrivo</h2>
          <p className="mt-4 text-lg text-gray-700">A glimpse at what teams create using our visual builder and code export.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card) => (
            <figure key={card.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <img src={card.img} alt={card.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="p-4 text-sm font-medium text-gray-900">{card.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
