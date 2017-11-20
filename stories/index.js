import React from "react";
import { View, Text } from "react-native";
import { Layout as LayoutBaseWeb, Section as SectionBaseWeb } from "../web";
import {
  Layout as LayoutBaseNative,
  Section as SectionBaseNative
} from "../native";

export default function stories(platform, storiesOf) {
  const { Layout, Section, Text, blockContext } = resolvePlatform(platform);

  const Grow = props => (
    <Layout {...props} grow>
      <Section grow right center><Text>X</Text></Section>
      <Section>
        <Layout horizontal>
          <Section grow center><Text>X</Text></Section>
          <Section><Text>X</Text></Section>
          <Section><Text>X</Text></Section>
        </Layout>
      </Section>
      <Section><Text>X</Text></Section>
    </Layout>
  );

  storiesOf("Grow", module)
    .add("default", () => <Grow horizontal />)
    .add("top", () => <Grow horizontal top />)
    .add("center", () => <Grow horizontal center />)
    .add("bottom", () => <Grow horizontal bottom />)
    .add("vertical", () => <Grow />)
    .add("vertical center", () => <Grow center />)
    .add("vertical right", () => <Grow right />)

  const LayoutAlignment = props => (
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
  );

  storiesOf("Layout Alignment Horizontal - Block", module)
    .addDecorator(blockContext)
    .add("default", () => <LayoutAlignment data-attr="TEST" horizontal />)
    .add("top", () => <LayoutAlignment horizontal top />)
    .add("centerVertical", () => <LayoutAlignment horizontal centerVertical />)
    .add("bottom", () => <LayoutAlignment horizontal bottom />)
    .add("centerHorizontal", () => (
      <LayoutAlignment horizontal centerHorizontal />
    ))
    .add("center", () => <LayoutAlignment horizontal center />)
    .add("center bottom", () => <LayoutAlignment horizontal center bottom />)
    .add("right", () => <LayoutAlignment horizontal right />)
    .add("right center", () => <LayoutAlignment horizontal right center />)
    .add("right bottom", () => <LayoutAlignment horizontal right bottom />)
    .add("left", () => <LayoutAlignment horizontal left />)
    .add("left center", () => <LayoutAlignment horizontal left center />)
    .add("left bottom", () => <LayoutAlignment horizontal left bottom />);

  storiesOf("Layout Alignment Horizontal Flex", module)
    .add("default", () => <LayoutAlignment horizontal />)
    .add("top", () => <LayoutAlignment horizontal top />)
    .add("centerVertical", () => <LayoutAlignment horizontal centerVertical />)
    .add("bottom", () => <LayoutAlignment horizontal bottom />)
    .add("centerHorizontal", () => (
      <LayoutAlignment horizontal centerHorizontal />
    ))
    .add("center", () => <LayoutAlignment horizontal center />)
    .add("center bottom", () => <LayoutAlignment horizontal center bottom />)
    .add("right", () => <LayoutAlignment horizontal right />)
    .add("right center", () => <LayoutAlignment horizontal right center />)
    .add("right bottom", () => <LayoutAlignment horizontal right bottom />)
    .add("left", () => <LayoutAlignment horizontal left />)
    .add("left center", () => <LayoutAlignment horizontal left center />)
    .add("left bottom", () => <LayoutAlignment horizontal left bottom />);

  storiesOf("Layout Alignment Horizontal Flex Grow", module)
    .add("default", () => <LayoutAlignment grow horizontal />)
    .add("top", () => <LayoutAlignment grow horizontal top />)
    .add("centerVertical", () => (
      <LayoutAlignment grow horizontal centerVertical />
    ))
    .add("bottom", () => <LayoutAlignment grow horizontal bottom />)
    .add("centerHorizontal", () => (
      <LayoutAlignment grow horizontal centerHorizontal />
    ))
    .add("center", () => <LayoutAlignment grow horizontal center />)
    .add("center bottom", () => (
      <LayoutAlignment grow horizontal center bottom />
    ))
    .add("right", () => <LayoutAlignment grow horizontal right />)
    .add("right center", () => <LayoutAlignment grow horizontal right center />)
    .add("right bottom", () => <LayoutAlignment grow horizontal right bottom />)
    .add("left", () => <LayoutAlignment grow horizontal left />)
    .add("left center", () => <LayoutAlignment grow horizontal left center />)
    .add("left bottom", () => <LayoutAlignment grow horizontal left bottom />);

  storiesOf("Layout Alignment Vertical Block", module)
    .addDecorator(blockContext)
    .add("default", () => <LayoutAlignment />)
    .add("top", () => <LayoutAlignment top />)
    .add("centerVertical", () => <LayoutAlignment centerVertical />)
    .add("bottom", () => <LayoutAlignment bottom />)
    .add("centerHorizontal", () => <LayoutAlignment centerHorizontal />)
    .add("center", () => <LayoutAlignment center />)
    .add("center bottom", () => <LayoutAlignment center bottom />)
    .add("right", () => <LayoutAlignment right />)
    .add("right center", () => <LayoutAlignment right center />)
    .add("right bottom", () => <LayoutAlignment right bottom />)
    .add("left", () => <LayoutAlignment left />)
    .add("left center", () => <LayoutAlignment left center />)
    .add("left bottom", () => <LayoutAlignment left bottom />);

  storiesOf("Layout Alignment Vertical Flex", module)
    .add("default", () => <LayoutAlignment />)
    .add("top", () => <LayoutAlignment top />)
    .add("centerVertical", () => <LayoutAlignment centerVertical />)
    .add("bottom", () => <LayoutAlignment bottom />)
    .add("centerHorizontal", () => <LayoutAlignment centerHorizontal />)
    .add("center", () => <LayoutAlignment center />)
    .add("center bottom", () => <LayoutAlignment center bottom />)
    .add("right", () => <LayoutAlignment right />)
    .add("right center", () => <LayoutAlignment right center />)
    .add("right bottom", () => <LayoutAlignment right bottom />)
    .add("left", () => <LayoutAlignment left />)
    .add("left center", () => <LayoutAlignment left center />)
    .add("left bottom", () => <LayoutAlignment left bottom />);

  storiesOf("Layout Alignment Vertical Flex Grow", module)
    .add("default", () => <LayoutAlignment grow />)
    .add("top", () => <LayoutAlignment grow top />)
    .add("centerVertical", () => <LayoutAlignment grow centerVertical />)
    .add("bottom", () => <LayoutAlignment grow bottom />)
    .add("centerHorizontal", () => <LayoutAlignment grow centerHorizontal />)
    .add("center", () => <LayoutAlignment grow center />)
    .add("center bottom", () => <LayoutAlignment grow center bottom />)
    .add("right", () => <LayoutAlignment grow right />)
    .add("right center", () => <LayoutAlignment grow right center />)
    .add("right bottom", () => <LayoutAlignment grow right bottom />)
    .add("left", () => <LayoutAlignment grow left />)
    .add("left center", () => <LayoutAlignment grow left center />)
    .add("left bottom", () => <LayoutAlignment grow left bottom />);

  const SectionAlignment = props => (
    <Layout grow>
      <Section grow {...props}>
        <Text style={{ fontSize: 20 }}>X</Text>
      </Section>
    </Layout>
  );

  storiesOf("Section Alignment", module)
    .add("default", () => <SectionAlignment horizontal />)
    .add("top", () => <SectionAlignment horizontal top />)
    .add("centerVertical", () => <SectionAlignment horizontal centerVertical />)
    .add("bottom", () => <SectionAlignment horizontal bottom />)
    .add("centerHorizontal", () => (
      <SectionAlignment horizontal centerHorizontal />
    ))
    .add("center", () => <SectionAlignment horizontal center />)
    .add("center bottom", () => <SectionAlignment horizontal center bottom />)
    .add("right", () => <SectionAlignment horizontal right />)
    .add("right center", () => <SectionAlignment horizontal right center />)
    .add("right bottom", () => <SectionAlignment horizontal right bottom />)
    .add("left", () => <SectionAlignment horizontal left />)
    .add("left center", () => <SectionAlignment horizontal left center />)
    .add("left bottom", () => <SectionAlignment horizontal left bottom />);

  const Wrap = props => (
    <Layout horizontal spacing={platform === "web" ? "10px" : 10} {...props}>
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </Layout>
  );

  storiesOf("Wrap", module)
    .addDecorator(blockContext)
    .add("default", () => <Wrap />)
    .add("basis", () => <Wrap basis={"25%"} />)
    .add("basis wrapEven", () => <Wrap wrapEven basis={"25%"} />);

  storiesOf("Wrap Flex", module)
    .add("default", () => <Wrap grow />)
    .add("basis", () => (
      <Wrap grow basis={platform === "web" ? "100px" : 100} />
    ))
    .add("basis wrapEven", () => (
      <Wrap grow wrapEven basis={platform === "web" ? "100px" : 100} />
    ));

  const Reverse = props => (
    <Layout reverse spacing={platform === "web" ? "10px" : 10} {...props}>
      <Section><Text>1</Text></Section>
      <Section><Text>2</Text></Section>
      <Section><Text>3</Text></Section>
    </Layout>
  );

  storiesOf("Reverse", module)
    .add("reverse column", () => <Reverse grow />)
    .add("reverse column bottom", () => <Reverse grow bottom />)
    .add("reverse row", () => <Reverse grow horizontal />)
    .add("reverse row right", () => <Reverse grow horizontal right />)

  return storiesOf;
}

const blockContextWeb = story => (
  <div style={{ display: "block", width: "100%" }}>{story()}</div>
);
const TextWeb = props => <span {...props} />;

const LayoutWeb = props => (
  <LayoutBaseWeb
    spacing="10px"
    {...props}
    style={{
      padding: "10px",
      background: "hsla(200, 71%, 73%, 1)",
      ...props.style
    }}
  />
);
const SectionWeb = props => (
  <SectionBaseWeb
    {...props}
    style={{
      padding: "15px",
      background: "hsla(212, 96%, 47%, 1)",
      ...props.style
    }}
  />
);

const blockContextNative = story => (
  <View style={{ alignContent: "flex-start" }}>{story()}</View>
);
const TextNative = props => <Text {...props} />;

const LayoutNative = props => (
  <LayoutBaseNative
    spacing="10"
    {...props}
    style={{
      padding: 10,
      backgroundColor: "hsla(200, 71%, 73%, 1)",
      ...props.style
    }}
  />
);

const SectionNative = props => (
  <SectionBaseNative
    {...props}
    style={{
      padding: 15,
      backgroundColor: "hsla(212, 96%, 47%, 1)",
      ...props.style
    }}
  />
);

function resolvePlatform(platform) {
  if (platform === "web") {
    return {
      Layout: LayoutWeb,
      Section: SectionWeb,
      Text: TextWeb,
      blockContext: blockContextWeb
    };
  }
  if (platform === "native") {
    return {
      Layout: LayoutNative,
      Section: SectionNative,
      Text: TextNative,
      blockContext: blockContextNative
    };
  }
}
