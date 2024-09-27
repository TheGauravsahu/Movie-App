<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let id;
	let movie;

	$: id = $page.params.id;

	onMount(async () => {
		if (id) {
			try {
				const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=bb7b3d02`);
				const data = await res.json();
				console.log(data);

				if (data.Response === 'True') {
					movie = data;
				} else {
					console.error('Movie not found:', data.Error);
				}
			} catch (error) {
				console.log('Fetch error:', error);
			}
		}
	});
</script>

<section>
	<h1>Movie Information</h1>
	{#if movie}
		<!-- Check if movie data exists -->
		<div class="movie-wrapper">
			<div class="right">
				<img src={movie.Poster} alt={movie.Title} class="" />
			</div>
			<div class="left">
				<li class="title">{movie.Title}</li>
				<li class="year">Year: {movie.Year}</li>
				<li class="rated">Rated: {movie.Rated}</li>
				<li class="released">Released: {movie.Released}</li>
				<li class="runtime">Runtime: {movie.Runtime}</li>
				<li class="genre">Genre: {movie.Genre}</li>
				<li class="director">Director: {movie.Director}</li>
				<li class="writer">Writer: {movie.Writer}</li>
				<li class="actors">Actors: {movie.Actors}</li>
				<br />
				<li class="plot">Plot: {movie.Plot}</li>
				<br />
				<li class="language">Language: {movie.Language}</li>
				<li class="country">Country: {movie.Country}</li>
				<br />
				<li class="awards">Awards: {movie.Awards}</li>
				<li class="metascore">Metascore: {movie.Metascore}</li>
				<li class="imdbRating">IMDb Rating: {movie.imdbRating}</li>
				<li class="imdbVotes">IMDb Votes: {movie.imdbVotes}</li>
				<li class="boxOffice">Box Office: {movie.BoxOffice}</li>
			</div>
		</div>
	{:else}
		<div class="spinner-wrapper">
			<div class="spinner"></div>
		</div>
	{/if}
</section>

<style>
	.movie-wrapper {
		display: flex;
		align-items: start;
		gap: 2vw;
		margin-top: 4vh;
	}

	.right {
		width: 30%;
	}

	img {
		width: 100%;
		object-fit: cover;
	}

	.left {
		width: 65%;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	li {
		list-style-type: none;
		text-decoration: none;
	}
	.title {
		margin-top: 5px;
		margin-bottom: 0;
		text-decoration: none;
		color: white;
		font-size: 4.5vh;
	}

	.year {
		margin-top: 0;
		margin-bottom: 0;
		font-size: 0.9rem;
		color: #c9d5e1;
	}

	.spinner {
		border: 8px solid #f3f3f3; /* Light gray */
		border-top: 8px solid #3498db; /* Blue */
		border-radius: 50%;
		width: 50px;
		height: 50px;
		animation: spin 1s linear infinite;
		margin: 20px auto; /* Center the spinner */
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.spinner-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 768px) {
		.movie-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.title {
			font-size: 2.5vh;
		}

		.right {
			width: 100%;
		}

		img {
			width: 100%;
			object-fit: cover;
		}

		.left {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 4px;
		}
	}
</style>
