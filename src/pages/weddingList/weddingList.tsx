import { ProductCard } from './components/productCard';
import { listaPresentesCasamento } from '../../models/weddingList';

const WeddingList = () => {
  return (
    <main className="flex flex-col">
      {/* ---------- Hero ---------- */}
      <header className="px-6 pt-20 pb-14 text-center bg-[radial-gradient(circle_at_50%_-10%,var(--color-sand),transparent_60%)]">
        <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[4px] text-accent">
          Nosso Casamento
        </p>
        <h1 className="font-heading font-medium leading-none tracking-tight text-ink text-[clamp(48px,9vw,92px)]">
          Carol
          <span className="mx-2 inline-block font-normal italic text-accent">&amp;</span>
          Vitor
        </h1>

        <div className="mx-auto mt-7 flex items-center justify-center gap-3.5 text-muted">
          <span className="h-px w-14 bg-line" />
          <span className="whitespace-nowrap font-sans text-xs uppercase tracking-[3px]">
            Lista de Presentes
          </span>
          <span className="h-px w-14 bg-line" />
        </div>

        <p className="mx-auto mt-7 max-w-[560px] text-pretty text-[17px] leading-relaxed text-body">
          Sua presenca ja e o nosso maior presente. Mas se quiser fazer parte do
          comeco da nossa nova vida juntos, escolha com carinho um mimo para o
          nosso lar.
        </p>
      </header>

      {/* ---------- Section heading ---------- */}
      <section className="px-6 pt-6 pb-2 text-center">
        <h2 className="font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,42px)]">
          Escolha um presente
        </h2>
        <p className="mt-2.5 text-[15px] text-muted">
          Cada item ajuda a construir os nossos primeiros momentos a dois.
        </p>
      </section>

      {/* ---------- Grid: 1 / 2 / 3 / 4 colunas ---------- */}
      <section
        aria-label="Lista de presentes"
        className="grid grid-cols-1 gap-5 px-5 pb-14 pt-7 sm:grid-cols-2 sm:gap-5 sm:px-7 lg:grid-cols-3 lg:gap-6 lg:px-7 xl:grid-cols-4 xl:gap-7 xl:px-8 xl:pb-20"
      >
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

      {/* ---------- Footer ---------- */}
      <footer className="mt-auto border-t border-line px-6 pb-14 pt-10 text-center text-muted">
        <p className="mb-1.5 font-heading text-[26px] text-ink">Carol &amp; Vitor</p>
        <p className="text-[13px] tracking-wide">
          Feito com amor para celebrar este dia tao especial.
        </p>
      </footer>
    </main>
  );
};

export { WeddingList };
