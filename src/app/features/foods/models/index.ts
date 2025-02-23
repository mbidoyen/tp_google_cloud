export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export type Foods = Food[];

export const foods:Foods = [
    {
      id: 1,
      name: "Pizza",
      description: "Pizza is a savory dish of Italian origin, consisting of a round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients.",
      price: 10,
      image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
    },
    {
      id: 2,
      name: "Burger",
      description: "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, placed inside a sliced bread roll or bun.",
      price: 5,
      image: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg"
    },
    {
      id: 3,
      name: "Sushi",
      description: "Sushi is a traditional Japanese dish made with vinegared rice and various ingredients, such as raw fish and vegetables.",
      price: 15,
      image: "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg"
    },
    {
      id: 4,
      name: "Pasta",
      description: "Pasta is an Italian staple food made from wheat dough, usually served with various sauces like tomato, cheese, or pesto.",
      price: 8,
      image: "https://cdn.pixabay.com/photo/2022/09/24/07/31/pasta-7475756_1280.jpg"
    },
    {
      id: 5,
      name: "Steak",
      description: "Steak is a high-quality cut of beef that is typically grilled or pan-seared and served with various sides.",
      price: 20,
      image: "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"
    },
    {
      id: 6,
      name: "Tacos",
      description: "Tacos are a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.",
      price: 7,
      image: "https://cdn.pixabay.com/photo/2023/08/08/08/46/tacos-8176774_1280.jpg"
    },
    {
      id: 7,
      name: "Salad",
      description: "A salad is a dish consisting of mixed pieces of vegetables, often with added proteins like chicken, cheese, or nuts.",
      price: 6,
      image: "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_1280.jpg"
    },
    {
      id: 8,
      name: "Ice Cream",
      description: "Ice cream is a frozen dessert made from dairy products and sugar, often flavored with fruits, chocolate, or vanilla.",
      price: 4,
      image: "https://cdn.pixabay.com/photo/2014/08/05/10/32/ice-cream-410330_960_720.jpg"
    },
    {
      id: 9,
      name: "Fried Chicken",
      description: "Fried chicken is a dish consisting of chicken pieces that have been seasoned, battered, and deep-fried.",
      price: 9,
      image: "https://cdn.pixabay.com/photo/2019/03/31/08/24/bbq-4092636_1280.jpg"
    },
    {
      id: 10,
      name: "Pancakes",
      description: "Pancakes are a flat, round cake made from a starch-based batter and cooked on a griddle or frying pan.",
      price: 5,
      image: "https://cdn.pixabay.com/photo/2018/08/15/14/56/pancake-3608195_1280.jpg"
    }
  ];
