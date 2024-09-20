import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Sensor() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header title="Sensores" username="Gustavo Sousa" />
        <main>
          <h1>Conteúdo Sensores</h1>
        </main>
      </div>
    </div>
  );
}