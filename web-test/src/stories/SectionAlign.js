import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout, Section, blockContext } from '../setup'
import '../index.css'

// CHECK THESE PROPS
// center?: boolean
// centerVertical?: boolean
// centerHorizontal?: boolean
// top?: boolean
// right?: boolean
// bottom?: boolean
// left?: boolean

const SectionAlignment = (props) => 
  <Layout grow>
    <Section grow {...props} >
      <Layout>
        <Section />
      </Layout>
    </Section>
  </Layout>

storiesOf('Section Alignment', module)
  .add('default',          () => <SectionAlignment horizontal />)
  .add('top',              () => <SectionAlignment horizontal top />)
  .add('centerVertical',   () => <SectionAlignment horizontal centerVertical />)
  .add('bottom',           () => <SectionAlignment horizontal bottom />)
  .add('centerHorizontal', () => <SectionAlignment horizontal centerHorizontal />)
  .add('center',           () => <SectionAlignment horizontal center />)
  .add('center bottom',    () => <SectionAlignment horizontal center bottom/>)
  .add('right',            () => <SectionAlignment horizontal right />)
  .add('right center',     () => <SectionAlignment horizontal right center />)
  .add('right bottom',     () => <SectionAlignment horizontal right bottom />)
  .add('left',             () => <SectionAlignment horizontal left />)
  .add('left center',      () => <SectionAlignment horizontal left center />)
  .add('left bottom',      () => <SectionAlignment horizontal left bottom />)