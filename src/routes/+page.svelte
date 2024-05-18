<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/off_sound_logo.png';
	import white_mask from '$lib/assets/photo_of_me.jpg';
	import mail from '$lib/assets/mail-open-svgrepo-com.png';
	import linkedin from '$lib/assets/linkedin-svgrepo-com.png';
	import github from '$lib/assets/github-142-svgrepo-com.png';
	import batteries from '$lib/assets/batteries-svgrepo-com.png';
	import {
		Dropdown,
		DropdownItem,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import MediaQuery from 'svelte-media-queries';
	import { page } from '$app/stores';

	let activeClass = 'text-white bg-hush-blue-800 md:text-white-700 md:dark:text-white dark:bg-hush-blue-800';
	$: activeUrl = $page.url.pathname;

</script>

<body class="min-h-screen bg-hush-grey-600 font-redhat">

<Navbar class="bg-hush-grey-600">
	<NavBrand href="{base}/home">

	</NavBrand>
	<div class="flex md:order-2 bg-hush-grey-600">
		<NavHamburger class="text-hush-white bg-hush-grey-600 px-0 pt-0 pb-0 focus:border-hush-grey-600"
									menuClass="bg-clip-border bg-hush-grey-600 px-0 focus:border-hush-grey-600" />
	</div>
	<NavUl {activeUrl} {activeClass} class="order-1 mr-6 ml-6 bg-hush-grey-600"
				 classUl="bg-hush-grey-600 border-hush-blue-800">
		<NavLi class="text-hush-white" href="{base}/">Home</NavLi>
		<NavLi class="text-hush-white" href="{base}/edu">Education</NavLi>
		<NavLi class="text-hush-white" href="{base}/exp">Experience</NavLi>
		<NavLi class="text-hush-white" href="{base}/proj">Projects</NavLi>
	</NavUl>
</Navbar>

<MediaQuery query='(max-width: 768px)' let:matches>
	{#if matches}
		<div>
			<div>
				<img src="{white_mask}"
						 class="translate-y-12 w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
			</div>
			<div class="-translate-y-36 container my-6 mx-auto md:px-6">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div
								class="bg-opacity-5 text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl  font-bold text-hush-blue-500">RICCARDO GENNARO</h2>
								<p class="mb-6 pb-2  text-xl font-bold text-hush-white dark:text-hush-white">
									<span class="text-hush-blue-500"> not </span> your average CompSci student
								</p>
								<p class="mb-6 pb-2  text-hush-white dark:text-hush-white">
									Computer Science Tutor @ NEST Trento | EIT Cybersecurity master student
								</p>
								<div class="mb-6 flex flex-wrap">

									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{mail}" alt="mail_logo"> riccardo.gennaro@studenti.unitn.it
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{linkedin}" alt="mail_logo"> <a href="https://www.linkedin.com/in/riccardo-gennaro/">riccardo-gennaro</a>
										</p>
									</div>
									<div class="mb-4 w-full md:w-6/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{github}" alt="mail_logo"> <a href="https://github.com/lallo-unitn">lallo-unitn</a>
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{batteries}" alt="mail_logo"> Batteries included
										</p>
									</div>
								</div>
							</div>
						</div>
						<MediaQuery query='(min-width: 769px)' let:matches>
							{#if matches}
								<div>
									<img src="{white_mask}"
											 class="w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
								</div>
							{/if}
						</MediaQuery>
					</div>
				</div>
			</div>
		</div>
	{/if}
</MediaQuery>

<MediaQuery query='(min-width: 769px)' let:matches>
	{#if matches}
		<div class="container my-6 mx-auto md:px-6">
			<section class="mb-32">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div
								class="bg-opacity-30 text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl text-hush-blue-500 font-bold">RICCARDO GENNARO</h2>
								<p class="mb-6 pb-2  text-xl font-bold text-hush-white dark:text-hush-white">
									<span class="text-hush-blue-500"> not </span> your average CompSci student
								</p>
								<p class="mb-6 pb-2  text-hush-white dark:text-hush-white">
									Computer Science Tutor @ NEST Trento | EIT Cybersecurity master student
								</p>
								<div class="mb-6 flex flex-wrap">

									<div class="mb-4 w-full md:w-6/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{mail}" alt="mail_logo"> riccardo.gennaro@studenti.unitn.it
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
												<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{linkedin}" alt="mail_logo"> <a href="https://www.linkedin.com/in/riccardo-gennaro/">riccardo-gennaro </a>
										</p>
									</div>
									<div class="mb-4 w-full md:w-6/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{github}" alt="mail_logo"> <a href="https://github.com/lallo-unitn">lallo-unitn</a>
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{batteries}" alt="mail_logo"> Batteries included
										</p>
									</div>
								</div>
							</div>
						</div>
						<MediaQuery query='(min-width: 769px)' let:matches>
							{#if matches}
								<div>
									<img src="{white_mask}"
											 class="w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
								</div>
							{/if}
						</MediaQuery>
					</div>
				</div>
				<!-- Jumbotron -->
			</section>
			<!-- Section: Design Block -->
		</div>
	{/if}
</MediaQuery>


</body>
<style>

  body {
    margin: 0;
    height: 100%;
  }
</style>