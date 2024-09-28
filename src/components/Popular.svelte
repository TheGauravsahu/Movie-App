<script>
	export let movies = [];
</script>

<div>
	<h1>Popular Movies</h1>
	<div class="card-wrapper">
		{#if movies.length > 0}
			{#each movies as movie}
				<a href={`/movie/${movie.imdbID}`} aria-label={`View details for ${movie.Title}`}>
					<div class="card">
						<img src={movie.Poster} alt={movie.Title} />
						<p class="title">{movie.Title}</p>
						<p class="year">{movie.Year}</p>
						<p class="type">{movie.Type}</p>
					</div>
				</a>
			{/each}
		{:else}
			<div class="spinner-wrapper">
				<div class="spinner"></div>
			</div>
		{/if}
	</div>
</div>

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

	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 8px solid #f3f3f3;
		border-top: 8px solid #3498db;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		animation: spin 1s linear infinite;
		margin: 20px auto;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
