import Link from 'next/link'
import Layout from '../../comps/Layout'

const PostLink = props => (
    <li>
        <Link href={`/blog/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title='Hello Next.js' />
                <PostLink title='Learning Next.js is incredible!' />
                <PostLink title='Deploying apps ' />
            </ul>
        </Layout>
    )
}