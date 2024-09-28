<script>
	import { onMount } from 'svelte';
	import Popular from '../components/Popular.svelte';
	import Search from '../components/Search.svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';

	let movies = [];
	export let data;
	let defaultMovies = [];

	const updateMovies = (newMovies) => {
		movies = newMovies || [];
	};

	const resetMovies = () => {
		movies = defaultMovies;
	};

	onMount(async () => {
		movies = data.movies.Search;
		defaultMovies = movies;
		console.log(data.movies);
	});
</script>

<section>
	<Search searchMovies={updateMovies} {resetMovies} />
	<!-- Popular -->
	<div>
		<h1>Popular Movies</h1>
		<div class="card-wrapper">
			{#each movies as movie}
				<a href={`/movie/${movie.imdbID}`} aria-label={`View details for ${movie.Title}`}>
					<div
						class="card"
						transition:fly={{ delay: 250, duration: 300, axis: 'x', easing: cubicIn }}
					>
						<img src={movie.Poster} alt={movie.Title} />
						<p class="title">{movie.Title}</p>
						<p class="year">{movie.Year}</p>
						<p class="type">{movie.Type}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	h1 {
		margin: 2vh 0;
		margin-top: 2vw;
	}
	.card-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
	}

	img {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		height: 300px;
		width: 100%;
		object-fit: cover;
	}

	.card {
		width: 15rem;
		margin: 10px;
		border: 1px solid #ccc;
		border-radius: 10px;
		box-shadow: 1px;
		padding-bottom: 10px;
		text-align: center;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	@media (max-width: 768px) {
		.card-wrapper {
			align-items: center;
			justify-content: center;
		}
	}

	.card:hover {
		transform: scale(1.05);
		cursor: pointer;
		box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
	}

	.title {
		margin-top: 5px;
		margin-bottom: 0;
		font-weight: bold;
		color: white;
	}

	.year {
		margin-top: 0;
		margin-bottom: 0;
		font-size: 0.9rem;
		color: #c9d5e1;
	}
	.type {
		margin-top: 0;
		margin: 0;
		font-size: 0.9rem;
		color: #c9d5e1;
	}

	a {
		text-decoration: none;
		color: white;
	}
</style>
