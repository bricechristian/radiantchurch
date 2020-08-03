import React from "react"
import { graphql } from "gatsby"
import usePreviewData from "../utils/usePreviewData"

export const PageTemplate = ({ data }) => {
  //   const liveData = usePreviewData(data)

  return (
    <>
      <h1>Preview</h1>
    </>
  )
}

// export const query = graphql`
//   query($id: String!) {
//     prismicPage(id: { eq: $id }) {
//       data {
//         title
//         body {
//           html
//         }
//       }
//     }
//   }
// `
