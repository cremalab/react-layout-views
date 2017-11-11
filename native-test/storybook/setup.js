import React from 'react';
import { Layout as LayoutBase, Section as SectionBase } from '../../native'

export const Layout = (props) => 
  <LayoutBase
    spacing='10'
    style={{ 
      padding: 10,
      backgroundColor: 'hsla(200, 71%, 73%, 1)',
    }} 
    {...props} 
  />

export const Section = (props) => 
  <SectionBase
    style={{ 
      padding: 15,
      backgroundColor: 'hsla(212, 96%, 47%, 1)',
    }} 
    {...props} 
  />