<script>
  import Header from "../lib/Header.svelte";
  import PeriodicTable from "../lib/PeriodicTable.svelte";
</script>

<svelte:head>
  <title>SvelteKit on the edge</title>
</svelte:head>

<div>
  <Header />
  <main class="p-1 md:p-2.5">
    <PeriodicTable />
  </main>
</div>

<style>
    div {
        display: grid;

        grid-template-rows: max-content 1fr;
        grid-template-columns: 1fr;

        height: 100vh;
    }
</style>
