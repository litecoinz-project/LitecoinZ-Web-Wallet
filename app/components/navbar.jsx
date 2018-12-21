import React from 'react'
import './litecoinz.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class ZNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render () {
    return (
      <div>
      <Navbar className="navbarstyle" toggleable>
        <NavbarToggler className="customtoggler" right onClick={this.toggleNavbar} />
        <div className="container">
        <NavbarBrand className="style" href='/'>
          <img src="/litecoinz.png" height={50}/>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink className="style2 faq" href='/faq.html'>
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="style2 gt" href='/guide.html'>
                GETTING STARTED
              </NavLink>
            </NavItem>                      
          </Nav>
        </Collapse>
        </div>
      </Navbar>  
      </div>
    )
  }
}
