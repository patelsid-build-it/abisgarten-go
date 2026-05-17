import "../globals.css";
import Link from "next/link";
import { getDictionary } from "../../dictionaries/getDictionary";
import SchemaMarkup from "../../components/SchemaMarkup";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: `Abi's Garten-Pflege | ${dict.hero.title}`,
    description: dict.hero.description,
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <SchemaMarkup lang={lang} />
      </head>
      <body suppressHydrationWarning>
        <header className="header">
          <div className="container header-content">
            <Link href={`/${lang}`} className="logo">
              <span className="logo-leaf">🌿</span> Abi's Garten-Pflege
            </Link>
            <nav className="nav-links">
              <Link href={`/${lang}`} className="nav-link">{dict.nav.home}</Link>
              <Link href={`/${lang}/leistungen`} className="nav-link">{dict.nav.services}</Link>
              <Link href={`/${lang}/kontakt`} className="btn-primary">{dict.nav.contact}</Link>
              <div className="lang-switcher" style={{display: 'flex', gap: '0.5rem', marginLeft: '1rem', fontSize: '0.9rem'}}>
                <Link href="/de">DE</Link> | <Link href="/en">EN</Link> | <Link href="/tr">TR</Link>
              </div>
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
                  {dict.footer.description}
                </p>
              </div>
              <div className="footer-col">
                <h4>{dict.nav.navigation}</h4>
                <Link href={`/${lang}`} className="footer-link">{dict.nav.home}</Link>
                <Link href={`/${lang}/leistungen`} className="footer-link">{dict.nav.services}</Link>
                <Link href={`/${lang}/kontakt`} className="footer-link">{dict.nav.contact}</Link>
              </div>
              <div className="footer-col">
                <h4>{dict.nav.legal}</h4>
                <Link href={`/${lang}/impressum`} className="footer-link">{dict.nav.imprint}</Link>
                <Link href={`/${lang}/datenschutz`} className="footer-link">{dict.nav.privacy}</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Abi's Garten-Pflege. {dict.footer.rights}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
