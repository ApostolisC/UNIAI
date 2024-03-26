// components/Navigation.tsx

import Link from 'next/link';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

const NavContainer = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center; /* Align items vertically */
  }

  li {
    margin-right: 0px;
  }

  a {
    text-decoration: none;
    color: #FAFAFA;
    font-weight: bold;
    position: relative; /* Required for pseudo-element */
    transition: color 0.3s; /* Smooth transition for color change */
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 0 15px;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -6px; /* Adjust as needed */
    bottom-width: 2px;
    left: 0;
    width: 0; /* Initially no width */
    height: 2px; /* Thickness of underline */
    background-color: #FF8210; /* Color of underline */
    transition: width 0.3s; /* Animation for underline */
  }

  a:hover {
    color: #a754c8; /* Change color on hover */
  }

  a:hover::after {
    left:9%;
    width: 82%; /* Expand underline on hover */
  }

  .logo {
    margin-left: 6vw;
    margin-right: 25vw; /* Adjust spacing between logo and navigation */
  }

  #site-header-inner {
    display: flex; /* Use flexbox for header layout */
    align-items: center; /* Align items vertically */
    justify-content: space-between; /* Distribute space between logo and navigation */
    padding: 10px 0; /* Adjust padding as needed */
    border-bottom: 1px solid #FF8210; /* Add bottom border */
    height: 70px;
  }

  /* Make navigation items take up remaining space */
  ul {
    flex-grow: 1;
  }

  header {
    background-color: #1C1C1C;

  }

`;

const Navigation = () => {
  return (
    <NavContainer>
      <header>
        <div id="site-header-inner" className="container">
          <div className="logo">
            <img src="/logo.png" alt="Logo" width="135" height="45" />
          </div>
          <ul>
            <li>
              <Link href="/">
                Σχετικά με Εμάς
              </Link>
            </li>
            <li>
              <Link href="/become-a-partner">
                Γίνε Συνεργάτης
              </Link>
            </li>
            <li>
              <Link href="/uniai-network">
                UniAI.net
              </Link>
            </li>
            <li>
              <Link href="/events">
                Οι Δράσεις μας
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Αρθογραφία
              </Link>
            </li>
            <li>
              <Link href="https://makeathon.uniai.gr/">
                Makeathon
              </Link>
            </li>
            <li>
              <Link href="/">
                  <i className="fas fa-globe"></i> {/* This is the globe icon */}
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </NavContainer>
  );
};

export default Navigation;
