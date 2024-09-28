export const load = async ({ fetch,params }) => {
	try {
		const res = await fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=bb7b3d02`);
		const movie = await res.json();
		return {
			movie
		};
	} catch (error) {
		console.log(error);
	}
};
