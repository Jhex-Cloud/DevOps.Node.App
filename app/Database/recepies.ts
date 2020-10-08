export interface recepie {
  id: number
  title: string
  href: string
  ingredients: string
  thumbnail: string
}

const foodRecepies: recepie[] = [
  {
    id: 1,
    title: 'Vegetable-Pasta Oven Omelet',
    href:
      'http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763',
    ingredients:
      'tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper',
    thumbnail: 'http://img.recipepuppy.com/560556.jpg',
  },
  {
    id: 2,
    title: 'Roasted Pepper and Bacon Omelet',
    href:
      'http://www.bigoven.com/43919-Roasted-Pepper-and-Bacon-Omelet-recipe.html',
    ingredients:
      'eggs, salt, black pepper, butter, black pepper, bacon, onions, garlic, roasted red peppers, oregano, black pepper',
    thumbnail: '',
  },
  {
    id: 3,
    title: 'Broccoli Oven Omelet Recipe',
    href: 'http://cookeatshare.com/recipes/broccoli-oven-omelet-92851',
    ingredients:
      'eggs, broccoli, onions, parmesan cheese, lowfat milk, salt, basil, garlic, tomato, parmesan cheese',
    thumbnail: '',
  },
  {
    id: 4,
    title: 'Eggplant Omelet with Coriander and Caraway',
    href:
      'http://www.epicurious.com/recipes/food/views/Eggplant-Omelet-with-Coriander-and-Caraway-306',
    ingredients:
      'caraway seed, coriander, eggplant, eggs, garlic, lemon, olive oil, onions, black pepper, salt',
    thumbnail: '',
  },
  {
    id: 5,
    title: 'Eggplant Omelet with Coriander And Caraway',
    href:
      'http://www.bigoven.com/143831-Eggplant-Omelet-with-Coriander-And-Caraway-recipe.html',
    ingredients:
      'eggplant, olive oil, onions, garlic, egg, caraway seed, coriander, salt, black pepper, lemon',
    thumbnail: '',
  },
  {
    id: 6,
    title: 'Broccoli and Cheese Omelet',
    href: 'http://www.bigoven.com/45151-Broccoli-and-Cheese-Omelet-recipe.html',
    ingredients:
      'onions, garlic, chicken broth, cottage cheese, oregano, black pepper, egg substitute, bread, mozzarella cheese, butter',
    thumbnail: '',
  },
  {
    id: 7,
    title: 'Chard And Onion Omelet',
    href: 'http://www.bigoven.com/149383-Chard-And-Onion-Omelet-recipe.html',
    ingredients:
      'olive oil, onions, leaves, garlic, eggs, parsley, basil, thyme, gruyere cheese, parmesan cheese',
    thumbnail: '',
  },
  {
    id: 8,
    title: 'Picnic Omelet Squares Recipe',
    href:
      'http://www.cdkitchen.com/recipes/recs/2184/Picnic-Omelet-Squares99498.shtml',
    ingredients:
      'eggs, garlic, parmesan cheese, olive oil, onions, peas, potato, red pepper, salt, tomato, zucchini',
    thumbnail: '',
  },
  {
    id: 9,
    title: 'Spanish Omelet',
    href: 'http://www.cooks.com/rec/view/0,185,153160-249194,00.html',
    ingredients:
      'vegetable oil, green pepper, onions, water, milk, eggs, black pepper, mushroom, garlic, salt, chili powder',
    thumbnail: '',
  },
  {
    id: 10,
    title: 'Onion and Fresh Herb Omelet with Mixed Greens',
    href:
      'http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1622444',
    ingredients:
      'egg substitute, milk, parsley, thyme, salt, black pepper, eggs, flour, nonstick cooking spray, onions, garlic, salad greens, salad greens, red wine vinegar, olive oil, goat cheese, almonds',
    thumbnail: 'http://img.recipepuppy.com/514820.jpg',
  },
]

export const recepies = foodRecepies
