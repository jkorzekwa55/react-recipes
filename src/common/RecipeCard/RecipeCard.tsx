import './RecipeCard.css';


function RecipeCard({ label, imgPath, mealType, calories }: { label: string, imgPath: string, mealType: string, calories: number }) {


    return (
        <>
            <div className="card card-custom" >
                <img className="card-img-top" src={imgPath} />
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
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