
import React from 'react'
//import jsonp from 'jsonp'
//import { Flex, Box } from 'reflexbox'
import {
  config,
  Banner,
  Block,
  Button,
  Close,
  Container,
  Drawer,
  Heading,
  NavItem,
  Panel,
  PanelHeader,
  SectionHeader,
  Footer,
  Space,
  Text,
} from 'rebass'

import init from '../configurations/init'
import configurations from '../configurations'

import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import Intro from './Intro.jsx'
import Cards from './Cards.jsx'
import DataDemo from './DataDemo.jsx'
import BlockPanel from './BlockPanel.jsx'
import Checkout from './Checkout.jsx'
//import Forms from './Forms.jsx'
import Headings from './Headings.jsx'
import Colors from './Colors.jsx'
import Comments from './Comments.jsx'
import MegaFooter from './MegaFooter.jsx'
import ConfigForm from './ConfigForm.jsx'
import Modal from './Modal.jsx'

class App extends React.Component {
  constructor () {
    super()
    this.state = Object.assign(
      {},
      config,
      configurations.basic, {
        drawerOpen: false,
        dropdownOpen: false,
        modalOpen: false,
        config: 'Basic',
        repo: {}
      }
    )
    this.toggle = this.toggle.bind(this)
    this.switchConfig = this.switchConfig.bind(this)
    this.updateContext = this.updateContext.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetTheme = this.resetTheme.bind(this)
  }

  childContextTypes: {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: this.state
    }
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  switchConfig (key) {
    return (e) => {
      const theme = Object.assign({}, config, configurations[key])
      console.log(theme.name)
      this.resetTheme(() => {
        this.setState({
          ...theme,
          config: theme.name,
          dropdownOpen: false
        })
      })
    }
  }

  resetTheme (cb) {
    this.setState(init, cb)
  }

  updateContext (state) {
    this.setState(state)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount () {
    jsonp('https://api.github.com/repos/jxnblk/rebass?callback=callback', (err, response) => {
      this.setState({ repo: response.data })
    }).bind(this)
  }

  render () {
    const {
      fontFamily,
      fontWeight,
      letterSpacing,
      color,
      backgroundColor,
      drawerOpen,
      overlayOpen
    } = this.state

    return (
      <div style={{
          fontFamily,
          fontWeight,
          letterSpacing,
          color,
          backgroundColor
        }}>
        <Navbar {...this.state}
          configurations={configurations}
          switchConfig={this.switchConfig}
          toggle={this.toggle} />
        <Header toggle={this.toggle} />
        <Container style={{
            transition: 'transform .3s ease-out',
            transform: drawerOpen ? 'translateX(-20%)' : 'translateX(0)'
          }}>
          <Intro />
          <Cards {...this.state} />
          <DataDemo
            {...this.state}
            {...this.props} />
          <BlockPanel toggle={this.toggle} />
          <Checkout />
          <Headings {...this.state} />
          <Colors {...this.state} />
          <Comments />
        </Container>
        <MegaFooter {...this.state} />
        <ConfigForm
          {...this.state}
          toggle={this.toggle}
          onChange={this.updateContext}
          reset={this.resetTheme} />
        <Modal {...this.state}
          toggle={this.toggle} />
      </div>
    )
  }
}

export default App

