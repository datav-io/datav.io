import React, { useEffect } from "react"
import classnames from "classnames"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import CodeBlock from "@theme/CodeBlock"
import ProviderMarquee from "../components/ProviderMarquee"
import Seo from "./seo"
import styles from "./index.module.css"

const features = [
  {
    title: "Observability",
    imageUrl: "img/undraw_social.svg",
    description: (
      <ul>
        <li>
          Metrics,Traces,Logs,
        </li>
        <li>datav support all observability types,</li>
        <li>because we have native support for <a href="https://opentelemetry.io" target="_blank">OpenTelemetry</a>,</li>
        <li>we can collect data from various services
in a standard way</li>
      </ul>
    ),
  },
  {
    title: "Powerful & Beautiful",
    imageUrl: "img/undraw_authentication.svg",
    description: (
      <ul>
        <li>Our ui is forked from grafana</li>
        <li>
          but <strong>much more powerful</strong> at apm.
        </li>
        <li>1. Much better alerts system</li>
        <li>2. Custom side menu of website for your team</li>
        <li>3. Using enterprise grafana features for free</li>
        <li>4. Seamless integrated with <strong>APM</strong></li>
      </ul>
    ),
  },
  {
    title: "APM",
    imageUrl: "img/undraw_secure.svg",
    description: (
      <ul>
        <li>Because of our powerful ui system,</li>
        <li>we can build a better apm than DataDog&NewRelic.</li>
        <li>Also, Datav is 100% open source,</li>
        <li>built on latest stack and most importantly: </li>
        <li>easy to use</li>
      </ul>
    ),
  },
]

const kFormatter = (num) => {
  //@ts-ignore
  return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <div className="feature-image-wrapper">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    fetch("https://api.github.com/repos/nextauthjs/next-auth")
      .then((res) => res.json())
      .then((data) => {
        const navLinks = document.getElementsByClassName(
          "navbar__item navbar__link"
        )
        const githubStat = document.createElement("span")
        githubStat.innerHTML = kFormatter(data.stargazers_count)
        githubStat.className = "github-counter"
        navLinks[4].appendChild(githubStat)
      })
  }, [])
  return (
    <Layout description={siteConfig.tagline}>
      <Seo />
      <div className="home-wrapper">
        <header className={classnames("hero", styles.heroBanner)}>
          <div className="container">
            <div className="hero-inner">
              <img
                src="/img/logo/logo-sm.png"
                alt="Shield with key icon"
                className={styles.heroLogo}
              />
              <div className={styles.heroText}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
              </div>
              <div className={styles.buttons}>
                <a
                  className={classnames(
                    "button button--outline button--secondary button--lg rounded-pill",
                    styles.button
                  )}
                  href="https://next-auth-example.vercel.app"
                >
                  Live Demo
                </a>
                <Link
                  className={classnames(
                    "button button--primary button--lg rounded-pill",
                    styles.button
                  )}
                  to={useBaseUrl("/docs/intro")}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="hero-marquee">
              <ProviderMarquee />
            </div>
          </div>
          <div className="hero-wave">
            <div className="hero-wave-inner" />
          </div>
        </header>
        <main className="home-main">
          <section className={`section-features ${styles.features}`}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className={styles.featuresTitle}>
                    <span>Metric,Trace,Log</span> <span>Grafana Like UI</span>{" "}
                    <span>APM</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
          {/* <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="text--center">
                    <a
                      href="https://www.npmjs.com/package/next-auth"
                      className="button button--primary button--outline rounded-pill button--lg"
                    >
                      npm install next-auth
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section> */}
          <div className="home-subtitle">
            <p>Datav is a fully open source community project.</p>
          </div>
        </main>
      </div>
    </Layout>
  )
}


export default Home
