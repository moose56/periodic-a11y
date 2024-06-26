<script>
  export let element;
  let block = "";


  function isFblock() {
    return [9, 10].includes(element.ypos);
  }

  function isSblock() {
    return ([1, 2].includes(element.xpos)) || (element.xpos === 18 && element.ypos === 1);
  }

  function isDblock() {
    return (element.xpos > 2 && element.xpos < 13) && (element.ypos > 2 && element.ypos < 8);
  }

  function isPblock() {
    return (element.xpos > 12) && (element.ypos > 1 && element.ypos < 8);
  }
</script>


{#if isFblock()}
  <div class="element">
    <span class="symbol sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      {element.symbol}
    </span>
  </div>
{:else if isSblock()}
  <div class="element">
    <span class="symbol sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      {element.symbol}
    </span>
  </div>
{:else if isDblock()}
  <div class="element bg-gradient-to-b from-blue-300 to-blue-500 border border-blue-400">
    <span class="symbol sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      {element.symbol}
    </span>
  </div>
{:else if isPblock()}
  <div class="element">
    <span class="symbol sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      {element.symbol}
    </span>
  </div>
{/if}


<style>
    .element {
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
    }

    .symbol {
        font-weight: bold;
    }
</style>
