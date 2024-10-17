import Image from "next/image";
import { Tesoro } from "./components/Tesoso";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center m-auto">
        <Image
          src="https://devcloud.raza.cool/ciscom/tesoro/logo_png.png"
          alt="CISCOM logo"
          width={256}
          height={256}
          className="m-auto"
          priority
        />
        <ol className="list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Sigue las pistas y obten los códigos. 
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              (Guardalos)
            </code>
          </li>
          <li className="mb-2">Dale click donde dice <b>abrir cofre</b> e ingresa los dós códigos para obtener el tesoro</li>
        </ol>

        <Tesoro/>

        <br/>
      </main>
    </div>
  );
}
