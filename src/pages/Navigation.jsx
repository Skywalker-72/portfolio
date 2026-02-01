export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Chaitanya Yash
        </a>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-slate-600 hover:text-indigo-600 transition text-sm font-medium">
            About
          </a>
          <a href="#work" className="text-slate-600 hover:text-indigo-600 transition text-sm font-medium">
            Work
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-yash/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-medium"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}