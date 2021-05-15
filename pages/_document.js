import Document, { Html, Head, Main, NextScript, Title } from "next/document"

class myDocument extends Document {
    render () {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta name="description" content="Unicorn é um martplace de maquiagem e produtos de beleza"/>
                    <meta name="heywords" content="martplace, loja, maquiagem, barata, make, perfume"   /> 
                    <script src="https://kit.fontawesome.com/6cd47a7e07.js" crossorigin="anonymous"></script>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100;1,300&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        
        )

    }

}

export default myDocument