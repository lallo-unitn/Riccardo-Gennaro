<!-- <head> metadata: page title, search snippet, link previews (Open Graph) and schema.org data. -->
<script lang="ts">
	import { site, profile, education } from '$lib/content';

	const ogImage = site.url + site.ogImage;
	const schoolNames = [...new Set(education.flatMap((d) => d.schools.map((s) => s.name)))];
	const universities = schoolNames.filter((name) => name.startsWith('University'));

	const personJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		url: site.url,
		image: ogImage,
		jobTitle: profile.jobTitle,
		worksFor: { '@type': 'Organization', name: profile.employer },
		alumniOf: universities.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
		sameAs: [profile.linkedin.href, profile.github.href]
	});
	// '<' is escaped so the JSON can never close the <script> tag early.
	const jsonLdTag =
		'<script type="application/ld+json">' +
		personJsonLd.replace(/</g, '\\u003c') +
		'</' +
		'script>';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href={site.url} />

	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content={profile.name} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={site.ogImageAlt} />
	<meta property="profile:first_name" content={profile.firstName} />
	<meta property="profile:last_name" content={profile.lastName} />
	<meta name="twitter:card" content="summary_large_image" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON built above, '<' escaped -->
	{@html jsonLdTag}
</svelte:head>
