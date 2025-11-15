// src/components/Header.tsx
import Link from 'next/link'; // O <Link> é o <a> do Next.js

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold text-blue-800">
          Grupo Reunidas
        </Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre Nós</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}