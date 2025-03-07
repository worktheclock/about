import { FunctionComponent, ReactNode } from 'react'

import ClockTimeThreeOutlineIcon from 'mdi-react/ClockTimeThreeOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import WebIcon from 'mdi-react/WebIcon'
import Link from 'next/link'

import {
    ContentSection,
    CustomCarousel,
    CustomerLogos,
    Hero,
    Layout,
    QuoteCarousel,
    ResourceList,
    ThreeUpText,
    TwoColumnSection,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h3 className="tw-mb-8 lg:tw-mb-0">{header}</h3>
        {text}
    </>
)

const items = [
    {
        title: 'Respond to incidents faster',
        text: (
            <CarouselItem
                header="Response to incidents faster"
                text={
                    <p className="py-3">
                        No heroics required: Quickly understand all the context and dependencies around your codebase
                        with{' '}
                        <Link href="/code-search" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Code Search"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Code Search
                            </a>
                        </Link>{' '}
                        so you can find the root cause of an incident with confidence and speed. Document work in
                        progress with{' '}
                        <a
                            href="https://docs.sourcegraph.com/notebooks"
                            title="Notebooks"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Notebooks
                        </a>{' '}
                        so teammates can get up to speed quickly.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Limit the impact of incidents',
        text: (
            <CarouselItem
                header="Limit the impact of incidents"
                text={
                    <p className="py-3">
                        Automate the deployment of fixes everywhere and at scale. With{' '}
                        <Link href="/batch-changes" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Batch Changes"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Batch Changes
                            </a>
                        </Link>
                        , you can automate code changes and monitor the merge status of each resulting PR. Refactor code
                        to replace insecure functions, update vulnerable packages, or modify container configurations
                        across hundreds of repositories.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Track remediation progress',
        text: (
            <CarouselItem
                header="Track remediation progress"
                text={
                    <p className="py-3">
                        Visualize fixes in progress and track their deployment. With{' '}
                        <Link href="/code-insights" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Code Insights"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Code Insights
                            </a>
                        </Link>
                        , get visibility into remediation efforts and share progress with team leaders and all of your
                        customers.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Monitor for unsafe code',
        text: (
            <CarouselItem
                header="Monitor for unsafe code"
                text={
                    <p className="py-3">
                        Close the loop on your incident response efforts. After finding the root cause, use{' '}
                        <a
                            href="https://docs.sourcegraph.com/code_monitoring"
                            title="Code monitoring"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            code monitoring
                        </a>{' '}
                        to track whether similarly unsafe code is ever merged. Get alerts and stop incidents before they
                        occur.
                    </p>
                }
            />
        ),
    },
]

const quoteCarouselItems = [
    {
        header: "Quantcast is confident it won't miss any affected code",
        quote: "Sourcegraph's search gave us confidence because we knew we wouldn't overlook anything: Sourcegraph returns all search results, it doesn't drop or elide them.",
        by: 'Simon Law, Staff Software Engineer, Quantcast',
        logoImage: '/external-logos/quantcast-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/quantcast-large-scale-refactoring',
        logoAlt: 'Quantcast Logo',
    },
    {
        header: 'Nutanix proves the Log4j vulnerability no longer affects its codebase',
        quote: "Isn't it nice when you can just run a report and say, 'Here it is' or 'Here it isn't?' Much better than having to say, 'Well, boss, I think we got it all.'",
        by: 'Jon Kohler, Technical Director of Solution Engineering, Nutanix',
        logoImage: '/external-logos/nutanix-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
        logoAlt: 'Nutanix Logo',
    },
]

const blogResourceItems = [
    {
        title: 'Log4j Log4Shell 0-day: find, fix, and track affected code',
        description:
            'In the biggest security vulnerability incident since Heartbleed, Sourcegraph co-founder and CEO Quinn Slack shares how you can find affected code, automate fixes, and track progress.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
            alt: 'Log4j blog thumbnail',
        },
        href: '/blog/log4j-log4shell-0-day',
    },
    {
        title: "The real weakest link in software supply chain security (it's not open source)",
        description:
            'Using open source code can jumpstart development, but it can also expose you to security vulnerabilities. In this post, learn how to design an effective vulnerability management process that can make dependencies visible and mitigation less time-consuming.',
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/third-party-open-source-vulnerabilities.png',
            alt: 'The weakest link in software supply blog thumbnail',
        },
        href: '/blog/real-weakest-link-in-software-supply-chain-security',
    },
    {
        title: 'How to remove secrets from your codebase',
        description:
            'In early 2021, Sourcegraph stored infrastructure and service passwords in private repositories. Learn how Sourcegraph Security Engineer André Eleuterio moved every secret to a secure vault and used Code Search to ensure the move was successful and complete.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png',
            alt: 'Remove secrets from your codebase blog thumbnail',
        },
        href: '/blog/eliminate-secrets-from-codebase-with-universal-code-search',
    },
]

const threeUpTextItems = [
    {
        icon: <MagnifyIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: 'Assess incidents quickly',
        description:
            "Pinpoint the code responsible for the incident and find the root cause in your codebase. Understand the code's functionality to verify the issue.",
    },
    {
        icon: <ClockTimeThreeOutlineIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: 'Plan your remediation',
        description:
            'Reduce time to resolution by supplying response teams with actionable details, like links to all affected code.',
    },
    {
        icon: <WebIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: 'Execute your plan globally',
        description:
            "Fix the root cause and confirm the same issue doesn't reoccur in other areas by locating the code pattern and automating fixes across your entire codebase.",
    },
]

const IncidentResponsePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Incident Response - Sourcegraph',
            description:
                'Identify the root cause of an incident, understand its potential impact, fix the issue everywhere in your codebase. Incident response from Sourcegraph.',
        }}
        className="use-cases-page navbar-light"
        hero={
            <Hero
                variant="lightNebulousVenus2"
                backButton={{
                    text: 'Use Cases',
                    link: '/use-cases',
                }}
                title="Resolve incidents quickly and confidently"
                subtitle="Identify the root cause of an incident, understand its potential impact on other
                services, and fix the issue everywhere in your codebase so it won't reoccur."
                cta={
                    <div className="tw-text-center tw-flex-col md:tw-flex-row md:tw-flex">
                        <div className="mb-3 mb-md-0">
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-primary w-100 max-w-350"
                                    title="Request a Demo."
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    Request a demo
                                </a>
                            </Link>
                        </div>
                        <div className="ml-md-3">
                            <Link href="/get-started/self-hosted" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-outline-primary w-100 max-w-350"
                                    title="Try Sourcegraph."
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    Try Sourcegraph now
                                </a>
                            </Link>
                        </div>
                    </div>
                }
            />
        }
    >
        <ContentSection>
            <ThreeUpText
                title="Identify the root cause of an incident and fix it everywhere, fast"
                items={threeUpTextItems}
            />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <TwoColumnSection
                leftColumn={
                    <>
                        <h2 className="mb-4 max-w-500">Incident response is stressful and overwhelming</h2>
                        <p>
                            Current tools don't enable teams to quickly get to the root cause of an incident and ensure
                            it doesn't reoccur. What does that mean for you?
                        </p>
                        <ul>
                            <li className="mt-1">
                                Outages and degraded performance persist while development teams look for causes,
                                leading to lost revenue and frustrated customers.
                            </li>
                            <li className="mt-1">
                                Incidents can reoccur if developers can't find the root cause, leaving your company with
                                a reputation for unreliability and missed SLAs.
                            </li>
                            <li className="mt-1">
                                Incident response often relies on knowledge silos, which are neither scalable nor
                                sustainable.
                            </li>
                            <li className="mt-1">
                                Company leaders struggle to gain visibility into in-progress incident responses and
                                communicate timelines to stakeholders.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <div className="bg-white tw-p-8 lg:tw-ml-10">
                        <h4>Cloudflare quickly addresses root-cause incidents</h4>
                        <p>
                            Cloudflare engineers use Sourcegraph's code intelligence platform to refactor and debug
                            faster. With Sourcegraph, they can quickly identify out-of-date code libraries by only
                            searching certain repositories while excluding specific file types. And it's easier to
                            search for error logs. As a result, the team can feel confident they've addressed each
                            issue.
                        </p>
                        <Link
                            href="/case-studies/cloudflare-accelerates-debugging-and-improves-security"
                            passHref={true}
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Read the Cloudflare case study"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Read the Cloudflare case study
                            </a>
                        </Link>
                        <img
                            src="/external-logos/cloudflare-logo.svg"
                            alt="Cloudflare logo"
                            className="mt-3 tw-mx-auto tw-flex max-w-150"
                        />
                    </div>
                }
            />
        </ContentSection>

        <ContentSection>
            <CustomCarousel items={items} autoAdvance={true} title="How Sourcegraph helps" />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-saturn">
            <QuoteCarousel items={quoteCarouselItems} />
        </ContentSection>

        <ContentSection parentClassName="tw-bg-gray-100">
            <div className="mx-4 row tw-flex tw-flex-col mx-lg-0 tw-text-center">
                <div className="mb-5 tw-mx-auto tw-flex tw-flex-col tw-text-center max-w-600">
                    <h2 className="">Get started with Sourcegraph</h2>
                    <p>
                        Respond to incidents with confidence and speed, and remediate issues at their root to ensure
                        they don't reoccur.
                    </p>
                </div>
                <div className="tw-px-0 tw-text-center col-12">
                    <Link href="/demo" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary max-w-350 w-100"
                            title="Request a Demo."
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                    <Link href="/use-cases" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="mt-4 tw-flex tw-justify-center "
                            title="Explore other use cases"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Explore other use cases
                        </a>
                    </Link>
                </div>
            </div>

            <div className="tw-mt-4xl">
                <CustomerLogos />
            </div>
        </ContentSection>

        <ResourceList items={blogResourceItems} />

        <ContentSection>
            <div className="tw-text-center">
                <h2 className="mx-4 mb-4 mx-lg-0">Respond to incidents faster and more effectively.</h2>
                <Link href="/get-started/self-hosted" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="btn btn-primary"
                        title="Ready to get started?"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        Ready to get started?
                    </a>
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default IncidentResponsePage
