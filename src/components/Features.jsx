const features = [
  {
    title: 'Upload notes',
    desc: 'Add your school notes or homework in seconds. We support PDFs and images.',
    emoji: '📄'
  },
  {
    title: 'Simple explanations',
    desc: 'We break things into short, friendly steps that are easy to follow.',
    emoji: '✨'
  },
  {
    title: 'Visual learning',
    desc: 'Helpful diagrams and highlights make ideas clearer without clutter.',
    emoji: '🧠'
  }
]

const Features = () => {
  return (
    <section className="bg-[#F7FBFF] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-[22px] bg-white border border-slate-100 shadow-sm shadow-sky-100/40 p-6">
              <div className="text-3xl mb-3" aria-hidden>{f.emoji}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
