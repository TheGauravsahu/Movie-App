<script>
	let searchQuery = '';
	export let searchMovies;
	export let resetMovies;

	const handleSubmit = async (event) => {
		if (searchQuery.trim() === '') {
			resetMovies();
			return;
		}
		try {
			const res = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=bb7b3d02`);
			const data = await res.json();
			console.log(data);
			searchMovies(data.Search);
		} catch (error) {
			console.log(error);
		}
	};

	const handleReset = () => {
		searchQuery = '';
		resetMovies;
	};
</script>

<label class="input input-bordered">
	<form class="input" on:submit|preventDefault={handleSubmit}>
		<input type="text" class="search-input" placeholder="Search" bind:value={searchQuery} />
		<div class="btn-warapper">
			<button type="submit" class="btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="icon"
				>
					<path
						fill-rule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<button on:click={handleReset} class="btn2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
				>
			</button>
		</div>
	</form>
</label>

<style>
	.input {
		width: 80%;
		display: flex;
		align-items: center;
		padding: 0.5rem;
	}

	.search-input {
		flex-grow: 1;
		border: none;
		outline: none;
		font-size: 2.5vh;
		padding: 0.5rem;
	}

	.icon {
		height: 1em;
		width: 1rem;
		opacity: 0.7;
		margin-left: 0.5rem;
	}

	.btn {
		width: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 0.5rem;
	}
	.btn2 {
		background-color: red;
		width: 70px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 0.5rem;
	}

	.btn-warapper {
		display: flex;
		align-items: start;
		justify-content: center;
		gap: 1px;
	}

	@media (max-width: 768px) {
		.input {
			width: 100%;
		}
	}
</style>
