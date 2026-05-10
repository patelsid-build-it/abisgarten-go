import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-content">
          <h1>Premium Gartenpflege für Ihr Zuhause</h1>
          <p>
            Wir verwandeln Ihren Garten in eine Wohlfühloase. Professionell, zuverlässig und mit viel Liebe zur Natur. Lehnen Sie sich zurück, wir übernehmen die Arbeit.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/kontakt" className="btn-primary">Kostenloses Angebot</Link>
            <Link href="/leistungen" className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--color-primary)', border: '2px solid var(--color-primary)' }}>
              Unsere Leistungen
            </Link>
          </div>
        </div>
        <div className="hero-bg">
          <Image 
            src="/images/hero.png" 
            alt="Perfekt gepflegter Premium-Garten" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <h2>Unsere Expertise</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
              Wir bieten ein umfassendes Spektrum an Dienstleistungen für die optimale Pflege und Gestaltung Ihrer Grünanlagen.
            </p>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <div className="card-img">
                <Image src="/images/rasen.png" alt="Rasenpflege" width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>Rasenpflege</h3>
                <p>Mähen, Vertikutieren, Düngen und Nachsäen für einen sattgrünen, dichten und gesunden Rasen das ganze Jahr über.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <Image src="/images/hecken.png" alt="Heckenschnitt" width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>Heckenschnitt</h3>
                <p>Fachgerechter Form- und Pflegeschnitt für Hecken und Sträucher. Für dichten Wuchs und klare Konturen.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <Image src="/images/baum.png" alt="Baumpflege" width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>Baumpflege</h3>
                <p>Professioneller Baumschnitt, Kronenpflege und Fällarbeiten unter Einhaltung aller Sicherheitsstandards.</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/leistungen" className="btn-primary">Alle Leistungen ansehen</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Bereit für Ihren Traumgarten?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch direkt bei Ihnen vor Ort.
          </p>
          <Link href="/kontakt" className="btn-primary" style={{ backgroundColor: 'var(--color-accent)' }}>Jetzt Kontakt aufnehmen</Link>
        </div>
      </section>
    </>
  );
}
