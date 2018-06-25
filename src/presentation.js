import React, { Component } from 'react';

import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Link,
  Image,
  Code,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import demoDevelopmentSpeed from './assets/GitHub-commit-history.png';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022', // Black
    tertiary: '#03A9FC', // Blue
    quarternary: '#CECECE', // Gray
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            GraphQL in 2018
          </Heading>
          <Text textColor="tertiary" size={1}>
            Petr Čaněk
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="secondary">
            GraphQL is
          </Heading>
          <Appear>
            <Heading size={3} textColor="tertiary">
              Alternative to REST
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} textColor="secondary">
            DEMO
          </Heading>
          <Link
            href="https://eu1.prisma.sh/petr-canek-398ab8/interviewme-test/dev"
            target="_blank"
          >
            Playground
          </Link>
        </Slide>
        <Slide transition={['fade']}>
          <Image src={demoDevelopmentSpeed} />
          <List>
            <Appear>
              <ListItem size={30}>~30 minutes of demo development</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>61 lines of code written by hand</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                3 commands to set-up & build everything
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                <Code>{`git clone <repo> `}</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                <Code>{`prisma init <name>`}</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                <Code>{`prisma deploy`}</Code>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Properties of GraphQL */}
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            Properties of GraphQL
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Strongly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>You get only what you asked for</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Decouples server and client app</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Open-source with big community</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Field level errors</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Subscriptions - real life data</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Production ready</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Great number of tools</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Tools available*/}
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            GraphQL tools
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Relay / Apollo client</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Apollo server & graphql-yoga</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Prisma</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>GraphQL Faker</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>GraphiQL & GraphQL playground</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>GraphQL bindings & schema stitching</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Editor plugins</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                <Link href="https://github.com/chentsulin/awesome-graphql">
                  GitHub - awesome GraphQL
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Benefits for developer*/}
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            Benefits for developers
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Easier API server development</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Easier API consumer app development</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Automatic documentation</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                API introspection and self-discovery
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Enables rapid prototyping</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Tools!</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Benefits for client*/}
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Benefits for clients
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Faster development</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Smaller network requets</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Less network requets</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Less code -> less bugs</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Happy developers</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Disadvantages of GraphQL
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Bigger complexity for juniors ?</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>More work beforehand</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Recursive queries</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>No file handling support</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>No built-in versioning</ListItem>
            </Appear>
          </List>
        </Slide>
        {/*What is next*/}
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            What is next?
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Learn, build, test</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Let's build something!</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                <Link href="http://hakkastack.domain.local/courses/detail/57">
                  Hands-on
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Q&A
          </Heading>
          <br />
          <Link href="http://cn-graphql-in-2018.surge.sh">
            http://cn-graphql-in-2018.surge.sh
          </Link>
          <br />
          <Link
            href="https://github.com/CorwinCZ/graphql-cn-group-talk"
            taget="_blank"
          >
            https://github.com/CorwinCZ/graphql-cn-group-talk
          </Link>
        </Slide>
      </Deck>
    );
  }
}
