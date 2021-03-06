import React, {PureComponent, PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {getColorSchemes, isInverseScheme} from 'common/utils/styles'
import colorSchemes from 'common/constants/colorScheme'
import Header from '../Header'
import Container from '../Container'

const styles = {
  ...getColorSchemes(),
  section: {
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    minHeight: 400,
  },
  spaced: {
    padding: [40, 0],
  },
  nav: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    pointerEvents: 'none',
    clip: 'rect(auto, auto, auto, auto)',
  },
  content: {
    color: 'currentColor'
  }
}

class Section extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired,
    showHeader: PropTypes.bool,
    spaced: PropTypes.bool,
    contained: PropTypes.bool,
    colorScheme: PropTypes.oneOf(colorSchemes)
  }

  static defaultProps = {
    showHeader: true,
    spaced: true,
    contained: true,
    colorScheme: null
  }

  renderHeader = () => {
    const {classes, showHeader, colorScheme} = this.props

    return showHeader && (
      <div className={classes.nav}>
        <Header colorScheme={colorScheme} />
      </div>
    )
  }

  render() {
    const {children, classes, colorScheme, spaced, contained} = this.props
    const inverse = isInverseScheme(colorScheme)

    const childrenWithProps = React.Children.map(children, (child) => {
      const element = React.cloneElement(child, {inverse})
      if (contained) return <Container>{element}</Container>
      return element
    })

    return (
      <div className={cn(classes.section, classes[colorScheme], {[classes.spaced]: spaced})}>
        {this.renderHeader()}
        <div className={classes.content}>
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Section)
