import Navbar from './Navbar'
import EventsGrid from './EventsGrid'
import HistoryFeature from './HistoryFeature'
import ArtisanShop from './ArtisanShop'
import YogaSection from './YogaSection'
import NewsletterFooter from './NewsletterFooter'
import logo from '../assets/logo.png'
import mtHuffThankYou from '../assets/mt_huff_thank_you.png'

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div id="page-top" className="newsletter-top-anchor" />

      <Navbar />

      <main>
        <EventsGrid />

        <HistoryFeature />

        <ArtisanShop />

        <section
          className="mt-huff-thank-you"
          aria-label="Thank you to Mt. Huff Golf Course"
        >
          <img
            src={mtHuffThankYou}
            alt="Thank you, Mt. Huff Golf Course! For hosting our Chamber mixer on Wednesday, September 9, 2026, and treating everyone to delicious chicken strips on the house. We appreciate your generosity and hospitality! Indian Valley Chamber of Commerce."
            loading="lazy"
            decoding="async"
          />
        </section>

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