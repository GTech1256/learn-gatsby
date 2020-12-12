import * as React from "react"
import {Helmet} from "react-helmet"

const FallbackSeo = {
    title: 'Island',
    description: 'Только посмотрите на эти прекрасные статьи!',
    image: '../images/page/1.jpg'
}

const SEO = ({
    title,
    description = FallbackSeo.description,
    image = FallbackSeo.image,
}) => (
    <>
        <Helmet>
            {/* General tags */}
            <meta charSet="utf-8" />
            <title>{title ? `${FallbackSeo.title} | ${title}` : FallbackSeo.title}</title>
        </Helmet>
        {title && (
            <Helmet>
                <meta name="image" content={image} />
                <meta property="og:title" content={title} />
                <meta name="twitter:title" content={title} />
            </Helmet>
        )}
        {description && (
            <Helmet>
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta name="twitter:description" content={description} />
            </Helmet>
        )}
        {image && (
            <Helmet>
                <meta name="image" content={image} />
                <meta property="og:image" content={image} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        )}
        {/* <link rel="canonical" href={url} /> */}

        {/* OpenGraph tags */}
        {/* <meta property="og:url" content={url} /> */}
        {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

        {/* Twitter Card tags */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
    </>
)

export default SEO;