import React from 'react';
import { View } from 'react-native';
import { Layout as LayoutBaseWeb, Section as SectionBaseWeb } from '../web';
import { Layout as LayoutBaseNative, Section as SectionBaseNative } from '../native';

const blockContextWeb = story => <div style={{ display: 'block', width: '100%' }}>{story()}</div>;

const LayoutWeb = (props) => (
  <LayoutBaseWeb
    spacing='10px'
    style={{
      padding: '10px',
      background: 'hsla(200, 71%, 73%, 1)',
    }}
    {...props }
  />
)
const SectionWeb = (props) =>
  <SectionBaseWeb
    style={{
      padding: '15px',
      background: 'hsla(212, 96%, 47%, 1)',
    }}
    {...props }
  />

const blockContextNative = story => <View>{story()}</View>

const LayoutNative = (props) =>
  <LayoutBaseNative
    spacing='10'
    style={{
      padding: 10,
      backgroundColor: 'hsla(200, 71%, 73%, 1)',
    }}
    {...props }
  />

const SectionNative = (props) =>
  <SectionBaseNative
    style={{
      padding: 15,
      backgroundColor: 'hsla(212, 96%, 47%, 1)',
    }}
    {...props }
  />

function resolvePlatform(platform) {
  if (platform === 'web') {
    return {
      Layout: LayoutWeb,
      Section: SectionWeb,
      blockContext: blockContextWeb
    }
  }
  if (platform === 'native') {
    return {
      Layout: LayoutNative,
      Section: SectionNative,
      blockContext: blockContextNative
    }
  }
}

export default function stories(platform, storiesOf) {
  const { Layout, Section, blockContext } = resolvePlatform(platform)
  const LayoutAlignment = (props) =>
    <Layout {...props}>
      <Section />
      <Section>
        <Layout horizontal>
          <Section />
          <Section />
          <Section />
        </Layout>
      </Section>
      <Section />
      <Section />
    </Layout>

  storiesOf('Layout Alignment Horizontal - Block', module)
    .addDecorator(blockContext)
    .add('default', () => <LayoutAlignment data-attr='TEST' horizontal />)
    .add('top', () => <LayoutAlignment horizontal top />)
    .add('centerVertical', () => <LayoutAlignment horizontal centerVertical />)
    .add('bottom', () => <LayoutAlignment horizontal bottom />)
    .add('centerHorizontal', () => <LayoutAlignment horizontal centerHorizontal />)
    .add('center', () => <LayoutAlignment horizontal center />)
    .add('center bottom', () => <LayoutAlignment horizontal center bottom />)
    .add('right', () => <LayoutAlignment horizontal right />)
    .add('right center', () => <LayoutAlignment horizontal right center />)
    .add('right bottom', () => <LayoutAlignment horizontal right bottom />)
    .add('left', () => <LayoutAlignment horizontal left />)
    .add('left center', () => <LayoutAlignment horizontal left center />)
    .add('left bottom', () => <LayoutAlignment horizontal left bottom />)

  storiesOf('Layout Alignment Horizontal Flex', module)
    .add('default', () => <LayoutAlignment horizontal />)
    .add('top', () => <LayoutAlignment horizontal top />)
    .add('centerVertical', () => <LayoutAlignment horizontal centerVertical />)
    .add('bottom', () => <LayoutAlignment horizontal bottom />)
    .add('centerHorizontal', () => <LayoutAlignment horizontal centerHorizontal />)
    .add('center', () => <LayoutAlignment horizontal center />)
    .add('center bottom', () => <LayoutAlignment horizontal center bottom />)
    .add('right', () => <LayoutAlignment horizontal right />)
    .add('right center', () => <LayoutAlignment horizontal right center />)
    .add('right bottom', () => <LayoutAlignment horizontal right bottom />)
    .add('left', () => <LayoutAlignment horizontal left />)
    .add('left center', () => <LayoutAlignment horizontal left center />)
    .add('left bottom', () => <LayoutAlignment horizontal left bottom />)

  storiesOf('Layout Alignment Horizontal Flex Grow', module)
    .add('default', () => <LayoutAlignment grow horizontal />)
    .add('top', () => <LayoutAlignment grow horizontal top />)
    .add('centerVertical', () => <LayoutAlignment grow horizontal centerVertical />)
    .add('bottom', () => <LayoutAlignment grow horizontal bottom />)
    .add('centerHorizontal', () => <LayoutAlignment grow horizontal centerHorizontal />)
    .add('center', () => <LayoutAlignment grow horizontal center />)
    .add('center bottom', () => <LayoutAlignment grow horizontal center bottom />)
    .add('right', () => <LayoutAlignment grow horizontal right />)
    .add('right center', () => <LayoutAlignment grow horizontal right center />)
    .add('right bottom', () => <LayoutAlignment grow horizontal right bottom />)
    .add('left', () => <LayoutAlignment grow horizontal left />)
    .add('left center', () => <LayoutAlignment grow horizontal left center />)
    .add('left bottom', () => <LayoutAlignment grow horizontal left bottom />)

  storiesOf('Layout Alignment Vertical Block', module)
    .addDecorator(blockContext)
    .add('default', () => <LayoutAlignment />)
    .add('top', () => <LayoutAlignment top />)
    .add('centerVertical', () => <LayoutAlignment centerVertical />)
    .add('bottom', () => <LayoutAlignment bottom />)
    .add('centerHorizontal', () => <LayoutAlignment centerHorizontal />)
    .add('center', () => <LayoutAlignment center />)
    .add('center bottom', () => <LayoutAlignment center bottom />)
    .add('right', () => <LayoutAlignment right />)
    .add('right center', () => <LayoutAlignment right center />)
    .add('right bottom', () => <LayoutAlignment right bottom />)
    .add('left', () => <LayoutAlignment left />)
    .add('left center', () => <LayoutAlignment left center />)
    .add('left bottom', () => <LayoutAlignment left bottom />)

  storiesOf('Layout Alignment Vertical Flex', module)
    .add('default', () => <LayoutAlignment />)
    .add('top', () => <LayoutAlignment top />)
    .add('centerVertical', () => <LayoutAlignment centerVertical />)
    .add('bottom', () => <LayoutAlignment bottom />)
    .add('centerHorizontal', () => <LayoutAlignment centerHorizontal />)
    .add('center', () => <LayoutAlignment center />)
    .add('center bottom', () => <LayoutAlignment center bottom />)
    .add('right', () => <LayoutAlignment right />)
    .add('right center', () => <LayoutAlignment right center />)
    .add('right bottom', () => <LayoutAlignment right bottom />)
    .add('left', () => <LayoutAlignment left />)
    .add('left center', () => <LayoutAlignment left center />)
    .add('left bottom', () => <LayoutAlignment left bottom />)

  storiesOf('Layout Alignment Vertical Flex Grow', module)
    .add('default', () => <LayoutAlignment grow />)
    .add('top', () => <LayoutAlignment grow top />)
    .add('centerVertical', () => <LayoutAlignment grow centerVertical />)
    .add('bottom', () => <LayoutAlignment grow bottom />)
    .add('centerHorizontal', () => <LayoutAlignment grow centerHorizontal />)
    .add('center', () => <LayoutAlignment grow center />)
    .add('center bottom', () => <LayoutAlignment grow center bottom />)
    .add('right', () => <LayoutAlignment grow right />)
    .add('right center', () => <LayoutAlignment grow right center />)
    .add('right bottom', () => <LayoutAlignment grow right bottom />)
    .add('left', () => <LayoutAlignment grow left />)
    .add('left center', () => <LayoutAlignment grow left center />)
    .add('left bottom', () => <LayoutAlignment grow left bottom />)

  const SectionAlignment = (props) =>
    <Layout grow>
      <Section grow {...props} >
        <Layout>
          <Section />
        </Layout>
      </Section>
    </Layout>

  storiesOf('Section Alignment', module)
    .add('default', () => <SectionAlignment horizontal />)
    .add('top', () => <SectionAlignment horizontal top />)
    .add('centerVertical', () => <SectionAlignment horizontal centerVertical />)
    .add('bottom', () => <SectionAlignment horizontal bottom />)
    .add('centerHorizontal', () => <SectionAlignment horizontal centerHorizontal />)
    .add('center', () => <SectionAlignment horizontal center />)
    .add('center bottom', () => <SectionAlignment horizontal center bottom />)
    .add('right', () => <SectionAlignment horizontal right />)
    .add('right center', () => <SectionAlignment horizontal right center />)
    .add('right bottom', () => <SectionAlignment horizontal right bottom />)
    .add('left', () => <SectionAlignment horizontal left />)
    .add('left center', () => <SectionAlignment horizontal left center />)
    .add('left bottom', () => <SectionAlignment horizontal left bottom />)

  return storiesOf
}