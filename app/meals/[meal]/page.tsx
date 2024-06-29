interface MealProps {
  params: {
    slug: string;
  };
}

export default function MealDetailsPage({ params }: MealProps) {
  return (
    <>
      <h1>{params.slug}</h1>
    </>
  );
}
