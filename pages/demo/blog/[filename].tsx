import { staticRequest, gql, getStaticPropsForTina } from 'tinacms'

// Use the props returned by get static props (this can be deleted when the edit provider and tina-wrapper are moved to _app.js)
const BlogPage = (props) => {
  return (
    <div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1>{props.data.getPostsDocument.data.title}</h1>
        <div>{props.data.getPostsDocument.data.body}</div>
      </div>
      {/* you can delete this iframe (and page) once you are done getting started */}
      <iframe
        style={{ height: '80vh', width: '100%', border: 'none' }}
        src="https://tina.io/docs/tina-init-tutorial/?layout=false"
      ></iframe>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await getStaticPropsForTina({
    query: gql`
      query BlogPostQuery($relativePath: String!) {
        getPostsDocument(relativePath: $relativePath) {
          data {
            title
            body
          }
        }
      }
    `,
    variables: { relativePath: `${params.filename}.md` },
  })
  return {
    props: {
      ...tinaProps,
    },
  }
}

export const getStaticPaths = async () => {
  const postsListData = (await staticRequest({
    query: gql`
      query GetPostsList {
        getPostsList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })) as any

  return {
    paths: postsListData.getPostsList.edges.map((post) => ({
      params: { filename: post.node.sys.filename },
    })),
    fallback: false,
  }
}

export default BlogPage
