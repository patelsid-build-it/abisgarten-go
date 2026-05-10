import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Abi's Garten-Pflege | Premium Grünpflege",
  description: "Professionelle Gartenpflege, Rasenpflege und Baumschnitt in Deutschland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body suppressHydrationWarning>
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">
              <span className="logo-leaf">🌿</span> Abi's Garten-Pflege
            </Link>
            <nav className="nav-links">
              <Link href="/" className="nav-link">Startseite</Link>
              <Link href="/leistungen" className="nav-link">Leistungen</Link>
              <Link href="/kontakt" className="btn-primary">Kontakt aufnehmen</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <h4>Abi's Garten-Pflege</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
                  Ihr Partner für professionelle und zuverlässige Grünpflege.
                </p>
              </div>
              <div className="footer-col">
                <h4>Navigation</h4>
                <Link href="/" className="footer-link">Startseite</Link>
                <Link href="/leistungen" className="footer-link">Leistungen</Link>
                <Link href="/kontakt" className="footer-link">Kontakt</Link>
              </div>
              <div className="footer-col">
                <h4>Rechtliches</h4>
                <Link href="/impressum" className="footer-link">Impressum</Link>
                <Link href="/datenschutz" className="footer-link">Datenschutz</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Abi's Garten-Pflege. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
