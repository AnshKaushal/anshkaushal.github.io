const Post = ({ post }) => {
  return (
    <div className="indPost">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch('https://data.anshkaushal.codes/api/data');
  const data = await response.json();

  const paths = data.posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch('https://data.anshkaushal.codes/api/data');
  const data = await response.json();

  const post = data.posts.find((post) => post.id.toString() === params.id);

  return {
    props: {
      post,
    },
  };
}

export default Post;
