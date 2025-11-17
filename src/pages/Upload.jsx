import { useState } from 'react'
import Navbar from '../components/Navbar'

const Upload = () => {
  const [file, setFile] = useState(null)

  const handleDrop = (e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f) setFile(f)
  }

  const handleStart = () => {
    window.location.href = '/explain/demo'
  }

  return (
    <div className="min-h-screen bg-[#F7FBFF]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-[22px] bg-white border border-slate-100 shadow-sm p-8">
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Upload your notes or homework</h1>
          <p className="text-slate-600 mb-6">Allowed files: PDF, Image</p>

          <div
            onDragOver={(e)=>e.preventDefault()}
            onDrop={handleDrop}
            className="w-full h-56 rounded-[22px] border-2 border-dashed flex flex-col items-center justify-center text-center p-6 mb-6"
            style={{borderColor:'#CFE7FF', background:'#ffffff'}}
          >
            <div className="text-6xl mb-3" aria-hidden>⬆️</div>
            <p className="text-slate-700 mb-2">Drag and drop your file here</p>
            <input type="file" accept="application/pdf,image/*" onChange={(e)=>setFile(e.target.files?.[0]||null)} className="hidden" id="fileinput" />
            <label htmlFor="fileinput" className="cursor-pointer text-[#6EB5FF] font-semibold">Browse files</label>
          </div>

          {file && (
            <div className="mb-6 p-4 rounded-[16px] bg-[#F7FBFF] border border-slate-100">Selected: {file.name}</div>
          )}

          <div className="flex gap-4">
            <button onClick={handleStart} className="px-6 py-3 rounded-[22px] text-white font-semibold shadow-md" style={{backgroundColor:'#6EB5FF'}}>Start Explaining</button>
            <p className="text-slate-600 self-center">We’ll simplify everything for you.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Upload