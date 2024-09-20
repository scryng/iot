import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import UserCard from "@/components/UserCard";

export default function User() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Usuários" username="Gustavo Sousa" />
        <main className="p-4 flex flex-1 flex-col gap-4">
          <UserCard />
        </main>
      </div>
    </div>
  );
}
