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

export interface RecipeDetail {
  icon: 'Clock' | 'CookingPot' | 'ChefHat' | 'Star'
  text: string
}

export interface Recipe {
  id: string
  slug: string
  name: string
  description: string
  heroImage: string
  details: RecipeDetail[]
  ingredients: IngredientCategory[]
  steps: RecipeStep[]
}

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'pastel-de-carne',
    name: 'Pastel Tradicional de Carne',
    description:
      'Aprenda a fazer o clássico pastel de feira, crocante por fora e suculento por dentro, perfeito para qualquer ocasião!',
    heroImage:
      'https://img.usecurling.com/p/1200/800?q=golden%20brazilian%20pastel',
    details: [
      { icon: 'Clock', text: 'Preparo: 30 min' },
      { icon: 'CookingPot', text: 'Cozimento: 15 min' },
      { icon: 'ChefHat', text: 'Rende: 10 pastéis' },
      { icon: 'Star', text: 'Dificuldade: Fácil' },
    ],
    ingredients: [
      {
        title: 'Para a Massa',
        items: [
          { id: 'm1', quantity: '500g', name: 'de farinha de trigo' },
          { id: 'm2', quantity: '250ml', name: 'de água morna' },
          { id: 'm3', quantity: '1 colher de sopa', name: 'de óleo' },
          {
            id: 'm4',
            quantity: '1 colher de sopa',
            name: 'de cachaça (opcional)',
          },
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
    ],
    steps: [
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
    ],
  },
  {
    id: '2',
    slug: 'pastel-de-queijo',
    name: 'Pastel de Queijo Cremoso',
    description:
      'Uma versão irresistível do pastel de feira, com um recheio de queijo que derrete na boca a cada mordida.',
    heroImage:
      'https://img.usecurling.com/p/1200/800?q=cheese%20pastel%20brazilian',
    details: [
      { icon: 'Clock', text: 'Preparo: 25 min' },
      { icon: 'CookingPot', text: 'Cozimento: 10 min' },
      { icon: 'ChefHat', text: 'Rende: 12 pastéis' },
      { icon: 'Star', text: 'Dificuldade: Muito Fácil' },
    ],
    ingredients: [
      {
        title: 'Para a Massa (a mesma)',
        items: [
          { id: 'm1', quantity: '500g', name: 'de farinha de trigo' },
          { id: 'm2', quantity: '250ml', name: 'de água morna' },
          { id: 'm3', quantity: '1 colher de sopa', name: 'de óleo' },
          {
            id: 'm4',
            quantity: '1 colher de sopa',
            name: 'de cachaça (opcional)',
          },
          { id: 'm5', quantity: '1 colher de chá', name: 'de sal' },
        ],
      },
      {
        title: 'Para o Recheio de Queijo',
        items: [
          { id: 'q1', quantity: '300g', name: 'de queijo muçarela ralado' },
          { id: 'q2', quantity: '100g', name: 'de queijo prato ralado' },
          { id: 'q3', quantity: '1/2 xícara', name: 'de requeijão cremoso' },
          { id: 'q4', quantity: 'Orégano', name: 'a gosto' },
          { id: 'q5', quantity: '1', name: 'tomate picado sem sementes' },
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
    ],
    steps: [
      {
        step: 1,
        title: 'Prepare a Massa',
        description:
          'Siga os passos 1 e 2 da receita de pastel de carne para preparar e sovar a massa. Deixe descansar por 30 minutos.',
        image: 'https://img.usecurling.com/p/600/400?q=dough%20ball',
      },
      {
        step: 2,
        title: 'Prepare o Recheio de Queijo',
        description:
          'Em uma tigela, misture a muçarela, o queijo prato, o requeijão, o tomate picado e o orégano. Mexa bem até obter uma mistura homogênea.',
        image:
          'https://img.usecurling.com/p/600/400?q=bowl%20of%20shredded%20cheese',
      },
      {
        step: 3,
        title: 'Abra a Massa',
        description:
          'Divida a massa em porções e abra cada uma com um rolo em uma superfície enfarinhada até ficar bem fina. Corte os discos no tamanho desejado.',
        image: 'https://img.usecurling.com/p/600/400?q=rolling%20out%20dough',
      },
      {
        step: 4,
        title: 'Recheie e Feche',
        description:
          'Coloque uma porção do recheio de queijo no centro de cada disco. Dobre ao meio e pressione as bordas com um garfo para selar bem e evitar que o queijo vaze.',
        image:
          'https://img.usecurling.com/p/600/400?q=folding%20cheese%20pastel',
      },
      {
        step: 5,
        title: 'Frite os Pastéis',
        description:
          'Aqueça o óleo em uma panela funda. Frite os pastéis até dourarem. O queijo derretido pode fazer com que fritem mais rápido, então fique de olho!',
        image:
          'https://img.usecurling.com/p/600/400?q=frying%20pastel%20in%20oil',
      },
      {
        step: 6,
        title: 'Sirva Imediatamente',
        description:
          'Retire os pastéis com uma escumadeira, escorra em papel toalha e sirva bem quentinhos para aproveitar o queijo derretido.',
        image:
          'https://img.usecurling.com/p/600/400?q=plate%20of%20cheese%20pastels',
      },
    ],
  },
  {
    id: '3',
    slug: 'pastel-de-romeu-e-julieta',
    name: 'Pastel Doce Romeu e Julieta',
    description:
      'A combinação perfeita de queijo com goiabada em uma massa de pastel crocante. Uma sobremesa surpreendente e deliciosa.',
    heroImage:
      'https://img.usecurling.com/p/1200/800?q=romeu%20e%20julieta%20pastel',
    details: [
      { icon: 'Clock', text: 'Preparo: 20 min' },
      { icon: 'CookingPot', text: 'Cozimento: 10 min' },
      { icon: 'ChefHat', text: 'Rende: 15 pastéis' },
      { icon: 'Star', text: 'Dificuldade: Muito Fácil' },
    ],
    ingredients: [
      {
        title: 'Para a Massa (a mesma)',
        items: [
          { id: 'm1', quantity: '500g', name: 'de farinha de trigo' },
          { id: 'm2', quantity: '250ml', name: 'de água morna' },
          { id: 'm3', quantity: '1 colher de sopa', name: 'de óleo' },
          {
            id: 'm4',
            quantity: '1 colher de sopa',
            name: 'de cachaça (opcional)',
          },
          { id: 'm5', quantity: '1 colher de chá', name: 'de sal' },
        ],
      },
      {
        title: 'Para o Recheio Romeu e Julieta',
        items: [
          {
            id: 'rj1',
            quantity: '200g',
            name: 'de queijo minas padrão em fatias',
          },
          { id: 'rj2', quantity: '200g', name: 'de goiabada cascão em fatias' },
        ],
      },
      {
        title: 'Para Finalizar (Opcional)',
        items: [
          { id: 'fin1', quantity: 'Açúcar e canela', name: 'para polvilhar' },
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
    ],
    steps: [
      {
        step: 1,
        title: 'Prepare a Massa',
        description:
          'Siga os passos 1 e 2 da receita de pastel de carne para preparar e sovar a massa. Deixe descansar por 30 minutos.',
        image: 'https://img.usecurling.com/p/600/400?q=dough%20ball',
      },
      {
        step: 2,
        title: 'Abra a Massa',
        description:
          'Divida a massa em porções e abra cada uma com um rolo em uma superfície enfarinhada até ficar bem fina. Corte os discos no tamanho desejado.',
        image: 'https://img.usecurling.com/p/600/400?q=rolling%20out%20dough',
      },
      {
        step: 3,
        title: 'Monte o Recheio',
        description:
          'Em cada disco de massa, coloque uma fatia de queijo e uma fatia de goiabada por cima. Dobre a massa ao meio e feche bem as bordas com um garfo.',
        image:
          'https://img.usecurling.com/p/600/400?q=guava%20and%20cheese%20on%20dough',
      },
      {
        step: 4,
        title: 'Frite os Pastéis',
        description:
          'Aqueça o óleo e frite os pastéis até que a massa esteja dourada e crocante. Cuidado para não queimar, pois o recheio pode vazar se a massa não estiver bem selada.',
        image: 'https://img.usecurling.com/p/600/400?q=frying%20sweet%20pastel',
      },
      {
        step: 5,
        title: 'Finalize e Sirva',
        description:
          'Retire os pastéis do óleo e escorra em papel toalha. Se desejar, passe os pastéis ainda quentes em uma mistura de açúcar e canela. Sirva como sobremesa!',
        image:
          'https://img.usecurling.com/p/600/400?q=sweet%20pastel%20with%20sugar',
      },
    ],
  },
]
