import { useEffect, useRef } from 'react'
import './CoverflowCarousel.css'

const defaultBreakpoints = [
  { mq: '(max-width: 1200px)', gap: 24, peek: 0.12, rotateY: 28, zDepth: 120, scaleDrop: 0.08, activeLeftBias: 0.1 },
  { mq: '(max-width: 1000px)', gap: 18, peek: 0.09, rotateY: 22, zDepth: 90, scaleDrop: 0.07, activeLeftBias: 0.09 },
  { mq: '(max-width: 768px)', gap: 14, peek: 0.06, rotateY: 16, zDepth: 70, scaleDrop: 0.06, activeLeftBias: 0.08 },
  { mq: '(max-width: 560px)', gap: 12, peek: 0.05, rotateY: 12, zDepth: 60, scaleDrop: 0.05, activeLeftBias: 0.07 },
]

const mod = (i, m) => ((i % m) + m) % m

export default function CoverflowCarousel({ slides, interval = 4500, transitionMs = 900, className = '' }) {
  const rootRef = useRef(null)
  const viewportRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const paginationRef = useRef(null)
  const progressRef = useRef(null)
  const mediaCleanupRef = useRef([])
  const handlersRef = useRef({})

  useEffect(() => {
    const root = rootRef.current
    const viewport = viewportRef.current
    const pagination = paginationRef.current
    const progressBar = progressRef.current
    const isFF = typeof InstallTrigger !== 'undefined'
    const n = slides.length
    if (n === 0) return

    const opts = {
      gap: 28, peek: 0.15, rotateY: 34, zDepth: 150, scaleDrop: 0.09, blurMax: 2.0,
      activeLeftBias: 0.12, interval, transitionMs, breakpoints: defaultBreakpoints,
    }
    if (isFF) { opts.rotateY = 10; opts.zDepth = 0; opts.blurMax = 0 }

    const st = {
      pos: 0, index: 0, width: 0, height: 0, gap: opts.gap, slideW: 0,
      dragging: false, pointerId: null, x0: 0, v: 0, t0: 0,
      animating: false, hovering: false, startTime: 0, pausedAt: 0, rafId: 0,
    }

    // ── helpers ──────────────────────────────────────────────────
    const nearest = (from, target) => {
      let d = target - Math.round(from)
      if (d > n / 2) d -= n
      if (d < -n / 2) d += n
      return Math.round(from) + d
    }

    const ease = (x) => 1 - Math.pow(1 - x, 4)

    // ── measure ──────────────────────────────────────────────────
    const measure = () => {
      const viewRect = viewport.getBoundingClientRect()
      const rootRect = root.getBoundingClientRect()
      const pagRect = pagination.getBoundingClientRect()
      const bottomGap = Math.max(12, Math.round(rootRect.bottom - pagRect.bottom))
      const pagSpace = pagRect.height + bottomGap
      const availH = viewRect.height - pagSpace
      const cardH = Math.max(280, Math.min(640, Math.round(availH)))
      st.width = viewRect.width
      st.height = viewRect.height
      st.gap = opts.gap
      st.slideW = Math.min(880, st.width * (1 - opts.peek * 2))
      root.style.setProperty('--bf-pagH', `${pagSpace}px`)
      root.style.setProperty('--bf-cardH', `${cardH}px`)
    }

    // ── tilt ─────────────────────────────────────────────────────
    const onTilt = (e) => {
      const r = viewport.getBoundingClientRect()
      const mx = (e.clientX - r.left) / r.width - 0.5
      const my = (e.clientY - r.top) / r.height - 0.5
      root.style.setProperty('--bfTiltX', (my * -6).toFixed(3))
      root.style.setProperty('--bfTiltY', (mx * 6).toFixed(3))
    }

    // ── render ───────────────────────────────────────────────────
    const render = (markActive = false) => {
      const span = st.slideW + st.gap
      const tiltX = parseFloat(root.style.getPropertyValue('--bfTiltX') || 0)
      const tiltY = parseFloat(root.style.getPropertyValue('--bfTiltY') || 0)
      for (let i = 0; i < n; i++) {
        let d = i - st.pos
        if (d > n / 2) d -= n
        if (d < -n / 2) d += n
        const weight = Math.max(0, 1 - Math.abs(d) * 2)
        const biasActive = -st.slideW * opts.activeLeftBias * weight
        const tx = d * span + biasActive
        const depth = -Math.abs(d) * opts.zDepth
        const rot = -d * opts.rotateY
        const scale = 1 - Math.min(Math.abs(d) * opts.scaleDrop, 0.42)
        const blur = Math.min(Math.abs(d) * opts.blurMax, opts.blurMax)
        const z = Math.round(1000 - Math.abs(d) * 10)
        const slide = root.querySelectorAll('.bf-carousel-slide')[i]
        if (!slide) continue
        if (isFF) {
          slide.style.transform = `translate(${tx}px,-50%) scale(${scale})`
          slide.style.filter = 'none'
        } else {
          slide.style.transform = `translate3d(${tx}px,-50%,${depth}px) rotateY(${rot}deg) scale(${scale})`
          slide.style.filter = `blur(${blur}px)`
        }
        slide.style.zIndex = z
        if (markActive) slide.dataset.state = Math.round(st.index) === i ? 'active' : 'rest'
        const card = slide.querySelector('.bf-card')
        if (card) {
          const parBase = Math.max(-1, Math.min(1, -d))
          const parX = parBase * 48 + tiltY * 2.0
          const parY = tiltX * -1.5
          const bgX = parBase * -64 + tiltY * -2.4
          card.style.setProperty('--bf-par-x', `${parX.toFixed(2)}px`)
          card.style.setProperty('--bf-par-y', `${parY.toFixed(2)}px`)
          card.style.setProperty('--bf-par-bg-x', `${bgX.toFixed(2)}px`)
          card.style.setProperty('--bf-par-bg-y', `${(parY * 0.35).toFixed(2)}px`)
        }
      }
      const activeIdx = mod(Math.round(st.pos), n)
      const dots = pagination.querySelectorAll('.bf-carousel-dot')
      dots.forEach((d, i) => d.setAttribute('aria-selected', i === activeIdx ? 'true' : 'false'))
    }

    // ── progress ─────────────────────────────────────────────────
    const renderProgress = (p) => {
      progressBar.style.transform = `scaleX(${p})`
    }

    // ── goTo ─────────────────────────────────────────────────────
    const goTo = (target, animate = true) => {
      if (st.animating) return
      const start = st.pos || st.index
      const end = nearest(start, target)
      const dur = animate ? transitionMs : 0
      const t0 = performance.now()
      st.animating = true
      const step = (now) => {
        const t = Math.min(1, (now - t0) / dur)
        const p = dur ? ease(t) : 1
        st.pos = start + (end - start) * p
        render()
        if (t < 1) requestAnimationFrame(step)
        else afterSnap(Math.round(end))
      }
      requestAnimationFrame(step)
    }

    const afterSnap = (i) => {
      st.index = mod(i, n)
      st.pos = st.index
      st.animating = false
      render(true)
      startCycle()
    }

    const prev = () => goTo(mod(st.index - 1, n))
    const next = () => goTo(mod(st.index + 1, n))

    // ── cycle / loop ─────────────────────────────────────────────
    const startCycle = () => {
      st.startTime = performance.now()
      st.pausedAt = 0
      renderProgress(0)
    }

    const loop = (t) => {
      if (!st.dragging && !st.hovering && !st.animating) {
        const paused = st.pausedAt
        const elapsed = t - (st.startTime + (paused ? performance.now() - paused : 0))
        const p = Math.min(1, elapsed / opts.interval)
        renderProgress(p)
        if (elapsed >= opts.interval) next()
      }
      st.rafId = requestAnimationFrame(loop)
    }

    // ── drag ─────────────────────────────────────────────────────
    const onDragStart = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      e.preventDefault()
      st.dragging = true
      st.pointerId = e.pointerId
      viewport.setPointerCapture(e.pointerId)
      st.x0 = e.clientX
      st.t0 = performance.now()
      st.v = 0
      st.pausedAt = performance.now()
    }

    const onDragMove = (e) => {
      if (!st.dragging || e.pointerId !== st.pointerId) return
      const dx = e.clientX - st.x0
      const dt = Math.max(16, performance.now() - st.t0)
      st.v = dx / dt
      const slideSpan = st.slideW + st.gap
      st.pos = mod(st.index - dx / slideSpan, n)
      render()
    }

    const onDragEnd = (e) => {
      if (!st.dragging || (e && e.pointerId !== st.pointerId)) return
      st.dragging = false
      try { if (st.pointerId != null) viewport.releasePointerCapture(st.pointerId) } catch {}
      st.pointerId = null
      if (st.pausedAt) { st.pausedAt = 0 }
      const threshold = 0.18
      const target = Math.round(st.pos - Math.sign(st.v) * (Math.abs(st.v) > threshold ? 0.5 : 0))
      goTo(mod(target, n))
    }

    // ── keyboard ─────────────────────────────────────────────────
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    // ── hover pause ──────────────────────────────────────────────
    const onMouseEnter = () => { st.hovering = true; st.pausedAt = performance.now() }
    const onMouseLeave = () => { st.pausedAt = 0; st.hovering = false }

    // ── setup dots ───────────────────────────────────────────────
    pagination.innerHTML = ''
    for (let i = 0; i < n; i++) {
      const b = document.createElement('button')
      b.type = 'button'
      b.className = 'bf-carousel-dot'
      b.setAttribute('role', 'tab')
      b.setAttribute('aria-label', `Go to slide ${i + 1}`)
      b.addEventListener('click', () => goTo(i))
      pagination.appendChild(b)
    }

    // ── preload images ───────────────────────────────────────────
    root.querySelectorAll('.bf-card').forEach((card) => {
      const bg = card.style.getPropertyValue('--bf-card-bg')
      const m = /url\((?:'|")?([^'")]+)(?:'|")?\)/.exec(bg)
      if (m?.[1]) { const img = new Image(); img.src = m[1] }
    })

    // ── bind events ──────────────────────────────────────────────
    handlersRef.current = { onDragStart, onDragMove, onDragEnd, onTilt, onKeyDown, onMouseEnter, onMouseLeave }
    prevRef.current.addEventListener('click', prev)
    nextRef.current.addEventListener('click', next)
    viewport.addEventListener('keydown', onKeyDown)
    viewport.addEventListener('pointerdown', onDragStart)
    viewport.addEventListener('pointermove', onDragMove)
    viewport.addEventListener('pointerup', onDragEnd)
    viewport.addEventListener('pointercancel', onDragEnd)
    viewport.addEventListener('pointermove', onTilt)
    root.addEventListener('mouseenter', onMouseEnter)
    root.addEventListener('mouseleave', onMouseLeave)

    const ro = new ResizeObserver(() => { measure(); render() })
    ro.observe(viewport)

    // ── breakpoints ──────────────────────────────────────────────
    const cleanups = []
    opts.breakpoints.forEach((bp) => {
      const m = window.matchMedia(bp.mq)
      const apply = () => {
        Object.keys(bp).forEach((k) => { if (k !== 'mq') opts[k] = bp[k] })
        measure()
        render()
      }
      if (m.addEventListener) m.addEventListener('change', apply)
      else m.addListener(apply)
      if (m.matches) apply()
      cleanups.push({ mq: m, apply })
    })
    mediaCleanupRef.current = cleanups

    // ── init ─────────────────────────────────────────────────────
    measure()
    goTo(0, false)
    startCycle()
    st.rafId = requestAnimationFrame(loop)

    // ── cleanup ──────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(st.rafId)
      ro.disconnect()
      prevRef.current?.removeEventListener('click', prev)
      nextRef.current?.removeEventListener('click', next)
      viewport.removeEventListener('keydown', onKeyDown)
      viewport.removeEventListener('pointerdown', onDragStart)
      viewport.removeEventListener('pointermove', onDragMove)
      viewport.removeEventListener('pointerup', onDragEnd)
      viewport.removeEventListener('pointercancel', onDragEnd)
      viewport.removeEventListener('pointermove', onTilt)
      root.removeEventListener('mouseenter', onMouseEnter)
      root.removeEventListener('mouseleave', onMouseLeave)
      cleanups.forEach(({ mq, apply }) => {
        if (mq.removeEventListener) mq.removeEventListener('change', apply)
        else mq.removeListener(apply)
      })
    }
  }, [slides, interval, transitionMs])

  return (
    <div ref={rootRef} className={`bf-carousel ${className}`} aria-roledescription="carousel" aria-label="Featured projects">
      <div ref={viewportRef} className="bf-carousel-viewport" tabIndex={0}>
        <div className="bf-carousel-track">
          {slides.map((s, i) => (
            <article
              key={i}
              className="bf-carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <div className="bf-card" style={{ '--bf-card-bg': `url(${JSON.stringify(s.img)})` }}>
                <header className="bf-card-head bf-par-1">
                  <h2 className="bf-card-title">{s.title}</h2>
                  {s.kicker && <p className="bf-card-kicker">{s.kicker}</p>}
                </header>
                {s.text && <p className="bf-card-text bf-par-2">{s.text}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bf-carousel-controls" aria-label="Controls">
        <button ref={prevRef} className="bf-carousel-prev" aria-label="Previous slide" type="button">‹</button>
        <button ref={nextRef} className="bf-carousel-next" aria-label="Next slide" type="button">›</button>
      </div>

      <div ref={paginationRef} className="bf-carousel-pagination" role="tablist" aria-label="Slide navigation" />
      <div className="bf-carousel-progress" aria-hidden="true"><span ref={progressRef} className="bf-carousel-progressBar" /></div>
    </div>
  )
}