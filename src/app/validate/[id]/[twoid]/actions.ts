"use server";

import { neon } from "@neondatabase/serverless";

export const fetchRecData = async (keyId: string, verifyId: string) => {
	const sql = neon(process.env.DATABASE_URL || "");

	const rows =
		await sql`SELECT id, tesoro_id, code FROM tesoro.keys WHERE code = ${verifyId} AND auth_first = ${keyId}`;
	console.log("VALIDATING DATA", rows);

	return { rows: rows[0] };
};
