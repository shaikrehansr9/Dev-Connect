import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import CreatePost from "./CreatePost";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {localStorage.getItem('token') != 'demon_token' && (
          <>
            <div className="min-h-screen pt-28 pb-20 px-4 bg-gray-100 text-gray-800 font-sans">
              <div className="max-w-6xl mx-auto space-y-16 animate-fadeInSlow">

                {/* Header */}
                <div className="text-center animate-slideDown">
                  <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 tracking-tight drop-shadow-lg">
                    About DevConnect
                  </h1>
                  <p className="mt-3 text-lg text-gray-600">A developer-driven platform built for connection and collaboration</p>
                </div>

                {/* What is DevConnect */}
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-2xl hover:scale-[1.01] transition duration-300 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">📘 What is DevConnect?</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <strong>DevConnect</strong> is a full-stack social media app tailored for developers to post ideas, share content, and interact with the tech community. Built with the MERN stack and styled using Tailwind CSS, it combines performance and modern UI into one powerful platform.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-2xl hover:scale-[1.01] transition duration-300 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">✨ Core Features</h2>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li className="hover:text-blue-800 transition">🔐 Secure user authentication</li>
                    <li className="hover:text-blue-800 transition">📝 Create posts with title, media & description</li>
                    <li className="hover:text-blue-800 transition">📰 Real-time public post feed</li>
                    <li className="hover:text-blue-800 transition">🎨 Clean, responsive Tailwind UI</li>
                    <li className="hover:text-blue-800 transition">⚡ Integrated APIs with Axios</li>
                    <li className="hover:text-blue-800 transition">🌐 MongoDB Atlas for scalable storage</li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-2xl hover:scale-[1.01] transition duration-300 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">🛠 Technology Stack</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-800">
                    <span className="hover:text-amber-500 transition">⚛️ React.js</span>
                    <span className="hover:text-amber-500 transition">📦 Express.js</span>
                    <span className="hover:text-amber-500 transition">🌿 MongoDB</span>
                    <span className="hover:text-amber-500 transition">🧠 Node.js</span>
                    <span className="hover:text-amber-500 transition">🎨 Tailwind CSS</span>
                    <span className="hover:text-amber-500 transition">🔗 Axios</span>
                  </div>
                </div>

                {/* Coming Soon */}
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-2xl hover:scale-[1.01] transition duration-300 animate-slideUp">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">🚀 Coming Soon</h2>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li className="hover:text-amber-500 transition">💬 Comments on each post</li>
                    <li className="hover:text-amber-500 transition">🧾 User profile pages</li>
                    <li className="hover:text-amber-500 transition">📸 Inline media previews</li>
                  </ul>
                </div>

                {/* Developer Info */}
                <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-2xl hover:scale-[1.01] transition duration-300 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">👨‍💻 Built By</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <strong>Shaik Rehan - <a href="https://github.com/shaikrehansr9">My github</a></strong> designed and developed DevConnect to explore and master the full MERN stack while building a meaningful and production-grade project. This app demonstrates real-world auth, API communication, and modern frontend design.
                  </p>
                </div>

                {/* Final Quote */}
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-10 rounded-xl text-center shadow-lg animate-pulse transition hover:shadow-amber-200/50">
                  <blockquote className="text-2xl italic text-white font-semibold">
                    “Real learning begins when you start building.”
                  </blockquote>
                  <p className="mt-4 text-amber-300">— The DevConnect Journey</p>
                </div>

              </div>
            </div>

          </>

        )}
        {localStorage.getItem('token') == 'demon_token' && (
          <>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">📢 Your Feed</h2>
              {posts.map((post) => (
                <Link to={`/post/${post.id}`} key={post.id}>
                  <Card post={post} />
                </Link>
              ))}
            </div>
            {/* ✍️ Right: Create Post */}

            <div className="w-full md:w-1/3">
              <CreatePost onPostCreated={addNewPost} />
            </div>
          </>
        )};
      </div>
    </div>


  )

};


export default Feed;
