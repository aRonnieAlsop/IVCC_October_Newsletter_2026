import meetingMountain from '../assets/meeting_mountain.png'
import './MeetingBanner.css'

const locationUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('15792 Highway 89, Crescent Mills, CA')

export default function MeetingBanner() {
  return (
    <section
      id="chamber-meeting"
      className="meeting-banner"
      aria-labelledby="next-meeting-title"
    >
      <div className="meeting-banner-art" aria-hidden="true">
        <img src={meetingMountain} alt="" />
      </div>

      <div className="meeting-banner-inner">
        <div className="meeting-banner-box">
          <p className="meeting-banner-label">
            Next Chamber Board Meeting
          </p>

          <h2 id="next-meeting-title">
            Let’s meet in Crescent Mills.
          </h2>

          <time
            className="meeting-banner-date"
            dateTime="2026-10-05T18:00:00-07:00"
          >
            Monday, October 5, 2026
            <span>6 PM</span>
          </time>

          <a
            className="meeting-location"
            href={locationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="meeting-location-pin"
              aria-hidden="true"
            >
              ⟟
            </span>

            <span>Crescent Store and Cafe</span>

            <span className="sr-only">
              {' '}
              — view location on Google Maps (opens in a new tab)
            </span>
          </a>

          <div className="meeting-thanks">
            <h3>A little thank-you.</h3>

            <p>
              Thank you to{' '}
              <a
                className="meeting-thanks-link"
                href="https://www.mthuffgolf.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Mt. Huff Golf Course</strong>
                <span className="sr-only">
                  {' '}
                  (opens in a new tab)
                </span>
              </a>{' '}
              for hosting the Chamber Mixer before our last meeting on{' '}
              <time dateTime="2026-09-09">
                Wednesday, September 9, 2026
              </time>
              —and especially for treating us to their delicious
              chicken strips on the house!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}