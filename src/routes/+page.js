export const load = async ({ fetch }) => {
	try {

		const res = await fetch('https://www.omdbapi.com/?s=toy&apikey=bb7b3d02');
		const movies = await res.json();
		return {
			movies
		};
	} catch (error) {
		console.log(error);
	}
};
