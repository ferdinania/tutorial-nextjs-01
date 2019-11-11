import { useRouter } from 'next/router'
import Layout from '../comps/Layout'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    let postCmp = <p>Nothing to show</p>
    if (slug) {
        postCmp = <p>My blog post: {slug}</p>
    }

    return (
        <Layout>
            {postCmp}
        </Layout>
    )
}

export default Post