import { useEffect, useState } from 'react';
import './Home.css';
import { bringRecipes } from '../../services/api-calls';
import { Answer, Recipe } from '../../interfaces';
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from '../../common/RecipeCard/RecipeCard';

function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [flag, setFlag] = useState<boolean>(false);
    const [msgError, setMsgError] = useState<string>("");

    useEffect(() => {
        if (recipes?.length === 0) {
            const fetchRecipes = async (): Promise<any> => {
                const fetched: Answer = await bringRecipes();

                if (fetched.success) {
                    setFlag(true);
                    setRecipes(fetched.data.hits.map((e) => e.recipe));
                } else {
                    setMsgError(fetched.message);
                }
            };

            if (!flag) {
                setTimeout(() => {fetchRecipes()}, 3000)
            }
        }
        console.log(recipes);
    }, [recipes])

    return (
        <>
            <div className='main-content'>
                {recipes?.length > 0 ? (
                    <Container className="recipe-container">
                        <Row className='recipe-row'>
                            {recipes.map((recipe) => {
                                return (
                                    <Col key={recipe.id} sm={12} md={6} lg={4} xl={3}>
                                        <RecipeCard key={recipe.id} imgPath={recipe.image} label={recipe.label} mealType={recipe.mealType} calories={recipe.calories}/>
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