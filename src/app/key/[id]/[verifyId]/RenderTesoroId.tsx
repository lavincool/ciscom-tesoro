import { fetchTesoroName } from "./actions";

export default async function RenderTesoroId({ id }: { id: string }) {
	console.log("getting this shit");
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const data: any = await fetchTesoroName(id);

	return (
		<p className="bg-blue-900 p-3 font-bold text-3xl rounded-md mb-3">
			Tesoro {data?.rows?.tesoro_id}
		</p>
	);
}
