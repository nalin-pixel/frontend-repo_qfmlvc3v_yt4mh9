import Navbar from '../components/Navbar'

const Step = ({ n, text }) => (
  <div className="rounded-[22px] bg-white border border-slate-100 shadow-sm p-6 flex items-start gap-4">
    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-extrabold text-white shrink-0" style={{backgroundColor:'#6EB5FF'}}>{n}</div>
    <div>
      <p className="text-slate-900 text-lg leading-relaxed">{text}</p>
    </div>
  </div>
)

const Explain = () => {
  return (
    <div className="min-h-screen bg-[#F7FBFF]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Assignment: Fractions Basics</h1>

        <div className="grid gap-4 mb-8">
          <Step n={1} text="A fraction has two parts: the top (numerator) and bottom (denominator)." />
          <Step n={2} text="The denominator tells how many equal parts make a whole. The numerator tells how many parts you have." />
          <Step n={3} text="If a pizza is cut into 4 equal slices, each slice is 1/4 of the pizza." />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-3 rounded-[22px] font-semibold text-slate-800 bg-white border border-slate-200 shadow-sm">Explain again simpler</button>
          <button className="px-4 py-3 rounded-[22px] font-semibold text-slate-800 bg-white border border-slate-200 shadow-sm">Read aloud</button>
          <button className="px-4 py-3 rounded-[22px] text-white font-semibold shadow-md" style={{backgroundColor:'#A1E6B5'}}>Next step</button>
        </div>
      </main>
    </div>
  )
}

export default Explain