import Card from "./card";
import ComponentGrid from "./component-grid";
import { features } from "./features.data";

export function FeatureGrid() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 animate-fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map(({ title, description, demo, large, icon }) => (
          <Card
            key={title}
            title={title}
            description={description}
            icon={icon}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </section>
  );
}
