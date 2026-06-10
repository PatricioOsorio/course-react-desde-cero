import { Button } from 'styleguide/button';
import { Separator } from 'styleguide/separator';
import { RadioGroup } from 'styleguide/radio-group';
import { Label } from 'styleguide/label';
import type { IFilterSidebarProps } from './FilterSidebar.interfaces';

const SIZES = [
  { id: 'xs', label: 'XS' },
  { id: 's', label: 'S' },
  { id: 'm', label: 'M' },
  { id: 'l', label: 'L' },
  { id: 'xl', label: 'XL' },
  { id: 'xxl', label: 'XXL' },
];

export const FilterSidebar = ({ sizes, onSizeChange }: IFilterSidebarProps) => {
  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Filtros</h3>
      </div>

      {/* SIZES */}
      <div className="space-y-4">
        <h4 className="font-medium">Tallas</h4>
        <div className="grid grid-cols-3 gap-2">
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
      <div className="space-y-4">
        <h4 className="font-medium">Precio</h4>
        <RadioGroup className="space-y-3" defaultValue="">
          <div className="flex items-center space-x-2">
            <RadioGroup.Item id="priceAny" value="any" />
            <Label className="cursor-pointer text-sm" htmlFor="priceAny">
              Cualquier precio
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item id="price1" value="0-50" />
            <Label className="cursor-pointer text-sm" htmlFor="price1">
              $0 - $50
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item id="price2" value="50-100" />
            <Label className="cursor-pointer text-sm" htmlFor="price2">
              $50 - $100
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item id="price3" value="100-200" />
            <Label className="cursor-pointer text-sm" htmlFor="price3">
              $100 - $200
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item id="price4" value="200+" />
            <Label className="cursor-pointer text-sm" htmlFor="price4">
              $200+
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
