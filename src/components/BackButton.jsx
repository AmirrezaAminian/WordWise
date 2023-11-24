import React from 'react'

import Button from './Button'

import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()

export default function BackButton() {
  return (
    <Button type='back' onClick={(e) => {
        e.preventDefault();
        navigate(-1)
    }}>
        &larr; Back
    </Button>
  )
}
