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
    label: string,
    image: string,
    mealType: string,
    totalTime: number,
    calories: number
    cuisineType: string;
    ingredients: Ingredient[],
    favorite: boolean
}

export interface Ingredient{
    food: string,
    quantity: number,
    text: string
}

export interface IContext {
    global: {
        token : string,
        favorite: Recipe[],
        search: string,
        recipe: Recipe
    }
}

export type MyContextType = {
    state: IContext;
    setGlobal: (target: string, payload: string | Recipe) => void;
    changeFavStatus: (recipe: Recipe) => void;
  };


export interface LoginResponse{
    email: string,
    firstName: string,
    token: string
}

export interface LoginAnswer {
    message: string,
    success: boolean,
    data: LoginResponse
}