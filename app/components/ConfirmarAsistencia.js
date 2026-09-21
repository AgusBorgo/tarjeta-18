"use client";

import { useState } from "react";

const TELEFONO = "5491100000000";

export default function ConfirmarAsistencia() {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [restricciones, setRestricciones] = useState("");

  const mensaje = `¡Hola! Soy ${nombre.trim()} y confirmo mi asistencia a los 18 de Juanse. Vamos ${cantidad} ${cantidad === 1 ? "persona" : "personas"}. ${restricciones ? `Información adicional: ${restricciones}` : ""}`;
  const link = `https://wa.me/${5491169455966}?text=${encodeURIComponent(mensaje)}`;

  const datosValidos = nombre.trim() !== "" && cantidad >= 1;

  return (
    <div className="mt-10 w-full max-w-sm flex flex-col gap-3 text-left">
      <h3 className="text-xl font-semibold text-center">Confirmá tu asistencia</h3>

      <label className="text-sm">Tu nombre</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ej: Juanse"
        className="rounded-lg p-3 bg-white text-black"
      />

      <label className="text-sm">¿Cuántos van (contándote a vos)?</label>
      <input
        type="number"
        min="1"
        max="10"
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
        className="rounded-lg p-3 bg-white text-black"
      />

      <label className="text-sm">¿Alguien de ellos tiene alguna restricción alimentaria? Aclarar quien y cual.</label>
      <input
        type="text"
        value={restricciones}
        onChange={(e) => setRestricciones(e.target.value)}
        placeholder="Ej: Si, Juanse es vegano"
        className="rounded-lg p-3 bg-white text-black"
      />

      <button
        onClick={() => window.open(link, "_blank")}
        disabled={!datosValidos}
        className="mt-2 rounded-lg p-3 font-bold bg-green-500 disabled:opacity-40"
      >
        Confirmar por WhatsApp
      </button>
    </div>
  );
}