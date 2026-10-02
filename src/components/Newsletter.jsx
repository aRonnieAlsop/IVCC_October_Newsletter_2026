import Navbar from './Navbar'
import EventsGrid from './EventsGrid'
import HistoryFeature from './HistoryFeature'
import Section from './Section'
import logo from '../assets/logo.png'
import ArtisanShop from './ArtisanShop'
import mtHuffThankYou from '../assets/mt_huff_thank_you.png'

export default function Newsletter() {
  return (
    <div className="newsletter">
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

       
      </main>

      <footer className="newsletter-footer">
        <p>Indian Valley Chamber of Commerce</p>
        <a href="#newsletter-top">Back to top ↑</a>
      </footer>

      <img
        className="floating-chamber-logo"
        src={logo}
        alt="Indian Valley Chamber of Commerce"
      />
    </div>
  )
}