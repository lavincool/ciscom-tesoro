import { Suspense } from "react";
import RenderKeyDatax from "./RenderKeyDatax";
import { LoadingSpinner } from "@/components/ui/LadingSpinner";
import React from "react";

export default async function Page(props: {
	params: Promise<{ id: string; verifyId: string }>;
}) {
	const params = await props.params;
	const { id, verifyId } = params;

	return (
		<div className="max-w-[850px] m-auto center text-center">
			<Suspense
				fallback={
					<div className="flex justify-center mt-5">
						<br />
						<LoadingSpinner />
					</div>
				}
			>
				<RenderKeyDatax id={id || ""} verifyKey={verifyId} />
			</Suspense>
		</div>
	);
}
