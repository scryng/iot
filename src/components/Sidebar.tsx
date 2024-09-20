'use client'
import '../styles/styles.css';
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Sidebar() {

  return (
      <aside className="sidebar">
        <Image
          src="/images/logotipo.png"
          width={100} // Resolução da Imagem
          height={100}
          className="w-full mb-4 rounded-lg"
          alt="Logotipo"
        />

        <Navbar />
      </aside>
  );
}