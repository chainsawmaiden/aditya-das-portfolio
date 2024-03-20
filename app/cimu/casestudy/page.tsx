import loadingAnimation from '@/public/images/cimu/casestudy/loading-animation.gif'

import iconAlarm from '@/public/images/cimu/casestudy/icon-alarm.svg'
import iconCart from '@/public/images/cimu/casestudy/icon-cart.svg'
import iconPhone from '@/public/images/cimu/casestudy/icon-phone.svg'
import iconRefresh from '@/public/images/cimu/casestudy/icon-refresh.svg'
import iconSecurity from '@/public/images/cimu/casestudy/icon-security.svg'

import tailorGreg from '@/public/images/cimu/casestudy/tailor-greg.png'
import tailorPicadilly from '@/public/images/cimu/casestudy/tailor-picadilly.png'

import audit from '@/public/images/cimu/casestudy/audit.png'

import breakdownOrders from '@/public/images/cimu/casestudy/breakdown-orders.png'
import breakdownOrdersPopup from '@/public/images/cimu/casestudy/breakdown-orders-popup.png'
import breakdownAppointments from '@/public/images/cimu/casestudy/breakdown-appointments.png'
import createAccount from '@/public/images/cimu/casestudy/create-account.gif'

import scheduleMeeting from '@/public/images/cimu/casestudy/schedule-meeting.gif'
import registerShopNew from '@/public/images/cimu/casestudy/register-shop-new.gif'
import hoursFinal from '@/public/images/cimu/casestudy/hours-final.gif' 

import onboardingFlow from '@/public/images/cimu/casestudy/onboarding-flow.png'

import systemColors from '@/public/images/cimu/casestudy/system-colors.png'
import systemMargins from '@/public/images/cimu/casestudy/system-margins.png'
import systemComponents from '@/public/images/cimu/casestudy/system-components.png'

import orderV1 from '@/public/images/cimu/casestudy/order-v1.png'
import orderV2 from '@/public/images/cimu/casestudy/order-v2.png'
import orderV3 from '@/public/images/cimu/casestudy/order-v3.png'
import orderFinal from '@/public/images/cimu/casestudy/order-final.png'

import hours1 from '@/public/images/cimu/casestudy/hours-fail-1.gif'
import hours2 from '@/public/images/cimu/casestudy/hours-fail-2.gif'

import threeScreens from '@/public/images/cimu/casestudy/three-screens.png'

import React from 'react'

import ArticlePage from '@/components/articlePage'
import ArticleTitle from '@/components/articleTitle'
import ArticleBody from '@/components/articleBody'
import ArticleHeader from '@/components/articleHeader'
import ColumnLayout from '@/components/columnLayout'
import IconBox from '@/components/iconBox'
import ArticleText from '@/components/articleText'
import ArticleTextSection from '@/components/articleTextSection'
import DividerLight from '@/components/dividerLight'
import Img from '@/components/img'
import ArticleImageCaption from '@/components/articleImageCaption'
import ImageCaption from '@/components/imageCaption'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aditya Das | Cimu",
};

export default function CimuCaseStudy() {
  return (
    <ArticlePage src={loadingAnimation}>
      <ArticleTitle 
        title='Cimu'
        team={['Aditya Das', 'Alana Liu', 'Kaci Xie']}
        timeline={['Nov 2023 - Dec 2023', '(4 weeks)']}
        tools={['Figma']}
        disciplines={['Product Design', 'User Experience', 'Design System']}>
      Returns cost clothing companies millions of dollars and oftentimes results in waste. Cimu aims to help these retailers improve sales and reduce waste by connecting shoppers to local tailors, empowering small tailoring businesses along the way. I was responsible for building a design system and creating an effective onboarding process for Cimu’s tailor-facing app, which would allow tailor shops to manage incoming appointments scheduled through Cimu. 
      </ArticleTitle>
      <ArticleBody>
        <ArticleHeader subhead='The Problem'
        description="Let's take a quick look at Cimu's pilot method for connecting customers to tailors:">Scheduling appointments with tailors is time-consuming and inefficient.</ArticleHeader>
        <ColumnLayout
          cols='grid-cols-3 md:grid-cols-5' text>
            <IconBox src={iconCart} caption='Cimu receives tailoring request from client' />
            <IconBox src={iconAlarm} caption='Cimu gets available appointment times from customer' />
            <IconBox src={iconPhone} caption='Cimu manually calls tailors and ask for availabilities' />
            <IconBox src={iconSecurity} caption='Cimu sets and confirms appointment with customer via email' />
            <IconBox src={iconRefresh} caption='Rinse and repeat for every order' />
        </ColumnLayout>
        <ArticleTextSection>
          <ArticleText>This method was inefficient and revealed many of the pain points that both customers and tailors face when booking appointments with tailors:</ArticleText>
          <ArticleText subheader='Time-consuming' horizontal>Calling to book appointments is very tedious on both ends, especially if tailors are not immediately available to pick up the phone.</ArticleText>
          <ArticleText subheader='No preparation' horizontal>Since customers would only be able to tell tailors about their clothing item in person, tailors would be unprepared for the alteration, adding additional wait times for customers before their clothes are ready for pickup.</ArticleText>
          <ArticleText subheader='Hard to reschedule' horizontal>One of the biggest issues that Cimu ran into during their pilot was the inefficiencies in rescheduling appointments. Every rescheduling meant repeating every step in the order process again and again.</ArticleText>
          <ArticleText subheader='Lost in translation' horizontal>Tailors may not be able to confirm the correct customer information over the phone.</ArticleText>
        </ArticleTextSection>

        <ArticleText subheader='The anatomy of a Cimu order'>Each order that Cimu manages would consist of two meetings: an initial appointment with the customer, during which the tailor can receive the clothing item as well as the customer's measurements, and a quick pickup appointment after the alteration is complete where the customer could pop in anytime during the day to pick up their fully altered clothing.</ArticleText>
        
        <DividerLight text />

        <ArticleHeader
          subhead = 'Process and Research'
          description='To get a better sense of how to ensure this app is accessible for our users, I visited local tailor shops in the New Haven area and met with the owners.'
        >
          Understanding tailors
        </ArticleHeader>
        <ColumnLayout text cols='md:grid-cols-2'>
          <Img src={tailorGreg} square />
          <Img src={tailorPicadilly} square />
        </ColumnLayout>

        <ArticleTextSection>
          <ArticleText subheader='Understanding our user base'>
            <span className='font-bold underline'>Needs</span>
            <ul className='list-disc list-inside'>
              <li>Detailed information about the order and alteration</li>
              <li>Flexible and asynchronous schedule</li>
              <li>An app that can manage flux in a tailor's appointment schedule (especially if they continue to receive non-Cimu orders)</li>
            </ul>
          </ArticleText>
          <ArticleText>
            <span className='font-bold underline'>Behaviors</span>
            <ul className='list-disc list-inside'>
              <li><span className='italic'>Limited English Proficiency (LEP)</span> - Over 50% of tailors are people of color, many of whom are immigrants.</li>
              <li><span className='italic'>Older & Less Technologically Adept</span> - Over 85% of tailors are over 40 years old, with the average age of tailors being roughly 50-55.</li>
              <li><span className='italic'>Analog Appointment Scheduling</span> - Many tailors still use appointment books and paper documents to keep track of everything. While it’s not as efficient, it’s a system that they have grown very accustomed to, making it even more difficult to convince them to use an app.</li>
            </ul>
          </ArticleText>
        </ArticleTextSection>
        <Img src={audit}></Img>
        <ArticleText subheader='Gathering insights'>
        I also conducted an audit of many popular apps that were either similar to Cimu or was designed to be accessible for a user base similar to the tailors we were designing for.
        </ArticleText>
        <ArticleText subheader='Takeaways'>
          <ul className='list-disc list-inside'>
            <li>All features of the app need to be very simple; steps that may be considered "intuitive" for most users may still need to be explained and clearly marked to ease older users into scheduling appointments. </li>
            <li>Split up more complex actions (signing up, booking appointments) into smaller, bite-sized steps.</li>
            <li>Allow the Cimu orders to fit in with the tailor's non-Cimu "analog" orders.</li>
          </ul>
        </ArticleText>

        <DividerLight text />

        <ArticleHeader
        subhead='Our Solution'
        description='Our mobile app lets tailors quickly and effortlessly book incoming order requests from customers, eliminating the inefficiencies and pain points that both customers and tailors both went through when scheduling appointments. Tailors would asynchronously receive incoming appointment requests and could confirm them with the tap of a finger. Clothes would be sent with all necessary information from the vendor in the initial appointment request, and scheduled appointments would be easy to manage on a mobile calendar.'>
          Creating an effective order management system
        </ArticleHeader>
        <Img src={breakdownOrders} />
        <ArticleText subheader='Orders'>Tailors can see all requested alterations from customers, as well as appointments they have already accepted and completed.</ArticleText>
        <Img src={breakdownOrdersPopup} />
        <ArticleText subheader='Accepting Appointments'>When tailors click the "Schedule" button, details of the alteration request slide up on a popup and allow the tailor to see more information about the order, as well as to accept or reject it. We wanted the appointment scheduling process to be a two-step confirmation to avoid accidental bookings.</ArticleText>
        <Img src={breakdownAppointments} />
        <ArticleText subheader='Managing appointments'>Tailors can easily check details for all daily appointments and confirm pickups for their clients.</ArticleText>

        <DividerLight text />
        <ArticleHeader
        subhead='Accessible Onboarding'
        description="Past apps have failed to be accessible for tailors to use. Knowing this, it was extremely important that the experience I designed wouldn't alienate our users. Let's take a trip through the onboarding process.">
          Fluid and intuitive onboarding
        </ArticleHeader>
        <Img src={createAccount} video text/>
        
        <ArticleText subheader='Creating an account'>Splitting the "account creation form" into smaller parts made it easier to ensure that tailors would not get easily overwhelmed. The progress bar at the top of the screen also ensures users that there are very few steps needed to initially set up an account.</ArticleText>
        <ColumnLayout video text cols='grid-cols-1' breakpoints='md:grid-cols-3'>
          <Img src={hoursFinal} hfill/>
          <Img src={registerShopNew} hfill/>
          <Img src={scheduleMeeting} hfill/>
        </ColumnLayout>
        <ArticleText subheader='Next Steps'>After the tailor has registered an account, the app then prompts them for additional steps to verify their identity, set their hours of availability, and select their specialties. This method also allows Cimu to add additional verification steps as their company expands, while allowing the user to complete the info in multiple sittings.</ArticleText>
        <Img src={onboardingFlow} text/>

        <DividerLight text />

        <ArticleHeader
        subhead='Branding and Identity'
        description="We needed a consistent design to do a lot of the heavy lifting, especially since we needed our app to be accessible for  tailors with limited English proficiency. This meant designing with consistency, so that tailors could understand the meaning of interactive elements, even if they didn't understand the text. I also chose muted, high-contrast colors to improve accessibility for our older users.">
          Creating an effective and scalable design system
        </ArticleHeader>
        <Img src={systemColors} />
        <ArticleText subheader='Colors'>
        The initial Cimu branding kit had a very wide range of colors to choose from. However, many colors had poor contrast or were simply too saturated and strained the eyes. I altered the colors accordingly to fix those issues.
        </ArticleText>
        <Img src={systemComponents} />
        <ArticleText subheader='Interactive Elements'>
        I also denoted all interactive elements with border strokes, and added a full rounding to each button to separate them from other components.
        </ArticleText>
        <Img src={systemMargins} text />

        <DividerLight text />

        <ArticleHeader subhead='Design Challenges' description='Below are two of the more interesting challenges that I faced while designing for Cimu.'>
        Eliminating user pain points
        </ArticleHeader>

        <ArticleText subheader="Managing Incoming Appointments">How can we make appointment information easily glanceable, while still being able to provide tailors with enough information to easily manage them?</ArticleText>

        <ColumnLayout cols='grid-cols-1' breakpoints='md:grid-cols-2 xl:grid-cols-4'>
          <ArticleImageCaption src={orderV1} fit>
            <p className='font-bold'>Iteration 1</p>
            <p>Information was not very well organized, and made it difficult to navigate this page.</p>
            
            <ul className='list-inside list-disc'>
              <p className='font-bold'>Pain points:</p>
              <li>Call to action button is too small and difficult to press ("See more").</li>
              <li>"See all available orders" option for pick up orders is inefficient and may be confusing, especially since the other "See All" options are located in different places.</li>
            </ul>
          </ArticleImageCaption>

          <ArticleImageCaption src={orderV2} fit>
            <p className='font-bold'>Iteration 2</p>
            <p>Changed the pick up orders section to a horizontal scroll, making the information about all incoming appointment requests more accessible. Also reformatted the incoming order cards.</p>
            
            <ul className='list-inside list-disc'>
              <p className='font-bold'>Pain points:</p>
              <li>Information about accepted orders was too unclear; tailors usually organize orders by type of alteration and clothing, not by the customer name.</li>
              <li>"Accepted" and "Recent Past Orders" was confusing.</li>
              <li>"Recent Past Orders" generally seemed unnecessary, since pickups would be displayed on the appointments page anyways.</li>
            </ul>
          </ArticleImageCaption>

          <ArticleImageCaption src={orderV3} fit>
            <p className='font-bold'>Iteration 3</p>
            <p>Reformatted order information cards, moved "Recent Past Orders" to become a clickable "See Completed Orders" option.</p>
            
            <ul className='list-inside list-disc'>
              <p className='font-bold'>Pain points:</p>
              <li>"See more" wasn't a strong enough call to action.</li>
              <li>Tailors were not able to see more information about their accepted orders.</li>
              <li>Not enough contrast; text was too difficult to read.</li>
              <li>Walls of text were not glanceable and also challenged our limited English proficiency users.</li>
            </ul>
          </ArticleImageCaption>

          <ArticleImageCaption src={orderFinal} fit>
            <p className='font-bold'>Iteration 4 (FINAL)</p>

            <p>Increased contrast of Accepted Orders, minor copy changes, and turned accepted orders into dropdowns to allow tailors to view more information. </p>
            
            <p>This version solved all pain points of previous iterations; it was glanceable and condensed information, while also allowing tailors to view more at ease. There was also a strong visual hierarchy to emphasize the more important elements and information on the page. It also used design elements that were intuitive to older and less technologically proficient users.</p>
          </ArticleImageCaption>
        </ColumnLayout>

        <ArticleText subheader="Setting Availability">Tailors would need to be able to easily set and change their availability in order to balance their Cimu-based appointments with their non-Cimu appointments.</ArticleText>

        <ColumnLayout cols='grid-cols-1' breakpoints='md:grid-cols-3'>
          <ArticleImageCaption src={hours1} square>
            <p className='font-bold'>Iteration 1</p>

            <p>The developer initially wanted to implement a "when2meet"-inspired idea. However, this design ended up being a disaster.</p>
              
            <ul className='list-inside list-disc'>
              <p className='font-bold'>Pain points:</p>
              <li>Small text</li>
              <li>Tedious to click multiple boxes to set a standard schedule</li>
              <li>Takes forever to complete</li>
              <li>Practically unusable</li>
            </ul>
          </ArticleImageCaption>

          <ArticleImageCaption src={hours2} square>
            <p className='font-bold'>Iteration 2</p>

            <p>Scrapped the previous design and tried a new layout, which made it much easier to set a schedule and for users to more efficiently delete and add additional hours.</p>
              
            <ul className='list-inside list-disc'>
              <p className='font-bold'>Pain points:</p>
              <li>Elements were still too small</li>
              <li>Unclear that users were able to edit the times</li>
              <li>Inefficient use of space</li>
              <li>Still takes lots of time for users to set relatively simple schedules</li>
            </ul>
          </ArticleImageCaption>

          <ArticleImageCaption src={hoursFinal} square>
            <p className='font-bold'>Iteration 3 (FINAL)</p>

            <p>Finally switched to a vertical layout, which allowed for a more efficient use of space.</p>
              
            <p>This allowed me to solve the user pain points present in the previous iteration. I was able to enlarge the elements, add a dropdown menu button to hint that the "time slots" were editable, and initialized the page with a typical 9-to-5 schedule to help users understand how displayed hours would look.</p>
          </ArticleImageCaption>
        </ColumnLayout>

        <DividerLight text />
        
        <ArticleHeader subhead='Takeaways' description='This was my first contracted product design project, and it taught me a lot about working with a product team in a professional setting. I am grateful to all of my team members for working on this project alongside me!'>What I learned</ArticleHeader>

        <ArticleTextSection>
          <ArticleText subheader='Navigating Disagreements' horizontal>Throughout this project, I'd run into conflicts with developers and the other designers on my team. Working at such a fast pace, I learned how to quickly (yet effectively) solve disagreements over specific design elements in the page. I improved at not only understanding other people's opinions, but also how to better communicate my own.</ArticleText>
          <ArticleText subheader='Stay Organized!' horizontal>At first, I had all my designs thrown across a horribly messy Figma file. After I realized how difficult it was for others to go through to find my "Password final final FINAL" mockup, I worked on organizing everything into simple sections with explicit names. And honestly, it helped me as much as it helped the rest of the team.</ArticleText>
          <ArticleText subheader='Functionality First' horizontal>My greatest area of strength is in visual/graphic design, so this project helped me hone my ability to create consistent and understandable flows. Oftentimes, flashy UI can appear to mask bad functionality, but eventually, the flaws will always poke holes through the final product. For this project, I first worked on first understanding the tailors I was designing for and building a comprehensive lo-fi system before throwing any colors or pretty visuals into the design.</ArticleText>
        </ArticleTextSection>
        <Img src={threeScreens} video />
        
        <ImageCaption text>Thanks for reading!</ImageCaption>
        
      </ArticleBody>
    </ArticlePage>
  )
}
