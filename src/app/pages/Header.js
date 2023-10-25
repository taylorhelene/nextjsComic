import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return(
        <div className='container'>
        <header className='headercomponents'>
        <img src='/images/logo .png'/>
        <Navbar />
        </header>
        </div>
    )
}

export default Header;