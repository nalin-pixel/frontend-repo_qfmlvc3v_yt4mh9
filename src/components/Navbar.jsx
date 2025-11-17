import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-[#F7FBFF]/80 backdrop-blur supports-[backdrop-filter]:bg-[#F7FBFF]/70 sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-[22px] flex items-center justify-center" style={{backgroundColor:'#A1E6B5'}}>
            <div className="w-6 h-6 rounded-full" style={{backgroundColor:'#6EB5FF'}}></div>
          </div>
          <span className="font-extrabold tracking-tight text-slate-900">BrightMind Helper</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <NavLink to="/" className={({isActive})=> isActive? 'font-semibold' : ''}>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive})=> isActive? 'font-semibold' : ''}>Dashboard</NavLink>
          <NavLink to="/upload" className={({isActive})=> isActive? 'font-semibold' : ''}>Upload</NavLink>
          <NavLink to="/parent" className={({isActive})=> isActive? 'font-semibold' : ''}>Parent/Teacher</NavLink>
        </nav>
        <Link to="/upload" className="px-4 py-2 rounded-[22px] text-white font-semibold" style={{backgroundColor:'#6EB5FF'}}>Upload</Link>
      </div>
    </header>
  )
}

export default Navbar