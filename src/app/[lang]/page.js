import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "../../dictionaries/getDictionary";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="container hero">
        <div className="hero-content">
          <h1>{dict.hero.title}</h1>
          <p>{dict.hero.description}</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href={`/${lang}/kontakt`} className="btn-primary">{dict.hero.ctaPrimary}</Link>
            <Link href={`/${lang}/leistungen`} className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--color-primary)', border: '2px solid var(--color-primary)' }}>
              {dict.hero.ctaSecondary}
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
            <h2>{dict.expertise.title}</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
              {dict.expertise.description}
            </p>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <div className="card-img">
                <Image src="/images/rasen.png" alt={dict.expertise.lawn.title} width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>{dict.expertise.lawn.title}</h3>
                <p>{dict.expertise.lawn.description}</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <Image src="/images/hecken.png" alt={dict.expertise.hedges.title} width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>{dict.expertise.hedges.title}</h3>
                <p>{dict.expertise.hedges.description}</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">
                <Image src="/images/baum.png" alt={dict.expertise.trees.title} width={400} height={300} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div className="card-content">
                <h3>{dict.expertise.trees.title}</h3>
                <p>{dict.expertise.trees.description}</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href={`/${lang}/leistungen`} className="btn-primary">{dict.expertise.viewAll}</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>{dict.cta.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            {dict.cta.description}
          </p>
          <Link href={`/${lang}/kontakt`} className="btn-primary" style={{ backgroundColor: 'var(--color-accent)' }}>{dict.cta.button}</Link>
        </div>
      </section>
    </>
  );
}
