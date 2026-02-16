import { Link, useLocation } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  const classNameActive = (path: string) => isActive(path) && 'bg-slate-600';

  const elements = [
    { to: '/', label: 'Home' },
    { to: '/search', label: 'Search heroes' },
    { to: '/heroes/1', label: 'Go to 1' },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {elements.map((item) => (
          <NavigationMenuItem key={item.to}>
            <NavigationMenuLink
              asChild
              className={cn(navigationMenuTriggerStyle(), classNameActive(item.to))}
            >
              <Link to={item.to} viewTransition>
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
