import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biriyani',
    description: 'Chicken Biriyani',
    price: 180,
  },
  {
    id: 'm2',
    name: 'Roll',
    description: 'Egg Chicken Roll',
    price: 80,
  },
  {
    id: 'm3',
    name: 'Momo',
    description: 'Chicken Momo',
    price: 60,
  },
  {
    id: 'm4',
    name: 'Chicken Chap',
    description: 'Delicious Chicken Chap',
    price: 40,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;