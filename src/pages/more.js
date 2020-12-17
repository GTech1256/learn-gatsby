import {Link} from "gatsby";
import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO"
import mockPage from "../images/page/2.jpg";

const MorePage = () => {
  return (
    <Layout>
      <Link to="/">
        <SEO />
        <img src={mockPage} alt="Макет Сайта" />
      </Link>
    </Layout>
  )
}

export default MorePage
