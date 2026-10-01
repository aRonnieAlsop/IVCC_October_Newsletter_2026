import Navbar from './Navbar'
import MeetingBanner from './MeetingBanner'
import Section from './Section'
import logo from '../assets/logo.png'
import EventsGrid from './EventsGrid'

export default function Newsletter() {
  return (
    <div className="newsletter">
      <Navbar />
      <EventsGrid />

      <MeetingBanner />

      <main className="newsletter-content">
        <Section id="events" title="Upcoming Events">
          <p>Our events carousel will go here.</p>
        </Section>

        <Section id="chamber-news" title="Chamber News">
          <p>Chamber updates will go here.</p>
        </Section>

        <Section id="artisan-shop" title="Artisan Shop">
          <p>Artisan Shop information will go here.</p>
        </Section>

        <Section id="scholarship" title="Scholarship">
          <p>Scholarship information will go here.</p>
        </Section>
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