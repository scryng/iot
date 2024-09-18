import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Report() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header title="Relatórios" username="Gustavo Sousa" />
        <main>
          <h1>Conteúdo Relatórios</h1>
        </main>
      </div>
    </div>
  );
}