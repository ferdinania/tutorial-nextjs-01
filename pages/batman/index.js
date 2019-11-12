import Link from 'next/link'
import Layout from '../../comps/Layout'
import fetch from 'isomorphic-unfetch'

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(row => (
                <li key={row.id}>
                    <Link href='/batman/p/[id]' as={`/batman/p/${row.id}`}>
                        <a>{row.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index