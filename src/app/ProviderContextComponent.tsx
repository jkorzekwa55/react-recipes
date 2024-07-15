import { useEffect, useState } from "react";
import { myContext } from "./context";
import { IContext, Recipe } from "../interfaces";

export const MyProvider = ({ children }: { children: any }) => {
    const [state, setState] = useState<IContext>({
        global: {
            token: "",
            favorite: [{
                label: "",
                image: "",
                mealType: "",
                totalTime: 0,
                calories: 0,
                cuisineType: "string",
                ingredients: [],
                favorite: true
            }],
            search: "",
            recipe: {
                label: "",
                image: "",
                mealType: "",
                totalTime: 0,
                calories: 0,
                cuisineType: "string",
                ingredients: [],
                favorite: true
            }
        }
    })

    useEffect(() => {state.global.favorite.pop()}, [])

    const setGlobal = (target: string, payload: string | Recipe) => {

        setState((prevState) => ({
            global: {
                ...prevState.global,
                [target]: payload
            }
        }))

    }

    const changeFavStatus = (recipe: Recipe) => {
            const favArr = state.global.favorite;
            let inArr = false;
            let id = 0;

            for (var i = 0; i < state.global.favorite.length; i++) {
                if (state.global.favorite[i].label === recipe.label) {
                    inArr = true;
                    id = i;
                }
            }

            if(!inArr)
                favArr.push(recipe)
                
            else
                favArr.splice(id,1)
            
            setState((prevState) => ({
                global: {
                    ...prevState.global,
                    favorite: favArr
                }
            }))
            
    }

    return (
        <myContext.Provider value={{ state, setGlobal, changeFavStatus }}>
            {children}
        </myContext.Provider>
    )
}
