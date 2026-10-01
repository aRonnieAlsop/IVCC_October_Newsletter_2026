import actors from '../assets/actors.jpg'
import actorsPerforming from '../assets/actors_performing.jpg'
import smoke from '../assets/smoke.jpg'
import crowd from '../assets/crowd.jpg'
import frontierDay1 from '../assets/fDay1.jpeg'
import frontierDay2 from '../assets/fDay2.jpeg'
import frontierDay3 from '../assets/fDay3.jpg'
import frontierDay4 from '../assets/fDay4.jpeg'
import frontierDay5 from '../assets/fDay5.jpeg'
import frontierDay6 from '../assets/fDay6.jpeg'
import frontierDay7 from '../assets/fDay7.jpeg'
import './HistoryFeature.css'

const frontierPhotos = [
  frontierDay1,
  frontierDay2,
  frontierDay3,
  frontierDay4,
  frontierDay5,
  frontierDay6,
  frontierDay7,
]

export default function HistoryFeature() {
  return (
    <section
      className="history-feature"
      id="chamber-news"
      aria-labelledby="history-feature-heading"
    >
      <header className="history-feature-header">
        <p className="history-eyebrow">Chamber News · Around the Valley</p>

        <h2 id="history-feature-heading">
          Local history is coming to life.
        </h2>

        <p className="history-introduction">
          Indian Valley stepped into the past at two recent community
          gatherings.
        </p>
      </header>

      <figure className="history-hero">
        <img
          src={actors}
          alt="The cast gathered on The Crescent Hotel’s Moon Deck after the performance."
          loading="lazy"
          decoding="async"
        />

        <figcaption>
          The cast of <cite>Smoke Over Crescent Mills</cite>, together
          on the Moon Deck after the performance.
        </figcaption>
      </figure>

      <div className="history-story-row">
        <div className="history-story-copy">
          <p className="history-eyebrow">An evening in Crescent Mills</p>

          <h3>A century ago, brought closer.</h3>

          <p>
            At The Crescent Hotel’s soft opening,{' '}
            <cite>Smoke Over Crescent Mills</cite> drew an impressive
            crowd for our small community. Written by hotel owner Mat
            Fogarty and drawing on historical insurance records
            connected to the 1926 fire, the play brought a chapter of
            Crescent Mills history to life.
          </p>

          <p>
            Local actors performed as the audience moved around the
            property, following the story from scene to scene. The
            immersive production marked the fire’s 100th anniversary,
            with theatrical smoke effects adding drama to the finale.
          </p>
        </div>

        <figure className="history-performance-photo">
          <img
            src={actorsPerforming}
            alt="Local actors performing in Smoke Over Crescent Mills at The Crescent Hotel."
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <blockquote className="history-quote history-quote-grounds">
        <p>“These grounds still remember.”</p>

        <footer>
          Narrator, <cite>Smoke Over Crescent Mills</cite>
        </footer>
      </blockquote>

      <div className="history-story-row history-story-row-reverse">
        <figure className="history-smoke-photo">
          <img
            src={smoke}
            alt="Actors portraying the orphans surrounded by theatrical smoke on the Moon Deck during the staged fire scene."
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="history-story-copy">
          <p className="history-eyebrow">A glimpse of what’s ahead</p>

          <h3>Old stories. A new chapter.</h3>

          <p>
            Visitors also explored the renovated upstairs rooms—which
            have since welcomed their first guests—and previewed the
            future bar, ballroom, and restaurant.
          </p>

          <p>
            The performance has already prompted requests for an
            encore. If you missed it, or would like another look, you
            can watch the play on YouTube.
          </p>

          <a
            className="history-watch-link"
            href="https://www.youtube.com/watch?v=F7hXpWlBIxQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Smoke Over Crescent Mills on YouTube (opens in a new tab)"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

            <span>Watch the play</span>
          </a>
        </div>
      </div>

      <div className="history-community-row">
        <blockquote className="history-quote history-quote-mat">
          <p>
            “Thanks for everyone turning up and learning about the
            history of Crescent Mills.”
          </p>

          <footer>
            Mat Fogarty
            <span>Owner, The Crescent Hotel and Store</span>
          </footer>
        </blockquote>

        <figure className="history-crowd-photo">
          <img
            src={crowd}
            alt="The audience gathered for the historical play at The Crescent Hotel."
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <div className="history-frontier">
        <div className="history-frontier-copy">
          <p className="history-eyebrow">Meanwhile, in Taylorsville</p>

          <h3>A day to dig into the past.</h3>

          <p>
            Frontier Day drew a strong turnout for hands-on history at
            the Indian Valley Museum. Children collected activity
            stamps to earn a gem prize, with an archaeological dig,
            panning for real gold, roping, and corn husk dolls among
            the adventures.
          </p>

          <p>
            Skilled artisans demonstrated wool spinning, hand
            stitching, and Maidu basket weaving. Indian tacos,
            hayrides, live entertainment, costume contests, and a
            beard and mustache contest added to the fun. There was
            plenty to discover—and the kids had a blast.
          </p>
        </div>

        <div
          className="history-frontier-gallery"
          role="group"
          aria-label="A little look at Frontier Day"
        >
          <p className="history-gallery-label">
            A little look at Frontier Day
          </p>

          <div className="history-frontier-photos">
            {frontierPhotos.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={`A moment from Frontier Day at the Indian Valley Museum, photo ${
                  index + 1
                } of 7.`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}