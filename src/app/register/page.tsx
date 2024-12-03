"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError("Todos os campos são obrigatórios");
            return;
        }
        setError("");

        const url = 'https://profandresouza.pythonanywhere.com/api/users/register/';
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                setSuccess("Registro realizado com sucesso!");
                setFormData({ username: "", email: "", password: "" });
            }
        } catch (err: any) {
            if (err.response) {
                setError(err.response.data.detail || "Erro ao registrar, tente novamente.");
            } else {
                setError("Erro de conexão, tente novamente.");
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuário
                    <input
                        type="text"
                        name="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label><br />
                <label htmlFor="email">Email
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label><br />
                <label htmlFor="password">Senha
                    <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label><br />
                <input type="submit" value="Enviar" />
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
}
