import Countdown from "./components/Countdown";
import ConfirmarAsistencia from "./components/ConfirmarAsistencia";

export default function Home(){
  return(
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white p-6 text-center">
      <p className= "text-lg">Estas invitado a los</p>
      <h1 className="text-8xl font-bold my-4">18</h1>
      <h2 className="text-3xl">de Juanse</h2>
      <p className="mt-6 text-xl">Domingo 13 de Diciembre a las 12h</p>
      <Countdown />
      <ConfirmarAsistencia />
    </main>
  );
}