import AddComment from 'components/ui-components/add-comment-form';
import MealComment from 'components/ui-components/comment';
import Rating from 'components/ui-components/rating';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from 'components/containers/pages/meal-page/style.module.css'

export default function MealPage() {
    const mealsState = useSelector((state: any) => state.mealsReducer.mealToPresent)
    const commentsState = useSelector((state: any) => state.commentsReducer.commentsContainer)
    const currentCommentedMeal = getMealComments()

    function getMealComments() {
        return commentsState.filter((comment: any) => comment.relatedMealID === mealsState.id)
    }
    useEffect(() => {
        getMealComments()
    }, [commentsState])

    return (
        <div className={'container mt-5'}>
            <Row>
                <Col>
                    <Row className={'flex-column align-content-center text-center border-right p-5'}>
                        <img src={mealsState.image} className={'w-100 align-self-center'}/>
                        <h4>{mealsState.name}</h4>
                        <Rating stars={mealsState.rating}/>
                        <p className={'pt-5'}>
                            {mealsState.description}
                        </p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div className={styles.commentArea}> 
                            {!currentCommentedMeal.length ?
                             'Be the first to add a comment ...' :
                             currentCommentedMeal.map((commentData: any, i: any) => {return <MealComment key={i} {...commentData} />})}
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
