import {transition} from 'common/utils/styles'

export default theme => ({
  highlightedMarkdown: {
    '@global': {
      'b, strong': {
        fontWeight: 600
      },

      // Link styles
      a: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: theme.text.light,
        '&:hover': {
          isolate: false,
          textDecoration: 'none',
        },
      },

      // Paragraphs
      p: {
        marginBottom: 16
      },

      // Headings
      'h1, h2, h3, h4': {
        color: theme.text.light,
        margin: [24, 0],
        fontWeight: 600,
        lineHeight: 1.25,
        '&:first-child': {
          isolate: false,
          marginTop: 0
        },
      },
      h1: {
        fontSize: 32,
      },
      h2: {
        fontSize: 24,
      },
      h3: {
        fontSize: 20,
        marginBottom: 16,
      },
      h4: {
        fontSize: 18,
      },

      // Lists
      'ul, ol': {
        margin: [0, 0, 16, 0],
        padding: [0, 0, 0, 32]
      },
      'ul > li': {
        listStyle: 'circle',
      },
      'ol > li': {
        listStyle: 'decimal'
      },
      'ol ul': {
        margin: 0
      },
      'lo > p': {
        marginTop: 16,
      },
      'li + li': {
        marginTop: 4,
      },

      // Divider
      hr: {
        margin: [16, 0],
        border: 'none',
        background: theme.common.border,
        height: 1,
        display: 'block',
      },

      // Tables
      table: {
        borderCollapse: 'collapse',
        marginBottom: 16,
      },
      'th, td': {
        padding: [3, 12],
        borderBottom: [1, 'solid', theme.common.border],
        borderLeft: [1, 'solid', theme.common.border],
        '&:first-child': {
          isolate: false,
          borderLeft: 'none'
        },
      },
      th: {
        fontWeight: 'bold',
        background: 'transparent',
      },

      pre: {
        margin: {
          top: 0,
          bottom: 16,
        },
        padding: 16,
      },
      'code[class*="language-"], pre': {
        font: {
          size: 14,
          family: theme.code.fontFamily,
        },
        borderRadius: 0,
        background: theme.code.background,
        isolate: false,
      }
    }
  },
  heading: {
    position: 'relative',
    '&:hover $headingAnchor': {
      isolate: false,
      opacity: 1
    }
  },
  headingAnchor: {
    transition: transition(),
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 15,
    right: '100%',
    margin: {
      right: 5,
      top: 0
    },
    opacity: 0
  }
})
