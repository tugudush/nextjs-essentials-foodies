import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

interface PageProps {
  params: {
    mealSlug: string;
  };
}

interface MealSlugProps {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export default function MealDetailsPage({ params }: PageProps) {
  console.log("slug: ", params.mealSlug);
  const meal = getMeal(params.mealSlug) as MealSlugProps;
  console.log("meal title: ", meal.title);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
