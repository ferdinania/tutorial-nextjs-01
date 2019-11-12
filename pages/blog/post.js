import { useRouter } from 'next/router'
import Layout from '../../comps/Layout'

const Page = () => {
    const router = useRouter()

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>Este es el contenido del post</p>
        </Layout>
    )
}

export default Page