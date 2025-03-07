import { FunctionComponent, useEffect, useRef, useState } from 'react'

import { MdiReactIconComponentType } from 'mdi-react'
import CachedIcon from 'mdi-react/CachedIcon'
import CheckboxMarkedCircleOutlineIcon from 'mdi-react/CheckboxMarkedCircleOutlineIcon'
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon'
import LaptopIcon from 'mdi-react/LaptopIcon'
import LockOutlineIcon from 'mdi-react/LockOutlineIcon'
import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface UseCases {
    icon: MdiReactIconComponentType
    title: string
    description: string
    link: {
        ['href']: string
        ['text']: string
    }
}

const useCases: UseCases[] = [
    {
        icon: LockOutlineIcon,
        title: 'Improve code security',
        description: 'Find, fix, and track vulnerable code quickly across your entire codebase.',
        link: {
            href: '/use-cases/code-security',
            text: 'Learn more about code security',
        },
    },
    {
        icon: ClockOutlineIcon,
        title: 'Onboard developers',
        description: 'Decrease time to first commit with codebase onboarding and knowledge sharing.',
        link: {
            href: '/use-cases/onboarding',
            text: 'Learn more about onboarding',
        },
    },
    {
        icon: CheckboxMarkedCircleOutlineIcon,
        title: 'Resolve incidents',
        description: 'Identify the root cause in code and fix the issue everywhere, faster.',
        link: {
            href: '/use-cases/incident-response',
            text: 'Learn more about incident response',
        },
    },
    {
        icon: CachedIcon,
        title: 'Promote code reuse',
        description: 'Find existing code for reuse and contribute to a more coherent codebase.',
        link: {
            href: '/use-cases/code-reuse',
            text: 'Learn more about code reuse',
        },
    },
    {
        icon: LaptopIcon,
        title: 'Boost code health',
        description: 'Improve code health with large-scale changes, and track key initiatives.',
        link: {
            href: '/use-cases/code-health',
            text: 'Learn more about code health',
        },
    },
]

const UseCases: FunctionComponent = () => {
    const box = useRef<HTMLDivElement | null>(null)
    const [boxHeight, setBoxHeight] = useState<number>(0)
    const bottomContainerPadding = 96
    const boxHalfHeight = `-${boxHeight / 2 + bottomContainerPadding}px`

    function getBoxHeight(): void {
        if (box.current) {
            setBoxHeight(box.current.clientHeight)
        }
    }

    useEffect(() => {
        if (box.current) {
            setBoxHeight(box.current?.clientHeight)
        }

        window.addEventListener('resize', getBoxHeight)

        return () => {
            window.removeEventListener('resize', getBoxHeight)
        }
    }, [])

    return (
        <ContentSection className="tw-relative">
            <div className="tw-text-center">
                <h2>Move fast &mdash; even in big codebases</h2>
            </div>

            <div className="tw-mx-auto mt-6 row max-w-900">
                {useCases.map(useCase => (
                    <div
                        key={useCase.title}
                        className="mb-6 col-sm-6 tw-flex tw-flex-col sm:tw-flex-row tw-items-center sm:tw-items-start"
                    >
                        <useCase.icon className="mb-4 tw-h-auto tw-text-violet-400 w-100 max-w-50 mr-sm-3 mb-sm-0" />
                        <div className="tw-text-center sm:tw-text-left">
                            <h4>{useCase.title}</h4>
                            <div className="tw-text-lg">
                                <p className="m-0">{useCase.description}</p>
                                {useCase.link && (
                                    <Link href={useCase.link.href}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            title={useCase.link.text}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
                                        >
                                            {useCase.link.text}
                                        </a>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={box}
                // eslint-disable-next-line react/forbid-dom-props
                style={{ marginBottom: boxHalfHeight }}
                className="tw-px-6 tw-py-16 tw-mx-auto tw-text-center sg-bg-gradient-venus sm:tw-p-16 xl:tw-px-24 xl:tw-py-16 xl:tw-mx-0 xl:tw-absolute tw-right-0 tw-max-w-[550px] tw-bottom-0 sm:tw-text-left tw-w-[90%]"
            >
                <h3 className="mb-4 pr-sm-0 pr-md-7 pr-xl-4 tw-font-semibold">
                    Want to use Sourcegraph at your company?
                </h3>
                <p className="tw-text-xl">
                    <Link href="/get-started/self-hosted" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="Get started"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.trySourcegraph}
                            data-button-type="cta"
                        >
                            Get started
                        </a>
                    </Link>{' '}
                    for free with up to 10 teammates or{' '}
                    <Link href="/demo">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="Request a demo"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            request a demo
                        </a>
                    </Link>{' '}
                    to learn about our enterprise plan and to see Sourcegraph in your own environment.
                    <Link href="/demo" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="tw-mt-8 btn btn-primary tw-block sm:tw-inline-block"
                            title="Request a demo"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                </p>
            </div>
        </ContentSection>
    )
}

export default UseCases
