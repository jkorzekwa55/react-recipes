import { useContext, useEffect, useState } from 'react';
import './Home.css';
import { bringRecipes } from '../../services/api-calls';
import { Answer, MyContextType, Recipe } from '../../interfaces';
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from '../../common/RecipeCard/RecipeCard';
import { myContext } from '../../app/context';

function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [flag, setFlag] = useState<boolean>(false);
    const [msgError, setMsgError] = useState<string>("");
    const { state, setGlobal } = useContext(myContext) as MyContextType;



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

    return (
        <>
            <div className='main-content'>
                {recipes?.length > 0 ? (
                    <Container className="recipe-container">
                        <Row className='gy-4'>
                            {recipes.map((recipe) => {
                                return (
                                    <Col key={recipes.indexOf(recipe)} sm={12} md={6} lg={4} xl={3}>
                                        <RecipeCard key={recipes.indexOf(recipe)} imgPath={recipe.image} label={recipe.label} mealType={recipe.mealType} calories={recipe.calories} />
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