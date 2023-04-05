import SinglePost from '../../components/single-post';

const SoloPostPage = ({ data }) => <SinglePost data={data} />;

export default SoloPostPage;

export async function getStaticPaths() {
  const data = await import('../../data/data.json');
  const allPosts = data.posts;

  const allPaths = allPosts.map((path) => {
    return {
      params: {
          id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { posts } = await import('../../data/data.json');
  const postData = posts.find((ev) => id === ev.id);

  return {
    props: { data: postData },
  };
}
