/* eslint-disable @next/next/no-page-custom-font */
"use client"
import Script from 'next/script'

export default function Head() {
  return (
    <>
      <title>Foobutt</title>
      <meta name="description" content="Intergalactic social network." />
      <link 
        // @ts-ignore
        precedence="default"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap" />
      <Script src="/js/gsap.min.js" />
      <Script src="/js/MorphSVGPlugin3.js" />
      <Script src="/js/DrawSVGPlugin3.js" />
      <Script src="/js/ScrambleTextPlugin3.js" />
      <Script src="/js/index.js" />
    </>
  )
}
