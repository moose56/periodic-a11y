<script>
  export let element;

  function blockColor() {
    // f-block
    if ([9, 10].includes(element.ypos)) {
      return "#9bff99"
    }

    // s-block
    if (([1, 2].includes(element.xpos)) || (element.xpos === 18 && element.ypos === 1)) {
      return "#ff9999"
    }

    // d-block
    if ( (element.xpos > 2 && element.xpos < 13) && (element.ypos > 2 && element.ypos < 13)) {
      return "#99ccff";
    }

    // p-block
    if ((element.xpos > 12) && (element.ypos > 1 && element.ypos < 8)) {
      return "#fdff8c";
    }
  }
</script>

<div class="element" style="background-color: {blockColor()}">
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
