import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function User() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header title="Usuários" username="Gustavo Sousa" />
        <main>
          <h1>Lista dos usuários</h1>
        </main>
      </div>
    </div>
  );
}