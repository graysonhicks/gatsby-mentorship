import React from "react"
import { graphql, Link } from "gatsby"

import { Grommet, Box, Heading, Text, Paragraph, Anchor } from "grommet"
import { grommet } from "grommet/themes"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Grommet theme={grommet}>
      <Layout>
        <Box direction="row" wrap={true}>
          {data.allMoviesJson.movies.map(({ movie }) => (
            <Box
              elevation="medium"
              round="medium"
              width="33%"
              overflow="hidden"
              style={{ position: "relative" }}
            >
              <Box height="small" margin={{ bottom: "small" }}>
                <Img fluid={movie.image.childImageSharp.fluid} />
              </Box>
              <Box pad="medium">
                <Heading level={2} size="small">
                  {movie.title}
                </Heading>
                <Text>
                  <Text weight="bold">ID: </Text>
                  {movie.id}
                </Text>
                <Text>
                  <Text weight="bold">Year: </Text>
                  {movie.year}
                </Text>
                <Text weight="bold">Description: </Text>
                <Paragraph>{movie.description}</Paragraph>

                <Anchor
                  as={Link}
                  to={movie.fields.slug}
                  style={{ position: "absolute", bottom: "15px" }}
                >
                  Go to Page
                </Anchor>
              </Box>
            </Box>
          ))}
        </Box>
      </Layout>
    </Grommet>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMoviesJson {
      movies: edges {
        movie: node {
          title
          year
          description
          id
          fields {
            slug
          }
          image {
            ...ThumbnailFragment
          }
        }
      }
    }
  }
`
