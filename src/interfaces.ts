export interface Answer {
    message: string,
    success: boolean,
    data: RecipeAnswer
}

export interface RecipeAnswer{
    from: string,
    to: string,
    count: number,
    hits: RecipeObject[]
}

export interface Credentials{
    username: string,
    password: string
}

export interface RecipeObject {
    recipe: Recipe
}

export interface Recipe {
    id: number,
    label: string,
    image: string,
    mealType: string,
    totalTime: number,
    calories: number
    cuisineType: string;
}