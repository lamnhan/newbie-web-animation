<template>
  <div class="main">

    <svg viewBox="0 0 450 300">
      <g id="bg">
        <image id="bg-image" x="-30" y="-10" width="500" height="350" href="/street.jpg"></image>
      </g>

      <g id="shape" transform="scale(1.5) translate(50 30)">

        <g id="panel">
          <line x1="30" y1="-40" x2="30" y2="0" stroke="#373737" stroke-width="3"></line>
          <line x1="160" y1="-40" x2="160" y2="0" stroke="#373737" stroke-width="3"></line>
          <rect x="-17" y="-10" rx="30" width="230" height="62" fill="#373737" stroke="#171717" stroke-width="3"></rect>
        </g>

        <g id="logo" transform="scale(0.275) translate(35 -12.5)">
          <defs>
            <path id="color-G-def" d="M49.385,169.229c-30.736,-6.965 -42.4,-33.746 -42.087,-63.586c15.969,-6.404 24.145,-9.775 27.585,-21.486c7.398,-25.187 15.458,-31.96 37.86,-42.066c12.31,-5.553 19.902,-12.064 24.584,-17.976c9.877,11.254 18.478,27.092 24.072,44.232c-6.191,3.548 -14.21,7.928 -18.744,15.517c-8.58,14.363 -4.463,43.563 -17.726,61.128c-7.835,10.378 -22.947,17.039 -35.544,24.237Z" />
          </defs>
          <use href="#color-G-def" style="fill: var(--off-fill);" />
          <use href="#color-G-def" id="color-G" />
          <path id="color-R" d="M128.18,105.643c0.094,-15.029 -6.549,-37.431 -6.779,-37.297c-6.671,3.877 -14.212,7.928 -18.746,15.518c-8.58,14.363 -4.463,43.563 -17.726,61.128c-7.837,10.38 -23.082,16.849 -35.554,24.241c-0.075,0.044 10.119,2.047 19.312,1.749c15.129,-0.492 28.042,-4.751 36.561,-10.491c7.186,-4.842 12.857,-12.167 16.61,-20.211c6.109,-13.094 6.254,-23.759 6.322,-34.637Z" />
          <path id="color-B" d="M71.113,7.585c0,0 5.63,0.052 14.443,5.897c3.39,2.248 11.999,10.345 11.708,10.713c-4.663,5.91 -12.266,12.368 -24.521,17.896c-22.402,10.106 -30.48,17.055 -37.687,42.066c-3.51,12.18 -13.667,15.829 -27.67,21.484c-0.478,0.193 1.07,-19.164 2.589,-25.156c3.116,-12.289 5.427,-22.809 16.012,-40.99c10.336,-17.755 22.795,-26.645 28.731,-29.142c10.431,-4.389 16.395,-2.768 16.395,-2.768Z" />
          <path d="M49.385,169.229c-30.736,-6.965 -42.4,-33.746 -42.087,-63.586c15.969,-6.404 24.145,-9.775 27.585,-21.486c7.398,-25.187 15.458,-31.96 37.86,-42.066c12.31,-5.553 19.902,-12.064 24.584,-17.976c9.877,11.254 18.478,27.092 24.072,44.232c-6.191,3.548 -14.21,7.928 -18.744,15.517c-8.58,14.363 -4.463,43.563 -17.726,61.128c-7.835,10.378 -22.947,17.039 -35.544,24.237Zm47.942,-145.114c0,0 -13.157,-16.66 -29.628,-16.822c-15.825,-0.156 -29.233,15.097 -30.686,16.822c-1.453,1.726 -29.1,31.277 -29.715,81.528m114.101,-37.296c0,0 13.674,37.856 2.22,68.037c-13.257,34.933 -52.353,37.537 -74.245,32.845" style="fill: none; stroke: #222428; stroke-width: 14.58px;" />
        </g>

        <g id="text">
          <text id="below" x="65" y="33" font-size="36" font-weight="500" style="fill: var(--off-fill);">
            <tspan>T</tspan><tspan>I</tspan><tspan>N</tspan><tspan>I</tspan>
            <tspan>&nbsp;</tspan><tspan>JS</tspan>
          </text>
          <g id="above">
            <text x="65" y="33" font-size="36" font-weight="500" style="fill: var(--on-fill);">
              <tspan>T</tspan><tspan>I</tspan><tspan>N</tspan><tspan>I</tspan>
              <tspan>&nbsp;</tspan><tspan>JS</tspan>
            </text>
            <text x="65" y="33" font-size="36" font-weight="500" style="fill: var(--on-fill);">
              <tspan>T</tspan><tspan>I</tspan><tspan>N</tspan><tspan>I</tspan>
              <tspan>&nbsp;</tspan><tspan>JS</tspan>
            </text>
          </g>
        </g>

      </g>

    </svg>

  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .main {
    --color-R: #f06644;
    --color-G: #31ce95;
    --color-B: #4a86ff;
    --on-opacity: 1;
    --off-opacity: .1;
    --on-fill: #f1f1f1;
    --off-fill: #171717;
  }
  svg {
    width: 100%;
    height: auto;
  }
  // SVG styling
  #panel > *, text#below {
    filter: drop-shadow(3px -3px 2px #000000);
  }
  #logo {
    filter:
      drop-shadow(0px 0px 7px #fff)
      drop-shadow(0px 0px 12px #fff)
      drop-shadow(0px 0px 20px #ff4d94);
  }
  #above text:first-child tspan {
    filter:
      drop-shadow(0px 0px 1px #fff)
      drop-shadow(0px 0px 2px #fff)
      drop-shadow(0px 0px 5px #ff80b3)
      drop-shadow(0px 0px 7px #ff4d94)
      drop-shadow(0px 0px 10px #ff0066);
  }
  #color-R { --color: var(--color-R); }
  #color-G { --color: var(--color-G); }
  #color-B { --color: var(--color-B); }
  #color-R, #color-G, #color-B {
    fill: var(--color);
    filter:
      drop-shadow(0px 0px 1px rgba(255,255,255,.15))
      drop-shadow(0px 0px 2px var(--color))
      drop-shadow(0px 0px 5px var(--color))
      drop-shadow(0px 0px 15px var(--color));
  }
  // Animation
  @keyframes flicker {
    0% { opacity: var(--on-opacity); fill: var(--on-fill); }
    3% { opacity: var(--off-opacity); fill: var(--off-fill); }
    6% { opacity: var(--on-opacity); fill: var(--on-fill); }
    7% { opacity: var(--off-opacity); fill: var(--off-fill); }
    8% { opacity: var(--on-opacity); fill: var(--on-fill); }
    9% { opacity: var(--off-opacity); fill: var(--off-fill); }
    10% { opacity: var(--on-opacity); fill: var(--on-fill); }
    89% { opacity: var(--on-opacity); fill: var(--on-fill); }
    90% { opacity: var(--off-opacity); fill: var(--off-fill); }
    100% { opacity: var(--off-opacity); fill: var(--off-fill); }
  }
  #color-R {
    --on-fill: var(--color-R);
    --off-fill: var(--on-fill);
    animation: flicker 7s infinite 10s step-end;
  }
  #above tspan:first-child  {
    animation: flicker 12s infinite 5s step-end;
  }
  #above tspan:nth-child(3) {
    animation: flicker 9s infinite 12s step-end;
  }
  #above tspan:last-child {
    animation: flicker 7s infinite 15s step-end;
  }
</style>
