import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {getColorSchemes, isInverseScheme} from 'common/utils/styles'
import colorSchemes from 'common/constants/colorScheme'
import Button from 'common/components/Button'
import GithubWidget from 'common/containers/GithubWidget'
import {repo} from 'common/config'
import theme from 'common/theme'
import {Logo} from 'common/components/icons'
import {mediaXs} from 'common/constants/media'
import Container from '../Container'
import {button} from '../../texts'

const styles = {
  ...getColorSchemes(),
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transform: 'translateZ(0)',
    backfaceVisibility: 'none',
    willChange: 'transform',
    pointerEvents: 'all',
    height: 80
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    height: '70%',
    width: 'auto'
  },
  actions: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  widget: {
    fontSize: 15,
  },
  button: {
    marginLeft: 20,
  },
  [mediaXs]: {
    button: {
      display: 'none',
    }
  }
}

const Header = ({classes, colorScheme}) => {
  const color = theme.text[colorScheme]
  const inverse = isInverseScheme(colorScheme)

  return (
    <div className={cn(classes.header, classes[colorScheme])}>
      <Container className={classes.container}>
        <Logo
          className={classes.logo}
          strokeColor={color}
          textColor={color}
        />
        <div className={classes.actions}>
          <GithubWidget className={classes.widget} repo={repo} inverse={inverse} />
          <div className={classes.button}>
            <Button href={'/docs/setup'} inverse={inverse}>
              {button.try}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  colorScheme: PropTypes.oneOf(colorSchemes).isRequired
}

export default injectSheet(styles)(Header)
