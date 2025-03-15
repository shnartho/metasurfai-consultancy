import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomeIndustries = dynamic(() => import('../components/home/industries'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/leaders'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))
const DynamicHomeOurBusiness = dynamic(() => import('../components/home/ourbusiness'))
const DynamicHomeRoadMap = dynamic(() => import('../components/home/roadmapsolving'))
const DynamicHomeTransformBusiness = dynamic(() => import('../components/home/transformbusiness'))
const DynamicHomeFAQ = dynamic(() => import('../components/home/frequentquestions'))
const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeIndustries />
      <DynamicHomeOurBusiness />
      <DynamicHomeFeature />
      <DynamicHomeOurMentors />
      <DynamicHomeRoadMap />
      <DynamicHomeTransformBusiness />
      <DynamicHomeTestimonial />
      <DynamicHomeFAQ />
      <DynamicHomeNewsLetter />
      {/* <DynamicHomeStayWithUs /> */}
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
