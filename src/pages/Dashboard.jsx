import { useState } from 'react'
import Navbar from '../components/Navbar'

const mockRecent = [
  { id: 1, name: 'Math - Fractions.pdf', subject: 'Math' },
  { id: 2, name: 'Science - Plants.png', subject: 'Science' },
  { id: 3, name: 'History - Romans.pdf', subject: 'History' },
]

const Toggle = ({ label, checked, onChange }) => (
  <label className="flex items-center justify-between w-full p-4 rounded-[22px] bg-white border border-slate-100 shadow-sm">
    <span className="text-slate-800 font-medium">{label}</span>
    <button onClick={onChange} className={`w-14 h-8 rounded-full p-1 transition-all ${checked? 'bg-[#A1E6B5]' : 'bg-slate-200'}`}
      aria-pressed={checked}>
      <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition ${checked? 'translate-x-6' : ''}`}></span>
    </button>
  </label>
)

const Dashboard = () => {
  const [lowStim, setLowStim] = useState(true)
  const [highContrast, setHighContrast] = useState(false)

  return (
    <div className="min-h-screen bg-[#F7FBFF]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Hello! What do you want to learn today?</h1>

        <div className="flex flex-wrap gap-4 mb-8">
          <a href="/upload" className="px-6 py-4 rounded-[22px] text-white font-semibold shadow-md shadow-sky-100" style={{backgroundColor:'#6EB5FF'}}>Upload Assignment</a>
        </div>

        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <Toggle label="Low Stimulation Mode" checked={lowStim} onChange={() => setLowStim(v=>!v)} />
          <Toggle label="High Contrast Mode" checked={highContrast} onChange={() => setHighContrast(v=>!v)} />
          <div className="p-4 rounded-[22px] bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-500">Settings saved automatically</div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Recent uploads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRecent.map(item => (
              <div key={item.id} className="p-5 rounded-[22px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-12 rounded-[14px] bg-[#E5F2FD] flex items-center justify-center text-slate-700">PDF</div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 truncate">{item.name}</p>
                    <span className="inline-flex items-center text-xs px-2 py-1 rounded-full" style={{backgroundColor:'#EAF7F0', color:'#135d2f'}}>{item.subject}</span>
                  </div>
                </div>
                <a href={`/explain/${item.id}`} className="inline-flex text-[#6EB5FF] font-semibold">Open</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <button aria-label="Assistant" className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg border border-slate-100 flex items-center justify-center" style={{backgroundColor:'#A1E6B5'}}>
        <span className="text-2xl" aria-hidden>😊</span>
      </button>
    </div>
  )
}

export default Dashboard