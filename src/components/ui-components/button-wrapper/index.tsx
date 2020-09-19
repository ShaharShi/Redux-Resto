import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { changeStarsColor } from "store/config-reducer/config.actions";

export default function ButtonWrapper(props: { color: string }) {
    const dispatch = useDispatch()
    const { color } = props;
    return (
      <Button
        onClick={() => {
            dispatch(changeStarsColor(color));
        }}
        variant="primary"
        size="lg"
        active
      >
        {color}
      </Button>
    );
  }
