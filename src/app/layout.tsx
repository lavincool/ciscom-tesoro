import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const exo2 = Exo_2({
	weight: ["200", "300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Tesoro - CISCOM",
	description:
		"Busqueda de tesoros del capítulo de Ingeniería en Sistemas Computacionales",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es-MX" className="dark bg-black">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body
				className={`${exo2.className} text-white dark text-foreground bg-background`}
			>
				<a href="/">
					<Image
						src="https://devcloud.raza.cool/ciscom/tesoro/logo_png.png"
						alt="CISCOM logo"
						width={256}
						height={256}
						className="m-auto"
						priority
					/>
				</a>
				{children}
			</body>
		</html>
	);
}
