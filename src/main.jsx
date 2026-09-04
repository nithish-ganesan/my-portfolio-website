import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import contactAvatar from './assets/contact-avatar.png'

const concepts = [
  ['01', 'Enterprise SME Banking Platform', 'Scalable banking modules for onboarding, account services, lending, and digital banking operations.', 'BANKING PLATFORM'],
  ['02', 'Payment Gateway Integration', 'Secure transaction services connecting banking networks, settlements, and external payment providers.', 'PAYMENTS'],
  ['03', 'API Gateway Platform', 'Apigee API gateways to secure, manage, monitor, and expose banking services across channels.', 'API MANAGEMENT'],
  ['04', 'Microservices Transformation', 'Legacy banking applications evolved into resilient Spring Boot microservices.', 'MODERNIZATION'],
  ['05', 'Enterprise Security Framework', 'OAuth2, JWT, encryption, access control, and security practices for enterprise systems.', 'SECURITY']
]

const skills = [
  ['Backend', 'Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'REST APIs', 'Hibernate', 'Spring Security'],
  ['Banking & FinTech', 'SME Banking', 'Digital Banking', 'Payments', 'Financial Services', 'Transaction Processing', 'Enterprise Integration'],
  ['API Management', 'Apigee', 'OAuth2', 'JWT', 'Swagger', 'OpenAPI'],
  ['Databases', 'MongoDB', 'MySQL', 'Oracle Database'],
  ['Cloud & DevOps', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GCP', 'CI/CD'],
  ['Architecture', 'Solution Architecture', 'Distributed Systems', 'System Design', 'Scalable Applications', 'High Availability'],
  ['Frontend', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP']
]

const projects = [
  {
    type: 'Commerce Intelligence',
    title: 'NiSa Compare',
    url: 'https://nisa.ecommerce.nithishg.com',
    description: 'NiSa Compare is an AI-powered commerce platform that helps users compare products, prices, and offers across multiple online shopping platforms in one place.',
    detail: 'Built for faster shopping decisions with product intelligence, live price comparison, seller offer insights, and a conversational commerce workflow.',
    tech: [
      ['RE', 'React'],
      ['TS', 'TypeScript'],
      ['VI', 'Vite'],
      ['EX', 'Express.js'],
      ['AI', 'LLM'],
      ['SP', 'SerpAPI']
    ]
  }
]

function EnterpriseCore() {
  return <div className="core-wrap" aria-hidden="true">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="core"><span className="core-glow" /><i /><i /><i /><i /><i /><i /></div>
    <span className="core-label top">SECURE TRANSACTION FLOW</span><span className="core-label bottom">01 / ENTERPRISE CORE</span>
  </div>
}

function NisaScreenshot() {
  return <div className="nisa-screenshot" aria-label="NiSa Compare screenshot preview">
    <div className="nisa-browser-bar"><b>NiSa</b><nav><span>Home</span><span>Login</span><i>Light Mode</i></nav></div>
    <div className="nisa-hero-shot">
      <div>
        <span>NISA COMMERCE INTELLIGENCE</span>
        <h3>Compare.<br />Decide.<br />Save.</h3>
        <p>Compare live prices, seller offers, delivery signals, and value with confidence.</p>
      </div>
      <div className="nisa-bag"><i /></div>
      <div className="nisa-chart"><span /><span /><span /></div>
    </div>
    <div className="nisa-panel-shot">
      <b>NiSa</b>
      <span>Welcome back</span>
      <p>Continue with a verified Gmail account to access your commerce workspace.</p>
      <i>Continue with Google</i>
    </div>
    <div className="nisa-wide-shot">
      <span>ENTERPRISE COMMERCE INTELLIGENCE</span>
      <h3>Comparison chatbot<br />for smarter shopping</h3>
      <div className="nisa-mini-grid">
        <i>Comparison chatbot</i><i>Product intelligence</i><i>Best price intelligence</i>
      </div>
    </div>
  </div>
}

function ProjectShowcase({ project }) {
  const frame = useRef(null)
  const rotation = useRef({ x: -4, y: 0, lastX: 0, lastY: 0, velocityX: 0, velocityY: 0, travel: 0, pointerType: 'mouse', decay: 0.978, burstFrames: 0, resetAfterBurst: false, animationFrame: null, dragging: false, moved: false })
  const isStaticPreview = project.title === 'NiSa Compare'

  const applyRotation = (target, rotateX, rotateY, moveX = 0, moveY = 0) => {
    target.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
    target.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
    target.style.setProperty('--move-x', `${moveX.toFixed(2)}px`)
    target.style.setProperty('--move-y', `${moveY.toFixed(2)}px`)
  }

  const spin = () => {
    const state = rotation.current
    if (state.dragging || !frame.current) {
      state.animationFrame = null
      return
    }

    state.x += state.velocityX
    state.y += state.velocityY
    if (state.burstFrames > 0) {
      state.burstFrames -= 1
      if (state.burstFrames === 0) {
        state.velocityX = 0
        state.velocityY = 0
        if (state.resetAfterBurst) {
          state.x = -4
          state.y = 0
          state.resetAfterBurst = false
        }
      }
    } else {
      state.velocityX *= state.decay
      state.velocityY *= state.decay
    }
    applyRotation(frame.current, state.x, state.y)

    if (Math.abs(state.velocityX) + Math.abs(state.velocityY) > 0.08) {
      state.animationFrame = requestAnimationFrame(spin)
    } else {
      state.animationFrame = null
    }
  }

  useEffect(() => () => {
    if (rotation.current.animationFrame) cancelAnimationFrame(rotation.current.animationFrame)
  }, [])

  const handlePointerMove = event => {
    const target = event.currentTarget
    const state = rotation.current

    if (state.dragging) {
      const deltaX = event.clientX - state.lastX
      const deltaY = event.clientY - state.lastY
      if (state.pointerType === 'touch') {
        state.velocityX = Math.max(-18, Math.min(18, -deltaY * 2.4))
        state.velocityY = Math.max(-24, Math.min(24, deltaX * 3.2))
      } else {
        state.velocityX = Math.max(-240, Math.min(240, -deltaY * 48))
        state.velocityY = Math.max(-280, Math.min(280, deltaX * 60))
      }
      state.x += state.velocityX
      state.y += state.velocityY
      state.lastX = event.clientX
      state.lastY = event.clientY
      state.travel += Math.hypot(deltaX, deltaY)
      state.moved ||= state.travel > (state.pointerType === 'touch' ? 10 : 2)
      applyRotation(target, state.x, state.y)
      return
    }

    if (state.animationFrame) return

    const bounds = target.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    applyRotation(target, state.x - y * 34, state.y + x * 42, x * 46, y * 34)
  }

  const startRotation = event => {
    const state = rotation.current
    if (state.animationFrame) cancelAnimationFrame(state.animationFrame)
    state.animationFrame = null
    state.velocityX = 0
    state.velocityY = 0
    state.burstFrames = 0
    state.resetAfterBurst = false
    state.dragging = true
    state.moved = false
    state.travel = 0
    state.pointerType = event.pointerType
    state.decay = event.pointerType === 'touch' ? 0.86 : 0.978
    state.lastX = event.clientX
    state.lastY = event.clientY
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const stopRotation = event => {
    const target = event.currentTarget
    const state = rotation.current
    if (!state.dragging) return
    state.dragging = false
    applyRotation(target, state.x, state.y)
    if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId)
    if (Math.abs(state.velocityX) + Math.abs(state.velocityY) > 0.08) {
      state.animationFrame = requestAnimationFrame(spin)
    }
  }

  const settleRotation = event => {
    if (rotation.current.dragging) stopRotation(event)
    if (!frame.current) return
    if (!rotation.current.animationFrame) applyRotation(frame.current, rotation.current.x, rotation.current.y)
  }

  const handleProjectClick = event => {
    event.preventDefault()
    const state = rotation.current
    if (state.moved) {
      state.moved = false
      return
    }
    if (state.animationFrame) cancelAnimationFrame(state.animationFrame)
    if (state.pointerType === 'touch') {
      state.x = -4
      state.y = 0
      state.velocityX = 0
      state.velocityY = 12
      state.burstFrames = 30
      state.resetAfterBurst = true
      applyRotation(frame.current, state.x, state.y)
    } else {
      state.velocityX = 0
      state.velocityY = 140
      state.burstFrames = 18
      state.resetAfterBurst = false
    }
    state.animationFrame = requestAnimationFrame(spin)
  }

  if (isStaticPreview) {
    return <article className="project-showcase project-showcase-static">
      <div className="project-stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="project-screen-link" aria-label={`${project.title} screenshot preview`}>
        <NisaScreenshot />
      </div>
      <div className="project-summary-link">
        <span className="project-summary-type">{project.type}</span>
        <strong>{project.title}</strong>
        <span>{project.description}</span>
        <span>{project.detail}</span>
        <a className="project-summary-visit" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>Visit nisa.ecommerce <span>-&gt;</span></a>
        <small aria-label="Tech stack">{project.tech.map(([, name]) => name).join(' · ')}</small>
      </div>
    </article>
  }

  return <article className={`project-showcase${isStaticPreview ? ' project-showcase-static' : ''}`} ref={frame} onPointerMove={isStaticPreview ? undefined : handlePointerMove} onPointerDown={isStaticPreview ? undefined : startRotation} onPointerUp={isStaticPreview ? undefined : stopRotation} onPointerCancel={isStaticPreview ? undefined : stopRotation} onPointerLeave={isStaticPreview ? undefined : settleRotation}>
    <div className="project-stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
    <a className="project-screen-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} onClick={isStaticPreview ? undefined : handleProjectClick} draggable="false">
      <NisaScreenshot />
    </a>
    <div className="project-showcase-copy">
      <p>{project.type}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visit nisa.ecommerce <span>-&gt;</span></a>
      <div className="tech-labels" aria-label="Tech stack">{project.tech.map(([icon, name]) => <span key={name}><b>{icon}</b>{name}</span>)}</div>
    </div>
  </article>
}

function App() {
  const cursor = useRef(null)
  const [certificateOpen, setCertificateOpen] = useState(false)
  useEffect(() => {
    const move = event => { if (cursor.current) cursor.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)` }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <>
    <div className="grain" /><div className="cursor" ref={cursor} />
    <header><a className="brand" href="#home">NG</a><nav><a href="#home">Home</a><a href="#about">About</a><a href="#experience">Enterprise</a><a href="#projects">Project</a><a href="#achievements">Achievement</a><a className="nav-skills-link" href="#experience">Skills</a><a className="nav-contact-link" href="#contact">Contact</a><span className="nav-menu-icon" aria-hidden="true"></span></nav></header>
    <main>
      <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow"><span /> SENIOR SOFTWARE ENGINEER / SOLUTION ARCHITECT</p><h1>ENGINEERING SECURE<br/>DIGITAL BANKING<br/>SOLUTIONS <small>AT SCALE</small></h1><p className="hero-description">Building scalable banking platforms, payment systems, secure APIs, and enterprise-grade microservices for modern financial institutions.</p><a className="round-link" href="#experience">Explore my work</a></div><EnterpriseCore /><div className="scroll">SCROLL TO EXPLORE</div><div className="hero-index">01 <i /> 07</div></section>
      <section className="about section" id="about"><p className="eyebrow">ABOUT</p><div className="about-grid"><h2>Enterprise systems<br/>built for trust,<br/>scale, and speed.</h2><div><p className="lead">Complex financial services, made dependable.</p><p>I design and develop secure enterprise applications for SME Banking, payments, and financial services. My work connects clean architecture, scalable microservices, API governance, and cloud-native engineering.</p><a className="text-link" href="#experience">Explore my experience <span>-&gt;</span></a></div></div><div className="marquee">SME BANKING <b>*</b> PAYMENT SYSTEMS <b>*</b> SECURE APIS <b>*</b> CLOUD-NATIVE ARCHITECTURE <b>*</b></div></section>
      <section className="regulus enterprise-section section" id="experience"><p className="eyebrow">ENTERPRISE EXPERTISE</p><div className="project-heading"><h2>Enterprise<br/><span>Engineering</span></h2><p>Banking platforms, payment workflows, secure APIs, microservices, and production technology grouped as one enterprise capability.</p></div><div className="regulus-grid"><div className="project-visual"><div className="radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-line"/><span className="radar-dot"/></div><p>PLATFORM STATUS <b>ACTIVE</b></p></div><div className="project-copy"><p>Delivered enterprise-scale applications supporting SME customers, digital onboarding journeys, payment processing, employee salary disbursement flows, API governance, secure integrations, and distributed microservices.</p><div className="features"><div><b>01</b><span>Enterprise<br/>Microservices</span></div><div><b>02</b><span>SME Banking<br/>Solutions</span></div><div><b>03</b><span>Payment<br/>Processing</span></div><div><b>04</b><span>Secure API<br/>Management</span></div></div></div></div><div className="enterprise-panel"><div><h3>Enterprise concepts</h3><p>Hands-on across banking, payments, API platforms, microservices, and enterprise security patterns.</p></div><div className="cards enterprise-cards">{concepts.map(([number, title, description, category]) => <article className="card" key={number}><div className="card-number">{number}<span>-&gt;</span></div><div><p>{category}</p><h3>{title}</h3><small>{description}</small></div></article>)}</div></div><div className="enterprise-panel"><div><h3>Technology stack</h3><p>Tools and frameworks applied around scalable backend systems, cloud delivery, secure API management, and modern interfaces.</p></div><div className="skill-list enterprise-skills">{skills.map(([name, ...items]) => <div className="skill-row" key={name}><h3>{name}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>
      <section className="projects section" id="projects"><p className="eyebrow">PROJECTS</p><div className="project-list">{projects.map(project => <ProjectShowcase project={project} key={project.title} />)}</div></section>
      <section className="achievements section" id="achievements"><p className="eyebrow">ACHIEVEMENTS</p><h2>Continuous learning,<br/>applied with intent.</h2><button className="certificate-trigger" type="button" onClick={() => setCertificateOpen(true)}><span>Udemy Certificate of Completion</span><strong>Generative AI for Beginners</strong><i>View certificate -&gt;</i></button></section>{certificateOpen && <div className="certificate-overlay" role="presentation" onClick={() => setCertificateOpen(false)}><section className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title" onClick={event => event.stopPropagation()}><button className="certificate-close" type="button" aria-label="Close certificate" onClick={() => setCertificateOpen(false)}>x</button><div className="certificate-preview"><div className="udemy-mark"><b>^</b>udemy</div><div className="certificate-meta">Certificate no: UC-c4e6d20b-b4e9-4f2f-8734-7b2c71945eab<br/>Certificate url: ude.my/UC-c4e6d20b-b4e9-4f2f-8734-7b2c71945eab<br/>Reference Number: 0004</div><p>CERTIFICATE OF COMPLETION</p><h3 id="certificate-title">Generative AI for Beginners</h3><div className="certificate-instructor">Instructors&nbsp;&nbsp; <b>Aakriti E-Learning Academy</b></div><div className="certificate-owner"><strong>Nithish G</strong><span>Date&nbsp;&nbsp; <b>July 24, 2026</b><br/>Length&nbsp;&nbsp; <b>4.5 total hours</b></span></div></div></section></div>}
      <section className="contact" id="contact"><div className="contact-card"><div className="project-stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="contact-copy"><h2>Ready to Shape Enterprise AI Products</h2><p>Building AI systems, platform experiences, and developer products with measurable business impact.</p><div className="contact-links" aria-label="Contact links"><a href="https://www.linkedin.com/in/nithish-g-180719189/" target="_blank" rel="noreferrer"><span aria-hidden="true">in</span>LinkedIn</a><a href="https://github.com/nithish-ganesan" target="_blank" rel="noreferrer"><span aria-hidden="true">GH</span>GitHub</a><a href="mailto:nithishganesan2001@gmail.com"><span aria-hidden="true">@</span>Email</a></div></div><div className="contact-avatar" aria-hidden="true"><img src={contactAvatar} alt="" /></div><footer>(C) 2026 Nithish G</footer></div></section>
    </main>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
