import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();

  // Render a loading state while fetching data
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="indPost">
      <h1>{post.title}</h1>
      {/* Render HTML content if it exists */}
      {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
    </div>
  );
};

export async function getServerSideProps({ params }) {
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
