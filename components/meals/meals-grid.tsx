import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }: { meals: any[] }) {
  return (
    <>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}></li>
        ))}
      </ul>
    </>
  );
}
