import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAction } from 'store/comments-reducer/comments.actions';


export default function AddComment() {
    const relatedMeal = useSelector((state: any) => state.mealsReducer.mealToPresent.id)
    const dispatch = useDispatch()
    const initialState: any = {userName: '', userComment: '', relatedMealID: relatedMeal}
    const [localState, setLocalState] = useState(initialState)

    function handleChange(e: any) {
        setLocalState({...localState, [e.target.name]: e.target.value})
    }
    function handleSubmit(e: any) {
        e.preventDefault()
        dispatch(addCommentAction(localState))
    }
    return (
        <Form className={'w-75 m-auto'}>
            <FormControl className={'mb-2'} size={'sm'} type={'text'} name={'userName'} placeholder={'Your name ?'} onChange={(e) => {handleChange(e)}}/>
            <FormControl className={'mb-2'} size={'sm'} type={'text'} name={'userComment'} placeholder={'Your comment ...'} onChange={(e) => {handleChange(e)}}/>
            <Button size={'sm'} onClick={(e) => {handleSubmit(e)}}>Comment</Button>
        </Form>
    )
}