"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomeButton() {
	const router = useRouter();

	return (
		<div className="flex justify-center">
			<Button onClick={() => router.push("/")}>Regresar al inicio</Button>
		</div>
	);
}
