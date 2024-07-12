import { Answer, Credentials, LoginAnswer, LoginResponse, RecipeAnswer } from "../interfaces";

const root: string = "https://api.edamam.com/api/recipes/v2";
const rootLogin: string = "https://dummyjson.com/";
const aId: string = "ece7b740";
const aKey: string = "ac15524f7c2787be3bbd59a8204ba315";


export async function bringRecipes(search?: string): Promise<Answer> {
  try {
    const response: any = await fetch(`${root}?type=any&app_id=${aId}&app_key=${aKey}&q=${search !== "" && search !== undefined ? search : 'chicken'}`);

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: Problem encountered retrieving data`
      );
    }

    const rawData: RecipeAnswer = await response.json();

    const data: Answer = {
      success: true,
      message: "Data properly fetched",
      data: rawData
    }
    return data;
  } catch (error: any) {
    const errorAnswer: Answer = {
      success: false,
      message: error,
      data: {
        from: "",
        to: "",
        count: 0,
        hits: []
      }
    }
    return errorAnswer;
  }
}

export async function sendCredentials(credentials: Credentials): Promise<LoginAnswer> {
  try {
    let response: any = await fetch(`${rootLogin}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: Problem encountered retrieving data`
      );
    }

    const rawData: LoginResponse = await response.json();

    const data: LoginAnswer = {
      success: true,
      message: "Data properly fetched",
      data: rawData
    }
    return data;
  } catch (error: any) {
    const errorAnswer: LoginAnswer = {
      success: false,
      message: error.message,
      data: {
        email: "",
        firstName: "",
        token: ""
      }
    }
    return errorAnswer;
  }

}