import AddComment from 'components/ui-components/add-comment-form';
import MealComment from 'components/ui-components/comment';
import Rating from 'components/ui-components/rating';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from 'components/containers/pages/meal-page/style.module.css'

export default function MealPage() {
    const state = useSelector((state: any) => state.mealsReducer.mealPageData)
    const { currentMealDisplayed } = state
    const currentCommentedMeal = getMealComments()

    function getMealComments() {
        return state.commentedMeals.filter((meal: any) => meal.mealID === currentMealDisplayed.id)
    }
    useEffect(() => {
        getMealComments()
    }, [state.commentedMeals])

    return (
        <div className={'container mt-5'}>
            <Row>
                <Col>
                    <Row className={'flex-column align-content-center text-center border-right p-5'}>
                        <img src={currentMealDisplayed.image} className={'w-100 align-self-center'}/>
                        <h4>{currentMealDisplayed.name}</h4>
                        <Rating stars={currentMealDisplayed.rating}/>
                        <p className={'pt-5'}>
                            {currentMealDisplayed.description}
                        </p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div className={styles.commentArea}> 
                            {!currentCommentedMeal.length ? 'Be the first to add a comment ...' : currentCommentedMeal.map((commentData: any, i: any) => {return <MealComment key={i} {...commentData} />})}
                        </div>
                    </Row>
                    <Row>
                        <AddComment />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
