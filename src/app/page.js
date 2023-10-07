import Link from 'next/link'

export default function Home() {
  return (
    <body>
    <header>
    <h1>Ultimate Pokedex</h1>
    <p>built using PokeAPI and the genius of Brian Stasiukaitis</p>
    </header>
    <main>
    <Link href="/Pokedex" className=''>Browse by Pokedex</Link>
    <Link href="/Pokemon" className=''>Browse by Type</Link>
    <Link href="/Pokemon" className=''>Browse Alphabetically</Link>
    
    </main>
    </body>
  )
}
