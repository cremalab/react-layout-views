import React from 'react';
import { Layout as LayoutBase, Section as SectionBase } from '../../web'

export const Layout = (props) => 
  <LayoutBase
    spacing='10px'
    style={{ 
      padding: '10px',
      background: 'hsla(200, 71%, 73%, 1)',
    }} 
    {...props} 
  />

export const Section = (props) => 
  <SectionBase
    style={{ 
      padding: '15px',
      background: 'hsla(212, 96%, 47%, 1)',
    }} 
    {...props} 
  />

export const blockContext = story => <div style={{display: 'block', width: '100%'}}>{story()}</div>