"use server";

import { KeyDescription } from "@/app/key/[id]/components/KeyDescription";
import { fetchRecData } from "./actions";
import { AlertDestructive } from "./AlertDestructive";
import HomeButton from "./HomeButton";

export default async function RenderKeyDatax({
	id,
	verifyKey,
}: { id: string; verifyKey: string }) {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const data: any = await fetchRecData(id, verifyKey);

	if (!data) return null;

	console.log("data: ", data);

	if (data?.errorKey) {
		return <span>{data?.errorKey}</span>;
	}

	if (!data?.rows?.code) {
		return (
			<div className="m-3">
				<AlertDestructive />
				<br />
				<HomeButton />
			</div>
		);
	}
	return (
		<div className="m-3">
			<p className="bg-green-900 p-3 font-bold text-3xl rounded-md mb-3">
				Tesoro {data?.rows?.tesoro_id}
			</p>

			<p className="border-2 border-green-400 p-3 rounded-md font-base text-2xl">
				Felicidades, has encontrado el tesoro.
			</p>
		</div>
	);
}
