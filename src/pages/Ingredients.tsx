import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ingredients, IngredientCategory } from '@/data/recipe'
import { cn } from '@/lib/utils'

const IngredientsPage = () => {
  const navigate = useNavigate()
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const renderCategory = (category: IngredientCategory) => (
    <div key={category.title} className="mb-8">
      <h2 className="text-h3-mobile md:text-h3-desktop font-display mb-4 text-foreground">
        {category.title}
      </h2>
      <ul className="space-y-4">
        {category.items.map((item) => (
          <li key={item.id} className="flex items-center space-x-4">
            <Checkbox
              id={item.id}
              checked={!!checkedItems[item.id]}
              onCheckedChange={() => handleCheckboxChange(item.id)}
              className="w-6 h-6 rounded-md border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label
              htmlFor={item.id}
              className={cn(
                'text-body-mobile md:text-body-desktop text-muted-foreground transition-all',
                {
                  'line-through opacity-70 text-foreground':
                    checkedItems[item.id],
                },
              )}
            >
              <span className="font-semibold text-foreground">
                {item.quantity}
              </span>{' '}
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Card className="bg-card shadow-card border-none">
        <CardHeader>
          <CardTitle className="text-h2-mobile md:text-h2-desktop text-center font-display">
            Ingredientes para o Pastel
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          {ingredients.map(renderCategory)}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Link to="/">Voltar</Link>
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/preparo')}
              className="bg-primary text-primary-foreground transition-all duration-200 ease-in-out hover:bg-yellow-500 hover:scale-102 shadow-lg"
            >
              Começar a Cozinhar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default IngredientsPage
