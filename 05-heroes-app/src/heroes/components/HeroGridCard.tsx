import { Heart, Zap, Eye, Brain, Gauge, Shield } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { IHero } from '../models/hero.interface';

export interface IHeroGridCardProps {
  value: IHero;
}

export const HeroGridCard = ({ value }: IHeroGridCardProps) => {
  const navigate = useNavigate();

  const {
    alias,
    category,
    description,
    durability,
    firstAppearance,
    image,
    intelligence,
    name,
    powers,
    slug,
    speed,
    status,
    strength,
    team,
    universe,
  } = value;

  const handleClickCard = () => {
    navigate(`/heroes/${slug}`);
  };
  return (
    <Card className="group pt-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br dark:from-slate-950 dark:to-gray-900">
      <div>
        <div className="relative h-64 rounded-sm overflow-hidden">
          {/* Blurred background */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-md scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Clear image on top */}
          <img
            src={image}
            alt={alias}
            className="relative z-10 object-contain w-full h-full transition-all duration-500 group-hover:scale-110 cursor-pointer"
            onClick={handleClickCard}
          />
          {/* Status indicator */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <Badge variant="secondary" className="text-xs bg-white/90 text-gray-700">
              {status}
            </Badge>
          </div>
          {/* Universe badge */}
          <Badge className="absolute top-3 right-3 z-20 text-xs bg-blue-600 text-white">
            {universe}
          </Badge>
          {/* Favorite button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 right-3 z-20 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </Button>
          {/* View details button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 left-3 z-20 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
        <CardHeader className="z-10 bg-gray-100 dark:bg-slate-950/50 backdrop-blur-sm transition-all duration-300 py-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">{alias}</h3>
              <p className="text-sm text-gray-600">{name}</p>
            </div>
            <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
              {category}
            </Badge>
          </div>
          <Badge variant="outline" className="w-fit text-xs">
            {team}
          </Badge>
        </CardHeader>
      </div>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="text-xs font-medium">Strength</span>
            </div>
            <Progress value={strength * 10} className="h-2" activeColor="bg-orange-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3 text-blue-500" />
              <span className="text-xs font-medium">Intelligence</span>
            </div>
            <Progress value={intelligence * 10} className="h-2" activeColor="bg-blue-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-green-500" />
              <span className="text-xs font-medium">Speed</span>
            </div>
            <Progress value={speed * 10} className="h-2" activeColor="bg-green-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-purple-500" />
              <span className="text-xs font-medium">Durability</span>
            </div>
            <Progress value={durability * 10} className="h-2" activeColor="bg-purple-500" />
          </div>
        </div>

        {/* Powers */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Powers:</h4>
          <div className="flex flex-wrap gap-1">
            {powers.slice(0, 2).map((power, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {power}
              </Badge>
            ))}
            {powers.length > 2 && (
              <Badge variant="outline" className="text-xs bg-gray-500">
                +{powers.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t">First appeared: {firstAppearance}</div>
      </CardContent>
    </Card>
  );
};
