import { Suspense } from "react";
import RenderKeyData from "./RenderKeyData";
import { LoadingSpinner } from "@/components/ui/LadingSpinner";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
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
