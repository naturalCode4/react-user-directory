const NextButton = ({currentUser, setCurrentUser, data, setDisplayEditForm}) => {

    const nextButtonHandler = () => {
        if (currentUser < data.length - 1) {
            setCurrentUser(currentUser + 1)
        }
        setDisplayEditForm(false)
    }
    
    return (
        <button onClick={() => nextButtonHandler()}>
            Next
        </button>
    )
}

export default NextButton