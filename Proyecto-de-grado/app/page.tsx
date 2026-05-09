"use client";
// Jhonattan Reyes - Revision de codigo
import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("Docente");
  const [logged, setLogged] = useState(false);
  const [view, setView] = useState("inicio");
  const [name, setName] = useState("");

  const today = new Date().toLocaleDateString();

  if (!logged) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow w-80 space-y-4">
          <h2 className="text-xl font-bold text-center">Login</h2>

          <input
            className="border p-2 w-full rounded"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-2 w-full rounded"
            placeholder="Email"
          />

          <input
            className="border p-2 w-full rounded"
            type="password"
            placeholder="Contraseña"
          />

          <select
            className="border p-2 w-full rounded"
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Docente</option>
            <option>Coordinador</option>
            <option>Administrador</option>
          </select>

          <button
            onClick={() => setLogged(true)}
            className="bg-[#1F3864] hover:bg-blue-800 text-white w-full p-2 rounded"
          >
            Ingresar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* MENÚ */}
      <div className="w-64 bg-[#1F3864] text-white p-4 space-y-2">
        <h1 className="font-bold text-lg mb-4">Asistencia</h1>

        <button
          className="block w-full text-left hover:bg-blue-700 p-2 rounded"
          onClick={() => setView("inicio")}
        >
          Inicio
        </button>

        {role === "Docente" && (
          <button
            className="block w-full text-left hover:bg-blue-700 p-2 rounded"
            onClick={() => setView("asistencia")}
          >
            Asistencia
          </button>
        )}

        {role === "Coordinador" && (
          <button
            className="block w-full text-left hover:bg-blue-700 p-2 rounded"
            onClick={() => setView("alertas")}
          >
            Alertas
          </button>
        )}

        {(role === "Administrador" || role === "Coordinador") && (
          <button
            className="block w-full text-left hover:bg-blue-700 p-2 rounded"
            onClick={() => setView("reportes")}
          >
            Reportes
          </button>
        )}

        {role === "Administrador" && (
          <button
            className="block w-full text-left hover:bg-blue-700 p-2 rounded"
            onClick={() => setView("usuarios")}
          >
            Usuarios
          </button>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 p-6 bg-gray-50">
        {view === "inicio" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Bienvenido, {name || role}
            </h2>

            <p className="text-gray-600">
              Hoy es: {today}
            </p>

            <p className="text-gray-600 mt-2">
              Sistema de gestión de asistencia estudiantil.
            </p>

            {/* DASHBOARD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Asistencia Hoy</h3>
                <p className="text-2xl font-bold text-green-600">95%</p>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Ausencias</h3>
                <p className="text-2xl font-bold text-red-500">5</p>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Tardanzas</h3>
                <p className="text-2xl font-bold text-yellow-500">3</p>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded shadow">
              <p>
                Usa el menú lateral para gestionar asistencia, ver alertas y generar reportes.
              </p>
            </div>
          </div>
        )}

        {view === "asistencia" && (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Registro de Asistencia
            </h2>

            {["Juan", "Ana", "Luis"].map((e) => (
              <div
                key={e}
                className="flex justify-between items-center bg-white p-3 rounded shadow mb-2"
              >
                <span>{e}</span>

                <select className="border p-1 rounded">
                  <option>Presente</option>
                  <option>Ausente</option>
                  <option>Tardanza</option>
                  <option>Excusa</option>
                </select>
              </div>
            ))}
          </div>
        )}

        {view === "alertas" && (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Alertas de Ausentismo
            </h2>

            <div className="bg-white p-3 rounded shadow mb-2 text-red-500">
              Juan - 5 faltas
            </div>

            <div className="bg-white p-3 rounded shadow mb-2 text-yellow-500">
              Ana - 3 faltas
            </div>
          </div>
        )}

        {view === "reportes" && (
          <h2 className="text-xl font-bold">
            Reportes (próximamente)
          </h2>
        )}

        {view === "usuarios" && (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Gestión de Usuarios
            </h2>

            <button className="bg-[#1F3864] text-white p-2 rounded">
              Crear usuario
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
