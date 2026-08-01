import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

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

function EnterpriseCore() {
  return <div className="core-wrap" aria-hidden="true">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="core"><span className="core-glow" /><i /><i /><i /><i /><i /><i /></div>
    <span className="core-label top">SECURE TRANSACTION FLOW</span><span className="core-label bottom">01 / ENTERPRISE CORE</span>
  </div>
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
    <header><a className="brand" href="#home">NG</a><nav><a href="#about">About</a><a href="#experience">Experience</a><a href="#platforms">Platforms</a><a href="#skills">Skills</a><a href="#achievements">Achievements</a></nav></header>
    <main>
      <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow"><span /> SENIOR SOFTWARE ENGINEER / SOLUTION ARCHITECT</p><h1>ENGINEERING SECURE<br/>DIGITAL BANKING<br/>SOLUTIONS <small>AT SCALE</small></h1><p className="hero-description">Building scalable banking platforms, payment systems, secure APIs, and enterprise-grade microservices for modern financial institutions.</p><a className="round-link" href="#experience">Explore my work <span>v</span></a></div><EnterpriseCore /><div className="scroll">SCROLL TO EXPLORE <span>v</span></div><div className="hero-index">01 <i /> 06</div></section>
      <section className="about section" id="about"><p className="eyebrow">( ABOUT )</p><div className="about-grid"><h2>Enterprise systems<br/>built for trust,<br/>scale, and speed.</h2><div><p className="lead">Complex financial services, made dependable.</p><p>I design and develop secure enterprise applications for SME Banking, payments, and financial services. My work connects clean architecture, scalable microservices, API governance, and cloud-native engineering.</p><a className="text-link" href="#experience">Explore my experience <span>-&gt;</span></a></div></div><div className="marquee">SME BANKING <b>*</b> PAYMENT SYSTEMS <b>*</b> SECURE APIS <b>*</b> CLOUD-NATIVE ARCHITECTURE <b>*</b></div></section>
      <section className="regulus section" id="experience"><p className="eyebrow">( EXPERIENCE )</p><div className="project-heading"><h2>Enterprise<br/><span>Banking</span></h2><p>Banking and payment solutions engineered around security, resilience, and exceptional operational performance.</p></div><div className="regulus-grid"><div className="project-visual"><div className="radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-line"/><span className="radar-dot"/></div><p>PLATFORM STATUS <b>ACTIVE</b></p></div><div className="project-copy"><p>Delivered enterprise-scale applications supporting SME customers, payment processing, secure API integrations, and distributed microservices.</p><div className="features"><div><b>01</b><span>Enterprise<br/>Microservices</span></div><div><b>02</b><span>SME Banking<br/>Solutions</span></div><div><b>03</b><span>Payment<br/>Processing</span></div><div><b>04</b><span>Secure API<br/>Management</span></div></div><div className="stack"><span>JAVA</span><span>SPRING BOOT</span><span>APIGEE</span><span>DOCKER</span><span>KUBERNETES</span><span>OAUTH2</span></div></div></div></section>
      <section className="work section" id="platforms"><p className="eyebrow">( PLATFORMS )</p><h2>Hands-on with<br/>enterprise concepts.</h2><p className="section-note">Familiar with these concepts and hands-on across banking, payments, API platforms, microservices, and enterprise security patterns.</p><div className="cards">{concepts.map(([number, title, description, category]) => <article className="card" key={number}><div className="card-number">{number}<span>-&gt;</span></div><div><p>{category}</p><h3>{title}</h3><small>{description}</small></div></article>)}</div></section>
      <section className="skills section" id="skills"><p className="eyebrow">( SKILLS )</p><h2>Technology with<br/>purpose.</h2><div className="skill-list">{skills.map(([name, ...items]) => <div className="skill-row" key={name}><h3>{name}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="achievements section" id="achievements"><p className="eyebrow">( ACHIEVEMENTS )</p><h2>Continuous learning,<br/>applied with intent.</h2><button className="certificate-trigger" type="button" onClick={() => setCertificateOpen(true)}><span>Udemy Certificate of Completion</span><strong>Generative AI for Beginners</strong><i>View certificate -&gt;</i></button></section>{certificateOpen && <div className="certificate-overlay" role="presentation" onClick={() => setCertificateOpen(false)}><section className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title" onClick={event => event.stopPropagation()}><button className="certificate-close" type="button" aria-label="Close certificate" onClick={() => setCertificateOpen(false)}>x</button><div className="certificate-preview"><div className="udemy-mark"><b>^</b>udemy</div><div className="certificate-meta">Certificate no: UC-c4e6d20b-b4e9-4f2f-8734-7b2c71945eab<br/>Certificate url: ude.my/UC-c4e6d20b-b4e9-4f2f-8734-7b2c71945eab<br/>Reference Number: 0004</div><p>CERTIFICATE OF COMPLETION</p><h3 id="certificate-title">Generative AI for Beginners</h3><div className="certificate-instructor">Instructors&nbsp;&nbsp; <b>Aakriti E-Learning Academy</b></div><div className="certificate-owner"><strong>Nithish G</strong><span>Date&nbsp;&nbsp; <b>July 24, 2026</b><br/>Length&nbsp;&nbsp; <b>4.5 total hours</b></span></div></div></section></div>}
      <section className="contact" id="contact"><p className="eyebrow">( CONTACT )</p><h2>Start<br/>Conversation.</h2><div className="contact-links" aria-label="Contact links"><a href="https://www.linkedin.com/in/nithish-g-180719189/" target="_blank" rel="noreferrer">LinkedIn <span>-&gt;</span></a><a href="mailto:nithishganesan2001@gmail.com">Gmail <span>-&gt;</span></a><a href="https://github.com/nithish-ganesan" target="_blank" rel="noreferrer">GitHub <span>-&gt;</span></a></div><footer><span>(C) 2026 NITHISH G</span><span>INDIA / WORLDWIDE</span></footer></section>
    </main>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
