import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Card({ post }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.positive_reactions_count || 0);

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow p-5 mb-6 hover:shadow-md cursor-pointer transition"
      onClick={handleClick}
    >
      <div className="flex items-center mb-3">
        <Link
          to={`/profile/${post.user?.username}`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={post.user?.profile_image}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-3 hover:scale-105 transition"
          />
        </Link>
        <Link
          to={`/profile/${post.user?.username}`}
          className="text-blue-600 font-semibold hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          @{post.user?.username}
        </Link>
      </div>

      {/* 📝 Post Content */}
      <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
      <p className="text-gray-700 mt-1">{post.description}</p>

      {/* 🖼️ Media */}
      {post.social_image && (
        <img
          src={post.social_image}
          alt="Post media"
          className="rounded-lg mt-3 border"
        />
      )}

      {/* ❤️ Like & 💬 Comment Count */}
      <div className="mt-3 flex items-center gap-5 text-sm text-gray-600">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
            setLikes((prev) => prev + (liked ? -1 : 1));
          }}
          className={liked ? "text-red-500 font-semibold" : "hover:text-red-500"}
        >
          {liked ? "❤️" : "🤍"} {likes}
        </button>
        <span>💬 {post.comments_count || 0} Comments</span>
      </div>
    </div>
  );
}

export default Card;
