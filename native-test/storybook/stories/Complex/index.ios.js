/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout, Section } from '../../../../native/index.js'

const Container = (props) => <View style={{backgroundColor: 'whitesmoke', padding: 22, paddingTop: 44, flex: 1}} {...props} />
const Content = () => <View style={{backgroundColor: 'magenta', padding: 10}} />

const Profile = () =>
  <Layout horizontal spacing="10">
    <Section>
      <Content />
    </Section>
    <Section grow>
      <Content />
    </Section>
  </Layout>

const profiles = [0,1,2,3,4,5]

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Layout spacing="20" grow>
          <Section>
            <Content />
          </Section>
          <Section grow bottom>
            <Layout horizontal spacing='40' grow>
              <Section grow bottom style={{backgroundColor: 'orange', padding: 10}}>
                <Layout spacing='20'>
                  {profiles.map(x => <Section key={x}><Profile /></Section>)}
                </Layout>
              </Section>
              <Section grow centerVertical>
                <Layout spacing='20'>
                  {profiles.map(x => <Section key={x}><Profile /></Section>)}
                </Layout>
              </Section>
              <Section grow>
                <Layout spacing='20'>
                  {profiles.map(x => <Section key={x}><Profile /></Section>)}
                </Layout>
              </Section>
            </Layout>
          </Section>
        </Layout>
      </Container>
    );
  }
}