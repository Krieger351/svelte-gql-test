<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.people as person (person.id)}
	<a href="/person/{person.id}">
		{person.name}
	</a>
{/each}
