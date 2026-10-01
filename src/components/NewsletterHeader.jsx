import logo from '../assets/logo.png'
import mountain from '../assets/mountain.png'

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('15792 Highway 89, Crescent Mills, CA')

export default function NewsletterHeader() {
  return (
    <header className="newsletter-header" id="newsletter-top">
      <div className="newsletter-masthead">
        <div className="newsletter-issue">
          <time dateTime="2026-10">October 2026</time>
          <span>Indian Valley, California</span>
        </div>

        <div className="newsletter-identity">
          <img
            className="newsletter-logo"
            src={logo}
            alt="Indian Valley Chamber of Commerce logo"
          />

          <div className="newsletter-heading">
            <p className="newsletter-chamber-name">
              Indian Valley Chamber of Commerce
            </p>

            <h1 className="newsletter-title">Newsletter</h1>
          </div>
        </div>
      </div>

      <section
        className="meeting-announcement meeting-aligned"
        aria-labelledby="meeting-heading"
      >
        <div className="meeting-copy">
          <p className="meeting-eyebrow">Next Chamber meeting</p>

          <h2 className="meeting-heading" id="meeting-heading">
            Let’s meet in Crescent Mills.
          </h2>
        </div>

        <div className="meeting-art">
          <img
            src={mountain}
            alt=""
            className="meeting-mountain"
          />
        </div>

        <time
          className="meeting-date"
          dateTime="2026-10-05T18:00:00-07:00"
        >
          Monday, October 5, 2026
          <span className="meeting-time">6 PM</span>
        </time>

        <a
          className="meeting-venue-link"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crescent Store and Cafe location on Google Maps (opens in a new tab)"
        >
          <span aria-hidden="true">⟟</span>
          Crescent Store and Cafe
        </a>
      </section>
    </header>
  )
}