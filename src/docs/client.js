import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {useBasename} from 'history'
import {jss, ThemeProvider, JssProvider} from 'common/utils/jss'
import theme from 'common/theme'
import 'whatwg-fetch'
import routes from './routes'

const history = useBasename(() => browserHistory)({
  basename: process.browser ? '/docs' : ''
})

render(
  <ThemeProvider theme={theme}>
    <JssProvider jss={jss}>
      <Router history={history} routes={routes} />
    </JssProvider>
  </ThemeProvider>,
  document.body
)

const style = document.getElementById('critical-css')
style.parentNode.removeChild(style)
