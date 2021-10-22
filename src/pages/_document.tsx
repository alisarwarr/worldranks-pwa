//NEXTJS-DOCUMENT
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* PWA */}
                    <link rel="manifest" href="/manifest.json"/>
                    {/* IOS & Safari support */}
                    <link rel="apple-touch-icon" href="/img/icon200x200.png"/>
                    <link rel="apple-touch-icon" href="/img/icon400x400.png"/>
                    <link rel="apple-touch-icon" href="/img/icon512x512.png"/>
                    <meta name="apple-mobile-web-app-status-bar" content="#FFFFFF"/>
                    <meta name="theme-color" content="#FFFFFF"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;