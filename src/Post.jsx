/* eslint-disable react/prop-types */
export function Post(props) {    
    return (
        <>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </>
    )
} 