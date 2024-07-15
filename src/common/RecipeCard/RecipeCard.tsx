import { useContext } from 'react';
import { MyContextType, Recipe } from '../../interfaces';
import './RecipeCard.css';
import { myContext } from '../../app/context';


function RecipeCard({ label, imgPath, mealType, calories, clickHandler, recipe, favorite, likeHandler }: { label: string, imgPath: string, mealType: string, calories: number, clickHandler: (r: Recipe) => void, recipe: Recipe, favorite: boolean, likeHandler: (r: Recipe) => void }) {
    const { state } = useContext(myContext) as MyContextType;


    return (
        <>
            <div className="card card-custom" >
                <img className="card-img-top" src={imgPath} />
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                    {
                        state.global.token !== "" ? (
                            <button type="button" onClick={() => likeHandler(recipe)} className={`btn ${favorite ? " btn-danger " : " btn-outline-danger "}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                                </svg>
                            </button>
                        ) : <></>
                    }
                    <a href="#" className="btn btn-primary btn-open" onClick={() => clickHandler(recipe)}>Open</a>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Meal type:</b> {mealType}</li>
                        <li className="list-group-item"><b>Calories:</b> {calories.toFixed(0)}</li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default RecipeCard;