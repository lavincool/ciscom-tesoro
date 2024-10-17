"use server";

import { fetchRecData } from "./actions";
import { KeyDescription } from "./components/KeyDescription";
import { KeyRequired } from "./components/KeyRequired";

export default async function RenderKeyData({ id }: { id: string }) {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const data: any = await fetchRecData(id);
	if (!data) return null;

	console.log("data: ", data);

	if (data?.errorKey) {
		return <span>{data?.errorKey}</span>;
	}
	if (data?.rows?.length === 0 || data?.rows === undefined) {
		return <span>No hay datos</span>;
	}
	if (data?.rows?.auth_first) {
		return (
			<div className="m-3">
				<KeyDescription description="Ingresa el primer código de este tesoro para obtener el segundo" />
				<KeyRequired keyId={id} />
			</div>
		);
	}
	return (
		<div className="m-3">
			<p className="bg-blue-900 p-3 font-bold text-3xl rounded-md mb-3">
				Tesoro {data?.rows?.tesoro_id}
			</p>

			<p className="border-2 border-blue-400 p-3 rounded-md font-base text-2xl">
				El código 1 es:{" "}
				<span className="font-semibold text-blue-300">{data?.rows?.code}</span>
			</p>
			{data?.rows?.description && (
				<KeyDescription description={data?.rows?.description} />
			)}
		</div>
	);
}
