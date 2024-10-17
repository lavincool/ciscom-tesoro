import Image from "next/image";
import { Tesoro } from "./components/Tesoso";

export default function Home() {
	return (
		<div className="grid grid-rows-[10px_1fr_10x] items-center justify-items-center min-h-screen p-8 pt-0 pb-10 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-2 items-center m-auto mt-4">
				<h1 className="center text-center text-lg mb-4 mt-[-20px]">
					Capítulo de Ingenieria en Sistemas Computacionales{" "}
					<p className="font-semibold text-yellow-400 mt-6">
						~ Busqueda del tesoro ~
					</p>
				</h1>
				<ol className="list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li className="mb-4">
						Sigue las pistas, escanea los QR y obten los códigos.
						<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
							(Guárdalos)
						</code>
					</li>
					<li className="mb-4">
						Dale click donde dice <b>abrir cofre</b> e ingresa los dós códigos
						para obtener el tesoro
					</li>
				</ol>

				<Tesoro />

				<br />
			</main>
		</div>
	);
}
