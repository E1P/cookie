import 'dotenv/config';

export async function get() {
	const jwtKey = process.env.AUDIO_AUCTION_JWT_KEY;
	const databaseUrl = process.env.DATABASE_URL;

	return {
		body: {
			jwtKey,
			databaseUrl
		}
	};
}
