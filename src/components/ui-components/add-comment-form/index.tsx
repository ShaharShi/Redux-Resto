import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from 'store/meals-reducer/meals.actions'


export default function AddComment() {
    const state = useSelector((state: any) => state.mealsReducer.mealPageData.currentMealDisplayed)
    const dispatch = useDispatch()
    const initialState: any = {name: '', comment: '', mealID: state.id}
    const [localState, setLocalState] = useState(initialState)

    function handleChange({target}: any, action: any) {
        setLocalState({...localState, [action]: target.value})
    }
    function handleSubmit(e: any) {
        e.preventDefault()
        dispatch(addComment(localState))
    }
    return (
        <Form className={'w-75 m-auto'}>
            <FormControl className={'mb-2'} size={'sm'} type={'text'} name={'name'} placeholder={'Your name ?'} onChange={(e) => {handleChange(e, e.target.name)}}/>
            <FormControl className={'mb-2'} size={'sm'} type={'text'} name={'comment'} placeholder={'Your comment ...'} onChange={(e) => {handleChange(e, e.target.name)}}/>
            <Button size={'sm'} onClick={(e) => {handleSubmit(e)}}>Comment</Button>
        </Form>
    )
}