import NextButton from "./Buttons/NextButton"
import PrevButton from "./Buttons/PrevButton"
import NewButton from "./Buttons/NewButton"
import EditButton from "./Buttons/EditButton"
import DeleteButton from "./Buttons/DeleteButton"

const ButtonContainer = ({
    currentUser, 
    setCurrentUser, 
    data,
    setData,
    displayNewForm,
    setDisplayNewForm,
    displayEditForm,
    setDisplayEditForm,
    resetForm
}) => {
    return (
        <div id="button_container">
            {currentUser >= 1 && <PrevButton
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                data={data}
                setDisplayEditForm={setDisplayEditForm}
            />}
            {currentUser + 1 < data.length && <NextButton
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                data={data}
                setDisplayEditForm={setDisplayEditForm}
            />}
            <NewButton
                displayNewForm={displayNewForm}
                setDisplayNewForm={setDisplayNewForm}
                setDisplayEditForm={setDisplayEditForm}
                resetForm={resetForm}
            />
            {data.length >= 1 && <EditButton
                displayEditForm={displayEditForm}
                setDisplayEditForm={setDisplayEditForm}
                setDisplayNewForm={setDisplayNewForm}
                resetForm={resetForm}
            />}
            {data.length >= 1 && <DeleteButton
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                data={data}
                setData={setData}
            />}
        </div>
    )
}

export default ButtonContainer