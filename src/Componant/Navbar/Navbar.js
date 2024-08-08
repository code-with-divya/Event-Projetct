import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.css";
import './Navbar.css';
import logo from './Image/WhatsApp_Image_2024-06-16_at_19.28.41_1a742fc2-removebg-preview.png';
import home from './Image/home (2).png';
import about from './Image/information-button (1).png';
import history from './Image/history.png';
import register from './Image/paste.png';


function UnderlineExample() {
  return (
    <Nav variant="underline" defaultActiveKey="/home" className='navbars'>

      <Nav.Item>
        <Nav.Link href="/arohi"><p className='pagename'><img className='logo' src={logo} /></p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/"><p className='pagename'><img className='hom' src={home} /></p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/About"><p className='pagename'><img className='homm' src={about} /></p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Past"><p className='pagename'><img className='hom' src={history} /></p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Ragistetion"><p className='pagename'><img className='hom' src={register} /></p></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default UnderlineExample;