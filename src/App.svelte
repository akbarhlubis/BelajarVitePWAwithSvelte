<script>
	import RedThing from './components/RedThing.svelte';
	import GreenThing from './components/RedThing.svelte';
	import BlueThing from './components/RedThing.svelte';

	const options = [
		{ color: 'red', component: RedThing },
		{ color: 'green', component: GreenThing },
		{ color: 'blue', component: BlueThing }
	];

	const fetchImage = (async ()=>{
		const response = await fetch('https://dog.ceo/api/breeds/image/random')
		return await response.json()
	})()

	let selected = options[0];
</script>
<div class="optionButton">
	<div class="bg-slate-600">
		<select bind:value={selected}>
			{#each options as option}
				<option value={option}>{option.color}</option>
			{/each}
		</select>
	</div>
</div>

{#await fetchImage}
	<p>...Menunggu</p>
{:then data} 
<img src={data.message} alt="Dog image" />
{/await}
{#if selected.color === 'red'}
	<RedThing />
{:else if selected.color === 'green'}
	<GreenThing />
{:else if selected.color === 'blue'}
	<BlueThing />
{/if}
