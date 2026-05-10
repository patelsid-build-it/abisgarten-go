import Image from "next/image";

export const metadata = {
  title: "Leistungen | Abi's Garten-Pflege",
  description: "Unsere professionellen Dienstleistungen rund um die Garten- und Grünpflege.",
};

export default function Leistungen() {
  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: '3rem' }}>Unsere Leistungen</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Von der regelmäßigen Unterhaltspflege bis zur Neugestaltung – wir bieten Ihnen das komplette Spektrum der professionellen Grünpflege aus einer Hand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <div className="card-img">
                <Image src="/images/rasen.png" alt="Rasenpflege" width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>Rasenpflege</h3>
                <p>Ein gepflegter Rasen ist das Herzstück jedes Gartens. Wir kümmern uns um:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                  <li>Regelmäßiges Rasenmähen</li>
                  <li>Vertikutieren und Lüften</li>
                  <li>Fachgerechte Düngung</li>
                  <li>Unkraut- und Moosbekämpfung</li>
                  <li>Rollrasenverlegung</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <Image src="/images/hecken.png" alt="Heckenschnitt" width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>Hecken- und Gehölzschnitt</h3>
                <p>Fachgerechter Schnitt für ein gesundes Wachstum und perfekte Formen:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                  <li>Formschnitt für Hecken</li>
                  <li>Rückschnitt von Sträuchern</li>
                  <li>Entfernung von Totholz</li>
                  <li>Herbst- und Frühjahrsschnitt</li>
                  <li>Entsorgung des Schnittguts</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <Image src="/images/baum.png" alt="Baumpflege" width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>Baumpflege & Fällungen</h3>
                <p>Sicherheit und Gesundheit für Ihren Baumbestand:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                  <li>Kronenpflege und -sicherung</li>
                  <li>Totholzentfernung</li>
                  <li>Obstbaumschnitt</li>
                  <li>Problembaumfällungen</li>
                  <li>Wurzelstockfräsung</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>Beetpflege & Bepflanzung</h3>
                <p>Farbenfrohe und gepflegte Beete durch das ganze Jahr:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                  <li>Unkraut jäten</li>
                  <li>Bodenbearbeitung und Mulchen</li>
                  <li>Saisonale Bepflanzung</li>
                  <li>Staudenpflege</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>Gartenreinigung & Herbstlaub</h3>
                <p>Wir halten Ihre Wege und Flächen sauber:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                  <li>Laubbeseitigung im Herbst</li>
                  <li>Reinigung von Wegen und Terrassen</li>
                  <li>Grünbelagentfernung</li>
                  <li>Wintervorbereitung des Gartens</li>
                </ul>
              </div>
            </div>
            
            <div className="card" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <div className="card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h3 style={{ color: 'white' }}>Individuelle Anfrage?</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>Haben Sie ein spezielles Projekt im Kopf? Wir beraten Sie gerne individuell.</p>
                <a href="/kontakt" className="btn-primary" style={{ backgroundColor: 'var(--color-accent)' }}>Kontaktieren Sie uns</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
