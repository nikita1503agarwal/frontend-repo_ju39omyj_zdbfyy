import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E5A43]/80 via-[#1E5A43]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex items-center">
        <div className="max-w-2xl text-offwhite">
          <h1 className="text-4xl md:text-6xl leading-tight font-serif text-white">
            Premium Property Management for London’s Bespoke Homes
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/85">
            Full-service property strategy: design & refurbishment, tenant management, and hands-on oversight that increases rental yield.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium"
              style={{ backgroundColor: '#D9B77A', color: '#21302C' }}
            >
              Book Your Free Audit
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium border border-white/70 text-white"
            >
              See Case Studies
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-white/90">
            {[
              '250+ projects',
              '12 years experience',
              '25% avg rental uplift',
            ].map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
