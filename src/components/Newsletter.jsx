import Navbar from './Navbar'
import EventsGrid from './EventsGrid'
import HistoryFeature from './HistoryFeature'
import ArtisanShop from './ArtisanShop'
import YogaSection from './YogaSection'
import NewsletterFooter from './NewsletterFooter'
import logo from '../assets/logo.png'
import MtHuffThankYou from './MtHuffThankYou'

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div id="page-top" className="newsletter-top-anchor" />

      <Navbar />

      <main>
        <EventsGrid />

        <HistoryFeature />

        <ArtisanShop />

       <MtHuffThankYou />

        <YogaSection />
      </main>

      <NewsletterFooter />

      <img
        className="floating-chamber-logo"
        src={logo}
        alt="Indian Valley Chamber of Commerce"
      />
    </div>
  )
}