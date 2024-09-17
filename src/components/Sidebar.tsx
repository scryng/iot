'use client'

import Link from "next/link";
import '../styles/styles.css';
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div>
      <nav className="navbar">
        <Link href="/" className={`navlink ${pathname === '/' ?'active':''}`}>Home</Link>
        <Link href="/users" className={`navlink ${pathname === '/users' ?'active':''}`}>Usuários</Link>
        <Link href="/sensors" className={`navlink ${pathname === '/sensors' ?'active':''}`}>Sensores</Link>
        <Link href="/reports" className={`navlink ${pathname === '/reports' ?'active':''}`}>Relatórios</Link>
      </nav>
    </div>
  );
}