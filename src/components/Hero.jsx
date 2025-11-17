import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FBFF]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4" style={{letterSpacing: '-0.02em'}}>
            Learning Made Easy for Every Child
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-8">
            Upload your school notes and get simple, step-by-step help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/upload" className="inline-flex items-center justify-center px-6 py-3 rounded-[22px] text-white font-semibold shadow-md shadow-sky-100 focus:outline-none focus:ring-4 focus:ring-sky-200" style={{backgroundColor: '#6EB5FF'}}>
              Upload Notes
            </Link>
            <Link to="/explain/demo" className="inline-flex items-center justify-center px-6 py-3 rounded-[22px] font-semibold text-slate-800 bg-white border border-slate-200 shadow-sm hover:shadow focus:outline-none focus:ring-4 focus:ring-slate-200">
              Try Demo
            </Link>
          </div>
        </div>
        <div className="relative">
          {/* Calming, friendly abstract illustration */}
          <div className="relative mx-auto w-full aspect-[4/3] rounded-[22px] bg-white shadow-xl shadow-sky-100/70 border border-slate-100 p-8">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              <defs>
                <linearGradient id="gradA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6EB5FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#A1E6B5" stopOpacity="0.35" />
                </linearGradient>
                <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>
              <rect x="0" y="0" width="400" height="300" fill="#F7FBFF" />
              <circle cx="80" cy="90" r="48" fill="#6EB5FF" opacity="0.25" />
              <circle cx="300" cy="70" r="36" fill="#A1E6B5" opacity="0.3" />
              <rect x="110" y="140" width="200" height="110" rx="22" fill="url(#gradA)" filter="url(#soft)" />
              <rect x="90" y="120" width="220" height="120" rx="22" fill="#ffffff" stroke="#E5EEF8" />
              <rect x="110" y="140" width="180" height="16" rx="8" fill="#E5F2FE" />
              <rect x="110" y="170" width="140" height="12" rx="6" fill="#EAF7F0" />
              <rect x="110" y="194" width="160" height="12" rx="6" fill="#EAF2FD" />
              <rect x="110" y="218" width="120" height="12" rx="6" fill="#EAF7F0" />
            </svg>
          </div>
        </div>
      </div>
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{background: 'radial-gradient( circle at 30% 30%, rgba(110,181,255,0.15), transparent 60%)'}} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full" style={{background: 'radial-gradient( circle at 70% 70%, rgba(161,230,181,0.18), transparent 60%)'}} />
    </section>
  )
}

export default Hero
