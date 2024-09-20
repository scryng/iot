'use client'
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Perfomance {
    id: number;
    step: string;
    cycletime: string;
    quantity: number;
    rating: string;
    energy: string;
}

export default function DashDataTable() {
    const [performance, setPerfomance] = useState<Perfomance[]>([]);

    useEffect(() => {
        const data: Perfomance[] = [
            { id: 1, step: "Produção", cycletime: "5s", quantity: 10, rating: "5%", energy: "5 Wh" },
            { id: 2, step: "Montagem", cycletime: "7s", quantity: 8, rating: "4%", energy: "7 Wh" },
            { id: 3, step: "Embalagem", cycletime: "3s", quantity: 12, rating: "6%", energy: "4 Wh" },
            { id: 4, step: "Inspeção", cycletime: "6s", quantity: 9, rating: "3%", energy: "6 Wh" },
            { id: 5, step: "Produção", cycletime: "4s", quantity: 11, rating: "7%", energy: "5 Wh" },
            { id: 6, step: "Montagem", cycletime: "5s", quantity: 10, rating: "5%", energy: "6 Wh" },
            { id: 7, step: "Embalagem", cycletime: "8s", quantity: 7, rating: "4%", energy: "8 Wh" },
            { id: 8, step: "Inspeção", cycletime: "4s", quantity: 10, rating: "6%", energy: "5 Wh" },
            { id: 9, step: "Produção", cycletime: "9s", quantity: 6, rating: "3%", energy: "7 Wh" },
            { id: 10, step: "Montagem", cycletime: "6s", quantity: 9, rating: "4%", energy: "6 Wh" },
            { id: 11, step: "Embalagem", cycletime: "7s", quantity: 8, rating: "5%", energy: "6 Wh" },
            { id: 12, step: "Inspeção", cycletime: "5s", quantity: 10, rating: "4%", energy: "5 Wh" },
            { id: 13, step: "Produção", cycletime: "6s", quantity: 8, rating: "6%", energy: "7 Wh" },
            { id: 14, step: "Montagem", cycletime: "7s", quantity: 9, rating: "3%", energy: "8 Wh" },
            { id: 15, step: "Embalagem", cycletime: "4s", quantity: 11, rating: "5%", energy: "5 Wh" },
            { id: 16, step: "Inspeção", cycletime: "6s", quantity: 7, rating: "4%", energy: "6 Wh" },
            { id: 17, step: "Produção", cycletime: "5s", quantity: 9, rating: "5%", energy: "5 Wh" },
            { id: 18, step: "Montagem", cycletime: "4s", quantity: 10, rating: "6%", energy: "4 Wh" },
            { id: 19, step: "Embalagem", cycletime: "3s", quantity: 12, rating: "7%", energy: "4 Wh" },
            { id: 20, step: "Inspeção", cycletime: "7s", quantity: 8, rating: "3%", energy: "7 Wh" }
        ];

        setPerfomance(data);
    }, []);

    return (
        <div className="card">
            <DataTable value={performance} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="ID"></Column>
                <Column field="step" header="Etapa"></Column>
                <Column field="cycletime" header="Tempo de ciclo"></Column>
                <Column field="quantity" header="Quantidade"></Column>
                <Column field="rating" header="Taxa de defeito"></Column>
                <Column field="energy" header="Consumo energético"></Column>
            </DataTable>
        </div>
    );
}