import { kebabCase } from 'lodash'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import {
    Background,
    Blockquote,
    ContentSection,
    CtaSection,
    CustomerLogos,
    Layout,
    TwoColumnSection,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const features: { id: string; description: string }[] = [
    {
        id: 'code-security',
        description: 'Improve code security',
    },
    {
        id: 'onboarding',
        description: 'Accelerate developer onboarding',
    },
    {
        id: 'incident-response',
        description: 'Resolve incidents faster',
    },
    {
        id: 'code-reuse',
        description: 'Streamline code reuse',
    },
    {
        id: 'code-health',
        description: 'Boost code health',
    },
]

const UseCases: React.FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Use Cases - Sourcegraph',
            description:
                'See how the most productive dev teams use Sourcegraph to build software you rely on. From improving code security to streamlining code reuse, our customers use Sourcegraph to solve big code problems.',
        }}
        hero={
            <Background variant="lightNebulousAurora">
                <div className="container">
                    <div className="row tw-items-center">
                        <div className="mt-6 col-lg-7 mb-lg-6 md:tw-pr-12">
                            <h1 className="mb-0">Our customers move faster with Sourcegraph</h1>
                            <p className="my-5">
                                Companies of all sizes and in all industries use Sourcegraph's code intelligence
                                platform to understand, fix, and automate across their entire codebase.
                            </p>
                        </div>

                        <div className="mb-6 tw-pt-sm col-lg-5 mt-lg-6">
                            <h4 className="tw-pb-xxs">See how customers use Sourcegraph to</h4>

                            <div className="list-group">
                                {features.map((feature: { id: string; description: string }) => (
                                    <Link key={feature.id} href={`#${kebabCase(feature.id)}`} passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="list-group-item list-group-item-action tw-flex tw-justify-between tw-items-center tw-no-underline"
                                            title={feature.description}
                                            data-button-style={buttonStyle.textWithArrow}
                                            data-button-location={buttonLocation.hero}
                                            data-button-type="cta"
                                        >
                                            {feature.description}
                                            <ArrowRightIcon className="ml-1" />
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        }
    >
        <div className="use-cases-page">
            <div className="tw-pt-3xl">
                <CustomerLogos />
            </div>

            <hr className="tw-my-4xl" />

            <ContentSection id="code-security">
                <TwoColumnSection
                    centerContent={true}
                    leftColumn={
                        <>
                            <h2 className="mb-3">Improve code security</h2>
                            <h5>Find, fix, and track vulnerable code quickly across your entire codebase.</h5>
                            <p>
                                You can't fix what you can't find. Remediate vulnerabilities with confidence knowing you
                                found every instance of affected code. Track your remediation initiatives to completion
                                with automated fixes and pull requests. With Sourcegraph, timely resolution is a search
                                away.
                            </p>
                            <ul className="my-4">
                                <li>Reduce time to recovery with a single search</li>
                                <li>
                                    Automate fixing, merging, and deploying changes with{' '}
                                    <Link href="/batch-changes/">
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
                                </li>
                                <li>Alert for known vulnerabilities and risky code changes with code monitoring</li>
                            </ul>
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-outline-primary"
                                    title="Request a demo"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.bodyDemo}
                                    data-button-type="cta"
                                >
                                    Request a demo <ArrowRightBoxIcon className="ml-1 tw-inline" />
                                </a>
                            </Link>
                            <Link href="/use-cases/code-security" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="tw-ml-8"
                                    title="Learn more"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Learn more
                                </a>
                            </Link>
                        </>
                    }
                    rightColumn={
                        <Blockquote
                            inline={false}
                            quote="[Sourcegraph] is the best way to prove we're not vulnerable to a particular CVE, if and when we get asked by an auditor."
                            author="David Haynes, Security Engineer at Cloudflare"
                            logo={{
                                src: '/external-logos/cloudflare-logo.svg',
                                alt: 'Cloudflare',
                                href: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
                            }}
                        />
                    }
                />
            </ContentSection>

            <hr />

            <ContentSection id="onboarding">
                <TwoColumnSection
                    reverseOnMobile={true}
                    centerContent={true}
                    leftColumn={
                        <Blockquote
                            inline={false}
                            reverseBorder={true}
                            quote="For our new developers, Sourcegraph has been invaluable to get to know the repository structure, to track down where code lives, and self-service during their investigations."
                            author="Owen Kim, Senior Software Engineer, Convoy"
                            logo={{
                                src: '/external-logos/convoy-logo.svg',
                                alt: 'Convoy',
                                href: '/case-studies/convoy-improved-on-boarding',
                            }}
                        />
                    }
                    rightColumn={
                        <>
                            <h2 className="mb-3">Accelerate developer onboarding</h2>
                            <h5>
                                Decrease time to first commit with self-serve onboarding, codebase exploration, and
                                knowledge sharing.
                            </h5>
                            <p>
                                Onboard teammates faster and improve dev velocity by making it easy to search and find
                                code and context. Unlike splintered tooling and knowledge management systems that
                                require manual interaction and upkeep, Sourcegraph helps devs self-serve.
                            </p>
                            <ul className="my-4">
                                <li>
                                    Search across all repositories and multiple branches to find answers in staging,
                                    dev, and production environments
                                </li>
                                <li>
                                    Understand large codebases with definitions and references with advanced code
                                    navigation
                                </li>
                                <li>Get answers faster with shareable links to specific code</li>
                            </ul>
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-outline-primary"
                                    title="Request a demo"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.bodyDemo}
                                    data-button-type="cta"
                                >
                                    Request a demo <ArrowRightBoxIcon className="ml-1 tw-inline" />
                                </a>
                            </Link>
                            <Link href="/use-cases/onboarding" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="tw-ml-8"
                                    title="Learn more"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Learn more
                                </a>
                            </Link>
                        </>
                    }
                />
            </ContentSection>

            <hr />

            <ContentSection id="incident-response">
                <TwoColumnSection
                    centerContent={true}
                    leftColumn={
                        <>
                            <h2 className="mb-3">Resolve incidents faster</h2>
                            <h5>Identify the root cause in code and fix the issue everywhere.</h5>
                            <p>
                                &ldquo;Every minute matters when responding to a business-critical incident. Downtime =
                                revenue lost. Sourcegraph helps development teams identify the root cause in code,
                                understand why the problem occurred and its potential impact on other services, fix the
                                issue everywhere so it won't reoccur, and assure incident responders that all holes are
                                plugged.&rdquo;
                            </p>
                            <ul className="my-4">
                                <li>
                                    Quickly understand all context & dependencies around the codebase to self-serve or
                                    involve relevant teams
                                </li>
                                <li>
                                    Refactor code to replace insecure functions, update vulnerable packages, or modify
                                    container configurations across hundreds of repositories
                                </li>
                                <li>
                                    Document your solution by sharing links to searches and files and recording work in
                                    a search notebook
                                </li>
                            </ul>
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-outline-primary"
                                    title="Request a demo"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.bodyDemo}
                                    data-button-type="cta"
                                >
                                    Request a demo <ArrowRightBoxIcon className="ml-1 tw-inline" />
                                </a>
                            </Link>
                            <Link href="/use-cases/incident-response" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="tw-ml-8"
                                    title="Learn more"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Learn more
                                </a>
                            </Link>
                        </>
                    }
                    rightColumn={
                        <Blockquote
                            inline={false}
                            quote="Sourcegraph's search gave us confidence because we knew we wouldn't overlook anything: Sourcegraph returns all search results, it doesn't drop or elide them."
                            author="Simon Law, Staff Software Engineer, Quantcast"
                            logo={{
                                src: '/external-logos/quantcast-logo.svg',
                                alt: 'Quantcast',
                                href: '/case-studies/quantcast-large-scale-refactoring',
                            }}
                        />
                    }
                />
            </ContentSection>

            <hr />

            <ContentSection id="code-reuse">
                <TwoColumnSection
                    centerContent={true}
                    reverseOnMobile={true}
                    leftColumn={
                        <Blockquote
                            reverseBorder={true}
                            inline={false}
                            quote="If I'm developing code for a library that might draw charts, for example, we
                            don't want 30 different ways to draw a chart at FactSet. With Sourcegraph, I can search
                            the code to find other chart examples, and simply copy the code. This saves us time and
                            ensures consistency."
                            author="Joseph Majesky, Software Engineer, FactSet"
                            logo={{
                                src: '/external-logos/factset-logo.svg',
                                alt: 'Factset',
                                href: '/case-studies/factset-migrates-from-perforce-to-github',
                            }}
                        />
                    }
                    rightColumn={
                        <>
                            <h2 className="mb-3">Streamline code reuse</h2>
                            <h5>Stop wasting time rewriting code.</h5>
                            <p>
                                With Sourcegraph, you can find existing code libraries for reuse and avoid spending time
                                on problems you know a teammate already solved. This means a more secure and coherent
                                codebase and more time for you to spend on more interesting work. Sourcegraph makes it
                                easy to:
                            </p>
                            <ul className="my-4">
                                <li>
                                    Quickly discover code you can trust for reuse by typing your query and getting an
                                    answer
                                </li>
                                <li>
                                    Evaluate signals from multiple sources and tools to help you assess if you should
                                    use the code
                                </li>
                                <li>
                                    Safely and efficiently maintain code that is being reused and easily make changes
                                    everywhere with{' '}
                                    <Link href="/batch-changes/" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            title="Batch Changes"
                                            data-button-style={buttonStyle.primary}
                                            data-button-location={buttonLocation.bodyDemo}
                                            data-button-type="cta"
                                        >
                                            Batch Changes
                                        </a>
                                    </Link>
                                </li>
                                <li>Add a code monitor to alert you of commits using an out-of-date library</li>
                            </ul>
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-outline-primary"
                                    title="Request a demo"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.bodyDemo}
                                    data-button-type="cta"
                                >
                                    Request a demo <ArrowRightBoxIcon className="ml-1 tw-inline" />
                                </a>
                            </Link>
                            <Link href="/use-cases/code-reuse" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="tw-ml-8"
                                    title="Learn more"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Learn more
                                </a>
                            </Link>
                        </>
                    }
                />
            </ContentSection>

            <hr />

            <ContentSection id="code-health">
                <TwoColumnSection
                    centerContent={true}
                    leftColumn={
                        <>
                            <h2 className="mb-3">Boost code health</h2>
                            <h5>
                                Improve code posture with large-scale changes and track code health initiatives towards
                                completion.
                            </h5>
                            <p>
                                Engineering teams need to monitor code health across their entire codebase to track and
                                measure code quality consistently. Sourcegraph helps teams figure out the components of
                                code health they have all agreed on and work towards a healthier codebase.
                            </p>
                            <ul className="my-4">
                                <li>
                                    Search for and refactor references to deprecated services, libraries, URL patterns,
                                    and more across all your repositories with confidence
                                </li>
                                <li>
                                    Understand the impact of changes on health and find interventions for improving code
                                    health
                                </li>
                                <li>Efficiently tackle tech debt from legacy systems and acquisitions</li>
                            </ul>
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-outline-primary"
                                    title="Request a demo"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.bodyDemo}
                                    data-button-type="cta"
                                >
                                    Request a demo <ArrowRightBoxIcon className="ml-1 tw-inline" />
                                </a>
                            </Link>
                            <Link href="/use-cases/code-health" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="tw-ml-8"
                                    title="Learn more"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Learn more
                                </a>
                            </Link>
                        </>
                    }
                    rightColumn={
                        <Blockquote
                            inline={false}
                            quote="With the help of Sourcegraph, we were able to quickly look at all clients of an API and remove unused attributes that lived in different repositories, ultimately simplifying our APIs and speeding up developer iteration time."
                            author="Justin Phillips, Software Engineer, Lyft"
                            logo={{
                                src: '/external-logos/lyft-logo.svg',
                                alt: 'Lyft',
                                href: '/case-studies/lyft-monolith-to-microservices',
                            }}
                        />
                    }
                />
            </ContentSection>

            <div className="tw-border-t tw-border-t-gray-200">
                <CtaSection
                    title="Try Sourcegraph for free today"
                    description="You'll be searching your own code in 10 minutes. You can run it self-hosted (all of your code stays local and secure)."
                    cta1={{
                        text: 'Try Sourcegraph now',
                        link: '/get-started/self-hosted',
                        ctaStyle: 'primaryButton',
                    }}
                    cta2={{
                        text: 'Schedule a demo',
                        link: '/demo',
                        ctaStyle: 'outlineButton',
                    }}
                />
            </div>
        </div>
    </Layout>
)

export default UseCases
