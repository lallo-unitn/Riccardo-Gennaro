<script lang="ts">
	import { base } from '$app/paths';
	import photo_of_me from '$lib/assets/photoweb.jpg';
	import mail from '$lib/assets/mail-open-svgrepo-com.png';
	import linkedin from '$lib/assets/linkedin-svgrepo-com.png';
	import github from '$lib/assets/github-142-svgrepo-com.png';
	import batteries from '$lib/assets/batteries-svgrepo-com.png';
	import utwente from '$lib/assets/university_of_twente_logo.jpeg';
	import utrento from '$lib/assets/universitaditrento_logo.jpeg';
	import liceo from '$lib/assets/logolicei.png';
	import signature from '$lib/assets/signature.png';
	import alessio from '$lib/assets/alessio_graduation.png';
	import demetrio from '$lib/assets/demetrio.jpg';
	import matteo from '$lib/assets/matteo.jpg';
	import riccardo from '$lib/assets/riccardo.jpeg';
	import jan from '$lib/assets/jan.jpg';
	import thesis from '$lib/assets/bachelor_thesis.png';
	import thesis_pdf from '$lib/assets/bachelor_thesis.pdf';
	import crypto from '$lib/assets/crypto_project.png';
	import crypto_pdf from '$lib/assets/crypto_project.pdf';
	import web_arch from '$lib/assets/Assignment5.png';
	import web_arch_pdf from '$lib/assets/assignments_merged.pdf';
	import dhv from '$lib/assets/DHV_case_study.png';
	import dhv_pdf from '$lib/assets/DHV_case_study.pdf';
	import prot from '$lib/assets/prot.jpg';
	import prot_pdf from '$lib/assets/TECHNICAL_POSTER.pdf';
	import chatcontrol_pdf from '$lib/assets/chatcontrol.pdf';
	import chatcontrol from '$lib/assets/chatcontrol.png';
	import det_enc from '$lib/assets/det_enc.png';
	import det_enc_pdf from '$lib/assets/det_enc.pdf';
	import path_oram from '$lib/assets/path_oram.png';
	import path_oram_pdf from '$lib/assets/path_oram.pdf';
	import phr from '$lib/assets/phr.png';
	import phr_pdf from '$lib/assets/phr.pdf';

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
				'<span class="font-medium text-gray-600 dark:text-hush-grey-100"> <br> Master&#39s Degree, Cybersecurity </span> <br>' +
				'<span class="text-sm font-medium text-gray-600 dark:text-hush-grey-100">Sep 2023 - Sep 2025</span> <br>' +
				'<span class="font-base text-gray-900 dark:text-white">My double degree exit point</span>',
			src: utwente,
			alt: 'utwente',
			href: 'https://www.utwente.nl/en/csc/programme/specializations/cyber-security/',
			isPrivate: false,
			comment: ''
		},
		{
			title: '<span class="font-medium text-gray-900 dark:text-white">University of Trento</span> ' +
				'<span class="font-medium text-gray-600 dark:text-hush-grey-100"> <br> Master&#39s Degree, Cybersecurity </span> <br>' +
				'<span class="text-sm font-medium text-gray-600 dark:text-hush-grey-100">Sep 2023 - Sep 2025</span> <br>' +
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
			'<span class="font-medium text-gray-600 dark:text-hush-grey-100"> <br> Bachelor&#39s Degree, Computer Science </span> <br>' +
			'<span class="text-sm font-medium text-gray-600 dark:text-hush-grey-100">Sep 2019 - Dec 2022</span> <br>' +
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
			'<span class="font-medium text-gray-600 dark:text-hush-grey-100"> <br> Liceo Scientifico Tecnologico </span> <br>' +
			'<span class="text-sm font-medium text-gray-600 dark:text-hush-grey-100">Sep 2014 - Jun 2019</span> <br>',
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

<Navbar class="bg-hush-grey-600 bg-opacity-25 dark:bg-hush-grey-600 ">
	<NavBrand href="{base}/home">
		<!-- Brand logo or text can be placed here -->
		<img src="{signature}" alt="signature">
	</NavBrand>
	<div class="flex bg-opacity-25 md:order-2 bg-hush-grey-600">
		<NavHamburger class="text-hush-white bg-hush-grey-600 px-0 pt-0 pb-0 focus:border-hush-grey-600 "
									menuClass="bg-clip-border bg-hush-grey-600 px-0 focus:border-hush-grey-600" />
	</div>
	<NavUl {activeUrl} {activeClass} class="order-1 mx-auto bg-hush-grey-600 ">
		<NavLi class="text-hush-white" href="{base}/">Home</NavLi>
		<NavLi class="text-hush-white" href="{base}/#exp">Experience</NavLi>
		<NavLi class="text-hush-white" href="{base}/#edu">Education</NavLi>
		<NavLi class="text-hush-white" href="{base}/#proj">Projects</NavLi>
	</NavUl>
</Navbar>

<MediaQuery query='(max-width: 768px)' let:matches>
	{#if matches}
		<div class="px-2 container my-2 mx-auto px-4" id="top">
			<div>
				<img src="{photo_of_me}" class="translate-y-12 w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="photo_of_me" />
			</div>
			<div class="-translate-y-6 container mt-6 mx-auto px-4">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div class="bg-opacity-5 text-hush-white block bg-hush-grey-900 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl font-bold text-hush-blue-500">RICCARDO GENNARO</h2>
								<p class="mb-6 pb-2 text-xl font-bold text-hush-white dark:text-hush-white">
									<span class="text-hush-blue-500"> ! </span> your average CompSci student
								</p>
								<p class="mb-6 pb-2 text-hush-white dark:text-hush-white">
									EIT Cybersecurity master student @ UTwente & UTrento
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
			<blockquote class="relative ml-5 mb-6">
				<svg class="absolute -top-6 -start-8 size-16 text-white opacity-15" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				  <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
				</svg>
			  
				<div class="relative z-10">
				  <p class="text-gray-800 sm:text-xl dark:text-white"><em>
					It doesn't matter if it is ugly as long as it is free*.
					</em>
				  </p>
				  <p class="text-gray-800 sm:text-md text-right dark:text-white"><em>
					*free as in freedom
				  </em>
				</p>
				</div>
			</blockquote>
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
				<TimelineItem title="Computer Science tutor" date="NEST, Sep 2021 - Present, Trento (TN)" >
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
				<TimelineItem title="Computer Science tutor" date="NEST, Sep 2021 - Present, Trento (TN)" >
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
				<TimelineItem title="Cyber Security Specialist Intern" date="Atos, Mar 2022 - Apr 2022, Milan (IT)" >
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
				<TimelineItem title="Warehouse assistant" date="Danzo SRL, Jul 2019 - Sep 2019, Valdagno (IT)" >
					<svelte:fragment slot="icon">
					<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
					</span>
					</svelte:fragment>
					<p class="text-base font-normal text-hush-white dark:text-hush-white">
						As a summer job during my last year of high school, I was employed as a warehouse worker by Danzo SRL, a textile manufacturer.
					</p>
				</TimelineItem>
				<TimelineItem title="IT support" date="Vencato ICT, Jun 2018 - Jul 2018, Cornedo Vic. (IT)" >
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
				<TimelineItem title="Textile worker" date="Danzo SRL, Jun 2016 - Jul 2016, Valdano (IT)" >
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
		<div class="px-2 container my-6 mx-auto md:px-6" id="top">
			<section class="mb-20">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div class="bg-opacity-30 text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-40 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl text-hush-blue-500 font-bold">RICCARDO GENNARO</h2>
								<p class="mb-6 pb-2 text-xl font-bold text-hush-white dark:text-hush-white">
									<span class="text-hush-blue-500"> ! </span> your average CompSci student
								</p>
								<p class="mb-6 pb-2 text-hush-white dark:text-hush-white">
									EIT Cybersecurity master student @ UTwente & UTrento
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
							<img src="{photo_of_me}" class="w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
						</div>
					</div>
				</div>
			</section>
			<blockquote class="relative">
				<svg class="absolute -top-6 -start-8 size-16 text-white opacity-15" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				  <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
				</svg>
			  
				<div class="relative z-10">
				  <p class="text-gray-800 sm:text-xl dark:text-white"><em>
					It doesn't matter if it is ugly as long as it is free*.
					</em>
				  </p>
				  <p class="text-gray-800 sm:text-md text-right dark:text-white"><em>
					*free as in freedom
				  </em>
				</p>
				</div>
			</blockquote>
			<div class="max-w-screen-xl p-4 mt-4" id="exp">
				<h1 class="text-white text-4xl md:text-6xl mr-auto font-bold mt-5 mb-5">
					Work
					<span class="text-hush-blue-500">
						Experience
					</span>
				</h1>
			</div>
			<div class="container my-6 mr-auto max-w-xl px-4 md:px-6">
				<Timeline order="vertical">
					<TimelineItem title="Security Researcher Intern" date="Fondazione Bruno Kessler, Feb 2025 - present, Trento (Italy)" >
						<svelte:fragment slot="icon">
						<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
							<CalendarWeekSolid class="w-4 h-4 text-hush-blue-500 dark:text-hush-blue-500" />
						</span>
						</svelte:fragment>
						<p class="mb-4 text-base font-normal text-hush-white dark:text-hush-white">
							As an intern I designed alternative privacy-preserving vehicle authentication and authorization protocols compliant with ETSI ITS, developed a Java PoC for evaluating the proposed alternatives to the standard.
						</p>
					</TimelineItem>
					<TimelineItem title="Computer Science tutor" date="NEST, Sep 2021 - Aug 2024, Trento (Italy)" >
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
					<TimelineItem title="Cyber Security Specialist Intern" date="Atos, Mar 2022 - Apr 2022, Milan (Italy)" >
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
					<TimelineItem title="Warehouse assistant" date="Danzo SRL, Jul 2019 - Sep 2019, Valdagno (Italy)" >
						<svelte:fragment slot="icon">
						<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
							<CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
						</span>
						</svelte:fragment>
						<p class="text-base font-normal text-hush-white dark:text-hush-white">
							As a summer job during my last year of high school, I was employed as a warehouse worker by Danzo SRL, a textile manufacturer.
						</p>
					</TimelineItem>
					<TimelineItem title="IT support" date="Vencato ICT, Jun 2018 - Jul 2018, Cornedo Vic. (Italy)" >
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
					<TimelineItem title="Textile worker" date="Danzo SRL, Jun 2016 - Jul 2016, Valdagno (Italy)" >
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
			<div class="ml-auto ml-auto max-w-screen-sm">
				<Group date="Master&#39s Degree">
					<GroupItem timelines={master} />
				</Group>
			</div>
			<div class="ml-auto ml-auto max-w-screen-sm">
				<Group date="Bachelor&#39s Degree">
					<GroupItem timelines={bachelor} />
				</Group>
			</div>
			<div class="ml-auto ml-auto max-w-screen-sm">
				<Group date="High School Diploma">
					<GroupItem timelines={high_school} />
				</Group>
			</div>
		</div>
	{/if}
</MediaQuery>



<div class="px-2 container my-6 mx-auto md:px-6" id="top">


	<div class="max-w-screen-xl p-4" id="proj">
		<h1 class="text-white text-4xl md:text-6xl mr-auto font-bold mt-5 mb-5">
			Some
			<span class="text-hush-blue-500">
				Projects
			</span>
		</h1>
	</div>

	<div class="flex flex-row flex-wrap gap-10 justify-items-center justify-center mt-4 mb-16">

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-left-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={phr} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Enforcing Cryptographic Access Control on a PHR system</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">
					This work presents a cryptographically enforced access control system for Personal Health Records (PHRs) using Multi-Authority Ciphertext-Policy Attribute-Based Encryption (MA-CP-ABE), ensuring secure data sharing and integrity among diverse users.</p>
				<div class="flex gap-5 mt-4 md:mt-6">
					<a href={phr_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
					<a href="https://github.com/lallo-unitn/phr_access_control" target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-left-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={path_oram} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Simulating Path ORAM accesses</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">
					This work analyzes Path ORAM's performance, simulating read/write operations, and evaluating overflow probabilities for varying bucket sizes.</p>
				<div class="flex gap-5 mt-4 md:mt-6">
					<a href={path_oram_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
					<a href="https://github.com/lallo-unitn/path-oblivious-ram-simulation" target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-left-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={det_enc} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Information Leakage and Attacks on Deterministic Encryption</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">
					This work analyzes information leakage in SSE and deterministic encryption, demonstrating vulnerabilities and proposing secure indexing as a mitigation.</p>
				<div class="flex gap-5 mt-4 md:mt-6">
					<a href={det_enc_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
					<a href="https://github.com/lallo-unitn/inference_on_det_encryption" target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-left-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={prot} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					OFF-SOUND</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">OFF-SOUND is a start-up project that started in February 2024 in the Business Development Laboratory of the University of Trento. This project aims at developing a solution that enables people to take their phone calls anywhere without having to worry about eavesdroppers.</p>
				<div class="flex gap-5 mt-4 md:mt-6">
					<a href={prot_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
					<a href="https://github.com/orgs/HUSH-MASK/repositories" target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a>
					<a href="https://hush-mask.github.io/MVP_site/home" target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Website</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-left-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={chatcontrol} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Balancing Child Safety and Privacy: <br>An Exploration of the EU's Chatcontrol Proposal</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">This work explores the recent legislative proposal aimed at combating the proliferation
					of Child Sexual Abuse Material (CSAM) and online child sexual solicitation.</p>
				<div class="flex gap-5 mt-4 md:mt-6">
					<a href={chatcontrol_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={thesis} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">An overview of ICS vulnerabilities,
					threats, and security measures</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">This work focuses on ICS security. In particular, three case studies based on data gathered from the ICSs of three power
					plants are explored. The studies were produced during an internship collaboration with Atos.</p>
				<div class="flex mt-4 md:mt-6">
					<a href={thesis_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={crypto} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Esse3-Bootleg</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">This work was proposed as a final project for the course of Advanced Programming of Cryptographic Methods held by prof. Silvio Ranise. This project aims to develop a web app designed for student career management and teacher course management and mark assignments.</p>
				<div class="flex gap-5 mt-4 md:mt-6">
					<a href={crypto_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
					<a href="https://github.com/lallo-unitn/Esse3-Bootleg-APFCM" target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={dhv} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A risk assessment on the dutch digital voting system.</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">This work aims at assessing the security posture of the new Dutch centralized system for vote counting.
					In this report, the core services, information, and processes are analyzed.</p>
				<div class="flex mt-4 md:mt-6">
					<a href={dhv_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col border-gray-900 items-center bg-[#292929] border rounded-lg shadow-xl md:flex-row md:max-w-screen-sm">
			<img class="object-cover object-top w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={web_arch} alt="">
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web Architecture Projects Collection</h5>
				<p class="mb-3 font-normal text-gray-600 dark:text-gray-300 leading-tight">Here you can find 5 projects required by prof. Marco Ronchetti for the 2022/23 iteration of the Web Architectures course.</p>
				<div class="flex gap-5 mt-4 md:mt-6">
					<a href={web_arch_pdf} target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View PDF</a>
					<a href="https://github.com/lallo-unitn/WEB_ARC_assignments" target="_blank" class="transform transition hover:scale-105 hover:shadow-xl inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a>
				</div>
			</div>
		</div>

	</div>

	<div class="max-w-screen-xl p-4 mt-4" id="exp">
		<h1 class="text-white text-4xl md:text-6xl mr-auto font-bold mt-5 mb-5">
			My
			<span class="text-hush-blue-500">
				Buddies
			</span>
		</h1>
	</div>

	<div class="flex flex-row flex-wrap justify-items-center justify-center mt-4 mb-16">

		<div class="mx-5 my-5 w-full max-w-sm bg-[#292929] rounded-lg shadow dark:bg-[#292929] shadow-xl">
			<div class="flex flex-col items-center pb-10">
				<img class="w-24 h-24 mb-3 mt-6 rounded-full shadow-lg object-cover" src={alessio} alt="alessio"/>
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Alessio Blascovich</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Has a problem with compilers</span>
				<div class="flex mt-4 md:mt-6 transform transition hover:scale-105 hover:shadow-xl">
					<a href="https://elblasco.github.io/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Website</a>
				</div>
			</div>
		</div>

		<div class="mx-5 my-5 w-full max-w-sm bg-[#292929] rounded-lg shadow dark:bg-[#292929] shadow-xl">
			<div class="flex flex-col items-center pb-10">
				<img class="w-24 h-24 mb-3 mt-6 rounded-full shadow-lg object-cover" src={demetrio} alt="demetrio"/>
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Demetrio Battaglia</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Has a problem with natural languages</span>
				<div class="flex mt-4 md:mt-6 transform transition hover:scale-105 hover:shadow-xl">
					<a href="https://deme3.me" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Website</a>
				</div>
			</div>
		</div>

		<div class="mx-5 my-5 w-full max-w-sm bg-[#292929] rounded-lg shadow dark:bg-[#292929] shadow-xl">
			<div class="flex flex-col items-center pb-10">
				<img class="w-24 h-24 mb-3 mt-6 rounded-full shadow-lg object-cover" src={matteo} alt="matteo"/>
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Matteo Franzil</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Has a problem with virtualization</span>
				<div class="flex mt-4 md:mt-6 transform transition hover:scale-105 hover:shadow-xl">
					<a href="https://matteo.franzil.com/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Website</a>
				</div>
			</div>
		</div>

		<div class="mx-5 my-5 w-full max-w-sm bg-[#292929] rounded-lg shadow dark:bg-[#292929] shadow-xl">
			<div class="flex flex-col items-center pb-10">
				<img class="w-24 h-24 mb-3 mt-6 rounded-full shadow-lg object-cover" src={riccardo} alt="riccardo"/>
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Riccardo Lussana</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Has a problem with OSINT</span>
				<div class="flex mt-4 md:mt-6 transform transition hover:scale-105 hover:shadow-xl">
					<a href="https://riklus.github.io/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Website</a>
				</div>
			</div>
		</div>

		<div class="mx-5 my-5 w-full max-w-sm bg-[#292929] rounded-lg shadow dark:bg-[#292929] shadow-xl">
			<div class="flex flex-col items-center pb-10">
				<img class="w-24 h-24 mb-3 mt-6 rounded-full shadow-lg object-cover" src={jan} alt="jan"/>
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jan Tomassi</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Has a problem with kernels</span>
				<div class="flex mt-4 md:mt-6 transform transition hover:scale-105 hover:shadow-xl">
					<a href="https://jantomassi.github.io/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Website</a>
				</div>
			</div>
		</div>


	</div>

</div>


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