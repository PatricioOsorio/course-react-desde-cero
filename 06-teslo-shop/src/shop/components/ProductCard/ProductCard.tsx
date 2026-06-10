import { Button } from 'styleguide/button';
import { Card } from 'styleguide/card';

import { cn } from '@/shared/lib/utils';

import type { IProductCardProps } from './ProductCard.interfaces';

import './ProductCard.css';

export const ProductCard = ({
  rootProps,
  id,
  name,
  price,
  image,
  category,
  onAddToCart,
}: IProductCardProps) => {
  return (
    <article {...rootProps} className={cn('product-card-container group', rootProps?.className)}>
      <Card className="pcc__card product-card-hover">
        <Card.Content className="pcc__content">
          <div className="pcc__image-wrapper">
            <img alt={name} className="pcc__image" src={image} />
            <div className="pcc__overlay" />
          </div>

          <div className="pcc__details">
            <div className="pcc__info">
              <h3 className="pcc__name">{name}</h3>
              <p className="pcc__category">{category}</p>
            </div>

            <div className="pcc__footer">
              <p className="pcc__price">${price}</p>
              <Button
                className="pcc__button"
                size="sm"
                variant="outline"
                onClick={() => onAddToCart?.(id)}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </Card.Content>
      </Card>
    </article>
  );
};
