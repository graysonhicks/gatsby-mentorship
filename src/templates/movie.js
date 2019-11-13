import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const GET_PLANETS = gql`
  {
    allPlanets {
      edges {
        node {
          name
        }
      }
    }
  }
`

const MovieTemplate = ({ data: movie }) => {
  // useQuery hook returns predefined loading, error, and data variables.
  // Here we rename data to 'planets' for readability.
  const { loading, error, data: planets } = useQuery(GET_PLANETS)

  return (
    <Layout>
      <div>
        <h1>{movie.movie.title}</h1>
        <Img fluid={movie.movie.image.childImageSharp.fluid} />
        {/* The data below here is only generated at runtime, so will not 
        be created statically during the build.
        */}
        <ul>
          {/* If loading or error states, show those */}
          {loading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          {/* Otherwise, if planets exist, show them. */}
          {planets &&
            planets.allPlanets.edges.map(({ node }) => (
              <li key={node.name}>{node.name}</li>
            ))}
        </ul>
      </div>
    </Layout>
  )
}

export default MovieTemplate
export const query = graphql`
  query($slug: String!) {
    movie: moviesJson(fields: { slug: { eq: $slug } }) {
      title
      image {
        ...ThumbnailFragment
      }
    }
  }
`
