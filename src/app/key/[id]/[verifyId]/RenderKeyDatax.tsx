"use server";

import { fetchRecData } from "./actions";
import { KeyDescription } from "../components/KeyDescription";
import { KeyRequired } from "../components/KeyRequired";
import { AlertDestructive } from "./AlertDestructive";
import RenderTesoroId from "./RenderTesoroId";

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
				<p className="bg-blue-900 p-3 font-bold text-3xl rounded-md mb-3">
					Tesoro {data?.rows?.tesoro_id}
				</p>

				<RenderTesoroId id={id} />

				<AlertDestructive />
				<br />
				<KeyDescription description="Ingresa el primer código de este tesoro para obtener el segundo" />
				<KeyRequired keyId={id} />
			</div>
		);
	}
	return (
		<div className="m-3">
			<KeyDescription description="Ya tienes los 2 códigos. Ve por el tesoro, presiona el logo de CISCOM coloca los códigos y ve a los S." />
			<p className="bg-blue-900 p-3 font-bold text-3xl rounded-md mb-3">
				Tesoro {data?.rows?.tesoro_id}
			</p>

			<p className="border-2 border-blue-400 p-3 rounded-md font-base text-2xl">
				El código 2 es:{" "}
				<span className="font-semibold text-blue-300">{data?.rows?.code}</span>
			</p>
		</div>
	);
}
