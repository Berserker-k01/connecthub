import React from 'react';

export function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Mentions Légales</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Informations légales</h2>
            <p className="text-gray-600 mb-4">
              ConnectHub<br />
              Fondateur et Directeur : MOGLO Kossi Daniel<br />
              Siège social : Lomé, Togo<br />
              Email : connecthubtg@gmail.com<br />
              Téléphone : +228 98036931
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <p className="text-gray-600 mb-4">
              Le site connecthub.tg est hébergé par :<br />
              Netlify, Inc.<br />
              2325 3rd Street, Suite 215<br />
              San Francisco, California 94107<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Protection des données</h2>
            <p className="text-gray-600 mb-4">
              Conformément à la loi sur la protection des données personnelles, vous disposez d'un droit d'accès, 
              de modification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous 
              contacter à connecthubtg@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-600 mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d'auteur. 
              Toute reproduction sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-600 mb-4">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur 
              ce site, vous acceptez leur utilisation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}