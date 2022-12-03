setTimeout(() => {
  const timeline = gsap.timeline({
    defaults: {
      duration: .7
    }
  })
  
  timeline
    .to('.container', { opacity: 1 })
    .from('.text', { y: -50, stagger: .6, opacity: 0 })
    .to(
      CSSRulePlugin.getRule('span:after'),
      { duration: 1.8, cssRule: {scaleY: 0} },
      '-=2.2'
    )
    .from('aside', { backgroundPosition: '70% 0', opacity: 0 }, '-=1.5')
    .from('img', { y: 30, opacity: 0 }, '-=.5')
  
  document.getElementById('cta').addEventListener('click',
    () => timeline.reversed() ? timeline.play() : timeline.reverse())
}, 100)
