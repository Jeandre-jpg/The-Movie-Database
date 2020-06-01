import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import '../index.css'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Welcome from '../components/Welcome'
import Chart from '../components/Chart'

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment} >
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
      style={{ backgroundColor: '#aed3f2' }}
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>

   
      <Segment basic style={{ height: '50vw'}}>
      <Welcome/>
      <img style={{ marginLeft: '5vw', height: '11vw'}} src='./images/header_image.jpg'/>
    
      </Segment>
    
  </Sidebar.Pushable>
)

export default SidebarExampleVisible