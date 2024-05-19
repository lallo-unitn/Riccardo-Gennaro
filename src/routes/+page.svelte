<script lang="ts">
	import { base } from '$app/paths';
	import white_mask from '$lib/assets/photo_of_me.jpg';
	import mail from '$lib/assets/mail-open-svgrepo-com.png';
	import linkedin from '$lib/assets/linkedin-svgrepo-com.png';
	import github from '$lib/assets/github-142-svgrepo-com.png';
	import batteries from '$lib/assets/batteries-svgrepo-com.png';
	import utwente from '$lib/assets/university_of_twente_logo.jpeg';
	import utrento from '$lib/assets/universitaditrento_logo.jpeg';
	import liceo from '$lib/assets/logolicei.png';
	import signature from '$lib/assets/signature.png';
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Timeline,
		TimelineItem
	} from 'flowbite-svelte';
	import MediaQuery from 'svelte-media-queries';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { Group, GroupItem } from 'flowbite-svelte';
	let master = [
		{
			title: '<span class="font-medium text-gray-900 dark:text-white">University of Twente</span> ' +
				'<span class="font-medium text-gray-900 dark:text-hush-grey-300"> <br> Mater&#39s Degree, Cybersecurity </span> <br>' +
				'<span class="text-sm font-medium text-gray-900 dark:text-hush-grey-300">Sep 2023 - Sep 2025</span> <br>' +
				'<span class="font-base text-gray-900 dark:text-white">My double degree exit point</span>',
			src: utwente,
			alt: 'utwente',
			href: 'https://www.utwente.nl/en/csc/programme/specializations/cyber-security/',
			isPrivate: false,
			comment: ''
		},
		{
			title: '<span class="font-medium text-gray-900 dark:text-white">University of Trento</span> ' +
				'<span class="font-medium text-gray-900 dark:text-hush-grey-300"> <br> Mater&#39s Degree, Cybersecurity </span> <br>' +
				'<span class="text-sm font-medium text-gray-900 dark:text-hush-grey-300">Sep 2023 - Sep 2025</span> <br>' +
				'<span class="base text-gray-900 dark:text-white">My double degree entry point</span>',
			src: utrento,
			alt: 'utrento',
			href: 'https://offertaformativa.unitn.it/en/lm/computer-science/cyber-security',
			isPrivate: false,
			comment: ''
		}
	];

	let bachelor = [
		{
			title: '<span class="font-medium text-gray-900 dark:text-white">University of Trento</span> ' +
				'<span class="font-medium text-gray-900 dark:text-hush-grey-300"> <br> Bachelor&#39s Degree, Computer Science </span> <br>' +
				'<span class="text-sm font-medium text-gray-900 dark:text-hush-grey-300">Sep 2019 - Dec 2022</span> <br>' +
				'<span class="base text-gray-900 dark:text-white">Grade: 101/110<br>',
			src: utrento,
			alt: 'utrento',
			href: 'https://international.unitn.it/ict/bachelor-in-computer-science',
			isPrivate: false,
			comment: 'Just a point from full marks! You know... 110-101=1'
		}
	];

	let high_school = [
		{
			title: '<span class="font-medium text-gray-900 dark:text-white">Liceo Gian Giorgio Trissino</span> ' +
				'<span class="font-medium text-gray-900 dark:text-hush-grey-300"> <br> Liceo Scientifico Tecnologico </span> <br>' +
				'<span class="text-sm font-medium text-gray-900 dark:text-hush-grey-300">Sep 2014 - Jun 2019</span> <br>',
			src: liceo,
			alt: 'liceo',
			href: 'https://liceivaldagno.edu.it/',
			isPrivate: false,
			comment: 'Possibly the strangest years of my life'
		}
	];



	let activeClass = 'text-white bg-hush-blue-800 md:text-white-700 md:dark:text-white dark:bg-hush-blue-800';
	$: activeUrl = $page.url.pathname;

</script>

<body class="min-h-screen bg-hush-grey-600 font-redhat">

<Navbar class="bg-hush-grey-600 dark:bg-hush-grey-600">
	<NavBrand href="{base}/home">
		<!-- Brand logo or text can be placed here -->
		<img src="{signature}" alt="signature">
	</NavBrand>
	<div class="flex md:order-2 bg-hush-grey-600">
		<NavHamburger class="text-hush-white bg-hush-grey-600 px-0 pt-0 pb-0 focus:border-hush-grey-600"
									menuClass="bg-clip-border bg-hush-grey-600 px-0 focus:border-hush-grey-600" />
	</div>
	<NavUl {activeUrl} {activeClass} class="order-1 mx-auto bg-hush-grey-600"
				 classUl="bg-hush-grey-600 border-hush-blue-800">
		<NavLi class="text-hush-white" href="{base}/">Home</NavLi>
		<NavLi class="text-hush-white" href="{base}/#exp">Experience</NavLi>
		<NavLi class="text-hush-white" href="{base}/#edu">Education</NavLi>
		<NavLi class="text-hush-white" href="{base}/#proj">Projects</NavLi>
	</NavUl>
</Navbar>

<MediaQuery query='(max-width: 768px)' let:matches>
	{#if matches}
		<div class="container my-2 mx-auto px-4" id="top">
			<div>
				<img src="{white_mask}" class="translate-y-12 w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
			</div>
			<div class="-translate-y-6 container my-6 mx-auto px-4">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div class="bg-opacity-5 text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl font-bold text-hush-blue-500">RICCARDO GENNARO</h2>
								<p class="mb-6 pb-2 text-xl font-bold text-hush-white dark:text-hush-white">
									<span class="text-hush-blue-500"> ! </span> your average CompSci student
								</p>
								<p class="mb-6 pb-2 text-hush-white dark:text-hush-white">
									Computer Science Tutor @ NEST Trento | EIT Cybersecurity master student
								</p>
								<div class="mb-6 flex flex-wrap">
									<div class="mb-4 w-full">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{mail}" alt="mail_logo"> riccardo.gennaro@studenti.unitn.it
										</p>
									</div>
									<div class="mb-4 w-full">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{linkedin}" alt="linkedin_logo"> <a href="https://www.linkedin.com/in/riccardo-gennaro/">riccardo-gennaro</a>
										</p>
									</div>
									<div class="mb-4 w-full">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{github}" alt="github_logo"> <a href="https://github.com/lallo-unitn">lallo-unitn</a>
										</p>
									</div>
									<div class="mb-4 w-full">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{batteries}" alt="batteries_logo"> Batteries included
										</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Image displayed for larger screens will be skipped in mobile view -->
					</div>
				</div>
			</div>
		</div>
		<div class="max-w-screen-xl p-4" id="exp">
			<h1 class="text-white text-4xl md:text-6xl font-bold mb-5">
				Work
				<span class="text-hush-blue-500">
					Experience
				</span>
			</h1>
		</div>
		<div class="container my-6 mr-auto ml-2 max-w-xl px-4 md:px-6 ">
			<Timeline order="vertical">
				<TimelineItem title="Computer Science tutor" date="NEST, Sep 2021 - Present, Trento (TN)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-hush-blue-500 dark:text-hush-blue-500" />
					</span>
					</svelte:fragment>
					<p class="mb-4 text-base font-normal text-hush-white dark:text-hush-white">
						As a computer science tutor at NEST Trento, I support students in learning C and Java programming, and algorithms design. <br>
						I enjoy sharing my knowledge and passion for coding, and helping others achieve their academic goals.
					</p>
				</TimelineItem>
				<TimelineItem title="Cyber Security Specialist Intern" date="Atos, Mar 2022 - Apr 2022, Milan (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						I joined the Big Data & Security (BDS) team to study the methodologies applied by ATOS as an ICS integration provider.<br>
						As a result of this experience I wrote my bachelor thesis.
					</p>
				</TimelineItem>
				<TimelineItem title="Warehouse assistant" date="Danzo SRL, Jul 2019 - Sep 2019, Valdagno (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						As a summer job during my last year of high school, I was employed as a warehouse worker by Danzo SRL, a textile manufacturer.
					</p>
				</TimelineItem>
				<TimelineItem title="IT support" date="Vencato ICT, Jun 2018 - Jul 2018, Cornedo Vic. (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						As a summer job between my fourth and fifth year of high school, I worked for Vencato ICT.<br>
						During this time, I mainly performed common fixes on computers and smartphones, like wiping disks or replacing components.
					</p>
				</TimelineItem>
				<TimelineItem title="Textile worker" date="Danzo SRL, Jun 2016 - Jul 2016, Valdano (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						As a summer job between my second and third year of high school, I was employed as a textile worker by Danzo SRL.<br>
						There, I learned how to roughly set up an automatic loom and to perform ordinary cleaning.
					</p>
				</TimelineItem>
			</Timeline>
		</div>
		<div class="p-4" id="edu">
			<h1 class="text-hush-blue-500 text-4xl md:text-6xl font-bold ml-auto mt-5 mb-5 text-right">
				Education
			</h1>
		</div>

		<div class="container mx-auto px-4">
			<div class="my-6">
				<Group date="Master's Degree">
					<GroupItem timelines={master} />
				</Group>
			</div>
			<div class="my-6">
				<Group date="Bachelor's Degree">
					<GroupItem timelines={bachelor} />
				</Group>
			</div>
			<div class="my-6">
				<Group date="High School Diploma">
					<GroupItem timelines={high_school} />
				</Group>
			</div>
		</div>
	{/if}
</MediaQuery>

<MediaQuery query='(min-width: 769px)' let:matches>
	{#if matches}
		<div class="container my-6 mx-auto md:px-6" id="top">
			<section class="mb-20">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div class="bg-opacity-30 text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl text-hush-blue-500 font-bold">RICCARDO GENNARO</h2>
								<p class="mb-6 pb-2 text-xl font-bold text-hush-white dark:text-hush-white">
									<span class="text-hush-blue-500"> ! </span> your average CompSci student
								</p>
								<p class="mb-6 pb-2 text-hush-white dark:text-hush-white">
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
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{linkedin}" alt="linkedin_logo"> <a href="https://www.linkedin.com/in/riccardo-gennaro/">riccardo-gennaro</a>
										</p>
									</div>
									<div class="mb-4 w-full md:w-6/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{github}" alt="github_logo"> <a href="https://github.com/lallo-unitn">lallo-unitn</a>
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<img class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600" src="{batteries}" alt="batteries_logo"> Batteries included
										</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<img src="{white_mask}" class="w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
						</div>
					</div>
				</div>
			</section>
		</div>
		<div class="max-w-screen-xl p-4" id="exp">
			<h1 class="text-white text-4xl md:text-6xl ml-32 mr-auto font-bold mt-5 mb-5">
				Work
				<span class="text-hush-blue-500">
					Experience
				</span>
			</h1>
		</div>
		<div class="container my-6 mx-auto max-w-xl px-4 md:px-6 ml-64">
			<Timeline order="vertical">
				<TimelineItem title="Computer Science tutor" date="NEST, Sep 2021 - Present, Trento (TN)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-hush-blue-500 dark:text-hush-blue-500" />
					</span>
					</svelte:fragment>
					<p class="mb-4 text-base font-normal text-hush-white dark:text-hush-white">
						As a computer science tutor at NEST Trento, I support students in learning C and Java programming, and algorithms design. <br>
						I enjoy sharing my knowledge and passion for coding, and helping others achieve their academic goals.
					</p>
				</TimelineItem>
				<TimelineItem title="Cyber Security Specialist Intern" date="Atos, Mar 2022 - Apr 2022, Milan (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						I joined the Big Data & Security (BDS) team to study the methodologies applied by ATOS as an ICS integration provider.<br>
						As a result of this experience I wrote my bachelor thesis.
					</p>
				</TimelineItem>
				<TimelineItem title="Warehouse assistant" date="Danzo SRL, Jul 2019 - Sep 2019, Valdagno (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						As a summer job during my last year of high school, I was employed as a warehouse worker by Danzo SRL, a textile manufacturer.
					</p>
				</TimelineItem>
				<TimelineItem title="IT support" date="Vencato ICT, Jun 2018 - Jul 2018, Cornedo Vic. (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						As a summer job between my fourth and fifth year of high school, I worked for Vencato ICT.<br>
						During this time, I mainly performed common fixes on computers and smartphones, like wiping disks or replacing components.
					</p>
				</TimelineItem>
				<TimelineItem title="Textile worker" date="Danzo SRL, Jun 2016 - Jul 2016, Valdano (IT)" classTime="dark:text-gray-300">
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						As a summer job between my second and third year of high school, I was employed as a textile worker by Danzo SRL.<br>
						There, I learned how to roughly set up an automatic loom and to perform ordinary cleaning.
					</p>
				</TimelineItem>
			</Timeline>
		</div>
		<div class="p-4" id="edu">
			<h1 class="text-hush-blue-500 text-4xl md:text-6xl font-bold ml-auto mr-32 mt-5 mb-5 text-right">
					Education
			</h1>
		</div>
		<div class="ml-auto mr-64 max-w-screen-sm">
			<Group date="Master&#39s Degree">
				<GroupItem timelines={master} />
			</Group>
		</div>
		<div class="ml-auto mr-64 max-w-screen-sm">
			<Group date="Bachelor&#39s Degree">
				<GroupItem timelines={bachelor} />
			</Group>
		</div>
		<div class="ml-auto mr-64 max-w-screen-sm">
			<Group date="High School Diploma">
				<GroupItem timelines={high_school} />
			</Group>
		</div>
	{/if}
</MediaQuery>

<footer class="bg-hush-blue-700 rounded-lg shadow m-4 mt-12">
	<div class="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span class="text-sm text-white sm:text-center dark:text-hush-white">
            © 2024 <a href="{base}/" class="hover:underline">Riccardo Gennaro</a>. All Rights Reserved.
        </span>
		<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
			<li><a href="{base}/" class="hover:underline me-4 md:me-6">About</a></li>
			<li><a href="{base}/#exp" class="hover:underline me-4 md:me-6">Experience</a></li>
			<li><a href="{base}/#edu" class="hover:underline me-4 md:me-6">Education</a></li>
			<li><a href="{base}/" class="hover:underline">Contact</a></li>
		</ul>
	</div>
</footer>

</body>

<style>
    body {
        margin: 0;
        height: 100%;
    }
</style>