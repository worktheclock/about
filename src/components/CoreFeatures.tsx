import { FunctionComponent, ReactNode, useEffect } from 'react'

import classNames from 'classnames'
import { startCase } from 'lodash'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

interface Video {
    mp4: string
    webm: string
}

interface VideoElement {
    el: HTMLVideoElement | null
    paused: boolean
}

interface Features {
    productFeature: string
    title: string
    description: string | ReactNode
    details: string[]
    ctaLink: string
    video: Video
}

export const features: Features[] = [
    {
        productFeature: 'code search',
        title: 'Find what you need: any code host, language, or repository',
        description:
            'Use Code Search to find what you need, across thousands of repositories and multiple code hosts, in milliseconds.',
        details: [
            'Search for snippets, commits, dependencies, or errors across your entire codebase',
            'Create code monitors to be alerted when known vulnerabilities or undesirable code is introduced',
            "Access all of your team's code in one place; never get stuck searching one repository or code host at a time",
        ],
        ctaLink: '/code-search',
        video: {
            mp4: '/animations/code-search.mp4',
            webm: '/animations/code-search.webm',
        },
    },
    {
        productFeature: 'code navigation',
        title: 'Navigate your codebase and your dependencies',
        description:
            'Follow symbol definitions and references across packages, dependencies, and repositories seamlessly.',
        details: [
            "Traverse your entire codebase with cross-repository 'Go to definition' and 'Find references'",
            'Navigate your code in your web browser to see any commit, on any branch, of any repository instantly',
            'Follow dependencies across repositories with confidence using precompiled data for speed and precision',
        ],
        ctaLink: '/code-search',
        video: {
            mp4: '/animations/code-intel.mp4',
            webm: '/animations/code-intel.webm',
        },
    },
    {
        productFeature: 'batch changes',
        title: 'Automate large-scale code changes',
        description: (
            <>
                Batch Changes allows you to automate code changes across your entire codebase. Move fast and fix things{' '}
                <em>safely</em>.
            </>
        ),
        details: [
            'Update legacy code, remove outdated patterns, and fix critical security issues across multiple repositories',
            'Track changes across your codebase without maintaining spreadsheets of places that need to be updated',
            'Automate fixing breaking changes introduced by library or package updates',
        ],
        ctaLink: '/batch-changes',
        video: {
            mp4: '/animations/batch-changes.mp4',
            webm: '/animations/batch-changes.webm',
        },
    },
    {
        productFeature: 'code insights',
        title: 'Track what really matters to you and your team',
        description:
            'With Code Insights, know how different initiatives in your codebase are progressing in real time so you can make data-driven decisions.',
        details: [
            'Track migrations, code smells, ownership, and versions with fully customizable dashboards',
            'Ensure that security vulnerabilities and deprecated packages get completely removed from your codebase',
            'Create visualizations that update automatically, provide historical trends, and pull directly from the source of truth: the code itself',
        ],
        ctaLink: '/code-insights',
        video: {
            mp4: '/animations/code-insights.mp4',
            webm: '/animations/code-insights.webm',
        },
    },
]

export const CoreFeatures: FunctionComponent = () => {
    useEffect(() => {
        const videos = features.map(
            (vid, index): VideoElement => ({
                el: document.querySelector(`.video-${index}`),
                paused: true,
            })
        )

        if (window.IntersectionObserver) {
            for (const vid of videos) {
                const observer = new IntersectionObserver(
                    entries => {
                        const currentVideo = entries[0]

                        if (!currentVideo.isIntersecting && !vid.paused) {
                            vid?.el?.pause()
                            vid.paused = true
                        } else if (vid.paused) {
                            vid?.el?.play()
                            vid.paused = false
                        }
                    },
                    { threshold: 1 }
                )

                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                observer.observe(vid.el!)
            }
        }
    }, [])

    return (
        <>
            <div className="tw-text-center mb-7">
                <h2>How teams use Sourcegraph</h2>
                <p className="tw-mx-auto max-w-500">
                    Sourcegraph's code intelligence platform is built with features that help you understand, fix, and
                    automate across your entire codebase.
                </p>
            </div>

            {features.map((feature, index) => (
                <div
                    key={feature.productFeature}
                    className={classNames('row tw-flex-col-reverse lg:tw-flex-row', {
                        'lg:tw-flex-row-reverse': index % 2,
                        'mb-8': index !== features.length - 1,
                    })}
                >
                    <div
                        className={classNames('col-lg-6', {
                            'lg:tw-pr-5xl lg:tw-pl-0': index % 2 === 0,
                            'lg:tw-pl-5xl lg:tw-pr-0': index % 2,
                        })}
                    >
                        <span className="tw-mb-2 tw-text-md tw-uppercase tw-font-semibold tw-block">
                            {feature.productFeature}
                        </span>
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                        <ul className="my-3">
                            {feature.details.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                        {feature.ctaLink.includes('http') ? (
                            <a
                                href={feature.ctaLink}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 btn btn-outline-primary"
                                title={`Learn more about ${startCase(feature.productFeature)}`}
                                data-button-style={buttonStyle.outline}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Learn more about {startCase(feature.productFeature)}
                            </a>
                        ) : (
                            <Link href={feature.ctaLink} passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="mt-2 btn btn-outline-primary"
                                    title={'Learn more about ' + startCase(feature.productFeature)}
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Learn more about {startCase(feature.productFeature)}
                                </a>
                            </Link>
                        )}
                    </div>

                    <div className="px-5 mb-6 tw-py-0 col-lg-6 mb-lg-0">
                        <video
                            className={`shadow w-100 max-w-550 tw-block tw-mx-auto tw-rounded video-${index}`}
                            autoPlay={false}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            controls={false}
                            data-cookieconsent="ignore"
                        >
                            <source type="video/webm" src={feature.video.webm} data-cookieconsent="ignore" />
                            <source type="video/mp4" src={feature.video.mp4} data-cookieconsent="ignore" />
                        </video>
                    </div>
                </div>
            ))}
        </>
    )
}
