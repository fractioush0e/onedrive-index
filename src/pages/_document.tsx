import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Rehosted SH1mmer" />
          <meta property="og:description" content="SH1mmer: Shims" />
          <meta property="og:url" content="https://dl.osu.bio" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://osu.bio/img/sh1mmer-128.png" />
          <meta property="og:image:alt" content="SH1mmer" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:site_name" content="osu.bio" />
          <link rel="icon" href="/favicon.ico" />  
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
