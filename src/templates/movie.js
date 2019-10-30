import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const MovieTemplate = ({ data }) => {
  const movie = data.movie
  return (
    <Layout>
      <div>
        <h1>{movie.title}</h1>
      </div>
    </Layout>
  )
}

export default MovieTemplate
export const query = graphql`
  query($slug: String!) {
    movie: moviesJson(fields: { slug: { eq: $slug } }) {
      title
    }
  }
`
