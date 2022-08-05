const DeleteButton = ({currentUser, setCurrentUser, data, setData}) => {

    const deleteButtonHandler = () => {
        data.splice(currentUser, 1)
        setData([...data])
        if (currentUser === data.length) {
            setCurrentUser(currentUser - 1)
        }
    }

    return (
        <button onClick={() => deleteButtonHandler()}>Delete user</button>
    )
}

export default DeleteButton