"use client";

import { useState, useEffect } from "react";

const FECHA_CUMPLE = new Date("2026-12-12T21:00:00-03:00");

function calcularTiempo() {
  const diferencia = FECHA_CUMPLE - new Date();

  if (diferencia <= 0) {
    return { terminado: true };
  }

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  };
}

export default function Countdown() {
  const [tiempo, setTiempo] = useState(null);

  useEffect(() => {
    setTiempo(calcularTiempo());
    const id = setInterval(() => setTiempo(calcularTiempo()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!tiempo) return null;

  if (tiempo.terminado) {
    return <p className="text-3xl mt-8">¡Llegó el día! 🎉</p>;
  }

const cajas = [
  { clave: "dias", valor: tiempo.dias, etiqueta: tiempo.dias === 1 ? "día" : "días" },
  { clave: "horas", valor: tiempo.horas, etiqueta: tiempo.horas === 1 ? "hora" : "horas" },
  { clave: "min", valor: tiempo.minutos, etiqueta: "min" },
  { clave: "seg", valor: tiempo.segundos, etiqueta: "seg" },
];

  return (
    <div className="flex gap-3 mt-8">
      {cajas.map((caja) => (
        <div key={caja.clave} className="bg-white/10 rounded-xl p-3 w-20">
          <p className="text-3xl font-bold">{caja.valor}</p>
          <p className="text-sm">{caja.etiqueta}</p>
        </div>
      ))}
    </div>
  );
}