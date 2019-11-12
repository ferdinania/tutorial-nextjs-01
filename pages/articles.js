import Link from 'next/link'
import Layout from '../comps/Layout'

const PostLink = props => (
    <li>
        <Link href='/a/[id]' as={`/a/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)


export default function Article() {
    return (
        <Layout>
            <h1>My Supah Blog</h1>
            <ul>
                <PostLink id='hello-nextjs' />
                <PostLink id='learning-nextjs' />
                <PostLink id='I am rocks!' />
            </ul>
        </Layout>
    )
}