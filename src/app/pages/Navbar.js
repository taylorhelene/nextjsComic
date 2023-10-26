import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const Navbar=()=>{
    return (
        <nav className='navbar navbar-default mx-auto'>
            <Link className='m-2' href="/" > Characters </Link>
            <Link className='m-2' href="/pages/comics"> Comics </Link>
            <Link className='m-2' href="/pages/games"> Games </Link>
        </nav>
    )
}
export default Navbar;