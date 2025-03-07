import { ReactNode, FunctionComponent } from 'react'

import { buttonStyle, buttonLocation } from '@data'

import { Features, FeatureInfo } from './interfaces'
import { PricingPlanFeature } from './PricingPlanFeature'

const FEATURE_INFO: Record<keyof Features, FeatureInfo> = {
    codeSearch: {
        label: 'Code search',
        description:
            'Super-fast, intuitive, and powerful code search across 10,000s of repositories, with smart filters and more',
    },
    codeNavigation: {
        label: 'Code navigation',
        description: 'Code navigation for 30+ languages, with hovers, definitions, and references across repositories',
    },
    batchChanges: {
        label: 'Batch Changes (available add-on)',
        description: 'Apply and track large-scale code changes across all of your repositories and code hosts.',
    },
    batchChangesTrial: {
        label: 'Batch Changes (limited trial)',
        description:
            'Apply and track large-scale code changes across all of your repositories and code hosts (limited to 5 changesets per batch change).',
    },
    codeHostIntegration: {
        label: '1 code host integration',
        description:
            'Works with GitHub, GitLab, Bitbucket Server/Cloud, and other popular code hosts (or manually add repositories from any VCS)',
    },
    api: { label: 'Comprehensive API', description: 'A secure, robust GraphQL API for your repository and code data' },

    selfHosted: {
        label: 'Self-hosted deployment',
        description: 'Deploy with Docker, Docker Compose, or Kubernetes on your own infrastructure',
    },
    singleSignOn: {
        label: 'SSO/SAML',
        description: 'Single sign-on user authentication with SAML, OAuth, OpenID Connect, and HTTP auth proxy',
    },
    userAndAdminRoles: {
        label: 'User and admin roles',
        description:
            'Allow only certain users (site admins) to view and edit site configuration and repository/code host credentials',
    },
    multipleCodeHosts: {
        label: 'Multiple code hosts',
        description:
            'Sync, search, and browse code from more than one code host on your Sourcegraph instance (such as GitHub.com and GitLab)',
    },
    repositoryPermissions: {
        label: 'Repository permissions',
        description:
            'Apply the repository permissions from your code host to restrict which repositories a user can search and browse',
    },
    optimizedRepositoryUpdates: {
        label: 'Faster repository updates',
        description: "Optimized repository syncing, integrated with your code host's webhooks or event system",
    },
    privateExtensions: {
        label: 'Private extension registry',
        description:
            'Publish and use internal Sourcegraph extensions (instead of just using the Sourcegraph.com extension registry)',
    },
    deploymentMetricsAndMonitoring: {
        label: 'Deployment monitoring',
        description:
            'Extensive metrics and dashboards to monitor the performance and health of your Sourcegraph cluster',
    },
    backupRestore: {
        label: 'Backup and restore',
        description:
            'Officially supported scripts to back up and restore your Sourcegraph instance and all configuration and data',
    },
    customBranding: {
        label: 'Custom branding',
        description: 'Show your logo, icon, and other branding in the Sourcegraph UI',
    },
    onlineTraining: {
        label: 'Live training sessions',
        description: 'Personalized online training sessions for your organization with our Customer Engineering team',
    },
    customContractLegalBillingTerms: {
        label: 'Custom contracts/billing',
        description: "Need us to use your organization's legal contracts or purchasing system?",
    },
    unlimitedCode: {
        label: 'Unlimited code scale',
        description:
            'Free and Team tiers limit the total amount of searchable code. Enterprise offers options that scale to any size codebase.',
    },
    managedInstance: {
        label: 'Managed instance (available add-on)',
        description:
            'Managed instances are provisioned and managed by the Sourcegraph team so you can deploy Sourcegraph without having to worry about managing it.',
    },
    codeInsights: {
        label: 'Code Insights (available add-on)',
        description: 'Track and visualize trends in your entire codebase — kept automatically up to date.',
    },
    codeInsightsTrial: {
        label: 'Code Insights (limited trial)',
        description: `Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date 
        (limited to maximum of two global insights without a license).`,
    },
}

const FEATURE_ORDER: (keyof Features)[] = [
    'codeSearch',
    'codeNavigation',
    'codeHostIntegration',
    'selfHosted',
    'multipleCodeHosts',
    'unlimitedCode',
    'repositoryPermissions',
    'userAndAdminRoles',
    'batchChanges',
    'batchChangesTrial',
    'codeInsights',
    'codeInsightsTrial',
    'api',
    'singleSignOn',
    'optimizedRepositoryUpdates',
    'deploymentMetricsAndMonitoring',
    'privateExtensions',
    'backupRestore',
    'onlineTraining',
    'managedInstance',
    'customBranding',
    'customContractLegalBillingTerms',
]

interface Props {
    className?: string

    name: string
    planProperties: ReactNode
    price: ReactNode
    features: Features

    isFree: boolean

    buttonLabel: string
    buttonClassName: string
    buttonOnClick?: () => void
    buttonHref: string
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: FunctionComponent<Props> = ({
    className = '',

    name,
    price,
    planProperties,
    features,

    isFree,

    buttonLabel,
    buttonClassName,
    buttonOnClick,
    buttonHref,
}) => {
    const button = (
        <a
            className={`btn ${buttonClassName} w-50 min-w-250`}
            href={buttonHref}
            onClick={buttonOnClick}
            title={buttonLabel}
            data-button-style={buttonStyle.outline}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
        >
            {buttonLabel}
        </a>
    )

    return (
        <div className={`h-100 card ${className}`}>
            <h2 className="mt-3 mb-1 tw-text-center tw-font-semibold">{name}</h2>
            <div className="py-3 tw-text-center tw-flex tw-flex-col tw-items-center">
                {button}
                <div className="mt-4 mb-2 tw-pb-xxs tw-text-xl text-muted">{price}</div>
                {planProperties}
            </div>
            <ol className="px-6 py-3 ml-0 list-group list-group-flush">
                {!isFree ? (
                    <li className="bg-transparent border-0 tw-px-0 tw-text-xl list-group-item">
                        Everything in the Free tier, plus:
                    </li>
                ) : null}
                {FEATURE_ORDER.map(feature => (
                    <div key={FEATURE_INFO[feature].label}>
                        <PricingPlanFeature
                            info={FEATURE_INFO[feature]}
                            value={features[feature]}
                            tag="li"
                            className="bg-transparent border-0 tw-px-0 tw-text-xl list-group-item"
                        />
                    </div>
                ))}
            </ol>
        </div>
    )
}
