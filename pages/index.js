import Link from 'next/link'
import Layout from '../comps/Layout'

function getPosts() {
    return [
        { id: 'hello-next-js', title: 'Hello Next.js' },
        { id: 'learning-next-js-is-awesome', title: 'Learning Next.js is awesome' },
        { id: 'deploy-next-js', title: 'Deploy Next.js App' },
    ]
}

const Index = () => (
    <Layout>
        <p>Hello Next.js</p>
        <ul>
            {getPosts().map(post => (
                <li key={post.id}>
                    <Link href='/a/[id]' as={`/a/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
            <style jsx>{`
                h1,
                a {
                    font-family: 'Arial';
                }
                ul {
                    padding: 0;
                }
                li {
                    list-style: none;
                    margin: 5px 0;
                }
                a {
                    text-decoration: none;
                    color: blue;
                }
                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </ul>
    </Layout>
)

export default Index