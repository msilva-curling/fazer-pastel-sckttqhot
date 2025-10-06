import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { recipes } from '@/data/recipe'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import NotFound from './NotFound'

const PreparationPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  const recipe = recipes.find((r) => r.slug === slug)

  if (!recipe) {
    return <NotFound />
  }

  const { steps } = recipe
  const totalSteps = steps.length
  const stepData = steps[currentStep]

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progressValue = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <h1 className="text-h2-mobile md:text-h2-desktop text-center font-display mb-4">
        Modo de Preparo
      </h1>
      <div className="w-full mb-8">
        <Progress
          value={progressValue}
          className="w-full h-3 bg-border [&>*]:bg-primary transition-all duration-300"
        />
        <p className="text-center text-sm text-muted-foreground mt-2">
          Passo {currentStep + 1} de {totalSteps}
        </p>
      </div>
      <Card className="overflow-hidden shadow-card border-none">
        <CardHeader className="p-0">
          <img
            src={stepData.image}
            alt={stepData.title}
            className="w-full h-64 object-cover"
          />
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <CardTitle className="text-h3-mobile md:text-h3-desktop font-display mb-4">
            Passo {stepData.step}: {stepData.title}
          </CardTitle>
          <p className="text-body-mobile md:text-body-desktop text-muted-foreground leading-relaxed">
            {stepData.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between p-6 bg-background/50">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            className="bg-primary text-primary-foreground transition-all duration-200 ease-in-out hover:bg-yellow-500 hover:scale-102 shadow-lg"
          >
            {currentStep === totalSteps - 1 ? 'Finalizar' : 'Próximo'}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
      <AlertDialog open={isCompleted} onOpenChange={setIsCompleted}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Parabéns! Receita Concluída!</AlertDialogTitle>
            <AlertDialogDescription>
              Você preparou um delicioso {recipe.name}. Bom apetite!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => navigate(`/receita/${slug}`)}>
              Voltar para Visão Geral
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default PreparationPage
