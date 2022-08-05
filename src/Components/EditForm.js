import {useEffect} from 'react'

const EditForm = ({resetForm, stateVariables, stateDeclarations, data, setData, currentUser, setDisplayEditForm}) => {

    console.log('rerendering EditForm')
       
    const {
        first, last, city, state, company, role, phone, email
    } = stateVariables

    const {
        setFirst, setLast, setCity, setState, setCompany, setRole, setPhone, setEmail
    } = stateDeclarations

    useEffect(() => {
        setFirst(data[currentUser].first)
        setLast(data[currentUser].last)
        setCity(data[currentUser].location.city)
        setState(data[currentUser].location.state)
        setCompany(data[currentUser].work.company)
        setRole(data[currentUser].work.role)
        setPhone(data[currentUser].contact.phone)
        setEmail(data[currentUser].contact.email)
    }, [])

    const editFormSubmitHandler = e => {
        // e.preventDefault()
        console.log('EditFormSubmitHandler activated!')
        // console.log('post preventDefault')
        const edittedUser = 
            {
                first,
                last,
                location: {
                    city,
                    state
                },
                work: {
                    company,
                    role
                },
                contact: {
                    phone,
                    email
                }
            }
        console.log('edittedUser: ', edittedUser)
        data.splice(currentUser, 1, edittedUser)
        console.log('users1', data)
        setData([...data]) // data is already editted. This is just to setState
        console.log('users2', data)
        setDisplayEditForm(false)
        resetForm()
    }

    return (
        <div className="new_form edit_form">

            <h2>Edit the user's information</h2>

            <form id="new_form_holder">
                <section>
                    
                    <input type="text" id="first_input" name="first" value={first} placeholder={first}
                    minLength="0" maxLength="20" size='20' onChange={e => setFirst(e.target.value)}/>
                    <label for="first"> first name</label>

                    <br></br>

                    <input type="text" id="last_input" name="last" value={last}
                    minLength="0" maxLength="20" size='20' onChange={e => setLast(e.target.value)}/>
                    <label for="last"> last name</label>

                    <br></br><br></br>

                    <input type="text" id="city_input" name="city" value={city}
                    minLength="0" maxLength="25" size='20' onChange={e => setCity(e.target.value)}/>
                    <label for="city"> city</label>

                    <br></br>

                    <input type="text" id="state_input" name="state" value={state}
                    minLength="0" maxLength="25" size='20' onChange={e => setState(e.target.value)}/>
                    <label for="state"> state / country</label>

                </section>

                <br></br><br></br>

                <section>

                    <input type="text" id="company_input" name="company" value={company}
                    minLength="0" maxLength="30" size='20' onChange={e => setCompany(e.target.value)}/>
                    <label for="company"> company</label>

                    <br></br>

                    <input type="text" id="role_input" name="role" value={role}
                    minLength="0" maxLength="30" size='20' onChange={e => setRole(e.target.value)}/>
                    <label for="role"> role</label>

                    <br></br><br></br>

                    <input type="text" id="phone_input" name="phone" value={phone}
                    minLength="0" maxLength="20" size='20' onChange={e => setPhone(e.target.value)}/>
                    <label for="phone"> phone number</label>
                    
                    <br></br>

                    <input type="text" id="email_input" name="email" value={email}
                    minLength="0" maxLength="35" size='20' onChange={e => setEmail(e.target.value)}/>
                    <label for="email"> email address</label>

                </section>


            </form>

            <button className="submit_button" onClick={e => editFormSubmitHandler()}>Submit</button>
            <br></br><br></br>


        </div>
    )
}

export default EditForm