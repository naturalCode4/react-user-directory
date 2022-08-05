import logo from '../logo.svg';
import ButtonContainer from './ButtonContainer';

const TheHeader = ({
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
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>User Directory</h2>
          <ButtonContainer
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            data={data}
            setData={setData}
            displayNewForm={displayNewForm}
            setDisplayNewForm={setDisplayNewForm}
            displayEditForm={displayEditForm}
            setDisplayEditForm={setDisplayEditForm}
            resetForm={resetForm}
          />
      </header>
    )
}

export default TheHeader