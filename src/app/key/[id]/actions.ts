"use server";

import { neon } from "@neondatabase/serverless";

export const fetchRecData = async (keyId: string) => {
	const sql = neon(process.env.DATABASE_URL || "");

	const rows =
		await sql`SELECT id, auth_first, tesoro_id, code, description FROM tesoro.keys WHERE id = ${keyId}`;

	console.log("READING DATA", rows);

	return { rows: rows[0] };
};
