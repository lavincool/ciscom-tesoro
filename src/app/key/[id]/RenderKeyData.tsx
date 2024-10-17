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
			{data?.rows?.description && (
				<KeyDescription description={data?.rows?.description} />
			)}

			<p>El código es: {data?.rows?.code}</p>
			<p>Tesoro número {data?.rows?.tesoro_id}</p>
			<p>Necesita validación: {data?.rows?.auth_first ? "Si" : "No"}</p>
		</div>
	);
}
