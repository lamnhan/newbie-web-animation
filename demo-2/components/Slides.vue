<template>
  <div class="main">
    
    <svg viewBox="0 0 450 320">
      <defs>
        <radialGradient id="bg-fill">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#cecece" />
        </radialGradient>
        <linearGradient id="core-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: var(--color-tini-G);" />
          <stop offset="50%" style="stop-color: var(--color-tini-B);" />
          <stop offset="100%" style="stop-color: var(--color-tini-R);" />
        </linearGradient>
        <linearGradient id="core-stroke" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: var(--color-tini-G);" />
          <stop offset="50%" style="stop-color: var(--color-tini-B);" />
          <stop offset="100%" style="stop-color: var(--color-tini-R);" />
        </linearGradient>
        <linearGradient id="core-homepage-bg-fill" x1="100%" y1="30%" x2="0%" y2="50%">
          <stop offset="0%" style="stop-color: var(--color-tini-B);" />
          <stop offset="100%" style="stop-color: var(--color-tini-R);" />
        </linearGradient>
      </defs>

      <g id="bg">
        <rect x="0" y="0" width="450" height="320" fill="url(#bg-fill)" />
      </g>

      <g id="boxes" ref="boxesEl">
        <rect class="core box" x="75" y="90" width="300" height="115" fill="none" stroke-width="5" stroke="url(#core-stroke)" />
        <rect class="cli box" x="75" y="90" width="300" height="115" fill="none" stroke-width="5" style="stroke: var(--color-cli);" />
        <rect class="router box" x="75" y="90" width="300" height="115" fill="none" stroke-width="5" style="stroke: var(--color-router);" />
        <rect class="store box" x="75" y="90" width="300" height="115" fill="none" stroke-width="5" style="stroke: var(--color-store);" />
      </g>

      <g id="icons">
        <path class="icon core" d="M 124.812 109.208 C 128.505 109.115 132.323 110.889 135.87 114.075 C 140.814 118.514 145.289 125.721 148.234 133.797 C 153.441 148.083 153.729 164.989 144.089 174.12 C 139.891 178.097 133.811 180.673 125.37 180.901 C 116.183 181.15 109.67 178.337 105.29 173.78 C 98.816 167.044 97.006 156.319 98.469 145.483 C 99.902 134.86 104.447 124.164 110.46 117.235 C 114.695 112.353 119.681 109.336 124.812 109.208 Z M 124.899 112.621 C 120.624 112.728 116.566 115.408 113.039 119.473 C 107.409 125.962 103.195 135.993 101.853 145.94 C 100.538 155.675 101.936 165.363 107.752 171.414 C 111.565 175.382 117.28 177.704 125.277 177.488 C 132.684 177.288 138.056 175.13 141.741 171.64 C 145.156 168.406 147.102 164.052 147.945 159.198 C 149.258 151.629 147.903 142.86 145.025 134.966 C 142.291 127.463 138.18 120.74 133.589 116.616 C 130.78 114.095 127.821 112.547 124.899 112.621 Z M 110.604 151.5 C 110.74 140.347 116.883 133.791 117.206 133.408 C 117.569 132.976 120.974 129.251 124.932 129.29 C 128.721 129.327 131.851 132.765 132.364 133.362 C 132.37 133.369 132.376 133.375 132.381 133.381 C 134.577 135.884 136.501 139.398 137.745 143.208 C 137.988 143.919 140.655 152.023 138.182 158.542 C 135.052 166.786 125.9 167.566 120.734 166.459 L 120.734 166.458 C 120.728 166.457 120.723 166.455 120.717 166.455 C 113.44 164.806 110.53 158.567 110.604 151.503 C 110.604 151.502 110.604 151.501 110.604 151.5 Z M 127.045 163.304 C 130.26 162.827 133.516 161.209 134.988 157.33 C 136.461 153.451 135.741 148.91 135.111 146.348 C 134.559 146.75 134.045 147.234 133.675 147.852 C 132.874 149.195 132.733 151.247 132.415 153.358 C 132.018 155.996 131.423 158.708 129.874 160.761 C 129.15 161.719 128.158 162.549 127.045 163.304 Z M 128.763 134.502 C 127.882 133.694 126.492 132.721 124.899 132.704 C 122.253 132.679 120.061 135.319 119.818 135.608 C 119.561 135.913 115.111 140.68 114.185 148.869 C 114.375 148.775 114.557 148.681 114.728 148.584 C 115.59 148.095 116.139 147.544 116.429 146.556 C 117.299 143.593 118.25 141.734 119.6 140.299 C 120.929 138.885 122.671 137.872 125.266 136.702 C 126.79 136.015 127.925 135.256 128.763 134.502 Z M 120.858 162.967 C 123.154 161.713 125.763 160.539 127.148 158.703 C 128.366 157.09 128.727 154.923 129.039 152.849 C 129.43 150.248 129.756 147.755 130.744 146.1 C 131.566 144.724 132.832 143.75 134.048 142.985 C 133.227 140.815 132.172 138.791 130.973 137.106 C 129.922 138.038 128.528 138.977 126.671 139.815 C 124.59 140.754 123.154 141.503 122.088 142.637 C 121.043 143.749 120.38 145.225 119.705 147.518 C 118.926 150.175 117.303 151.282 114.037 152.659 C 114.243 157.4 116.142 161.599 120.858 162.967 Z" fill="url(#core-stroke)" />
        <path class="icon cli" d="M 125.1 109.215 C 128.834 109.121 132.695 110.916 136.282 114.138 C 141.28 118.626 145.807 125.913 148.784 134.08 C 154.05 148.527 154.341 165.624 144.593 174.856 C 140.347 178.879 134.199 181.483 125.663 181.714 C 116.374 181.966 109.787 179.121 105.358 174.513 C 98.811 167.701 96.981 156.856 98.46 145.899 C 99.909 135.156 104.505 124.34 110.586 117.332 C 114.868 112.396 119.91 109.345 125.1 109.215 Z M 125.187 112.667 C 120.864 112.775 116.761 115.485 113.194 119.595 C 107.501 126.157 103.24 136.302 101.882 146.36 C 100.554 156.204 101.967 166.001 107.848 172.12 C 111.703 176.132 117.483 178.481 125.57 178.263 C 133.06 178.06 138.493 175.879 142.219 172.349 C 145.672 169.078 147.64 164.676 148.492 159.768 C 149.821 152.113 148.45 143.246 145.54 135.263 C 142.774 127.676 138.618 120.876 133.975 116.707 C 131.135 114.156 128.143 112.592 125.187 112.667 Z M 139.152 162.099 C 139.152 163.052 138.379 163.825 137.425 163.825 L 113.001 163.825 C 112.047 163.825 111.274 163.052 111.274 162.099 L 111.274 135.899 C 111.274 134.945 112.047 134.172 113.001 134.172 L 137.425 134.172 C 138.379 134.172 139.152 134.945 139.152 135.899 L 139.152 162.099 Z M 135.699 141.196 L 114.728 141.196 L 114.728 160.372 L 135.699 160.372 L 135.699 141.196 Z M 122.818 151.941 L 119.088 154.865 C 118.568 155.273 117.861 155.348 117.267 155.059 C 116.673 154.769 116.296 154.167 116.296 153.506 L 116.296 152.549 C 116.296 152.016 116.542 151.512 116.963 151.185 L 118.222 150.207 L 116.947 149.191 C 116.535 148.864 116.296 148.366 116.296 147.841 L 116.296 146.903 C 116.296 146.243 116.671 145.642 117.263 145.352 C 117.855 145.062 118.561 145.135 119.082 145.539 L 122.812 148.437 C 123.233 148.764 123.479 149.267 123.479 149.801 L 123.479 150.582 C 123.479 151.113 123.235 151.614 122.818 151.941 Z M 133.323 153.506 L 133.323 154.402 C 133.323 155.356 132.55 156.129 131.596 156.129 L 125.213 156.129 C 124.26 156.129 123.487 155.356 123.487 154.402 L 123.487 153.506 C 123.487 152.552 124.26 151.779 125.213 151.779 L 131.596 151.779 C 132.55 151.779 133.323 152.552 133.323 153.506 Z" style="fill: var(--color-cli);" />
        <path class="icon router" d="M 125.178 109.933 C 128.82 109.841 132.587 111.592 136.086 114.735 C 140.962 119.114 145.378 126.223 148.282 134.189 C 153.418 148.282 153.703 164.96 144.193 173.966 C 140.051 177.89 134.054 180.432 125.727 180.656 C 116.665 180.902 110.24 178.127 105.919 173.631 C 99.533 166.986 97.748 156.407 99.191 145.718 C 100.605 135.239 105.088 124.688 111.019 117.851 C 115.197 113.037 120.115 110.059 125.178 109.933 Z M 125.262 113.301 C 121.045 113.406 117.043 116.049 113.564 120.06 C 108.009 126.46 103.853 136.357 102.528 146.169 C 101.233 155.772 102.611 165.328 108.348 171.297 C 112.11 175.211 117.747 177.503 125.636 177.29 C 132.943 177.091 138.242 174.964 141.877 171.521 C 145.246 168.33 147.165 164.035 147.996 159.248 C 149.293 151.78 147.956 143.13 145.117 135.343 C 142.419 127.942 138.364 121.309 133.835 117.242 C 131.065 114.754 128.146 113.228 125.262 113.301 Z M 120.962 136.197 C 120.973 134.547 122.315 133.21 123.968 133.21 L 126.609 133.21 C 128.262 133.21 129.604 134.547 129.614 136.197 L 133.759 136.197 C 134.126 136.197 134.479 136.289 134.758 136.433 C 134.76 136.434 134.762 136.434 134.764 136.435 C 134.764 136.435 139.231 138.745 139.226 138.742 C 139.982 139.13 140.265 139.804 140.265 140.401 C 140.265 140.997 139.982 141.672 139.231 142.056 L 134.764 144.366 C 134.762 144.367 134.76 144.368 134.758 144.368 C 134.479 144.512 134.126 144.605 133.761 144.604 L 129.614 144.604 L 129.614 146.179 L 138.23 146.179 C 139.538 146.179 140.265 147.289 140.265 148.073 L 140.265 152.692 C 140.265 153.476 139.538 154.587 138.23 154.587 L 129.614 154.587 L 129.614 164.55 C 129.614 166.209 128.268 167.555 126.609 167.555 L 123.968 167.555 C 122.309 167.555 120.962 166.209 120.962 164.55 L 120.962 154.587 L 116.816 154.587 C 116.449 154.587 116.097 154.493 115.818 154.351 C 115.817 154.35 115.815 154.349 115.813 154.348 C 115.813 154.348 111.346 152.039 111.351 152.041 C 110.595 151.654 110.312 150.979 110.312 150.383 C 110.312 149.787 110.595 149.112 111.346 148.727 L 115.813 146.418 C 115.815 146.417 115.817 146.416 115.818 146.415 C 116.097 146.272 116.449 146.179 116.814 146.179 L 120.962 146.179 L 120.962 144.604 L 112.347 144.604 C 111.039 144.604 110.312 143.493 110.312 142.71 L 110.312 138.091 C 110.312 137.308 111.039 136.197 112.347 136.197 L 120.962 136.197 Z M 120.962 141.235 L 120.962 139.566 L 113.681 139.566 L 113.681 141.235 L 120.962 141.235 Z M 124.331 146.179 L 126.246 146.179 L 126.246 144.604 L 124.331 144.604 L 124.331 146.179 Z M 120.962 151.218 L 120.962 149.548 L 117.094 149.548 L 115.478 150.383 C 116.14 150.724 116.757 151.044 117.094 151.218 L 120.962 151.218 Z M 126.246 154.587 L 124.331 154.587 L 124.331 164.186 L 126.246 164.186 L 126.246 154.587 Z M 129.614 149.548 L 129.614 151.218 L 136.896 151.218 L 136.896 149.548 L 129.614 149.548 Z M 129.614 139.566 L 129.614 141.235 L 133.483 141.235 L 135.098 140.401 C 134.437 140.058 133.818 139.74 133.483 139.566 L 129.614 139.566 Z M 126.246 141.235 L 126.246 139.566 L 124.331 139.566 L 124.331 141.235 L 126.246 141.235 Z M 124.331 151.218 L 126.246 151.218 L 126.246 149.548 L 124.331 149.548 L 124.331 151.218 Z" style="fill: var(--color-router);" />
        <path class="icon store" d="M 124.922 108.209 C 128.779 108.112 132.765 109.966 136.471 113.293 C 141.632 117.929 146.308 125.454 149.382 133.889 C 154.821 148.809 155.121 166.465 145.054 176 C 140.668 180.154 134.319 182.844 125.504 183.083 C 115.91 183.342 109.107 180.405 104.534 175.645 C 97.773 168.61 95.883 157.41 97.41 146.094 C 98.908 135 103.653 123.83 109.933 116.593 C 114.355 111.495 119.562 108.343 124.922 108.209 Z M 125.012 111.774 C 120.548 111.886 116.31 114.685 112.626 118.93 C 106.747 125.706 102.346 136.183 100.944 146.571 C 99.573 156.737 101.032 166.854 107.105 173.174 C 111.087 177.317 117.056 179.744 125.407 179.518 C 133.143 179.308 138.753 177.056 142.601 173.411 C 146.168 170.033 148.2 165.486 149.08 160.418 C 150.453 152.512 149.036 143.354 146.031 135.11 C 143.175 127.275 138.883 120.253 134.088 115.947 C 131.154 113.312 128.065 111.697 125.012 111.774 Z M 137.044 145.653 C 137.348 146.177 137.522 146.786 137.522 147.436 L 137.522 151.002 C 137.522 151.651 137.348 152.26 137.044 152.785 C 137.348 153.31 137.522 153.919 137.522 154.569 L 137.522 158.135 C 137.522 160.103 135.923 161.701 133.955 161.701 L 116.124 161.701 C 114.155 161.701 112.557 160.103 112.557 158.135 L 112.557 154.569 C 112.557 153.919 112.731 153.31 113.034 152.785 C 112.731 152.26 112.557 151.651 112.557 151.002 L 112.557 147.436 C 112.557 146.786 112.731 146.177 113.034 145.653 C 112.731 145.127 112.557 144.519 112.557 143.869 L 112.557 140.303 C 112.557 138.335 114.155 136.737 116.124 136.737 L 133.955 136.737 C 135.923 136.737 137.522 138.335 137.522 140.303 L 137.522 143.869 C 137.522 144.519 137.348 145.127 137.044 145.653 Z M 116.124 143.869 L 133.955 143.869 L 133.955 140.303 L 116.124 140.303 L 116.124 143.869 Z M 116.124 151.002 L 133.955 151.002 L 133.955 147.436 L 116.124 147.436 L 116.124 151.002 Z M 133.955 154.569 L 116.124 154.569 L 116.124 158.135 L 133.955 158.135 L 133.955 154.569 Z" style="fill: var(--color-store);" />
      </g>

      <g id="texts">
        <text class="core text" x="180" y="170" width="100" height="30" style="font-size: 70px; fill: var(--color-dark);">Core</text>
        <text class="cli text" x="200" y="170" width="100" height="30" style="font-size: 70px; fill: var(--color-cli);">CLI</text>
        <text class="router text" x="170" y="170" width="100" height="30" style="font-size: 60px; fill: var(--color-router);">Router</text>
        <text class="store text" x="175" y="170" width="100" height="30" style="font-size: 70px; fill: var(--color-store);">Store</text>
      </g>

      <g id="homepages">
        <g>
          <rect class="core homepage-bg" x="72.5" y="200" width="305" height="0" style="fill: url(#core-homepage-bg-fill);" />
          <text class="core homepage" x="190" y="222" font-size="20" style="fill: var(--color-light);"></text>
        </g>
        <g>
          <rect class="cli homepage-bg" x="72.5" y="200" width="305" height="0" style="fill: var(--color-cli);" />
          <text class="cli homepage" x="180" y="222" font-size="20" style="fill: var(--color-light);"></text>
        </g>
        <g>
          <rect class="router homepage-bg" x="72.5" y="200" width="305" height="0" style="fill: var(--color-router);" />
          <text class="router homepage" x="160" y="222" font-size="20" style="fill: var(--color-light);"></text>
        </g>
        <g>
          <rect class="store homepage-bg" x="72.5" y="200" width="305" height="0" style="fill: var(--color-store);" />
          <text class="store homepage" x="165" y="222" font-size="20" style="fill: var(--color-light);"></text>
        </g>
      </g>

      <g id="navigation">

        <g id="buttons">
          <rect class="core button" x="140" y="285" width="30" height="10" rx="5" style="fill: url(#core-stroke);" @click="toSlide(0)" />
          <rect class="cli button" x="190" y="285" width="30" height="10" rx="5" style="fill: var(--color-cli);" @click="toSlide(1)" />
          <rect class="router button" x="240" y="285" width="30" height="10" rx="5" style="fill: var(--color-router);" @click="toSlide(2)" />
          <rect class="store button" x="290" y="285" width="30" height="10" rx="5" style="fill: var(--color-store);" @click="toSlide(3)" />
        </g>

        <g id="arrows">
          <g id="left" @click="prevSlide()">
            <rect x="5" y="110" width="40" height="72" fill="rgba(0,0,0,0)" />
            <path d="M435.76062,39.2902857 L446.638635,49.7417043 L446.699713,49.7959169 C446.885605,49.9745543 446.985701,50.2044182 447,50.4382227 L447,50.5617773 C446.985701,50.7955818 446.885605,51.0254457 446.699713,51.2040831 L446.646163,51.2479803 L435.76062,61.7097143 C435.357854,62.0967619 434.704841,62.0967619 434.302075,61.7097143 C433.899308,61.3226668 433.899308,60.6951387 434.302075,60.3080911 L444.451352,50.5617773 L434.302075,40.6919089 C433.899308,40.3048613 433.899308,39.6773332 434.302075,39.2902857 C434.704841,38.9032381 435.357854,38.9032381 435.76062,39.2902857 Z" transform-origin="center" transform="scale(2) rotate(180) translate(-115 120)" style="fill: var(--color-medium);" />
          </g>
          <g id="right" @click="nextSlide()">
            <rect x="404" y="114" width="40" height="72" fill="rgba(0,0,0,0)" />
            <path d="M435.76062,39.2902857 L446.638635,49.7417043 L446.699713,49.7959169 C446.885605,49.9745543 446.985701,50.2044182 447,50.4382227 L447,50.5617773 C446.985701,50.7955818 446.885605,51.0254457 446.699713,51.2040831 L446.646163,51.2479803 L435.76062,61.7097143 C435.357854,62.0967619 434.704841,62.0967619 434.302075,61.7097143 C433.899308,61.3226668 433.899308,60.6951387 434.302075,60.3080911 L444.451352,50.5617773 L434.302075,40.6919089 C433.899308,40.3048613 433.899308,39.6773332 434.302075,39.2902857 C434.704841,38.9032381 435.357854,38.9032381 435.76062,39.2902857 Z" transform="scale(2) translate(-228 25)" style="fill: var(--color-medium);" />
          </g>
        </g>

      </g>

    </svg>

  </div>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted } from 'vue';

  declare const gsap: any
  type Name = 'core' | 'cli' | 'router' | 'store'
  type TimelineMethod = (...params: any[]) => Timeline
  interface Timeline {
    from: TimelineMethod;
    to: TimelineMethod;
    fromTo: TimelineMethod;
    progress: TimelineMethod;
    pause: TimelineMethod;
    restart: TimelineMethod;
    kill: TimelineMethod;
  }
  type Slide = Timeline
  interface ItemProps {
    BOX: string;
    ICON: string;
    TEXT: string;
    HOMEPAGE: string;
    BUTTON: string;
    iconFill: string;
    homepageUrl: string;
  }

  const boxesEl = ref<Element>()
  const autoplay = ref(4000)
  const autoplayTimeout = ref<any>()
  const currentIndex = ref(0)
  const currentExit = ref<Timeline>()
  const currentEntry = ref<Timeline>()

  const SLIDE_DATA = computed(() => {
    return {
      core: {
        iconFill: 'url(#core-fill)',
        homepageUrl: 'tinijs.dev'
      },
      cli: {
        iconFill: 'var(--color-cli)',
        homepageUrl: 'cli.tinijs.dev'
      },
      router: {
        iconFill: 'var(--color-router)',
        homepageUrl: 'router.tinijs.dev'
      },
      store: {
        iconFill: 'var(--color-store)',
        homepageUrl: 'store.tinijs.dev'
      }
    }
  })
  const SLIDE_DEF = computed(() => {
    const result: Name[] = []
    const children = boxesEl.value?.children || []
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      result.push(child.classList.item(0) as Name)
    }
    return result
  })
  const SLIDE_COUNT = computed(() => {
    return SLIDE_DEF.value.length
  })

  function selector(name: Name, type: string) {
    return `.${name}.${type}`
  }
  function newTimeline(): Timeline {
    return gsap.timeline({
      defaults: {
        duration: 2,
        transformOrigin: 'center'
      }
    })
  }
  function buildItemProps(name: Name) {
    return {
      BOX: selector(name, 'box'),
      ICON: selector(name, 'icon'),
      TEXT: selector(name, 'text'),
      HOMEPAGE: selector(name, 'homepage'),
      HOMEPAGE_BG: selector(name, 'homepage-bg'),
      BUTTON: selector(name, 'button'),
      ...SLIDE_DATA.value[name],
    }
  }
  function showItem(i: number) {
    const CORE_ICON = selector(SLIDE_DEF.value[0], 'icon')
    const { BOX, ICON, TEXT, HOMEPAGE, HOMEPAGE_BG, BUTTON, iconFill, homepageUrl } =
      buildItemProps(SLIDE_DEF.value[i])
    return newTimeline()
      .fromTo(BOX, { opacity: 1, drawSVG: '0%' }, { opacity: 1, drawSVG: '100%', duration: 1.5 }, 0)
      .to(CORE_ICON, { opacity: 1, morphSVG: ICON, fill: iconFill, duration: .75 }, 0)
      .fromTo(TEXT, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 }, 0)
      .to(HOMEPAGE, { delay: .7, opacity: 1, scrambleText: { text: homepageUrl }, duration: 1 }, 0)
      .to(HOMEPAGE_BG, { delay: .4, height: 30, duration: .75 }, 0)
      .to(BUTTON, { opacity: 1, duration: .5 }, 0)
  }
  function hideItem(i: number) {
    const { BOX, TEXT, HOMEPAGE, HOMEPAGE_BG, BUTTON } =
      buildItemProps(SLIDE_DEF.value[i])
    return newTimeline()
      .to(BOX, { opacity: 0, duration: 1.5 }, 0)
      .to(TEXT, { y: 25, opacity: 0, duration: .5 }, 0)
      .to(HOMEPAGE, { opacity: 0, duration: 0 }, 0)
      .to(HOMEPAGE_BG, { height: 0, duration: 0 }, 0)
      .to(BUTTON, { opacity: .3, duration: .5 }, 0)
  }
  function doSlide(a: number, b: number) {
    // stop the current
    if (currentExit.value) currentExit.value.progress(1).pause().kill()
    if (currentEntry.value) currentEntry.value.progress(1).pause().kill()
    // build & run new
    currentExit.value = hideItem(a)
    currentEntry.value = showItem(b)
    // autoplay
    requestAutoplay()
  }
  function prevSlide() {
    const a = currentIndex.value
    const b = currentIndex.value <= 0
      ? (currentIndex.value = SLIDE_COUNT.value - 1)
      : --currentIndex.value
    doSlide(a, b)
  }
  function nextSlide() {
    const a = currentIndex.value
    const b = currentIndex.value >= SLIDE_COUNT.value - 1
      ? (currentIndex.value = 0)
      : ++currentIndex.value
    doSlide(a, b)
  }
  function toSlide(i: number) {
    const a = currentIndex.value
    const b = (currentIndex.value = i)
    doSlide(a, b)
  }
  function requestAutoplay() {
    if (autoplayTimeout.value !== null) clearTimeout(autoplayTimeout.value)
    if (!autoplay.value) return
    autoplayTimeout.value = setTimeout(() => nextSlide(), Math.abs(autoplay.value))
  }

  onMounted(() => {
    setTimeout(() => showItem(0), 1000)
    requestAutoplay()
  })

</script>

<style lang="scss" scoped>

  .main {
    --color-light: #ffffff;
    --color-medium: #777777;
    --color-dark: #333333;
    --color-tini-R: #f06644;
    --color-tini-G: #31ce95;
    --color-tini-B: #4a86ff;
    --color-cli: var(--color-tini-B);
    --color-router: var(--color-tini-G);
    --color-store: var(--color-tini-R);
  }
  svg {
    width: 100%;
    height: auto;
  }
  .core, .cli, .router, .store {
    opacity: 0;
    &.icon {
      visibility: hidden;
    }
    &.homepage-bg {
      opacity: 1;
    }
    &.button {
      opacity: .3;
    }
  }
  .core.icon {
    visibility: visible;
  }
  #buttons > *,
  #arrows > * {
    cursor: pointer;
  }
  #arrows > * {
    opacity: .5;
    transition: opacity .5s ease;
    &:hover {
      opacity: 1;
    }
  }

</style>
