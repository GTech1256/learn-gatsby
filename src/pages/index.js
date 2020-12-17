import {Link} from "gatsby";
import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO"
import mockPage from "../images/page/1.jpg";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Link to="/more/">
        <SEO />
        <img src={mockPage} alt="Макет Сайта" />
      </Link>
    </Layout>
  )
}

export default IndexPage
