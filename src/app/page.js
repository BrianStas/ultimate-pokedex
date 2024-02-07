import Link from 'next/link'

export default function Home() {
  return (
    
    
    <main className = "grid grid-cols-3 gap-6 grid-flow-col ">
    <Link href="/Pokedex" className='bg-marian-blue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-center'>Browse by Pokedex</Link>
    <Link href="/Pokemon" className='bg-flourescent-cyan hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded text-center'>Browse by Type</Link>
    <Link href="/Pokemon" className='bg-kelly-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center'>Browse Alphabetically</Link>
    
    </main>
    
  )
}
