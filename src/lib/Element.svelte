<script>
  export let element;
</script>

<div class="element">
  <span class="symbol sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{element.symbol}</span>
</div>

<style>
    .element {
        background: #eeeeee;

        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
        border: 1px solid #c7c7c7;
    }

    .symbol {
        font-weight: bold;
    }
</style>
