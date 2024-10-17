"use server";

import { fetchRecData } from "./actions";

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
	return (
		<div>
			<p>El código es: {data?.rows?.code}</p>
			<p>Tesoro número {data?.rows?.tesoro_id}</p>
			<p>Necesita validación: {data?.rows?.auth_first ? "Si" : "No"}</p>
		</div>
	);
}
