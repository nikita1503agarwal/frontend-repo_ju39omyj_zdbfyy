export default function Footer() {
  return (
    <footer className="bg-[#1E5A43] text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-white font-semibold">G</span>
            </div>
            <span className="font-semibold tracking-tight">The Gate PM</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/85">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/70">
          <div>© 2025 The Gate PM. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
