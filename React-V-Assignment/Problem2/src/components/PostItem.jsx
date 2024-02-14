const PostItem = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
