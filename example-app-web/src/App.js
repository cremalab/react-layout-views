import React from 'react';
import './App.css';
import { Layout, Section } from 'react-layout-views'

const Container = (props) => <div style={{backgroundColor: 'whitesmoke', padding: 22, flex: 1, display: 'flex'}} {...props} />
const Content = () => <div style={{backgroundColor: 'orange', padding: 10}} />

const Profile = () =>
  <Layout horizontal spacing="10px">
    <Section>
      <Content />
    </Section>
    <Section grow>
      <Content />
    </Section>
  </Layout>

const profiles = [0,1,2,3,4,5]

class App extends React.Component {
  render() {
    return (
      <Container>
        <Layout spacing="20px" grow>
          <Section>
            <Content />
          </Section>
          <Section grow bottom>
            <Layout horizontal spacing='40px' grow>
              <Section grow bottom>
                <Layout spacing='20px'>
                  {profiles.map(x => <Section key={x}><Profile /></Section>)}
                </Layout>
              </Section>
              <Section grow centerVertical>
                <Layout spacing='20px'>
                  {profiles.map(x => <Section key={x}><Profile /></Section>)}
                </Layout>
              </Section>
              <Section grow>
                <Layout spacing='20px'>
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
export default App;
