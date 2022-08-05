const EditButton = ({displayEditForm, setDisplayEditForm, setDisplayNewForm, resetForm}) => {

    const editButtonHandler = () => {
        setDisplayNewForm(false)
        if (!displayEditForm) {
            setDisplayEditForm(true)
        } else {
            resetForm()
            setDisplayEditForm(false)
        }
    }

    return (
        <button
            onClick={() => editButtonHandler()}
        >Edit user
        </button>
    )
}

export default EditButton