import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

function Profile() {
  const { username } = useParams();
  const [allPosts, setAllPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles?per_page=100"); // fetch more
        const data = await res.json();
        setAllPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!loading && allPosts.length > 0) {
      const filtered = allPosts.filter((post) => post.user?.username === username);
      setUserPosts(filtered);
    }
  }, [loading, allPosts, username]);

  const profileUser = userPosts[0]?.user;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Info */}
        {loading ? (
          <p className="text-center text-gray-600">Loading profile...</p>
        ) : profileUser ? (
          <div className="bg-white rounded-xl p-6 shadow mb-6 text-center">
            <img
              src={profileUser.profile_image}
              alt="Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-3 border"
            />
            <h2 className="text-2xl font-bold">@{profileUser.username}</h2>
            <p className="text-gray-500 text-sm">🧑‍💻 Developer on DevConnect</p>
          </div>
        ) : (
          <p className="text-center text-red-500 font-semibold">
            User @{username} not found or has no posts.
          </p>
        )}

        {/* Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Posts by @{username}</h3>
          {userPosts.length > 0 ? (
            userPosts.map((post) => <Card key={post.id} post={post} />)
          ) : (
            !loading && <p className="text-gray-600">No posts found for this user.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
