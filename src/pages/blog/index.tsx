import path from 'path'

import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import { GetStaticProps } from 'next'

import { PostsListPage, BLOG_TYPE_TO_INFO } from '@components'
import { BlogType, Post, PostIndexComponentProps } from '@interfaces/posts'
import { getSortedSlugs, loadMarkdownFile, getMarkdownFiles } from '@lib'
import { convertExcerptMarkdown } from '@util'

const CONTENT_PARENT_DIRECTORY = './content/'

const BlogHome: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => (
    <PostsListPage blogInfo={BLOG_TYPE_TO_INFO[BlogType.Blog]} posts={posts} allPosts={allPosts} />
)

export default BlogHome

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allSlugs = await getSortedSlugs('blogposts')
    if (!allSlugs) {
        return { notFound: true }
    }
    const files = await getMarkdownFiles()
    if (!files) {
        return { notFound: true }
    }
    const posts = await Promise.all(
        allSlugs.map(async slug => {
            const filePath = files.records[slug.slugPath].filePath
            const file = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as Post
            const content = convertExcerptMarkdown(truncate(file.content, { length: 300 }))
            return { frontmatter: file.frontmatter, excerpt: content, slugPath: slug.slugPath }
        })
    )

    const publishedPosts = posts.filter(post => post.frontmatter.published)
    return {
        props: {
            allPosts: publishedPosts,
            posts: publishedPosts.slice(0, 20),
            preview,
        },
    }
}
