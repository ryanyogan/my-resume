import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
        <p>
          Technology leader specializing in distributed systems, AI/ML
          integration, and high-performing engineering organizations. Track
          record of driving innovation while fostering empathy-driven teams and
          delivering complex initiatives at scale.
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
              Academy, starting as a `grass-roots` initiative to continue
              learning. This program evolved into a formalized training program
              for new hires and anyone within the org that has a desire to
              learn. This is how Procore solved complex challenges, education!
            </li>
          </ul>
        </div>

        <div className="legacy-experience">
          <div className="legacy-job">
            <strong>Director of Engineering</strong> | Montway Auto Transport
            (2015-2016)
            <br />
            Led greenfield development of ML-powered routing platform reducing
            planning time by 60% and fuel costs by $2M annually
          </div>
          <div className="legacy-job">
            <strong>VP of Research & Development</strong> | Sonian (2014-2015)
            <br />
            Pioneered early serverless architecture with AWS Lambda team,
            reducing infrastructure costs by $1.2M annually while scaling to
            process 50B+ events
          </div>
        </div>
      </div>

      <div className="section">
        <h2>SKILLS & EXPERTISE</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Leadership</h3>
            Engineering Leadership • Team Building • Technical Strategy •
            Product Vision
          </div>
          <div className="skill-category">
            <h3>Architecture</h3>
            Distributed Systems • Event-Driven • Edge Computing • AI/ML
            Integration
          </div>
          <div className="skill-category">
            <h3>Technologies</h3>
            Next.js • TypeScript • Elixir • Go • Rust • React • GraphQL • AWS
          </div>
        </div>
      </div>

      <div className="section">
        <h2>INNOVATIONS</h2>
        <ul>
          <li>
            AI-powered procurement automation platform • Real-time aviation
            systems • Serverless architecture patents
          </li>
        </ul>
      </div>
    </>
  );
}
