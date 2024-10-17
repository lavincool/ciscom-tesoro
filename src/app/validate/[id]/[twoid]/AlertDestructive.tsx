"use client";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDestructive() {
	return (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle className="font-semibold">Llave incorrecta</AlertTitle>
			<AlertDescription>Código incorrecto, digitalo de nuevo</AlertDescription>
		</Alert>
	);
}
