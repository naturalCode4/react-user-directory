const UserInfo = ({currentUser, data}) => {

    console.log('rerendering UserInfo')

    return (
        <div id="user_info">
            <p id="page_number">
                {currentUser + 1} / {data.length}
            </p>
            <div>
                <h2>{data[currentUser].first} {data[currentUser].last}</h2>
                <p>Location: {data[currentUser].location.city}, {data[currentUser].location.state}</p>
                <p>Work:</p>
                <ul>
                    <li>Company: {data[currentUser].work.company}</li>
                    <li>Role: {data[currentUser].work.role}</li>
                </ul>
            
                <p>Contact:</p>
                <ul>
                    <li>Phone: {data[currentUser].contact.phone}</li>
                    <li>Email: {data[currentUser].contact.email}</li>
                </ul>
            </div>
        </div>
    )
}

export default UserInfo