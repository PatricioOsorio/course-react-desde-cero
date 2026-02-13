import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PropsWithChildren, ReactNode } from 'react';

export interface IHeroStatCardProps extends PropsWithChildren {
  title: string;
  icon: ReactNode;
}

export const HeroStatCard = ({ title, icon, children }: IHeroStatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
