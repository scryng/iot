'use client'
import { useState, useEffect } from "react";
import '../styles/styles.css';

type User = {
  id: number;
  name: string;
  role: string;
  department: string;
  permission: string;
};

export default function UserCard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Mockar os dados dos usuários
    const mockUsers: User[] = [
      { id: 1, name: "Gustavo Sousa", role: "Desenvolvedor", department: "TI", permission: "Admin" },
      { id: 2, name: "Ana Silva", role: "Designer", department: "Criação", permission: "Editor" },
      { id: 3, name: "Lucas Pereira", role: "Analista", department: "Financeiro", permission: "Visualizador" },
      { id: 4, name: "Maria Oliveira", role: "Gerente", department: "Vendas", permission: "Admin" },
      { id: 5, name: "João Santos", role: "Suporte", department: "TI", permission: "Editor" },
      { id: 6, name: "Beatriz Costa", role: "Marketing", department: "Comunicação", permission: "Visualizador" },
      { id: 7, name: "Ricardo Almeida", role: "Desenvolvedor", department: "TI", permission: "Admin" },
      { id: 8, name: "Fernanda Lima", role: "Coordenadora", department: "RH", permission: "Editor" }      
    ];
    setUsers(mockUsers);
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {users.map((user) => (
        <div key={user.id} className="cardUser bg-gray-300 rounded-lg flex flex-col justify-between p-4">
          <div className="userHeader flex flex-col items-center text-white mb-4">
            <div className="userImage w-16 h-16 bg-green-600 rounded-full mb-2"></div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm">{user.role}</p>
          </div>

          <div className="userContent flex flex-col flex-grow justify-between">
            <div className="userData flex flex-col gap-1 text-white items-center">
              <p>ID: {user.id}</p>
              <p>Departamento: {user.department}</p>
              <p>Permissão: {user.permission}</p>
            </div>

            <div className="userActions flex justify-between mt-4">
              <button className="bg-blue-500 text-white py-1 px-2 rounded-lg">Editar</button>
              <button className="bg-red-500 text-white py-1 px-2 rounded-lg">Deletar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
