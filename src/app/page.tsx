import Card from "@/components/Card";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
import LineChart from "@/components/dashboard/LineChart";
import DashDataTable from "@/components/dashboard/DashDataTable";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header title="Página Inicial" username="Gustavo Sousa" />

        {/* Ajustando o main para ocupar o espaço restante */}
        <main className="p-4 flex flex-1 flex-col gap-2">
          <div className="card-top">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="card-bottom">
            {/* <Card /> */}
            <LineChart />
            <DashDataTable />
            {/* <Polar /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
