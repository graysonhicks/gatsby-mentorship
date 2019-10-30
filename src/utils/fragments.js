import { graphql } from "gatsby"

export const ThumbnailFragment = graphql`
  fragment ThumbnailFragment on File {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const LargeThumbnailFragment = graphql`
  fragment LargeThumbnailFragment on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
