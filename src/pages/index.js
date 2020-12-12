import {Link} from "gatsby";
import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO"
import mockPage from "../images/page/1.jpg";

// styles
const pageStyles = {
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const imageStyles = {
  width: "100vw",
}


// markup
const IndexPage = () => {
  return (
    <Layout>
      <Link to="/more">
        <main style={pageStyles}>
          <SEO />
          <img src={mockPage} alt="Макет Сайта" style={imageStyles} />
        </main>
      </Link>
    </Layout>
  )
}

export default IndexPage
