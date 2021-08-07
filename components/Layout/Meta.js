import Head from "next/head";
export default function Meta() {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
      <meta name='author' content='Jane Muthoni Muchiri' />
      <meta
        name='Keywords'
        content='front end developer, self taught developer, web developer, Html and CSS, portfolio, javascript, react'
      />
      <meta
        name='description'
        content='A login and sign up template build with Next JS, Firebase JS and uses Styled components for styling. The user sigin detailes are stored in firebase for future access.'
      />
      <meta name='theme-color' content='#161616' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />

      <link rel='icon' href='/favicon.ico' />

      <title>Next Js Login template</title>
    </Head>
  );
}
