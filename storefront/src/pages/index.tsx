import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SupportOSS from "@modules/home/components/support-oss"
import FooterCTA from "@modules/layout/components/footer-cta"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Home" />
      <Hero />
      <FeaturedProducts />
      <SupportOSS />
      <FooterCTA />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
