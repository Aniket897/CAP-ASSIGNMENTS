import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import PostItem from "./components/PostItem";
import Pagination from "./components/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error reset={fetchPosts} />;
  }
  return (
    <div>
      <div className="postContainer">
        {posts.map((item, index) => (
          <PostItem key={index} post={item} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        next={() => {
          setPage(page + 1);
        }}
        prev={() => {
          if (page == 1) return;
          setPage(page - 1);
        }}
      />
    </div>
  );
};

export default App;
