import { useContext, useEffect, useState } from 'react';
import './Home.css';
import { bringRecipes } from '../../services/api-calls';
import { MyContextType, Recipe } from '../../interfaces';
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from '../../common/RecipeCard/RecipeCard';
import { myContext } from '../../app/context';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [msgError] = useState<string>("");
    const { state, setGlobal, changeFavStatus } = useContext(myContext) as MyContextType;
    const navigate = useNavigate();

    useEffect(() => {
        if (state.global.search !== "") {
            const bringSearchedRecipes = async () => {
                bringRecipes(state.global.search)
                    .then(res => {
                        setRecipes(res.data.hits.map((e) => e.recipe))
                    })
                    .catch(error => console.log(error))
            }

            const bring = setTimeout(() => {
                bringSearchedRecipes()
            }, 275)

            return () => clearTimeout(bring);
        } else if (state.global.search === "") {
            const fetchRecipes = async (): Promise<any> => {
                bringRecipes()
                    .then(res => {
                        setRecipes(res.data.hits.map((e) => e.recipe))
                    }).catch(error => console.log(error));
            };
            fetchRecipes();
        }
    }, [state])

    const selectRecipe = (recipe: Recipe) => {
        setGlobal("recipe", recipe);
        navigate("/recipedetail");
      }

    const changeFavoriteStatus = (recipe: Recipe) => {
        changeFavStatus(recipe);
    }
    
     const getLiked = (r: Recipe) : boolean => {
        for (var i = 0; i < state.global.favorite.length; i++) {
            if (state.global.favorite[i].label === r.label) {
                return true;
            }
        }
        return false;
     }

    return (
        <>
            <div className='main-content'>
                {recipes?.length > 0 ? (
                    <Container className="recipe-container">
                        <Row className='gy-4'>
                            {recipes.map((recipe) => {
                                return (
                                    <Col key={recipes.indexOf(recipe)} sm={12} md={6} lg={4} xl={3}>
                                        <RecipeCard likeHandler={changeFavoriteStatus} favorite={getLiked(recipe)} clickHandler={selectRecipe} recipe={recipe} key={recipes.indexOf(recipe)} imgPath={recipe.image} label={recipe.label} mealType={recipe.mealType} calories={recipe.calories} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                ) : (
                    <div>{msgError}</div>
                )}
            </div>

        </>
    )
}

export default Home;