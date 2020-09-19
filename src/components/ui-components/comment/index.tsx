import React from 'react';
import { Row } from 'react-bootstrap';
import styles from 'components/ui-components/comment/style.module.css'

export default function MealComment(props: any) {
    return (
        <Row className={`flex-column ${styles.commentItem}`}>
            <h6 className={'border-bottom pb-1'}>{props.userName || 'anonymous'}</h6>
            <p>{props.userComment}</p>
        </Row>
    )
}