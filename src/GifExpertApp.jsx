import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Las Chicas Superpoderosas"]);

  const onAddCategory = (newCategory) => {
    // chequeo si son estrictamente iguales, y si lo son no lo agrega
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //EMITE UN VALOR Y LO DESPACHA AL PADRE PARA QUE HAGA LO QUE NECESITE
        onNewCategory={onAddCategory}
      />
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
    </>
  );
};
