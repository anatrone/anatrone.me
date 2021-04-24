import Head from 'next/head';

export default function Metadata( {title} ) {
    return (
      <>
        <Head>
          <meta property="og:charSet" content="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>{title}</title>
          <meta property="og:url" content="" />
          <meta property="og:title" content={title} key="title" />
          <meta property="og:site_name" content={title} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:description" content="portfólio/playground de gabriel anatrone" />
          <meta property="og:image" content="" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Press+Start+2P&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>  
    )
}