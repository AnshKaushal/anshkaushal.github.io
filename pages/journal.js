import Link from 'next/link';

const Journal = ({ posts }) => {
  return (
    <div className='journal'>
      <h1>&lt;Journal By Ansh/&gt;</h1>
      {posts && posts.map((post) => (
        <div className='posts' key={post.id}>
          <Link href={`/post/${post.id}`}>
              <h2>{post.title}</h2>
          </Link>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://data.anshkaushal.codes/api/data');
  const data = await response.json();

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default Journal;
