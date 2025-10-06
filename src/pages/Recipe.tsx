import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChefHat, Clock, CookingPot, Star } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'
import { cn } from '@/lib/utils'
import { recipes } from '@/data/recipe'
import NotFound from './NotFound'

const iconMap = {
  Clock,
  CookingPot,
  ChefHat,
  Star,
}

const RecipePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [detailsRef, detailsVisible] = useScrollObserver({ threshold: 0.2 })
  const [buttonsRef, buttonsVisible] = useScrollObserver({ threshold: 0.5 })

  const recipe = recipes.find((r) => r.slug === slug)

  if (!recipe) {
    return <NotFound />
  }

  return (
    <div className="w-full">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white bg-yellow-400">
        <img
          src={recipe.heroImage}
          alt={recipe.name}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 p-4 animate-fade-in-up">
          <h1 className="font-display text-h1-mobile md:text-h1-desktop font-extrabold leading-tight">
            {recipe.name}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-body-mobile md:text-body-desktop">
            {recipe.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div
            ref={detailsRef}
            className={cn('opacity-0', {
              'animate-fade-in-up': detailsVisible,
            })}
          >
            <Card className="max-w-4xl mx-auto bg-card shadow-card border-none p-6 md:p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  {recipe.details.map((item, index) => {
                    const Icon = iconMap[item.icon]
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center space-y-2"
                      >
                        <Icon className="w-10 h-10 text-primary" />
                        <span className="text-body-mobile md:text-body-desktop text-muted-foreground">
                          {item.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            ref={buttonsRef}
            className={cn(
              'mt-12 flex flex-col sm:flex-row justify-center gap-4 opacity-0',
              { 'animate-fade-in-up': buttonsVisible },
            )}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground hover:scale-102"
            >
              <Link to={`/receita/${recipe.slug}/ingredientes`}>
                Ver Ingredientes
              </Link>
            </Button>
            <Button
              size="lg"
              onClick={() => navigate(`/receita/${recipe.slug}/preparo`)}
              className="bg-primary text-primary-foreground transition-all duration-200 ease-in-out hover:bg-yellow-500 hover:scale-102 shadow-lg"
            >
              Começar a Cozinhar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecipePage
