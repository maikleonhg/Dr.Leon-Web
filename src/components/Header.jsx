import { NavBar } from './NavBar'
import logo from '../assets/logo sf.png'

export const Header = () => {
  return (
    <header className="bg-gray-500 flex place-content-between items-center">
        <img src={logo} alt="logo" style={{ width: '100px', height: 'auto' }}/>
       <NavBar />
    </header>
  )
}
