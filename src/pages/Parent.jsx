import Navbar from '../components/Navbar'

const Bar = ({ label, value }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-slate-700 text-sm">{label}</span>
      <span className="text-slate-700 text-sm font-semibold">{value}%</span>
    </div>
    <div className="h-3 rounded-full bg-slate-100">
      <div className="h-3 rounded-full" style={{width:`${value}%`, background:'#6EB5FF'}} />
    </div>
  </div>
)

const Parent = () => {
  const topics = [
    { name: 'Fractions', diff: 'Easy' },
    { name: 'Photosynthesis', diff: 'Medium' },
    { name: 'Roman Empire', diff: 'Easy' },
  ]

  const recent = [
    { name: 'Math - Fractions.pdf' },
    { name: 'Science - Plants.png' },
    { name: 'History - Romans.pdf' },
  ]

  return (
    <div className="min-h-screen bg-[#F7FBFF]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
        <section className="rounded-[22px] bg-white border border-slate-100 shadow-sm p-6 lg:col-span-2">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Weekly progress</h2>
          <div className="grid gap-4">
            <Bar label="Understanding" value={78} />
            <Bar label="Completion" value={64} />
            <Bar label="Confidence" value={72} />
          </div>
        </section>

        <section className="rounded-[22px] bg-white border border-slate-100 shadow-sm p-6">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Topics solved</h2>
          <ul className="space-y-3">
            {topics.map((t, i) => (
              <li key={i} className="flex items-center justify-between">
                <span className="text-slate-800">{t.name}</span>
                <span className="px-2 py-1 text-xs rounded-full" style={{background:'#EAF7F0', color:'#135d2f'}}>{t.diff}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[22px] bg-white border border-slate-100 shadow-sm p-6 lg:col-span-3">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Recent uploads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((r, i) => (
              <div key={i} className="p-5 rounded-[22px] bg-[#ffffff] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-12 rounded-[14px] bg-[#E5F2FD] flex items-center justify-center text-slate-700">PDF</div>
                  <p className="font-semibold text-slate-900 truncate">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Parent