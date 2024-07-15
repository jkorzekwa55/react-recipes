import { useContext } from "react";
import { myContext } from "../../app/context";
import "./RecipeDetail.css";
import { MyContextType } from "../../interfaces";


function RecipeDetail() {
    const { state } = useContext(myContext) as MyContextType;

    return (
        <div className="details-main-content">
            <section className="details-centered-section">
                <img className="detailed-image" src={state.global.recipe.image}/>
                <section className="right-section">
                    <h2 className="detail-title">{state.global.recipe.label}
                    <span className="badge bg-primary badge-custom">{state.global.recipe.calories.toFixed(0)} kcal</span>
                    </h2>
                    <span className="badge bg-success badge-custom">{state.global.recipe.cuisineType}</span>
                    <span className="badge bg-danger badge-custom">{state.global.recipe.mealType}</span>
                    <h4 className="ingredients">Ingredients</h4>
                    <ul className="list-group list">
                        {state.global.recipe.ingredients.map((i) => {return (<li className="list-group-item">{i.text}</li>)})}
                    </ul>
                </section>
                <i className="bi bi-heart"></i>
            </section>
        </div>
    )
}

export default RecipeDetail;