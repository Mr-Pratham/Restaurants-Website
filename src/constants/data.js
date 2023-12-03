import images from './images';

const wines = [
  {
    title: 'Mango Tango Ceviche',
    price: '$32.99',
    tags: 'Sea bass, Shrimp, Mango, Avocado',
  },
  {
    title: 'Truffle Butter Escargot',
    price: '$28.99',
    tags: 'Escargot, Truffle butter, Baguette, Garlic',
  },
  {
    title: 'Saffron-Spiced Chicken Tikka Masala',
    price: '$42.99',
    tags: 'Chicken tikka, Saffron curry, Basmati rice, Naan bread',
  },
  {
    title: 'Chimichurri-Infused Argentinian Ribeye',
    price: '$56.99',
    tags: 'Ribeye steak, Chimichurri sauce, Sweet potato puree, Grilled vegetables',
  },
  {
    title: 'Passion Fruit Cheesecake',
    price: '$18.99',
    tags: 'Cream cheese, Passion fruit, Mango coulis, Graham cracker crust',
  },
];

const cocktails = [
  {
    title: 'Chimichurri-Infused Argentinian Ribeye',
    price: '$56.99',
    tags: 'Ribeye steak, Chimichurri sauce, Sweet potato puree, Grilled vegetables',
  },
  {
    title: 'Butternut Squash Sage Risotto',
    price: '$36.99',
    tags: 'Arborio rice, Butternut squash, Sage, Parmesan cheese',
  },
  {
    title: 'Mango Coconut Basil Sorbet',
    price: '$14.99',
    tags: 'Mango, Coconut milk, Basil, Simple syrup',
  },

];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Guide 2023',
    subtitle: 'Three Michelin Stars',
  },
  {
    imgUrl: images.award01,
    title: 'James Beard Foundation 2022',
    subtitle: 'Outstanding Chef of the Year',
  },
  {
    imgUrl: images.award03,
    title: 'Worlds 50 Best Restaurants',
    subtitle: 'Top 5 Restaurants Worldwide',
  },
];

export default { wines, cocktails, awards };
