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

  const elements = [
    { to: '/', label: 'Home' },
    { to: '/search', label: 'Search heroes' },
    { to: '/heroes/1', label: 'Go to 1' },
  ];

  return (
    <NavigationMenu className="w-full max-w-full shadow-lg shadow-primary/10">
      <NavigationMenuList className="flex gap-1 p-3">
        {elements.map((item) => (
          <NavigationMenuItem key={item.to}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                'relative px-4 py-2 rounded-lg font-medium transition-all duration-200',
                'text-foreground/70 hover:text-foreground hover:bg-accent',
                isActive(item.to) &&
                  'bg-linear-to-r from-primary to-primary/80 text-primary-foreground shadow-lg'
              )}
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
