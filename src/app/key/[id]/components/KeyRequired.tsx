"use client";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import * as React from "react";

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export function KeyRequired({ keyId }: { keyId: string }) {
	const { toast } = useToast();
	const [value, setValue] = React.useState("");

	const router = useRouter();

	return (
		<div className="space-y-2 m-auto flex flex-wrap gap-4 justify-center">
			<InputOTP
				maxLength={6}
				value={value}
				onChange={(value) => setValue(value)}
				pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
			>
				<InputOTPGroup>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
					<InputOTPSlot index={3} />
					<InputOTPSlot index={4} />
					<InputOTPSlot index={5} />
				</InputOTPGroup>
			</InputOTP>
			<Button
				className="w-full m-3"
				onClick={() => router.push(`/key/${keyId}/${value}`)}
			>
				Validar
			</Button>
		</div>
	);
}
