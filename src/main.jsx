import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
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

function EnterpriseCore() {
  return <div className="core-wrap" aria-hidden="true">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="core"><span className="core-glow" /><i /><i /><i /><i /><i /><i /></div>
    <span className="core-label top">SECURE TRANSACTION FLOW</span><span className="core-label bottom">01 / ENTERPRISE CORE</span>
  </div>
}

function App() {
  const cursor = useRef(null)
  useEffect(() => {
    const move = event => { if (cursor.current) cursor.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)` }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <>
    <div className="grain" /><div className="cursor" ref={cursor} />
    <header><a className="brand" href="#home">NG<span>(R)</span></a><nav><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a></nav><a className="nav-contact" href="#contact">Let's talk <b>-&gt;</b></a></header>
    <main>
      <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow"><span /> SENIOR SOFTWARE ENGINEER / SOLUTION ARCHITECT</p><h1>ENGINEERING SECURE<br/><em>DIGITAL BANKING</em><br/>SOLUTIONS <small>AT SCALE</small></h1><p className="hero-description">Building scalable banking platforms, payment systems, secure APIs, and enterprise-grade microservices for modern financial institutions.</p><a className="round-link" href="#experience">Explore my work <span>v</span></a></div><EnterpriseCore /><div className="scroll">SCROLL TO EXPLORE <span>v</span></div><div className="hero-index">01 <i /> 06</div></section>
      <section className="about section" id="about"><p className="eyebrow">( 01 - ABOUT )</p><div className="about-grid"><h2>Enterprise systems<br/>built for <em>trust,</em><br/>scale, and speed.</h2><div><p className="lead">Complex financial services, made dependable.</p><p>I design and develop secure enterprise applications for SME Banking, payments, and financial services. My work connects clean architecture, scalable microservices, API governance, and cloud-native engineering.</p><a className="text-link" href="#experience">Explore my experience <span>-&gt;</span></a></div></div><div className="marquee">SME BANKING <b>*</b> PAYMENT SYSTEMS <b>*</b> SECURE APIS <b>*</b> CLOUD-NATIVE ARCHITECTURE <b>*</b></div></section>
      <section className="regulus section" id="experience"><p className="eyebrow">( 02 - FEATURED EXPERIENCE )</p><div className="project-heading"><h2>Enterprise<br/><span>Banking</span></h2><p>Banking and payment solutions engineered around security, resilience, and exceptional operational performance.</p></div><div className="regulus-grid"><div className="project-visual"><div className="radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-line"/><span className="radar-dot"/></div><p>PLATFORM STATUS <b>ACTIVE</b></p></div><div className="project-copy"><p>Delivered enterprise-scale applications supporting SME customers, payment processing, secure API integrations, and distributed microservices.</p><div className="features"><div><b>01</b><span>Enterprise<br/>Microservices</span></div><div><b>02</b><span>SME Banking<br/>Solutions</span></div><div><b>03</b><span>Payment<br/>Processing</span></div><div><b>04</b><span>Secure API<br/>Management</span></div></div><div className="stack"><span>JAVA</span><span>SPRING BOOT</span><span>APIGEE</span><span>DOCKER</span><span>KUBERNETES</span><span>OAUTH2</span></div></div></div></section>
      <section className="work section" id="projects"><p className="eyebrow">( 03 - SELECTED PROJECTS )</p><h2>Systems that<br/>move <em>business.</em></h2><div className="cards">{projects.map(([number, title, description, category]) => <article className="card" key={number}><div className="card-number">{number}<span>-&gt;</span></div><div><p>{category}</p><h3>{title}</h3><small>{description}</small></div></article>)}</div></section>
      <section className="skills section" id="skills"><p className="eyebrow">( 04 - EXPERTISE )</p><h2>Technology with<br/><em>purpose.</em></h2><div className="skill-list">{skills.map(([name, ...items]) => <div className="skill-row" key={name}><h3>{name}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="contact" id="contact"><p className="eyebrow">( 05 - CONTACT )</p><h2>Let's build enterprise<br/><em>solutions together.</em></h2><p>Open to opportunities in solution architecture, SME banking, FinTech, payments, API platform engineering, and microservices architecture.</p><a className="contact-cta" href="mailto:hello@nithishg.dev">Start a conversation <span>-&gt;</span></a><footer><span>(C) 2026 NITHISH G</span><div><a href="#">LINKEDIN</a><a href="#">GITHUB</a><a href="mailto:hello@nithishg.dev">EMAIL</a></div><span>INDIA / WORLDWIDE</span></footer></section>
    </main>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
