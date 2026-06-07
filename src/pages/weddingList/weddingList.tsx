import { ProductCard } from './components/productCard';
import { listaPresentesCasamento } from '../../models/weddingList';

const WeddingList = () => {
  return (
    <main className="wedding-page">
      <header className="wedding-hero">
        <p className="wedding-hero__eyebrow">Nosso Casamento</p>
        <h1 className="wedding-hero__names">
          Carol<span className="wedding-hero__amp">&amp;</span>Vitor
        </h1>
        <div className="wedding-hero__divider">
          <span className="wedding-hero__date">Lista de Presentes</span>
        </div>
        <p className="wedding-hero__lead">
          Sua presença já é o nosso maior presente. Mas se quiser fazer parte do
          comeco da nossa nova vida juntos, escolha com carinho um mimo para o
          nosso lar.
        </p>
      </header>

      <section className="wedding-section-head">
        <h2>Escolha um presente</h2>
        <p>Cada item ajuda a construir os nossos primeiros momentos a dois.</p>
      </section>

      <section className="wedding-grid" aria-label="Lista de presentes">
        {listaPresentesCasamento.map(
          (product) =>
            product.available && (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ),
        )}
      </section>

      <footer className="wedding-footer">
        <p className="wedding-footer__names">Carol &amp; Vitor</p>
        <p className="wedding-footer__note">
          Feito com amor para celebrar este dia tao especial.
        </p>
      </footer>
    </main>
  );
};

export { WeddingList };
