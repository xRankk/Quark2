import { useRef ,useState,useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "./assets/logo.svg";
import {Link} from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
    	const handleResize = () => {
      		setIsMobile(window.innerWidth <= 1024);
    };

    	handleResize(); // Check initial width
    	window.addEventListener("resize", handleResize); // Listen for resize events
    	return () => window.removeEventListener("resize", handleResize); // Cleanup
  	}, []);

	const handleLinkClick = () => {
    	if (isMobile) {
      		// Close the navbar if it's in mobile view
      		navRef.current.classList.remove("responsive_nav");
    	}
  	};


	return (
		<header>
			<img className="external-img" src={logo} alt="Logo"/>
      		<h3 className="external-h3"><Link to="/homepage" className="homepage-a">Quark Electric</Link></h3>
			<nav ref={navRef}>
				{isMobile && (
          			<>
            			<img className="internal-img"src={logo} alt="Mobile Logo" />
            			<h3 className="internal-h3"><Link to="/homepage" className="homepage-a"onClick={handleLinkClick}>Quark Electric</Link></h3>
          			</>
        		)}
				<Link to="/homepage" className="nav-items"onClick={handleLinkClick}>Home</Link>
				<Link to="/AboutUs" className="nav-items"onClick={handleLinkClick}>About us</Link>
				<Link to="/Gallery" className="nav-items"onClick={handleLinkClick}>Gallery</Link>
				<Link to="/Contact" className="nav-items"onClick={handleLinkClick}>Contact</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}


export default Navbar;