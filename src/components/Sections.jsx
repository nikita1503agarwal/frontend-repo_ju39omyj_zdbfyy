import { CheckCircle, TrendingUp, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative bg-[#F5F5F2] py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
            alt="Team at work"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#21302C]">
            Your Trusted Partner in Property Management.
          </h2>
          <p className="mt-4 text-[#21302C]/80">
            Design-led, transparent, ROI-driven. We blend architecture-level thinking with meticulous management to protect and grow your asset.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Feature icon={<CheckCircle className="h-5 w-5" />} title="Full Transparency" desc="Live reporting dashboard" />
            <Feature icon={<Users className="h-5 w-5" />} title="In-House Team" desc="Trades & design for faster delivery" />
            <Feature icon={<TrendingUp className="h-5 w-5" />} title="Proven Results" desc="Measurable uplift in yield" />
          </div>

          <a href="#about" className="mt-8 inline-block rounded-full px-5 py-3 text-sm font-medium border" style={{ borderColor: '#1E5A43', color: '#1E5A43' }}>
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
      <div className="text-[#1E5A43]">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-[#21302C]">{title}</div>
        <div className="text-xs text-[#21302C]/70">{desc}</div>
      </div>
    </div>
  );
}

export function Services() {
  const items = [
    {
      title: 'Design & Refurbishment',
      desc: 'Smart design to maximise rental income.',
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Development & Projects',
      desc: 'Full project management from scope to snagging.',
      img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Property Management',
      desc: 'Tenant screening, maintenance, and 24/7 support.',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h3 className="font-serif text-3xl md:text-4xl text-[#21302C]">Our Services</h3>
          <p className="mt-2 text-[#21302C]/80">Design-led services to increase yield and protect assets.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <a key={item.title} href="#services" className="group relative overflow-hidden rounded-xl shadow-md">
              <img src={item.img} alt={item.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
              <div className="absolute bottom-0 p-5 text-white">
                <div className="h-0.5 w-10" style={{ backgroundColor: '#D9B77A' }} />
                <h4 className="mt-3 text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-white/85">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm" style={{ color: '#D9B77A' }}>
                  Learn more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const right = [
    {
      title: 'Notting Hill Flat',
      desc: 'Light reconfiguration + styling',
      kpi: '+18%',
      img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Fulham Conversion',
      desc: 'Two-bed to three-bed conversion',
      kpi: '+22%',
      img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="bg-[#F5F5F2] py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-6">
        <a href="#projects" className="group relative overflow-hidden rounded-xl shadow-md">
          <img src="
            https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1800&auto=format&fit=crop
          " alt="Kensington Townhouse" className="h-[28rem] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <div className="absolute left-0 right-0 bottom-0 p-6 text-white">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: '#D9B77A', color: '#21302C' }}>
              +28%
            </div>
            <h4 className="mt-3 text-2xl font-semibold">Kensington Townhouse — Full Refurbishment</h4>
            <p className="text-white/85">Reconfigured plan + bespoke kitchen, +28% rental uplift.</p>
          </div>
        </a>

        <div className="grid gap-6">
          {right.map((p) => (
            <a key={p.title} href="#projects" className="group relative overflow-hidden rounded-xl shadow-md">
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
              <div className="absolute left-0 right-0 bottom-0 p-5 text-white">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: '#D9B77A', color: '#21302C' }}>
                  {p.kpi}
                </div>
                <h4 className="mt-3 text-xl font-semibold">{p.title}</h4>
                <p className="text-white/85">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a href="#projects" className="inline-flex items-center text-sm font-medium" style={{ color: '#1E5A43' }}>
          View All Projects →
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#21302C] text-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="font-serif text-3xl md:text-4xl">Let’s Build Something Exceptional.</h3>
          <p className="mt-3 text-white/85">Ready to transform your property? Get in touch and our team will reach out within 24 hours.</p>

          <div className="mt-10 space-y-2 text-sm">
            <div>Email: <a href="mailto:hello@thegatepm.com" className="underline decoration-white/40 hover:decoration-white">hello@thegatepm.com</a></div>
            <div>Phone: <a href="tel:+442012345678" className="underline decoration-white/40 hover:decoration-white">+44 20 1234 5678</a></div>
          </div>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="rounded-xl bg-white p-6 text-[#21302C] shadow-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" type="text" placeholder="Your full name" />
            <Field label="Email" type="email" placeholder="name@email.com" />
          </div>
          <div className="mt-4">
            <Field label="Phone" type="tel" placeholder="+44" />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">Message</label>
            <textarea className="mt-1 w-full rounded-lg border border-neutral-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#1E5A43]" rows={4} placeholder="Tell us about your property"></textarea>
          </div>
          <button type="submit" className="mt-6 w-full rounded-full px-5 py-3 text-sm font-medium" style={{ backgroundColor: '#D9B77A', color: '#21302C' }}>
            Request Free Audit
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-[#21302C]">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-1 w-full rounded-lg border border-neutral-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#1E5A43]" />
    </div>
  );
}
