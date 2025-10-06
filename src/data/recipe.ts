export interface Ingredient {
  id: string
  quantity: string
  name: string
}

export interface IngredientCategory {
  title: string
  items: Ingredient[]
}

export interface RecipeStep {
  step: number
  title: string
  description: string
  image: string
}

export const ingredients: IngredientCategory[] = [
  {
    title: 'Para a Massa',
    items: [
      { id: 'm1', quantity: '500g', name: 'de farinha de trigo' },
      { id: 'm2', quantity: '250ml', name: 'de água morna' },
      { id: 'm3', quantity: '1 colher de sopa', name: 'de óleo' },
      { id: 'm4', quantity: '1 colher de sopa', name: 'de cachaça (opcional)' },
      { id: 'm5', quantity: '1 colher de chá', name: 'de sal' },
    ],
  },
  {
    title: 'Para o Recheio de Carne',
    items: [
      { id: 'r1', quantity: '250g', name: 'de carne moída' },
      { id: 'r2', quantity: '1', name: 'cebola pequena picada' },
      { id: 'r3', quantity: '2 dentes', name: 'de alho picados' },
      { id: 'r4', quantity: '1/2', name: 'pimentão verde picado' },
      { id: 'r5', quantity: '2', name: 'tomates picados sem sementes' },
      { id: 'r6', quantity: 'Sal e pimenta do reino', name: 'a gosto' },
      { id: 'r7', quantity: 'Salsinha e cebolinha', name: 'a gosto' },
      { id: 'r8', quantity: 'Azeitonas verdes picadas', name: 'a gosto' },
    ],
  },
  {
    title: 'Para Fritar',
    items: [
      {
        id: 'f1',
        quantity: 'Óleo suficiente',
        name: 'para fritura por imersão',
      },
    ],
  },
]

export const steps: RecipeStep[] = [
  {
    step: 1,
    title: 'Prepare a Massa',
    description:
      'Em uma tigela grande, misture a farinha e o sal. Faça um buraco no centro e adicione a água morna, o óleo e a cachaça. Misture com as mãos até formar uma massa homogênea.',
    image: 'https://img.usecurling.com/p/600/400?q=kneading%20dough',
  },
  {
    step: 2,
    title: 'Sove a Massa',
    description:
      'Transfira a massa para uma superfície enfarinhada e sove por cerca de 10 minutos, até que fique lisa e elástica. Cubra com um pano e deixe descansar por 30 minutos.',
    image: 'https://img.usecurling.com/p/600/400?q=dough%20ball',
  },
  {
    step: 3,
    title: 'Prepare o Recheio',
    description:
      'Enquanto a massa descansa, prepare o recheio. Em uma panela, refogue a cebola e o alho em um fio de azeite. Adicione a carne moída e cozinhe até dourar. Escorra o excesso de gordura.',
    image: 'https://img.usecurling.com/p/600/400?q=cooking%20ground%20beef',
  },
  {
    step: 4,
    title: 'Finalize o Recheio',
    description:
      'Adicione o pimentão e o tomate à panela e cozinhe por mais alguns minutos. Tempere com sal e pimenta. Desligue o fogo e misture a salsinha, a cebolinha e as azeitonas. Deixe esfriar.',
    image: 'https://img.usecurling.com/p/600/400?q=beef%20filling%20bowl',
  },
  {
    step: 5,
    title: 'Abra a Massa',
    description:
      'Divida a massa em porções e abra cada uma com um rolo em uma superfície enfarinhada até ficar bem fina. Use um cortador redondo ou um pires para cortar os discos de pastel.',
    image: 'https://img.usecurling.com/p/600/400?q=rolling%20out%20dough',
  },
  {
    step: 6,
    title: 'Recheie e Feche',
    description:
      'Coloque uma porção do recheio frio no centro de cada disco de massa. Dobre ao meio e pressione as bordas com um garfo para fechar bem.',
    image: 'https://img.usecurling.com/p/600/400?q=folding%20pastel',
  },
  {
    step: 7,
    title: 'Frite os Pastéis',
    description:
      'Aqueça o óleo em uma panela funda. Frite os pastéis, poucos de cada vez, até que fiquem dourados e crocantes dos dois lados. Retire com uma escumadeira e escorra em papel toalha.',
    image: 'https://img.usecurling.com/p/600/400?q=frying%20pastel',
  },
  {
    step: 8,
    title: 'Sirva e Aproveite!',
    description:
      'Sirva os pastéis quentes e aproveite essa delícia brasileira! Perfeito com um caldo de cana gelado.',
    image: 'https://img.usecurling.com/p/600/400?q=plate%20of%20pastels',
  },
]
