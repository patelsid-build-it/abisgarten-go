export const metadata = {
  title: "Impressum | Abi's Garten-Pflege",
  description: "Impressum von Abi's Garten-Pflege gemäß TMG.",
};

export default function Impressum() {
  return (
    <div className="container">
      <div className="text-page">
        <h1>Impressum</h1>
        
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Abi's Garten-Pflege<br />
          Gartenweg 12<br />
          12345 Musterstadt
        </p>

        <h2>Vertreten durch:</h2>
        <p>Max Mustermann</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 123 456 789<br />
          E-Mail: info@abisgartenpflege.de
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE999999999
        </p>

        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
