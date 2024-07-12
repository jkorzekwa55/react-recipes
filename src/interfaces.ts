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
}

export interface IContext {
    global: {
        token : string,
        favorite: string[],
        search: string
    }
}

export type MyContextType = {
    state: IContext;
    setGlobal: (target: string, payload: string) => void;
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