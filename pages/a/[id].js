import { useRouter } from 'next/router'
import Layout from '../../comps/Layout'

export default function Post() {
    const router = useRouter()

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>Este es contenido dinamico del post</p>
        </Layout>
    )
}