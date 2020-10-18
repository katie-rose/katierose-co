import React from 'react'
import get from 'lodash/get'

import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render() {
    //const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <h3>katierose.co</h3>
        <Bio />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
