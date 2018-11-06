import * as React from 'react'
import {
  Collapse,
  Navbar as _Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'

interface Props {
  brand: React.ReactNode
  links: {
    label: string
    to: string
  }[]
}

const NavBarLinks = ({ links }: { links: Props['links'] }) => {
  return (
    <Nav className='ml-auto' navbar>
      {
        links.map((lProp, i) => <NavItem key={i} ><NavLink tag={Link} to={lProp.to}>{lProp.label}</NavLink></NavItem>)
      }
    </Nav>
  )
}

export default class NavBar extends React.Component<Props, { isOpen: boolean }> {
  constructor (props: Readonly<Props>) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    const { brand, links } = this.props
    return (
      <div>
        <_Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>{brand}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavBarLinks links={links} />
          </Collapse>
        </_Navbar>
      </div>
    )
  }
}
