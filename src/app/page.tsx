import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header title="Página Inicial" username="Gustavo Sousa" />
        <main>
          <h1>Conteúdo da página inicial</h1>
        </main>
      </div>
    </div>
  );
}