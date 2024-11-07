<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/body.css">
    <link rel="stylesheet" href="../css/tes.css">
	<link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    {{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"> --}}
    <script src="{{ mix('/js/app.js') }}" defer></script>
	@viteReactRefresh
	@vite('resources/js/app.jsx')
	@inertiaHead
</head>
<body>
<!-- <h2>Slide Down #1</h2> -->
 @inertia
    {{-- <header>
      <div class="logo">RETHRIFT<b>.</b>COMS</div>
		<nav class="nav nav3">
			<ul>
				<li>
					<a href="#">Nav Item</a>
					<ul>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
					</ul>
				</li>
				<li>
					<a href="#">Nav Item</a>
					<ul>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
					</ul>
				</li>
				<li>
					<a href="#">Nav Item</a>
					<ul>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
					</ul>
				</li>
				<li>
					<a href="#">Nav Item</a>
					<ul>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
					</ul>
				</li>
				<li>
					<a href="#">Nav Item</a>
					<ul>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
						<li><a href="#">Subnav Item</a></li>
					</ul>
				</li>
			</ul>
		</nav>
    </header> --}}

    

</div>
</body>
</html>