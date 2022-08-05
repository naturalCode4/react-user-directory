import './App.css';
import users from './Data'
import Card from './Components/Card';
import TheHeader from './Components/TheHeader';
import NewForm from './Components/NewForm';
import EditForm from './Components/EditForm';
import {useState} from 'react'

function App() {

  console.log('rerendering App.js')

  const [currentUser, setCurrentUser] = useState(0) // implement redux for this later
  const [data, setData] = useState(users)

  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [displayNewForm, setDisplayNewForm] = useState(false)
  const [displayEditForm, setDisplayEditForm] = useState(false)

  const stateVariables = {first, last, city, state, company, role, phone, email}
  const stateDeclarations = {setFirst, setLast, setCity, setState, setCompany, setRole, setPhone, setEmail}

  const resetForm = () => {
    setFirst('')
    setLast('')
    setCity('')
    setState('')
    setCompany('')
    setRole('')
    setPhone('')
    setEmail('')
  }

  return (
    <div className="App">
      <TheHeader
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
      <Card
        currentUser={currentUser}
        data={data}
      />
      {displayNewForm && <NewForm
        resetForm={resetForm}
        stateVariables={stateVariables}
        stateDeclarations={stateDeclarations}
        data={data}
        setData={setData}
        setDisplayNewForm={setDisplayNewForm}
      />}
      {displayEditForm && <EditForm
        resetForm={resetForm}
        stateVariables={stateVariables}
        stateDeclarations={stateDeclarations}
        data={data}
        setData={setData}
        currentUser={currentUser}
        setDisplayEditForm={setDisplayEditForm}
      />}
    </div>
  );
}

export default App;
