import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return(
        <div className='container mb-5 border-bottom rounded-bottom'>
        <header className='headercomponents'>
        <img src='/images/logo .png'/>
        <Navbar className='mx-auto' />
        </header>
        </div>
    )
}

export default Header;