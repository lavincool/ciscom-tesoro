"use server";

import { neon } from "@neondatabase/serverless";

export const fetchRecData = async (keyId: string, verifyId: string) => {
	const sql = neon(process.env.DATABASE_URL || "");

	const rows =
		await sql`SELECT id, tesoro_id, code FROM tesoro.keys WHERE id = ${keyId} AND auth_first = ${verifyId}`;

	console.log("READING DATA", rows);

	return { rows: rows[0] };
};

export const fetchTesoroName = async (keyId: string) => {
	const sql = neon(process.env.DATABASE_URL || "");

	const rows = await sql`SELECT tesoro_id FROM tesoro.keys WHERE id = ${keyId}`;

	console.log("READING DATA", rows);

	return { rows: rows[0] };
};
