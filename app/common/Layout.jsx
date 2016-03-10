//import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';


const Layout = props => {

  //const Header = Telescope.getComponent("Header");
  //const Footer = Telescope.getComponent("Footer");

  return (
    <div className="wrapper" id="wrapper">
      <Navbar/>
      <div className="main">
        {props.children}
      </div>
      <Footer {...props}/>
    </div>
  )
}

export default Layout;