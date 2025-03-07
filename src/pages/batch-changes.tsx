import { FunctionComponent } from 'react'

import {
    Blockquote,
    ContentSection,
    CtaSection,
    Figure,
    Hero,
    HubSpotForm,
    Layout,
    Tabs,
    TwoColumnSection,
    Video,
    YouTube,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const batchChangesDemoFormURL = '/contact/request-batch-changes-demo'

export const BatchChangesPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Batch Changes - Large-Scale Code Changes',
            description:
                'Automate large-scale changes with Sourcegraph Batch Changes. Keep your code up to date and pay down tech debt across all repositories and code hosts.',
        }}
        hero={
            <Hero
                variant="lightNebulousAurora"
                product="batch changes"
                title={'Automate large-scale\ncode changes'}
                subtitle="Keep your code up to date, fix critical security issues, and pay down tech debt across all of your repositories with Batch Changes."
                cta={<HubSpotForm masterFormName="contactEmail" chiliPiper={true} />}
                displayUnderNav={true}
            />
        }
    >
        {/* Overview */}
        <ContentSection>
            <div className="tw-text-center">
                <h2 className="mb-3">Change code everywhere with a single declarative file</h2>
                <div className="row tw-justify-center">
                    <p className="col-md-8">
                        Batch Changes gives you a declarative structure for finding and modifying code across all of
                        your repositories. With a simple UI, it is easy to track and manage all of your changesets
                        through checks and code reviews until each change is merged.
                    </p>
                </div>
                <div className="row">
                    <div className="mt-4 col-md-6">
                        <Figure
                            src="/batch-changes/asking_developers_to_update_repos.svg"
                            alt="Graphic of many developers individually updating repositories, while some are not updating their repositories."
                            caption={
                                <div className="mt-5">
                                    Asking <strong>developers</strong> to update repositories
                                </div>
                            }
                            centre={true}
                        />
                    </div>
                    <div className="mt-4 col-md-6">
                        <Figure
                            src="/batch-changes/using_batch_changes_to_update_repos.svg"
                            alt="Graphic of a single developer updating a lot of repositories."
                            caption={
                                <div className="mt-5">
                                    Using <strong className="text-purple">Batch Changes</strong> to update repositories
                                </div>
                            }
                            centre={true}
                        />
                    </div>
                </div>
            </div>
        </ContentSection>

        {/* Architecture */}
        <ContentSection parentClassName="sg-bg-gradient-venus">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-3 tw-max-w-md">Search, define, execute, and track code changes</h2>
                        <ul>
                            <li className="mt-2">
                                Find all occurrences of code to change with Sourcegraph{' '}
                                <a
                                    href="http://about.sourcegraph.com/"
                                    title="universal code search"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    universal code search
                                </a>
                            </li>
                            <li className="mt-2">
                                Programmatically define changes by creating a declarative specification file
                            </li>
                            <li className="mt-2">Execute specifications via a lightweight CLI</li>
                            <li className="mt-2">
                                Track changeset lifecycle status across multiple code hosts via the Sourcegraph UI
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Video
                        source={{
                            mp4: 'batch-changes/how-it-works',
                            webm: 'batch-changes/how-it-works',
                        }}
                        loop={true}
                        title="Batch Changes: How it works"
                        caption="Search, define, execute, and track code changes"
                    />
                }
            />
        </ContentSection>

        {/* Social proof */}
        <ContentSection>
            <div className="row tw-justify-center">
                <div className="col-lg-10">
                    <Blockquote
                        quote="The ability to automate downstream changes that Sourcegraph Batch Changes provides is a key
                        capability for reducing the hidden burden of updates pushed across teams and enabling us to
                        increase our engineering velocity."
                        author="Jared Hodge, Sr. Manager Developer Experience"
                        logo={{
                            src: '/external-logos/indeed-logo.svg',
                            alt: 'Indeed',
                        }}
                    />
                </div>
            </div>
        </ContentSection>

        {/* Track */}
        <ContentSection parentClassName="tw-bg-gray-100">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-3 tw-max-w-sm">Track changes from creation to merge</h2>
                        <p>Tracking changes to many repositories requires spreadsheets and manual labor.</p>
                        <p>
                            With Batch Changes, you can automatically track changeset lifecycle status, like check
                            state, reviews, and merge status via the Sourcegraph UI so you can get the changesets
                            merged.
                        </p>
                    </>
                }
                rightColumn={
                    <Video
                        source={{
                            mp4: 'batch-changes/creation-to-merge',
                            webm: 'batch-changes/creation-to-merge',
                        }}
                        loop={true}
                        title="Batch Changes: Creation to merge"
                    />
                }
            />
        </ContentSection>

        {/* Use Cases */}
        <ContentSection>
            <h2 className="mb-5 tw-text-center">How developers are using Batch Changes </h2>
            <Tabs
                tabs={[
                    {
                        title: 'Configuration',
                        content: (
                            <div className="mt-5 row tw-justify-center">
                                <div className="col-lg-8">
                                    <p>
                                        Quickly edit every CI, build, and other configuration files to make changes such
                                        as altering steps, migrating versions, or changing base images.
                                    </p>
                                    <img
                                        className="tw-mt-6 tw-h-auto tw-w-full"
                                        width="750"
                                        height="400"
                                        src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/update-circle-ci-username.png"
                                        alt="Batch spec for updating the username in Circle CI configurations"
                                    />
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: 'Refactoring',
                        content: (
                            <div className="mt-5 row tw-justify-center">
                                <div className="col-lg-8">
                                    <p>
                                        Use language-aware tooling of your choice to perform complex refactors like
                                        updating an API and its function calls or replacing libraries entirely.
                                    </p>
                                    <img
                                        className="tw-mt-6 tw-h-auto tw-w-full"
                                        width="850"
                                        height="380"
                                        src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/comby-sprintf-to-itoa.png"
                                        alt="Batch spec for using Comby to refactor Go code"
                                    />
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: 'Security',
                        content: (
                            <div className="mt-5 row tw-justify-center">
                                <div className="col-lg-8">
                                    <p>
                                        Refactor code to replace insecure functions, update vulnerable packages, or
                                        modify container configurations across hundreds of repositories.
                                    </p>
                                    <img
                                        className="tw-mt-6 tw-h-auto tw-w-full"
                                        width="750"
                                        height="472"
                                        src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/pin-docker-images.png"
                                        alt="Batch spec for pinning Docker base images to specific versions"
                                    />
                                </div>
                            </div>
                        ),
                    },
                ]}
            />
        </ContentSection>

        {/* Social proof */}
        <ContentSection parentClassName="tw-bg-gray-100">
            <div className="row tw-justify-center md:tw-pt-sm">
                <div className="col-lg-10">
                    <Blockquote
                        quote="Sourcegraph Batch Changes gives us the confidence we need to understand the total impact of
                        large-scale code changes before we make them. This enables the entire team to make more
                        impactful decisions more often."
                        author="Trent Grover, Director of Architecture - Client Technologies, Workiva"
                        logo={{
                            src: '/external-logos/workiva-vector-logo.svg',
                            alt: 'Workiva',
                        }}
                    />
                </div>
            </div>
        </ContentSection>

        {/* Demo */}
        <ContentSection>
            <h2 className="mb-3 tw-text-center">See Batch Changes in action</h2>
            <div className="row tw-justify-center md:tw-pt-sm">
                <div className="col-lg-8">
                    <YouTube title="Sourcegraph Batch Changes demo" id="eOmiyXIWTCw" />
                </div>
            </div>
        </ContentSection>

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
    </Layout>
)

export default BatchChangesPage
