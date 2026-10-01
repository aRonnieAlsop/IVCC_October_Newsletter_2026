import Navbar from './Navbar'
import EventsGrid from './EventsGrid'
import HistoryFeature from './HistoryFeature'
import Section from './Section'
import logo from '../assets/logo.png'
import mtHuffThankYou from '../assets/mt_huff_thank_you.png'

export default function Newsletter() {
  return (
    <div className="newsletter">
      <Navbar />

      <main>
        <EventsGrid />

        <HistoryFeature />

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

        <div className="newsletter-content">
          <Section id="artisan-shop" title="Artisan Shop">
            <p>Artisan Shop information will go here.</p>
          </Section>

          <Section id="scholarship" title="Scholarship">
            <p>Scholarship information will go here.</p>
          </Section>
        </div>
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