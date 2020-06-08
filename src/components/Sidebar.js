import React from 'react'
import '../index.css'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Welcome from '../components/Welcome'
import Chart from '../components/Chart'
import LineChart from './LineChart'
import { BasicData } from './BasicData'
import SearchBar from './Search'



const SidebarVisible  = () => (
  <Sidebar.Pushable as={Segment} >
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      style={{ backgroundColor: '#aed3f2'}}
    >
      <Menu.Item as='a'>
        <Icon name='stethoscope' />
      </Menu.Item>
      <Menu.Item as='a' >
        <Icon name='chart bar' />
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='idea' />
      </Menu.Item>
      <Menu.Item as='idea'>
        <Icon name='user' />
      </Menu.Item>
    </Sidebar>

   
      <Segment basic style={{ height: '50vw', width: '35vw', marginLeft: '5vw'}}>
      <Welcome/>
      <h1 style={{textDecoration: 'underline', marginLeft: '45vw', marginTop: '-5vw'}}>More Information</h1>
      <img style={{ marginLeft: '-5vw', height: '11vw'}} src='./images/header_image.jpg'/>
    <Chart/>
    <img style={{ marginLeft: '45vw', height: '20vw', marginTop:'-10vw', position: 'relative'}} src='./images/doctors_png.jpg'/>
    <LineChart/>
    <BasicData/>
   <SearchBar/>
      </Segment>
  </Sidebar.Pushable>
)

export default SidebarVisible