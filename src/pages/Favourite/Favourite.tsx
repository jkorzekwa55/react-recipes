import { useContext } from 'react';
import './Favourite.css';
import { MyContextType, Recipe } from '../../interfaces';
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from '../../common/RecipeCard/RecipeCard';
import { myContext } from '../../app/context';
import { useNavigate } from 'react-router-dom';

function Favorite() {
    const { state, setGlobal, changeFavStatus } = useContext(myContext) as MyContextType;
    const navigate = useNavigate();


    const selectRecipe = (recipe: Recipe) => {
        setGlobal("recipe", recipe);
        navigate("/recipedetail");
      }

    const favoriteStatus = (recipe: Recipe) => {
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
                {state.global.favorite?.length > 0 ? (
                    <Container className="recipe-container">
                        <Row className='gy-4'>
                            {state.global.favorite.map((recipe) => {
                                return (
                                    <Col key={state.global.favorite.indexOf(recipe)} sm={12} md={6} lg={4} xl={3}>
                                        <RecipeCard likeHandler={favoriteStatus} favorite={getLiked(recipe)} clickHandler={selectRecipe} recipe={recipe} key={state.global.favorite.indexOf(recipe)} imgPath={recipe.image} label={recipe.label} mealType={recipe.mealType} calories={recipe.calories} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                ) : (
                    <p>No content</p>
                )}
            </div>

        </>
    )
}

export default Favorite;