const NewButton = ({displayNewForm, setDisplayNewForm, setDisplayEditForm, resetForm}) => {
    
    const newButtonHandler = () => {
        setDisplayEditForm(false)
        if (!displayNewForm) {
            resetForm()
            setDisplayNewForm(true)
        } else {
            setDisplayNewForm(false)
        }
    }

    return (
        <button
            onClick={() => newButtonHandler()}
        >New user
        </button>
    )
}

export default NewButton