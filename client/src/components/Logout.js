import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Logout = () => {
    const auchContext = useContext(AuthContext)
    const logoutHandler = auchContext.logout

    return (
        <button className="btn right" onClick={logoutHandler}>Logout</button>
    )
}

export default Logout;