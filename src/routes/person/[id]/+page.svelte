<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: person = data.person;
</script>

<pre>
	{JSON.stringify(data)}
</pre>
<dl>
	<dt>name</dt>
	<dd>{person.name}</dd>
	<dt>birth_year</dt>
	<dd>{person.birthYear}</dd>
	<dt>eye_color</dt>
	<dd>{person.eyeColor}</dd>
	<dt>films</dt>
	<dd>{person.filmConnection.films.map(({ title }) => title).join(', ')}</dd>
	<dt>gender</dt>
	<dd>{person.gender}</dd>
	<dt>hair_color</dt>
	<dd>{person.hairColor}</dd>
	<dt>height</dt>
	<dd>{person.height}</dd>
	<dt>homeworld</dt>
	<dd>{person.homeworld.name}</dd>
</dl>
