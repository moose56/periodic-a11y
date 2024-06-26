<script>
  import Heading from "./Heading.svelte";
  import Element from "./Element.svelte";
  import { elements } from "$lib/PeriodicTableJSON.json"
</script>

<h1 class="sr-only">Periodica11y</h1>
<div class="sr-only">A periodic table built for accessibility</div>


<h2 class="sr-only">Periodic Table</h2>

<ol>
  {#each elements as element}
    <li id={element.symbol.toLowerCase()} style="grid-area: {element.symbol.toLowerCase()}">
      <Element element={element}  />
    </li>
  {/each}

  {#each Array(18) as _, i}
    <li id="c{i+1}" class="heading" style="grid-area: c{i+1}">
      <Heading text={i+1} />
    </li>
  {/each}

  {#each Array(7) as _, i}
    <li id="r{i+1}" class="heading" style="grid-area: r{i+1}">
      <Heading text={i+1} />
    </li>
  {/each}


  <li id="a1" class="asterisk" style="grid-area: a1" role="presentation" aria-hidden="true">*</li>
  <li id="a2" class="asterisk" style="grid-area: a2" role="presentation" aria-hidden="true">**</li>
  <li id="a3" class="asterisk" style="grid-area: a3" role="presentation" aria-hidden="true">*</li>
  <li id="a4" class="asterisk" style="grid-area: a4" role="presentation" aria-hidden="true">**</li>
</ol>


<style>
    ol {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 1rem repeat(2, minmax(20px, 1fr)) 1rem repeat(16, minmax(20px, 1fr));
        grid-template-rows: 1rem repeat(7, minmax(20px, 1fr)) 1rem repeat(2, minmax(20px, 1fr));
        grid-template-areas:
          "..  c1  c2  ..  c3  c4  c5  c6  c7  c8  c9  c10 c11 c12 c13 c14 c15 c16 c17 c18"
          "r1  h   ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  he"
          "r2  li  be  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  b   c   n   o   f   ne"
          "r3  na  mg  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  al  si  p   s   cl  ar"
          "r4  k   ca  ..  sc  ti  v   cr  mn  fe  co  ni  cu  zn  ga  ge  as  se  br  kr"
          "r5  rb  sr  ..  y   zr  nb  mo  tc  ru  rh  pd  ag  cd  in  sn  sb  te  i   xe"
          "r6  cs  ba  a1  lu  hf  ta  w   re  os  ir  pt  au  hg  tl  pb  bi  po  at  rn"
          "r7  fr  ra  a2  lr  rf  db  sg  bh  hs  mt  ds  rg  cn  nh  fl  mc  lv  ts  og"
          "..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  .."
          "..  ..  ..  a3  la  ce  pr  nd  pm  sm  eu  gd  tb  dy  ho  er  tm  yb  ..  .."
          "..  ..  ..  a4  ac  th  pa  u   np  pu  am  cm  bk  cf  es  fm  md  no  ..  ..";

        gap: .5rem;

        justify-items: stretch;
        align-items: stretch;
    }

    .asterisk {
        justify-self: center;
        align-self: center;
    }


    @media (max-width: 1024px) {
        ol {
            gap: 2px;
        }
    }
</style>
