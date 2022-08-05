import UserInfo from "./UserInfo"

const Card = ({currentUser, data}) => {
    return (
        <div id="card">
            {data.length > 0 && <UserInfo 
                currentUser={currentUser}
                data={data}
            />}
        </div>
    )
}

export default Card