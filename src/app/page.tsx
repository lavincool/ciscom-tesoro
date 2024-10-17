import Image from "next/image";

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

        <div className="flex gap-4 items-center">
          <div className="border-4 p-3 rounded-md border-yellow-400 m-auto">
            <a
              className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-yellow-600 py-8 text-white text-2xl gap-2 sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold">
              ABRIR TESORO
              </p>
            </a>
            <Image
              src="https://devcloud.raza.cool/ciscom/tesoro/tesoro.png"
              alt="Next.js logo"
              width={256}
              height={256}
              className="m-auto border-6"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
