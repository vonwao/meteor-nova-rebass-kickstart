
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Banner,
  Heading,
  Text,
  Button
} from 'rebass'

const Header = ({ toggle }) => (
  <Banner
    style={{
      minHeight: '75vh',
      paddingTop: 48,
      backgroundAttachment: 'fixed'
    }}
    backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'
    onClick={toggle('drawerOpen')}>
    <Heading size={1} big children='Rebass' />
    <Text children='Configurable example page' />
    <Box py={2}>
      <Button
        big
        onClick={toggle('drawerOpen')}
        children='Edit Configuration' />
    </Box>
  </Banner>
)

export default Header

