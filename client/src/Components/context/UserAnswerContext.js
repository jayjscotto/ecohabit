import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = props => {
    const {
        questions: checkInQuestions,
        answers: initialAnswers,
        children
    } = props;

    const [questions, setQuestions] = useState(checkInQuestions);
    const [selectedAnswer, setSelectedAnswer]
}