import Link from 'next/link'

export default function Home() {
  return (
    
    
    <main>
    <Link href="/Pokedex" className=''>Browse by Pokedex</Link>
    <Link href="/Pokemon" className=''>Browse by Type</Link>
    <Link href="/Pokemon" className=''>Browse Alphabetically</Link>
    
    </main>
    
  )
}
