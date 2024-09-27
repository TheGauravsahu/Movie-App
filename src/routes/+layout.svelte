<script>
	import '@picocss/pico';
	import '../app.css';
	import '@fontsource-variable/manrope';

</script>

<nav>
	<ul>
		<li><strong><a class="Logo" href="/">Movie App</a></strong></li>
	</ul>
	<ul>
		<li><a href="/about">About</a></li>
		<li><a target="_blank" href="https://github.com/TheGauravsahu">Github</a></li>
		<li><a target="_blank" href="https://gauravsahu.vercel.app/">Gaurav Sahu</a></li>
	</ul>
</nav>

<slot />

<footer>
	<p>&copy; 2024 Movie App. All rights reserved.</p>
</footer>

<style>
	nav {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 100;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		padding: 0 8vw;
	}

  footer p{
    text-align: center;
    color: #666;
    padding-bottom: 8vw;
  }

  .Logo{
	text-decoration: none;
	color: white;
	font-size: 2vw;
  }
</style>
