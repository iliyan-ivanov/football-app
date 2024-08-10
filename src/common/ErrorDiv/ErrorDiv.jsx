import './ErrorDiv.css';

const ErrorDiv = ({children}) => {

    if (!children) {
        return null;
    }

    return (
        <div className="error-div">{children}</div>
    )

}

export default ErrorDiv;