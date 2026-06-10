import { Button } from 'styleguide/button';
import { Separator } from 'styleguide/separator';
import { RadioGroup } from 'styleguide/radio-group';
import { Label } from 'styleguide/label';

import { cn } from '@/shared/lib/utils';

import type { IFilterSidebarProps } from './FilterSidebar.interfaces';

import './FilterSidebar.css';

const SIZES = [
  { id: 'xs', label: 'XS' },
  { id: 's', label: 'S' },
  { id: 'm', label: 'M' },
  { id: 'l', label: 'L' },
  { id: 'xl', label: 'XL' },
  { id: 'xxl', label: 'XXL' },
];

export const FilterSidebar = ({ sizes, onSizeChange, rootProps }: IFilterSidebarProps) => {
  return (
    <div {...rootProps} className={cn('filter-sidebar-container', rootProps?.className)}>
      <div>
        <h3 className="fsc__title">Filtros</h3>
      </div>

      {/* SIZES */}
      <div className="fsc__section">
        <h4 className="fsc__section-title">Tallas</h4>
        <div className="fsc__sizes-grid">
          {SIZES.map((size) => (
            <Button
              key={size.id}
              className="h-8"
              size="sm"
              variant={sizes.includes(size.id) ? 'default' : 'outline'}
              onClick={() => onSizeChange(size.id)}
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="fsc__section">
        <h4 className="fsc__section-title">Precio</h4>
        <RadioGroup className="fsc__price-group" defaultValue="">
          <div className="fsc__price-item">
            <RadioGroup.Item id="priceAny" value="any" />
            <Label className="fsc__price-label" htmlFor="priceAny">
              Cualquier precio
            </Label>
          </div>
          <div className="fsc__price-item">
            <RadioGroup.Item id="price1" value="0-50" />
            <Label className="fsc__price-label" htmlFor="price1">
              $0 - $50
            </Label>
          </div>
          <div className="fsc__price-item">
            <RadioGroup.Item id="price2" value="50-100" />
            <Label className="fsc__price-label" htmlFor="price2">
              $50 - $100
            </Label>
          </div>
          <div className="fsc__price-item">
            <RadioGroup.Item id="price3" value="100-200" />
            <Label className="fsc__price-label" htmlFor="price3">
              $100 - $200
            </Label>
          </div>
          <div className="fsc__price-item">
            <RadioGroup.Item id="price4" value="200+" />
            <Label className="fsc__price-label" htmlFor="price4">
              $200+
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
