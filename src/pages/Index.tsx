import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { recipes } from '@/data/recipe'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'

const Index = () => {
  const [titleRef, titleVisible] = useScrollObserver({ threshold: 0.5 })
  const [gridRef, gridVisible] = useScrollObserver({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <div
        ref={titleRef}
        className={cn('text-center mb-12 opacity-0', {
          'animate-fade-in-up': titleVisible,
        })}
      >
        <h1 className="text-h1-mobile md:text-h1-desktop font-display">
          Escolha seu Pastel
        </h1>
        <p className="mt-4 text-body-mobile md:text-body-desktop text-muted-foreground max-w-2xl mx-auto">
          Explore nossas receitas e descubra novos sabores. Do clássico de carne
          a opções doces, temos o pastel perfeito para você.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className={cn('opacity-0', { 'animate-fade-in-up': gridVisible })}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Link to={`/receita/${recipe.slug}`} className="block group">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-card group-hover:-translate-y-2 border-none">
                <CardHeader className="p-0">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={recipe.heroImage}
                      alt={recipe.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-h3-mobile md:text-h3-desktop font-display">
                    {recipe.name}
                  </CardTitle>
                  <CardDescription className="mt-2 text-body-mobile text-muted-foreground flex-grow">
                    {recipe.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
