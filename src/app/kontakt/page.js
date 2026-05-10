export const metadata = {
  title: "Kontakt | Abi's Garten-Pflege",
  description: "Treten Sie mit uns in Kontakt für Ihr nächstes Gartenprojekt.",
};

export default function Kontakt() {
  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: '3rem' }}>Kontakt</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Wir freuen uns auf Ihre Nachricht. Rufen Sie uns an oder nutzen Sie das Kontaktformular.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ihre Anfrage</h2>
              <form style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Ihr Vor- und Nachname" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">E-Mail</label>
                  <input type="email" id="email" className="form-control" placeholder="Ihre E-Mail-Adresse" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Telefon (optional)</label>
                  <input type="tel" id="phone" className="form-control" placeholder="Für eventuelle Rückfragen" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Nachricht</label>
                  <textarea id="message" className="form-control" rows={5} placeholder="Wie können wir Ihnen helfen?" required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>Nachricht senden</button>
              </form>
            </div>
            
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Kontaktdaten</h2>
              <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Telefon</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>+49 (0) 123 456 789</p>
                
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>E-Mail</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>info@abisgartenpflege.de</p>
                
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Adresse</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                  Gartenweg 12<br />
                  12345 Musterstadt<br />
                  Deutschland
                </p>
              </div>

              <div style={{ background: 'var(--color-primary-light)', color: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}>
                <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Öffnungszeiten</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>
                    <span>Montag - Freitag:</span> <span>08:00 - 17:00 Uhr</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>
                    <span>Samstag:</span> <span>09:00 - 13:00 Uhr</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Sonntag:</span> <span>Geschlossen</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
