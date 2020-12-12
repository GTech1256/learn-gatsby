import {Link} from "gatsby";
import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO"
import mockPage from "../images/page/2.jpg";

// styles
const pageStyles = {
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const imageStyles = {
  width: "100vw",
}

const MorePage = () => {
  return (
    <Layout>
      <Link to="/">
        <main style={pageStyles}>
          <SEO />
          <img src={mockPage} alt="Макет Сайта" style={imageStyles} />
        </main>
      </Link>
    </Layout>
  )
}

export default MorePage
