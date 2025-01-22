export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ryan Yogan - Resume" },
    { name: "description", content: "About Ryan Yogan" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <h1>Ryan Yogan</h1>
          <div className="title">Engineering Leader</div>
        </div>
        <div className="header-right">
          312-343-5517
          <br />
          ryanyogan@gmail.com
          <br />
          linkedin.com/in/ryanyogan
        </div>
      </div>

      <div className="section">
        <p className="hero-text">
          Technology leader specializing in beautiful and fast UI/UX,
          distributed systems, AI/ML integration, and high-performing
          engineering organizations. Track record of driving innovation while
          fostering empathy-driven teams and delivering complex initiatives at
          scale.
        </p>
      </div>

      <div className="section">
        <h2>RECENT EXPERIENCE</h2>

        <div className="job">
          <div className="job-header">
            <span className="job-title">
              Chief Technology Officer | BuildStock
            </span>
            <span className="date">May 2024 - Present</span>
          </div>
          <ul>
            <li>
              Architected next-generation construction procurement platform
              using Next.js SSR and event-sourced Elixir backend, achieving
              99.99% uptime and 50ms p95 latency
            </li>
            <li>
              Launched AI division developing LLM-powered procurement agents,
              reducing material sourcing time from days to minutes using
              fine-tuned industry models
            </li>
            <li>
              Created "Auto Builder" platform that automates 80% of material
              procurement workflows through custom-trained LLMs and real-time
              supplier integrations
            </li>
            <li>
              Scaled engineering organization from 4 to 15 engineers across 3
              teams while maintaining aggressive delivery timelines
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <span className="job-title">
              Founder & Technical Consultant | Yogan Dot Dev
            </span>
            <span className="date">Oct 2022 - Present</span>
          </div>
          <ul>
            <li>
              Built comprehensive flight planning SaaS used by commercial & GA
              pilots, integrating real-time weather, NOTAMs, and route
              optimization using Next.js [static rendering + RSC = works @
              10,000ft]
            </li>
            <li>
              Developed native iOS/Android applications for pre-flight
              checklists with offline support, achieving 4.8+ App Store rating
            </li>
            <li>
              Implemented CQRS architecture handling 10M+ daily flight data
              events with sub-second processing using Go and Kafka
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <span className="job-title">
              Senior Engineering Manager | HG Insights
            </span>
            <span className="date">Aug 2021 - Sep 2022</span>
          </div>
          <ul>
            <li>
              Led platform modernization initiative, migrating legacy batch
              processes to real-time streaming architecture processing 5PB+ of
              data
            </li>
            <li>
              Implemented comprehensive observability stack with Datadog and
              OpenTelemetry, reducing MTTR from weeks to 45 minutes
            </li>
            <li>
              Created engineering excellence program focused on distributed
              systems design, resulting in 95% team retention and 3 internal
              promotions
            </li>
            <li>
              Managed 8 direct reports, providing consistent feedback and
              mentoring. Challenges ranged from React user interfaces to Scala
              backend data pipelines. Mentoring and guidance were crucial as we
              scaled the team.
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <span className="job-title">
              Senior Engineering Manager | Procore Technologies
            </span>
            <span className="date">Oct 2016 - Jul 2021</span>
          </div>
          <ul>
            <li>
              Scaled UI organization from 8 to 65 engineers across 11 product
              teams, implementing matrix management structure with dedicated
              technical tracks
            </li>
            <li>
              Managed up to 15 direct reports, maintained weekly 1:1s,
              consistent career pathing, and adjustments to KPIs allowing for
              personal growth that correlated to the business goals
            </li>
            <li>
              Led global performance initiative reducing page load from 11s to
              2s through code splitting, SSR optimization, and edge caching,
              increasing web & mobile usage by 300%
            </li>
            <li>
              Established enterprise customer success program reducing
              resolution time from 3 days to 5 hours through real-time debugging
              tools and direct engineering support
            </li>
            <li>
              Created engineering career framework adopted company-wide,
              defining clear growth paths from IC1 to Principal Engineer
            </li>
            <li>
              Worked with product and UX teams to launch Procore's Developer
              Academy, starting as a grassroots initiative to continue learning.
              This program evolved into a formalized training program for new
              hires and anyone within the organization that has a desire to
              learn. This is how Procore solved complex challenges, education!
            </li>
            <li>
              Worked with recruitment consistently to ensure a fair and amazing
              interview process. I interviewed over 700 candidates, ensuring
              that recruitment had all required to be the best in the business
              :)
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>SKILLS & EXPERTISE</h2>
        <ul className="skills-list">
          <li className="skill-item">
            <strong>Leadership:</strong> Engineering Leadership, Team Building,
            Technical Strategy, Product Vision
          </li>
          <li className="skill-item">
            <strong>Architecture:</strong> Distributed Systems, Event-Driven,
            Edge Computing, AI/ML Integration
          </li>
          <li className="skill-item">
            <strong>Technologies:</strong> Next.js, TypeScript, Elixir, Go,
            Rust, React, GraphQL, AWS
          </li>
        </ul>
      </div>
    </>
  );
}
