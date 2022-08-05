const PrevButton = ({currentUser, setCurrentUser, data, setDisplayEditForm}) => {
    
    const prevButtonHandler = () => {
        if (currentUser > 0 && data.length != 0) {
            setCurrentUser(currentUser - 1)
        }
        setDisplayEditForm(false)
    }
    
    return (
        <button onClick={() => prevButtonHandler()}>
            Prev
        </button>
    )
}

export default PrevButton