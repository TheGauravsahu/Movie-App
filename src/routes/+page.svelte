<script>
	import { onMount } from 'svelte';``
	import Popular from '../components/Popular.svelte';
	import Search from '../components/Search.svelte';

	let movies = [];
	let defaultMovies = []; 

	const updateMovies = (newMovies) => {
		movies = newMovies || []; // Update movies with new data or set to an empty array
	};

	const resetMovies = () => {
        movies = defaultMovies; // Reset movies to default
    };

	onMount(async () => {
		try {
			const res = await fetch('https://www.omdbapi.com/?s=avenger&apikey=bb7b3d02');
			const data = await res.json();
			console.log(data);
			movies = data.Search;
            defaultMovies = movies;
		} catch (error) {
			console.log(error);
		}
	});
</script>

<section>
	<Search searchMovies={updateMovies}  {resetMovies} />
	<Popular {movies} />
</section>

<style>
</style>
