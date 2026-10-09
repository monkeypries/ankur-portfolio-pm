export default function Portfolio() {
  return (
    <main style={{ backgroundColor: '#0B132B', color: '#F1FAEE', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '0 1.5rem', overflowX: 'hidden' }}>
      
      {/* Navigation / Header Bar */}
      <nav style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', borderBottom: '1px solid rgba(241, 250, 238, 0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#10B981', borderRadius: '50%', boxShadow: '0 0 12px #10B981' }} />
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#8D99AE', letterSpacing: '0.5px' }}>Ankur Tripathi</span>
        </div>
        <div style={{ fontSize: '13px', color: '#8D99AE' }}>
          Noida, India
        </div>
      </nav>

      {/* Hero Section with Profile Picture & Intro */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 0 60px 0', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ display: 'inline-block', color: '#38BCC6', background: 'rgba(56, 188, 198, 0.08)', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, marginBottom: '20px', border: '1px solid rgba(56, 188, 198, 0.2)' }}>
            Programme & Product Management Professional
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Connecting Strategy, Systems, and Code for <span style={{ color: '#10B981' }}>Social Impact.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#8D99AE', lineHeight: 1.6, marginBottom: '20px' }}>
            Programme & Product Management professional with 6+ years of experience owning end-to-end delivery of technology products and digital learning initiatives. Proven expertise in cross-functional coordination across program teams, developers, and leadership.
          </p>
          <div style={{ fontSize: '13px', color: '#CBD5E1', marginBottom: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span>📧 ankur.tripathi23@gmail.com</span>
            <span>📞 +919860244667</span>
            <a href="https://www.linkedin.com/in/ankurtripathi23" target="_blank" rel="noreferrer" style={{ color: '#38BCC6', textDecoration: 'none' }}>LinkedIn ↗</a>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#competencies" style={{ background: '#10B981', color: '#0B132B', padding: '12px 24px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)' }}>
              Skills & Competencies
            </a>
            <a href="#experience" style={{ background: '#1C2541', color: '#F1FAEE', padding: '12px 24px', borderRadius: '12px', fontWeight: 600, textDecoration: 'none', border: '1px solid #3A506B' }}>
              Professional Experience
            </a>
          </div>
        </div>

        {/* Profile Image Container */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #10B981', boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)', backgroundColor: '#1C2541' }}>
            {/* Ensure profile.jpg is placed inside your public/ folder */}
            <img 
              src="/profile.jpg" 
              alt="Ankur Tripathi" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </section>

      {/* Featured App Showcase: Digital Shaala */}
      <section style={{ maxWidth: '1100px', margin: '20px auto', padding: '30px', background: 'linear-gradient(135deg, #1C2541 0%, #0B132B 100%)', borderRadius: '16px', border: '1px solid rgba(56, 188, 198, 0.4)' }}>
        <span style={{ color: '#38BCC6', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Featured Product Ecosystem</span>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '10px 0 8px 0' }}>Digital Shaala Mobile & Android TV Applications</h3>
        <p style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
          Managed full lifecycles, backlogs, requirements, and deployments supporting learning across grassroots government school networks.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="https://play.google.com/store/apps/details?id=com.digital_shaala.mobile&hl=en_IN" target="_blank" rel="noreferrer" style={{ background: '#38BCC6', color: '#0B132B', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
            View Digital Shaala on Google Play ↗
          </a>
        </div>
      </section>

      {/* Core Competencies Matrix */}
      <section id="competencies" style={{ maxWidth: '1100px', margin: '40px auto', padding: '40px 0' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.01em' }}>Skills & Competencies</h2>
          <p style={{ color: '#8D99AE', fontSize: '15px' }}>Comprehensive mapping of technical product methodologies and execution toolsets.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          <div style={{ background: 'linear-gradient(135deg, #1C2541 0%, #0B132B 100%)', padding: '32px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>01 / Product Management</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '12px 0 8px 0' }}>Product & Project Lifecycle</h3>
            <p style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.6 }}>Product Roadmapping, Backlog Prioritization, PRD/BRD Writing, 0→1 Product Development, Requirement Gathering, Agile Coordination.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1C2541 0%, #0B132B 100%)', padding: '32px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>02 / Cross-Functional</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '12px 0 8px 0' }}>Coordination & Alignment</h3>
            <p style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.6 }}>Stakeholder Management, Vendor Coordination, Leadership Communication, Program-to-Developer Bridge.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1C2541 0%, #0B132B 100%)', padding: '32px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>03 / Quality & Reporting</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '12px 0 8px 0' }}>QA & Analytics</h3>
            <p style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.6 }}>Testing Cycles Coordination, Metrics Definition, Data Interpretation, Analytics-Driven Decision Making, Dashboard Reporting.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1C2541 0%, #0B132B 100%)', padding: '32px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>04 / Toolsets</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '12px 0 8px 0' }}>Design & Management Tools</h3>
            <p style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.6 }}>Miro, Figma, Excel, Google Sheets, Google Play Console.</p>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ maxWidth: '1100px', margin: '40px auto 80px auto', padding: '20px 0' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.01em' }}>Professional Experience</h2>
          <p style={{ color: '#8D99AE', fontSize: '15px' }}>Track record across Muskaan Dreams, Learning Links Foundation, Eduvance, Robogen, and iRoboKid.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ background: '#1C2541', padding: '36px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'baseline' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Assistant Product Manager</h3>
                <p style={{ color: '#10B981', fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Muskaan Dreams | Noida, India</p>
              </div>
              <span style={{ fontSize: '12px', background: '#0B132B', color: '#8D99AE', padding: '6px 14px', borderRadius: '20px', border: '1px solid #3A506B' }}>June 2025–Present</span>
            </div>
            <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Own the product roadmap, backlogs, and complete product lifecycle from requirements gathering and development to Google Play Store deployment for Android mobile and Android TV learning applications supporting the Digital Shaala program.</li>
              <li>Gather and document product requirements through field immersion and stakeholder consultations across Madhya Pradesh, Uttar Pradesh, Rajasthan, and Delhi NCR, translating needs into clear specifications for engineering teams.</li>
              <li>Coordinate day-to-day execution across curriculum, engineering, and design teams, proactively identifying risks and managing cross-functional delivery timelines.</li>
              <li>Plan and coordinate testing cycles for new features, including offline learning, mobile-TV synchronization, and lesson planning, to ensure products are validated before rollout.</li>
              <li>Compile and present data, analytics, and usage milestones to leadership, successfully scaling platform usage from 223 hours to 18,710 hours through data-driven onboarding and usability improvements.</li>
              <li>Coordinated technical integrations, including OTP authentication, DLT registration, and vendor/partner deployments.</li>
            </ul>
          </div>

          <div style={{ background: '#1C2541', padding: '36px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'baseline' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Project Manager & Product (Blended Role)</h3>
                <p style={{ color: '#10B981', fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Muskaan Dreams | Noida, India</p>
              </div>
              <span style={{ fontSize: '12px', background: '#0B132B', color: '#8D99AE', padding: '6px 14px', borderRadius: '20px', border: '1px solid #3A506B' }}>Sep 2023–May 2025</span>
            </div>
            <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Led end-to-end implementation of the Innovators of Tomorrow and STEM program across 85+ government schools, ensuring structured execution, milestone tracking, and dependable stakeholder communication.</li>
              <li>Authored and maintained documentation standards and training frameworks for project associates, ensuring institutional knowledge retention.</li>
              <li>Designed and delivered capacity-building programs on Scratch, artificial intelligence, physical computing, and STEM education for teachers and internal teams.</li>
              <li>Led baseline, midline, and endline monitoring and evaluation frameworks to track learning outcomes and present impact data to program leadership.</li>
              <li>Collaborated with government stakeholders, implementation partners, and technology vendors to drive program delivery.</li>
              <li>Managed cross-functional resources across engineering, content, design, and field operations to align competing priorities.</li>
            </ul>
          </div>

          <div style={{ background: '#1C2541', padding: '36px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'baseline' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Lead Consultant - Innovation & Technology</h3>
                <p style={{ color: '#10B981', fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Learning Links Foundation | Mumbai, India</p>
              </div>
              <span style={{ fontSize: '12px', background: '#0B132B', color: '#8D99AE', padding: '6px 14px', borderRadius: '20px', border: '1px solid #3A506B' }}>Dec 2019–Jan 2023</span>
            </div>
            <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Led implementation of STEM and technology-enabled learning programs across multiple schools and stakeholder groups.</li>
              <li>Designed and delivered training in robotics, 3D printing, and prototyping.</li>
              <li>Tracked program effectiveness through structured reporting, data analysis, and impact assessments.</li>
            </ul>
          </div>

          <div style={{ background: '#1C2541', padding: '36px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'baseline' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Machine Learning Intern</h3>
                <p style={{ color: '#10B981', fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Eduvance | Mumbai, India</p>
              </div>
              <span style={{ fontSize: '12px', background: '#0B132B', color: '#8D99AE', padding: '6px 14px', borderRadius: '20px', border: '1px solid #3A506B' }}>May 2020–Jul 2020</span>
            </div>
            <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Built basic predictive models using Python and machine learning libraries.</li>
            </ul>
          </div>

          <div style={{ background: '#1C2541', padding: '36px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'baseline' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Senior Trainer</h3>
                <p style={{ color: '#10B981', fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Robogen | Visakhapatnam, India</p>
              </div>
              <span style={{ fontSize: '12px', background: '#0B132B', color: '#8D99AE', padding: '6px 14px', borderRadius: '20px', border: '1px solid #3A506B' }}>Jan 2019–Jul 2019</span>
            </div>
            <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Delivered advanced robotics training and developed industry-aligned curriculum.</li>
            </ul>
          </div>

          <div style={{ background: '#1C2541', padding: '36px', borderRadius: '16px', border: '1px solid #3A506B', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'baseline' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>STEM Trainer</h3>
                <p style={{ color: '#10B981', fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>iRoboKid | Mumbai, India</p>
              </div>
              <span style={{ fontSize: '12px', background: '#0B132B', color: '#8D99AE', padding: '6px 14px', borderRadius: '20px', border: '1px solid #3A506B' }}>May 2016–Nov 2018</span>
            </div>
            <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Conducted STEM workshops and trained students in robotics and programming.</li>
              <li>Mentored 15–18 teams for the World Robot Olympiad, with 7 teams qualifying for the national round (~40% success rate).</li>
              <li>Designed curriculum for 3D printing, PictoBlox, Scratch, and Arduino-based platforms.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Education, Certifications & Awards Section */}
      <section style={{ maxWidth: '1100px', margin: '40px auto 80px auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        <div style={{ background: '#1C2541', padding: '32px', borderRadius: '16px', border: '1px solid #3A506B' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#10B981', marginBottom: '16px' }}>Education & Credentials</h3>
          <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Diploma in Computer Engineering</li>
            <li>AMIE (Equivalent to B.E./B.Tech) — Pursuing</li>
          </ul>
        </div>

        <div style={{ background: '#1C2541', padding: '32px', borderRadius: '16px', border: '1px solid #3A506B' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#10B981', marginBottom: '16px' }}>Awards & Recognition</h3>
          <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Promising Leader Award, Muskaan Dreams (2023–24)</li>
            <li>Conquering Champions Award, Muskaan Dreams (2023–24)</li>
          </ul>
        </div>

        <div style={{ background: '#1C2541', padding: '32px', borderRadius: '16px', border: '1px solid #3A506B', gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#10B981', marginBottom: '16px' }}>Certifications</h3>
          <ul style={{ color: '#8D99AE', fontSize: '14px', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Product Management Essentials</li>
            <li>Miro for UX: Brainstorming and Collaboration</li>
            <li>Career Camp | Introduction to Python</li>
          </ul>
        </div>

      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(241, 250, 238, 0.1)', padding: '50px 0', textAlign: 'center', color: '#8D99AE', fontSize: '14px' }}>
        <p style={{ color: '#F1FAEE', fontWeight: 600, marginBottom: '6px' }}>Ankur Tripathi — Programme & Product Management</p>
        <p style={{ fontSize: '13px' }}>Noida, India | ankur.tripathi23@gmail.com | +919860244667</p>
      </footer>

    </main>
  );
}