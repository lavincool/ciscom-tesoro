import { Suspense } from "react";
import RenderKeyData from "./RenderKeyData";
import { LoadingSpinner } from "@/components/ui/LadingSpinner";
import React from "react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params;

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
				<RenderKeyData id={id || ""} />
			</Suspense>
		</div>
	);
}
