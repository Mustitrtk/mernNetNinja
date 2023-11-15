import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <header>
            <div className='container'>
                <Link to="/">
                    workout buddy
                </Link>
            </div>
        </header>
    )
}

export default Navbar