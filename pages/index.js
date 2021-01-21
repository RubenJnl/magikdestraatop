import Head from 'next/head'
import Answer from '../components/answer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mag ik de straat op? Is de avondklok al in gegaan? - magikdestraatop.nl</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-284RR75W7C"></script>
        <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-284RR75W7C');`
            }}
          />
        
      </Head>

      <main>
        <h1 className="title">
          Mag ik de straat op?
        </h1>
        <Answer />
      </main>

      <footer>
        <a
          href="https://kwartoverbier.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          kwartoverbier.nl
        </a>
        <a
          href="https://ishetborreltijd.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ishetborreltijd.nl
        </a>

        <p>photo by: Francois Hoang - unsplash</p>
         
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: url(/francois-hoang-xxZCfAnMUrM-unsplash-small.jpg) no-repeat center center;
          background-position: center center;
        }
        
        @media all and (min-width: 500px), (min-height: 500px) {
          .container {
            background-image: url(/francois-hoang-xxZCfAnMUrM-unsplash-medium.jpg);
          }
        }

        @media all and (min-width: 1500px) {
          .container {
            background-image: url(/francois-hoang-xxZCfAnMUrM-unsplash.jpg);
          }
        }
        
        @media all and (min-width: 2000px) {  
          .container {
            background-image: url(/francois-hoang-xxZCfAnMUrM-unsplash-original.jpg);
          }
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          max-width: 690px;
          padding: 15px 0;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
        }

        footer p {
          width: 100%;
          font-size: 60%;
          text-align: center;
          justify-content: center;
          padding: 0;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          color: rgb(150, 140, 150);
          margin: 0;
          line-height: 1.15;
          font-size: 3em;
          font-size: clamp(2em, 10em, 10vw);
        }

        .answer {
          display: block;
        }

        .answer {
          color: rgb(100, 200, 20);
          font-size: 3em;
          font-size: clamp(2em, 10em, 10vw);
          margin-top: .25em;
        }

        .answer.negative {
          color: rgb(170, 40, 10);
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, Helvetica, Helvetica Neue, Arial, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
