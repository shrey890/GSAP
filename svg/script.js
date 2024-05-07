let initialPath = `M 50 80 Q 150 50 490 50`
let finalPath = `M 10 100 Q 250 100 490 100`
let string = document.querySelector('#string')
string.addEventListener('mouseenter', () => {
    path = `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out'
    })
})
string.addEventListener('mouseleave', (dets) => {
    // path = `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to('svg path', {
        attr: { d: finalPath },
        duration: 0.3,
        ease: 'power3.out'
    })
})