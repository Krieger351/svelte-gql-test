<script lang="ts">
	import type { PageData } from './$types.ts';

	export let data: PageData;

	$: lang = data.lang;
</script>

<svelte:head>
	<html {lang}></html>
</svelte:head>
<slot />
