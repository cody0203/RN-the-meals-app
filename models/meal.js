class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    glutenFree,
    vegan,
    vegetarian,
    lactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.glutenFree = glutenFree;
    this.vegan = vegan;
    this.vegetarian = vegetarian;
    this.lactoseFree = lactoseFree;
  }
}

export default Meal;
