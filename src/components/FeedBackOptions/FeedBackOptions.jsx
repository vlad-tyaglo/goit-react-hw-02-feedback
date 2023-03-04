
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul>
            {options.map((option, index) => 
                (<li key={option}>
                    <button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
                    </li>)
                )
            }
        </ul>
    )
}