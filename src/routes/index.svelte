<script>
  import Header from "../lib/Header.svelte";
  import PeriodicTable from "../lib/PeriodicTable.svelte";
</script>

<svelte:head>
  <title>Periodica11y</title>
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

        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;

        height: 100%;
    }
</style>
