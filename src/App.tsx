import { useState } from "react";
import "./styles.css";
import Recipes from "./Recipes/Recipes";
import {
  allRecipes,
  sugarRecipes,
  summerRecipes,
  dessertRecipes,
  noEggsRecipes,
  chocolateRecipes,
  autumnRecipes,
  veganRecipes,
  chocolateDessertRecipes,
  africanRecipes,
  winterRecipes,
  appetizerRecipes,
  africanVegetarianRecipes
} from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { SelectedTags } from "./Tags/SelectedTags";

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleTagRemove = (tagId: string) => {
    setSelectedTags(selectedTags.filter((id) => id !== tagId));
  };

  const getFilteredRecipes = () => {
    let recipes;
    switch (filter) {
      case "sugar":
        recipes = sugarRecipes;
        break;
      case "summer":
        recipes = summerRecipes;
        break;
      case "dessert":
        recipes = dessertRecipes;
        break;
      case "chocolate dessert":
        recipes = chocolateDessertRecipes;
        break;
      case "eggs free":
        recipes = noEggsRecipes;
        break;
      case "chocolate":
        recipes = chocolateRecipes;
        break;
      case "autumn":
        recipes = autumnRecipes;
        break;
      case "vegan":
        recipes = veganRecipes;
        break;
      case "african":
        recipes = africanRecipes;
        break;
      case "winter":
        recipes = winterRecipes;
        break;
      case "appetizer":
        recipes = appetizerRecipes;
        break;
      case "vegetarian":
        recipes = africanVegetarianRecipes;
        break;
      default:
        recipes = allRecipes;
    }
    return recipes.filter((recipe) =>
      selectedTags.every((tagId) => recipe.tags.some((recipeTag) => recipeTag.id === tagId))
    );
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="App">
      Liste des recettes
      <SelectedTags selectedTags={selectedTags} onTagRemove={handleTagRemove} tagList={tagList} />
      <TagList tags={tagList} onTagClick={handleTagClick} />

      <button onClick={() => setFilter("chocolate")}>Chocolat</button>
      <button onClick={() => setFilter("sugar")}>Sucre</button>
      <button onClick={() => setFilter("summer")}>Eté</button>
      <button onClick={() => setFilter("dessert")}>Dessert</button>
      <button onClick={() => setFilter("chocolate dessert")}>
        dessert chocolat
      </button>
      <button onClick={() => setFilter("eggs free")}>Sans Oeufs</button>
      <button onClick={() => setFilter("autumn")}> Autumn</button>
      <button onClick={() => setFilter("vegan")}> Vegan</button>
      <button onClick={() => setFilter("african")}>African</button>
      <button onClick={() => setFilter("winter")}>Winter</button>
      <button onClick={() => setFilter("appetizer")}>Appetizer</button>
      <button onClick={() => setFilter("vegetarian")}>vegetarian</button>

      <Recipes recipes={filteredRecipes} />
    </div>
  );
}
