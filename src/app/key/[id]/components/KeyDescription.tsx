import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function KeyDescription({ description }: { description: string }) {
	return (
		<Alert className="mb-8">
			<Terminal className="h-4 w-4" />
			<AlertTitle className="text-start text-base font-semibold">
				Consejo
			</AlertTitle>
			<AlertDescription className="text-lg">{description}</AlertDescription>
		</Alert>
	);
}
