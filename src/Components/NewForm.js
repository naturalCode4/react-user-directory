const NewForm = ({resetForm, stateVariables, stateDeclarations, data, setData, setDisplayNewForm}) => {

    console.log('rerendering NewForm')
       
    const {
        first, last, city, state, company, role, phone, email
    } = stateVariables

    const {
        setFirst, setLast, setCity, setState, setCompany, setRole, setPhone, setEmail
    } = stateDeclarations


    const newFormSubmitHandler = e => {
        // e.preventDefault()
        console.log('newFormSubmitHandler activated!')
        // console.log('post preventDefault')
        const newUser = 
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
        console.log('newUser: ', newUser)
        setData([...data, newUser])
        console.log('users', data)
        setDisplayNewForm(false)
        resetForm()
    }

    return (
        <div className="new_form">

            <h2>Enter the new user's information</h2>

            <form id="new_form_holder">
                <section>
                    
                    <input type="text" id="first_input" name="first" value={first}
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

            <button className="submit_button" onClick={e => newFormSubmitHandler()}>Submit</button>
            <br></br><br></br>

        </div>
    )
}

export default NewForm