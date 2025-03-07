import { FunctionComponent } from 'react'

import BullsEyeArrowIcon from 'mdi-react/BullseyeArrowIcon'
import LighteningBoltOutlineIcon from 'mdi-react/LightningBoltOutlineIcon'
import RocketLaunchOutlineIcon from 'mdi-react/RocketLaunchOutlineIcon'
import TrendingUpIcon from 'mdi-react/TrendingUpIcon'
import Link from 'next/link'

import { CodeInsightExample } from '@code-insights/CodeInsightsExamples'
import {
    SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA,
    ALPINE_VERSIONS_INSIGHT,
    LOG_4_J_INCIDENT_INSIGHT,
    DEPRECATED_API_USAGE_BY_TEAM,
    LINTER_OVERRIDES,
    REPOS_WITH_CI_SYSTEM,
} from '@code-insights/mock-data'
import { CodeInsightExampleType } from '@code-insights/types'
import {
    Blockquote,
    ContentSection,
    CustomCarousel,
    Hero,
    HubSpotForm,
    Layout,
    ResourceList,
    TabCarousel,
    Tabs,
    TemplateCodeBlock,
    TwoColumnSection,
    Video,
    YouTube,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const items = [
    {
        title: 'Track migrations, adoption, and deprecations',
        text: (
            <CodeInsightExample type={CodeInsightExampleType.Search} data={SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA} />
        ),
    },
    {
        title: 'Detect and track versions of languages or packages',
        text: <CodeInsightExample type={CodeInsightExampleType.Capture} data={ALPINE_VERSIONS_INSIGHT} />,
    },
    {
        title: 'Ensure removal of security vulnerabilities',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={LOG_4_J_INCIDENT_INSIGHT} />,
    },
    {
        title: 'Understand code by team',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={DEPRECATED_API_USAGE_BY_TEAM} />,
    },
    {
        title: 'Track code smells and health',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={LINTER_OVERRIDES} />,
    },
    {
        title: 'Visualize configurations and services',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={REPOS_WITH_CI_SYSTEM} />,
    },
]

const templates = {
    migrations: [
        {
            header: 'Global CSS to CSS modules',
            description: 'Track migration from global CSS to CSS modules.',
            queries: [
                <>
                    <span className="tw-text-blue-400">select:</span>file{' '}
                    <span className="tw-text-blue-400">lang:</span>SCSS <span className="tw-text-blue-400">file:</span>
                    module <span className="tw-text-blue-400">patterntype:</span>regexp{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
                <>
                    <span className="tw-text-blue-400">type:</span>file <span className="tw-text-blue-400">lang:</span>
                    scss
                    <span className="tw-text-blue-400">-file:</span>module{' '}
                    <span className="tw-text-blue-400">patterntype:</span>regexp{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python 2 to Python 3',
            description: 'How far along is the Python major version migration?',
            queries: [
                <>
                    #!/usr/bin/env python3 <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
                <>
                    #!/usr/bin/env python2 <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'React Class to Function Components',
            description: "What's the status of migrating to React function components from class components?",
            queries: [
                <>
                    <span className="tw-text-blue-400">patterntype:</span>regexp
                    const\s\w+:\s(React\.)?FunctionComponent <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
                <>
                    <span className="tw-text-blue-400">patterntype:</span>regexp extends\s(React\.)?(Pure)?Component{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Config or docs file',
            description: 'How many repos contain a config or docs file in a specific directory?',
            queries: [
                <>
                    <span className="tw-text-blue-400">select:</span>repo{' '}
                    <span className="tw-text-blue-400">file:</span>
                    docs/*/new_config_filename <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
    ],
    versionTracking: [
        {
            header: 'Java versions',
            description: 'Detect and track which Java versions are present or most popular in your code base.',
            queries: [
                <>
                    {'<java.version>(.*)</java.version>'} <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'All log4j versions',
            description: 'Which log4j versions are present, including vulnerable versions?',
            queries: [
                <>
                    <span className="tw-text-blue-400">lang:</span>gradle org\.apache\.logging\.log4j['"] 2\.([0-9]+)\.{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'License types in the codebase',
            description: 'See the breakdown of licenses from package.json files.',
            queries: [
                <>
                    <span className="tw-text-blue-400">file:</span>package.json "license":\s"(.*)"{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python versions',
            description: "Which python versions are in use or haven't been updated?",
            queries: [
                <>
                    #!/usr/bin/env python([0-9]\.[0-9]+) <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
    ],
    security: [
        {
            header: 'Vulnerable open source library',
            description:
                'Confirm that a vulnerable open source library has been fully removed, or the speed of the deprecation.',
            queries: [
                <>
                    vulnerableLibrary@14.3.9 <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'How many tests are skipped',
            description: 'See how many tests have skip conditions.',
            queries: [
                <>
                    this.skip() <span className="tw-text-blue-400">patterntype:</span>literal{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Vulnerable log4j versions',
            description: 'What vulnerable log4j versions are present?',
            queries: [
                <>
                    <span className="tw-text-blue-400">lang:</span>gradle org\.apache\.logging\.log4j['"]
                    2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+){' '}
                    <span className="tw-text-blue-400">patterntype:</span>regexp{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'API keys',
            description: 'How quickly do we notice and remove API keys when they are committed?',
            queries: [
                <>
                    regexMatchingAPIKey <span className="tw-text-blue-400">patterntype:</span>regexp{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
    ],
    codeHealth: [
        {
            header: 'TODOs',
            description: 'How many TODOs are in a specific part of the codebase (or all of it)?',
            queries: [
                <>
                    TODO <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Commits with "revert"',
            description: 'How frequently are there commits with “revert” in the commit message?',
            queries: [
                <>
                    <span className="tw-text-blue-400">type:</span>commit revert{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Linter override rules',
            description: 'How many linter override rules exist?',
            queries: [
                <>
                    <span className="tw-text-blue-400">file:</span>\.eslintignore .\n{' '}
                    <span className="tw-text-blue-400">patterntype:</span>regexp{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Deprecated calls',
            description: 'How many times are deprecated calls used?',
            queries: [
                <>
                    <span className="tw-text-blue-400">lang:</span>java @deprecated{' '}
                    <span className="tw-text-blue-400">archived:</span>no{' '}
                    <span className="tw-text-blue-400">fork:</span>no
                </>,
            ],
        },
    ],
}

const blogResourceItems = [
    {
        title: 'How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights',
        description:
            'How our Frontend Platform team used codemods to automate a challenging global migration to CSS modules, and Code Insights to track and communicate progress.',
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migrating-to-css-modules.png',
            alt: 'Migrating to CSS modules with codemods and code insights blog thumbnail',
        },
        href: '/blog/migrating-to-css-modules-with-codemods-and-code-insights',
    },
    {
        title: '5 key traits of a code intelligence platform',
        description:
            'Sourcegraph is more than search. Learn how the code intelligence platform helps development teams quickly get unblocked, resolve issues faster, and gain insights to make better decisions.',
        type: 'Guide',
        img: {
            src: '/blog/thumbnails/dark-multi-grid.jpg',
            alt: 'Grid background with abstract blue and pink hues',
        },
        href: '/guides/key-traits-of-a-code-intelligence-platform.pdf',
    },
    {
        title: 'Dive into documentation',
        description: 'Learn everything you need to know about Code Insights.',
        type: 'Docs',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-docs.png',
            alt: 'Code insights documentation thumbnail',
        },
        href: 'https://docs.sourcegraph.com/code_insights',
    },
]

const CodeInsightsPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Insights',
            description:
                'Draw insights from your codebase about how different initiatives are tracking over time. Code Insights is now generally available for teams of all sizes.',
        }}
        className="code-insights-page"
        hero={
            <Hero
                variant="lightNebulousVenus2"
                product="code insights"
                title={'Track what really matters\nto you and your team.'}
                subtitle="Transform your code into a queryable database to create customizable, visual dashboards in seconds."
                cta={<HubSpotForm masterFormName="contactEmail" chiliPiper={true} />}
                displayUnderNav={true}
            />
        }
    >
        <ContentSection>
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-3">
                            Finally, useful engineering metrics{' '}
                            <span>
                                <i>you</i>
                            </span>{' '}
                            define.
                        </h2>
                        <p>
                            Forget about inaccurate spreadsheets, manual processes, and missing historical data. You can{' '}
                            <strong>track everything in your codebase</strong>, from migrations to code smells, in a
                            seamless and precise way. Make data-driven decisions using visualizations based on the power
                            and accuracy of Sourcegraph Code Search.
                        </p>
                    </>
                }
                rightColumn={
                    <Video
                        source={{
                            mp4: 'code_insights/code-insights-720',
                            webm: 'code_insights/code-insights-720',
                        }}
                        title="Code Insights"
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <div className="tw-max-w-screen-lg tw-mx-auto">
                <Blockquote
                    headline="Trusted by engineering teams worldwide"
                    quote="As we've grown, so has the need to better track and communicate our progress and
                    goals across the engineering team and broader company. With Code Insights, our data and
                    migration tracking is accurate across our entire codebase, and our engineers and
                    managers can shift out of manual spreadsheets and spend more time working on
                    code."
                    border={false}
                    author="Balázs Tóthfalussy, Engineering Manager, Prezi"
                    logo={{ src: '/external-logos/prezi-logo.svg', alt: 'Prezi logo', href: 'https://prezi.com' }}
                />
            </div>
        </ContentSection>

        <ContentSection>
            <div className="flex-wrap tw-flex">
                <h2 className="mb-3 tw-text-center w-100">Engineering leadership with superpowers</h2>
                <p className="tw-text-center icon-subheader w-100">
                    Code Insights provides reliable real-time reporting directly from the codebase, making engineering
                    leaders and their teams more effective.
                </p>
                <div className="tw-flex tw-flex-col col-lg-6 lg:tw-px-3xl tw-justify-around">
                    <div className="py-3 tw-flex lg:tw-py-md">
                        <div className="mr-4">
                            <BullsEyeArrowIcon className="icon tw-text-blurple-400" size={70} />
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <h5>Set goals</h5>
                            <p className="icon-paragraph">Measure goals and progress in your codebase</p>
                        </div>
                    </div>
                    <div className="py-3 tw-flex lg:tw-py-md">
                        <div className="mr-4 icon">
                            <LighteningBoltOutlineIcon className="icon tw-text-blurple-400" size={70} />
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <h5>Plan proactively</h5>
                            <p className="icon-paragraph">
                                Stay on top of engineering initiatives and catch issues before they escalate
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col col-lg-6 lg:tw-px-3xl tw-justify-around">
                    <div className="py-3 tw-flex lg:tw-py-md">
                        <div className="mr-4">
                            <TrendingUpIcon className="icon tw-text-blurple-400" size={70} />
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <h5>Track ownership & trends</h5>
                            <p className="icon-paragraph">Tie trends and metrics to owners on the teams</p>
                        </div>
                    </div>
                    <div className="py-3 tw-flex lg:tw-py-md">
                        <div className="mr-4">
                            <RocketLaunchOutlineIcon className="icon tw-text-blurple-400" size={70} />
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <h5>Celebrate progress</h5>
                            <p className="icon-paragraph">Visualize the momentum and motivate your teammates</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContentSection>

        <ContentSection parentClassName="tw-bg-gray-100">
            <CustomCarousel items={items} hasImages={true} title="How engineering teams use Code Insights" />
        </ContentSection>

        <ContentSection>
            <h2 className="mb-3 tw-text-center">See Code Insights in action</h2>
            <div className="row tw-justify-center md:tw-pt-sm">
                <div className="col-lg-8">
                    <YouTube id="fMCUJQHfbUA" title="Sourcegraph Code Insights demo" />
                </div>
            </div>
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus tw-hidden md:tw-block">
            <h2 className="mb-5 tw-text-center">Popular Code Insights templates</h2>
            <Tabs
                tabs={[
                    {
                        title: 'Migrations',
                        content: (
                            <div className="flex-wrap mt-5 w-100 tw-flex">
                                {templates.migrations.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                    {
                        title: 'Version Tracking',
                        content: (
                            <div className="flex-wrap mt-5 w-100 tw-flex tw-justify-center">
                                {templates.versionTracking.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                    {
                        title: 'Security',
                        content: (
                            <div className="flex-wrap mt-5 w-100 tw-flex tw-justify-center">
                                {templates.security.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                    {
                        title: 'Code Health',
                        content: (
                            <div className="flex-wrap mt-5 w-100 tw-flex tw-justify-center">
                                {templates.codeHealth.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                ]}
            />

            <div className="tw-w-full tw-text-center">
                <a
                    href="https://docs.sourcegraph.com/code_insights"
                    title="Code Insights on docs."
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See Docs for more use cases
                </a>
            </div>
        </ContentSection>

        {/* Use Cases Carousel */}
        <ContentSection parentClassName="sg-bg-gradient-venus tw-block md:tw-hidden">
            <h2 className="mb-5 tw-text-center">Popular Code Insights templates</h2>
            <Tabs
                tabs={[
                    {
                        title: 'Migrations',
                        content: (
                            <div className="mt-5 w-100 tw-justify-center">
                                <TabCarousel items={templates.migrations} autoAdvance={true} />
                            </div>
                        ),
                    },
                    {
                        title: 'Version Tracking',
                        content: (
                            <div className="mt-5 w-100 tw-justify-center">
                                <TabCarousel items={templates.versionTracking} autoAdvance={true} />
                            </div>
                        ),
                    },
                    {
                        title: 'Security',
                        content: (
                            <div className="mt-5 w-100 tw-justify-center">
                                <TabCarousel items={templates.security} autoAdvance={true} />
                            </div>
                        ),
                    },
                    {
                        title: 'Code Health',
                        content: (
                            <div className="mt-5 w-100 tw-justify-center">
                                <TabCarousel items={templates.codeHealth} autoAdvance={true} />
                            </div>
                        ),
                    },
                ]}
            />
            <div className="tw-text-center">
                <a
                    className="py-4 tw-px-0 col-7"
                    href="https://docs.sourcegraph.com/code_insights"
                    title="Code Insights on docs."
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See Docs for more use cases
                </a>
            </div>
        </ContentSection>

        <ContentSection parentClassName="tw-bg-gray-100">
            <div className="row tw-flex tw-flex-col tw-justify-start">
                <div className="mb-5 col-lg-8 tw-flex tw-flex-col tw-justify-start">
                    <h2>Get started with Code Insights</h2>
                    <p>
                        Create a code insight in 60 seconds and get historical data for previously untracked metrics —
                        data backfills automatically.
                    </p>
                </div>
                <div className="tw-pt-1 col-lg-7 tw-flex tw-flex-col">
                    <Link href="/contact/request-code-insights-demo" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="mr-3 btn btn-primary col-4"
                            title="Request a Demo of Code Insights."
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.trySourcegraph}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                </div>
            </div>
        </ContentSection>

        <ResourceList items={blogResourceItems} title="Learn More" />
    </Layout>
)

export default CodeInsightsPage
