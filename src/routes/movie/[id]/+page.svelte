<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';

	let movie;
	export let data;

	onMount(() => {
		movie = data.movie;
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
			<div
				class="left"
				transition:slide={{ delay: 250, duration: 400, axis: 'x', easing: quintIn }}
			>
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
		<p>Loading..</p>
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
