import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "components/ui-components/rating";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { presentMealAction } from "store/meals-reducer/meals.actions";

export interface IMeal {
  name: string;
  description: string;
  image: string;
  action: Function;
  actionTitle: string;
  cls: string;
  rating: number;
  id?: string
}
export default function Meal(props: IMeal) {
  const { name, image, description, rating, action, id} = props;
  const dispatch = useDispatch()
  
  function onAction() {
    action({ name, image, description, rating , id});
  }
  function presentMeal() {
    dispatch(presentMealAction({name, image, description, rating, id}))
  }
  return (
    <Card className="col-lg-4">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
          <Row>
            <Button variant={props.cls || "primary"} onClick={onAction}>
              {props.actionTitle}
            </Button>
            <Link className={'ml-auto'} to={`/meal/${id}`} onClick={presentMeal}>
              More Info
            </Link>
          </Row>
        <Rating stars={props.rating} />
      </Card.Body>
    </Card>
  );
}
