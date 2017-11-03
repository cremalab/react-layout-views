import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout, Section } from 'react-layout-views/native'

const Container = (props) => <View style={{backgroundColor: 'whitesmoke', padding: 22, flex: 1}} {...props} />
const Content = (props) => <View style={{backgroundColor: 'teal', padding: 10}} {...props} />


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Layout grow spacing="20" style={{backgroundColor: 'lightgray'}}>
          <Section>
            <Content><Text>1</Text></Content>
          </Section>
          <Section grow centerVertical>
            <Layout horizontal spacing="20" style={{backgroundColor: 'gray'}}>
              <Section grow>
                <Content><Text>2</Text></Content>
              </Section>
              <Section>
                <Layout spacing="10" style={{backgroundColor: 'gray'}}>
                  <Section>
                    <Content><Text>2</Text></Content>
                  </Section>
                  <Section>
                    <Content><Text>3</Text></Content>
                  </Section>
                </Layout>
              </Section>
            </Layout>
          </Section>
        </Layout>
      </Container>
    );
  }
}