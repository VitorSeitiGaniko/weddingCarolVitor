import { ProductCard } from './components/productCard';
import { listaPresentesCasamento } from '../../models/weddingList';

const WeddingList = () => {
  return (
    <div>
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
    </div>
  );
};

export { WeddingList };
