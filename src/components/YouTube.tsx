import { FunctionComponent } from 'react'

interface YouTube {
    className?: string
    id: string
    title: string
    autoplay?: boolean
    captions?: boolean
    start?: number
    end?: number
    loop?: boolean
    controls?: boolean
    branding?: boolean
    showTitle?: boolean
}

/**
 * A responsive YouTube video player.
 * See https://developers.google.com/youtube/player_parameters for options.
 */
export const YouTube: FunctionComponent<YouTube> = ({
    className = '',
    id,
    title,
    autoplay = false,
    captions = false,
    start = 0,
    end = 0,
    loop = false,
    controls = true,
    branding = false,
    showTitle = false,
}) => (
    <figure>
        <div className={`video-embed embed-responsive embed-responsive-16by9 ${className}`}>
            <iframe
                className="embed-responsive-item"
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&cc_load_policy=${
                    captions ? 1 : 0
                }&start=${start}&end=${end}&loop=${loop ? 1 : 0}&controls=${controls ? 1 : 0}&modestbranding=${
                    branding ? 1 : 0
                }&rel=0`}
                allowFullScreen={true}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                title={title}
            />
        </div>
        {showTitle && <figcaption>{title}</figcaption>}
    </figure>
)
