export type MenuCategoryId =
  | 'hot-coffee'
  | 'cold-beverages'
  | 'cakes-desserts'
  | 'bakery-pastries'
  | 'snacks-sandwiches';

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  image: string;
  imageAlt: string;
  bestseller?: boolean;
}

export const menuCategories: MenuCategory[] = [
  { id: 'hot-coffee', label: 'Hot Coffee' },
  { id: 'cold-beverages', label: 'Cold Coffee & Beverages' },
  { id: 'cakes-desserts', label: 'Cakes & Desserts' },
  { id: 'bakery-pastries', label: 'Bakery & Pastries' },
  { id: 'snacks-sandwiches', label: 'Snacks & Sandwiches' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Velvety espresso under a cloud of silky steamed milk and a dusting of cocoa.',
    price: 149,
    category: 'hot-coffee',
    image: 'https://images.pexels.com/photos/6747870/pexels-photo-6747870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Cappuccino with latte art on a black saucer',
    bestseller: true,
  },
  {
    id: 'caffe-latte',
    name: 'Caffè Latte',
    description: 'Double-shot espresso balanced with smooth milk and a heart of latte art.',
    price: 159,
    category: 'hot-coffee',
    image: 'https://images.pexels.com/photos/39537967/pexels-photo-39537967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Latte with heart-shaped foam art in a white cup',
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'A bold, freshly pulled shot served in a ceramic cup with a sweet finish.',
    price: 99,
    category: 'hot-coffee',
    image: 'https://images.pexels.com/photos/19873648/pexels-photo-19873648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Freshly brewed espresso in a ceramic cup on a marble table',
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    description: 'Chilled coffee blended with cream and ice for a refreshing, indulgent sip.',
    price: 169,
    category: 'cold-beverages',
    image: 'https://images.pexels.com/photos/35229818/pexels-photo-35229818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Glass of iced coffee with cream on a sunny table',
    bestseller: true,
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee Classic',
    description: 'Cold brewed coffee poured over ice with a splash of milk and a light sweetness.',
    price: 139,
    category: 'cold-beverages',
    image: 'https://images.pexels.com/photos/38426418/pexels-photo-38426418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Clear glass of iced coffee with ice cubes on marble',
  },
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie',
    description: 'Ripe Alphonso mango whisked with chilled milk and served with fresh slices.',
    price: 179,
    category: 'cold-beverages',
    image: 'https://images.pexels.com/photos/8813997/pexels-photo-8813997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Mango smoothie in a glass with a metal straw',
  },
  {
    id: 'blueberry-cheesecake',
    name: 'Blueberry Cheesecake',
    description: 'Creamy baked cheesecake on a buttery base, crowned with fresh blueberries.',
    price: 199,
    category: 'cakes-desserts',
    image: 'https://images.pexels.com/photos/30818758/pexels-photo-30818758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Slice of blueberry cheesecake with fresh blueberries on a plate',
    bestseller: true,
  },
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    description: 'Fudgy dark-chocolate brownie finished with a dusting of icing sugar.',
    price: 129,
    category: 'cakes-desserts',
    image: 'https://images.pexels.com/photos/7021888/pexels-photo-7021888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Chocolate brownies dusted with icing sugar on a wooden board',
    bestseller: true,
  },
  {
    id: 'dark-chocolate-cake',
    name: 'Dark Chocolate Cake',
    description: 'Layered cocoa sponge with rich ganache and a glossy chocolate finish.',
    price: 189,
    category: 'cakes-desserts',
    image: 'https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Slice of chocolate cake on a white ceramic plate with a fork',
  },
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    description: 'Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.',
    price: 219,
    category: 'cakes-desserts',
    image: 'https://images.pexels.com/photos/26838690/pexels-photo-26838690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Slice of tiramisu garnished with mint on a marble plate',
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    description: 'Shatteringly flaky, golden croissant baked fresh every morning.',
    price: 99,
    category: 'bakery-pastries',
    image: 'https://images.pexels.com/photos/20002837/pexels-photo-20002837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Golden butter croissants on a cooling rack',
    bestseller: true,
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    description: 'Buttery laminated pastry wrapped around two bars of dark chocolate.',
    price: 119,
    category: 'bakery-pastries',
    image: 'https://images.pexels.com/photos/32268781/pexels-photo-32268781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Fresh pain au chocolat on a plate',
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    description: 'Soft spiced swirl topped with a generous layer of vanilla icing.',
    price: 139,
    category: 'bakery-pastries',
    image: 'https://images.pexels.com/photos/19478097/pexels-photo-19478097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Cinnamon rolls topped with creamy icing',
  },
  {
    id: 'grilled-sandwich',
    name: 'Grilled Sandwich',
    description: 'Toasted multigrain bread with melted cheese, tomato and herbs, pressed warm.',
    price: 179,
    category: 'snacks-sandwiches',
    image: 'https://images.pexels.com/photos/37395121/pexels-photo-37395121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Grilled cheese sandwiches sizzling in a pan',
    bestseller: true,
  },
  {
    id: 'crispy-fries',
    name: 'Crispy Golden Fries',
    description: 'Hand-cut potatoes fried until golden, served with signature dips.',
    price: 129,
    category: 'snacks-sandwiches',
    image: 'https://images.pexels.com/photos/8272619/pexels-photo-8272619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Golden crispy french fries on a plate',
  },
  {
    id: 'veggie-melt',
    name: 'Spiced Veggie Melt',
    description: 'Grilled bread layered with spiced vegetables and a golden cheese crust.',
    price: 159,
    category: 'snacks-sandwiches',
    image: 'https://images.pexels.com/photos/13995302/pexels-photo-13995302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Grilled sandwich with cheese, tomatoes and spices',
  },
];
