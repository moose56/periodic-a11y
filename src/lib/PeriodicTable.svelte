<script>
  import Heading from "./Heading.svelte";
  import Element from "./Element.svelte";
  import { elements } from "$lib/PeriodicTableJSON.json"
</script>


<ol>
  <li id="s0" class="spacer hidden-text" style="grid-area: s0;" role="presentation" aria-hidden="true">s0</li>
  <li id="s1" class="spacer hidden-text" style="grid-area: s1;" role="presentation" aria-hidden="true">s1</li>
  <li id="s2" class="spacer hidden-text" style="grid-area: s2;" role="presentation" aria-hidden="true">s2</li>
  <li id="s3" class="spacer hidden-text" style="grid-area: s3;" role="presentation" aria-hidden="true">s3</li>
  <li id="s4" class="spacer hidden-text" style="grid-area: s4;" role="presentation" aria-hidden="true">s4</li>
  <li id="s5" class="spacer hidden-text" style="grid-area: s5;" role="presentation" aria-hidden="true">s5</li>
  <li id="s6" class="spacer hidden-text" style="grid-area: s6;" role="presentation" aria-hidden="true">s6</li>
  <li id="s7" class="spacer hidden-text" style="grid-area: s7;" role="presentation" aria-hidden="true">s7</li>

  <li id="a1" class="asterisk" style="grid-area: a1">*</li>
  <li id="a2" class="asterisk" style="grid-area: a2">**</li>
  <li id="a3" class="asterisk" style="grid-area: a3">*</li>
  <li id="a4" class="asterisk" style="grid-area: a4">**</li>

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

  {#each elements as element}
    <li id={element.symbol.toLowerCase()} style="grid-area: {element.symbol.toLowerCase()}">
      <Element element={element}  />
    </li>
  {/each}
</ol>



<style>
    ol {
        height: 100%;

        display: grid;
        grid-template-columns: 1.5rem repeat(2, minmax(20px, 1fr)) 1rem repeat(16, minmax(20px, 1fr));
        grid-template-rows: 1.5rem repeat(7, minmax(20px, 1fr)) 1rem repeat(2, minmax(20px, 1fr));
        grid-template-areas:
          "s0  c1  c2  s2  c3  c4  c5  c6  c7  c8  c9  c10 c11 c12 c13 c14 c15 c16 c17 c18"
          "r1  h   s1  s2  s3  s3  s3  s3  s3  s3  s3  s3  s3  s3  s4  s4  s4  s4  s4  he"
          "r2  li  be  s2  s3  s3  s3  s3  s3  s3  s3  s3  s3  s3  b   c   n   o   f   ne"
          "r3  na  mg  s2  s3  s3  s3  s3  s3  s3  s3  s3  s3  s3  al  si  p   s   cl  ar"
          "r4  k   ca  s2  sc  ti  v   cr  mn  fe  co  ni  cu  zn  ga  ge  as  se  br  kr"
          "r5  rb  sr  s2  y   zr  nb  mo  tc  ru  rh  pd  ag  cd  in  sn  sb  te  i   xe"
          "r6  cs  ba  a1  lu  hf  ta  w   re  os  ir  pt  au  hg  tl  pb  bi  po  at  rn"
          "r7  fr  ra  a2  lr  rf  db  sg  bh  hs  mt  ds  rg  cn  nh  fl  mc  lv  ts  og"
          "s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5  s5"
          "s6  s6  s6  a3  la  ce  pr  nd  pm  sm  eu  gd  tb  dy  ho  er  tm  yb  s7  s7"
          "s6  s6  s6  a4  ac  th  pa  u   np  pu  am  cm  bk  cf  es  fm  md  no  s7  s7";

        gap: 5px;

        justify-items: stretch;
        align-items: stretch;
    }

    .hidden-text {
        font-size: 0;
    }


    .asterisk {
        justify-self: center;
        align-self: center;
    }


    @media (max-width: 1024px) {
        ol {
            gap: 1px;
        }
    }
</style>
