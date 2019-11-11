import Link from 'next/link'
import Layout from '../comps/Layout'

const Index = () => (
    <Layout>
        <p>Hello Next.js</p>
        <ul>
            <li>
                <Link href='/post?slug=anime-mas' as='/post/anime-mas'>Anime y mas</Link>
            </li>
            <li>
                <Link href='/post?slug=conociendo-next-js' as='/post/conociendo-next-js'>Conociendo Next.js</Link>
            </li>
            <li>
                <Link href='/post?slug=routing-pages' as='/post/routing-pages'>Routing pages</Link>
            </li>
        </ul>
    </Layout>
)

export default Index