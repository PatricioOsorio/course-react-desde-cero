import { cn } from '@/shared/lib/utils';

import type { IFooterShopProps } from './FooterShop.interfaces';

import './FooterShop.css';

export const FooterShop = ({ rootProps }: IFooterShopProps) => {
  return (
    <footer {...rootProps} className={cn('footer-shop-container', rootProps?.className)}>
      <div className="fsc__container">
        <div className="fsc__grid">
          <div>
            <h3 className="fsc__title">TESLA STYLE</h3>
            <p className="fsc__text">
              Ropa inspirada en el diseño minimalista y la innovación de Tesla.
            </p>
          </div>

          <div>
            <h4 className="fsc__subtitle">Productos</h4>
            <ul className="fsc__list">
              <li>
                <a className="fsc__link" href="#">
                  Camisetas
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Sudaderas
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Chaquetas
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="fsc__subtitle">Ayuda</h4>
            <ul className="fsc__list">
              <li>
                <a className="fsc__link" href="#">
                  Contacto
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Envíos
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Devoluciones
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Guía de Tallas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="fsc__subtitle">Empresa</h4>
            <ul className="fsc__list">
              <li>
                <a className="fsc__link" href="#">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Sustentabilidad
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Carreras
                </a>
              </li>
              <li>
                <a className="fsc__link" href="#">
                  Prensa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fsc__bottom">
          <p>&copy; {new Date().getFullYear()} Tesla Style. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
