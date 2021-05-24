import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(MyApp)


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    }
  } 
}