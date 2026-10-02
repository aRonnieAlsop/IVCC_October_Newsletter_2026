import yogaFlyer from '../assets/yoga.png'
import './YogaSection.css'

export default function YogaSection() {
  return (
    <section className="yoga-section" aria-label="Local yoga classes">
      <a
        className="yoga-flyer-link"
        href="https://ivrpd.org/yogaclasses/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find out about yoga classes at Indian Valley Recreation and Park District (opens in a new tab)"
      >
        <img
          className="yoga-flyer"
          src={yogaFlyer}
          alt="Yoga classes flyer"
          loading="lazy"
          decoding="async"
        />
      </a>
    </section>
  )
}