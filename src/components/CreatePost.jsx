// import {useState} from "react";
// import axios from "axios";

// function CreatePost(){
//     const[content,setCount]=useState("");
//     const[media,setMedia]=useState(null);
//     const [error,setError]=useState('');

//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         const formData=new FormData();
//         formData.append("content",content);
//         if(media) formData.append("media",media);
//         try{
//             const token=localStorage.getItem("token");
//             await axios.post("http://localhost:5173/api/posts",formData,{
//                 headers:{
//                     "Content-Type":"multipart/form-data",
//                     Authorization:`Bearer ${token}`,
//                 }
//             });
//             alert("Post created!");
//             setContent("");
//             setMedia(null);
//         }
//         catch(err){
//             setError('Incorrect ,please try again');
//         }

//     };
//     return(
//         <form className="form" onSubmit={handleSubmit} id="form">
//             <textarea 
//                 placeholder="what's on your mind? "
//                 value={content} onChange={(e) => setContent(e.target.value)} required id="textArea"/>
//             <input type="file" accept="image/*,video/*" 
//                 onChange={(e) => setMedia(e.target.files[0])} id="userinput"/>
//         </form>
//     );
// }
// export default CreatePost;
// import { useState } from "react";
// // axios is not needed as we are not making an actual API call here
// // import axios from "axios"; 

// function CreatePost({ onPostCreated }) {
//     const [content, setContent] = useState("");
//     const [media, setMedia] = useState(null);
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [addPost, setAddPost] = useState({ title: '', description: '', media: '', username: 'you' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccessMessage('');

//         if (!content && !media) {
//             setError("Please enter some content or select a file.");
//             return;
//         }

//         setIsLoading(true);
//         try {
//             await new Promise(resolve => setTimeout(resolve, 1500));

//             // ✅ NEW: Create new post object
//             const newPost = {
//                 title: "My Post", // you can extend with content too
//                 description: content,
//                 social_image: media ? URL.createObjectURL(media) : '',
//                 user: {
//                     username: 'you',
//                     profile_image: 'https://via.placeholder.com/40'
//                 },
//                 positive_reactions_count: 0,
//                 comments_count: 0,
//                 url: "#"
//             };

//             // ✅ Call parent callback to add post to feed
//             onPostCreated(newPost);

//             setSuccessMessage("Your post has been successfully shared!");
//             setContent("");
//             setMedia(null);
//             const fileInput = document.getElementById("userinput");
//             if (fileInput) fileInput.value = '';

//         } catch (err) {
//             setError('Failed to share post. Please check your connection and try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };


//     const clearMedia = () => {
//         setMedia(null);
//         const fileInput = document.getElementById("userinput");
//         if (fileInput) {
//             fileInput.value = '';
//         }
//     };

//     const isSubmitDisabled = isLoading || (!content && !media);

//     return (
//         // Background: Soft, inviting gradient from a light cyan to a muted light blue
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-200 p-4 font-sans text-gray-800">
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl ring-1 ring-gray-100 w-full max-w-xl space-y-7 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl">
//                 {/* Heading: Deep, rich text for a premium feel */}
//                 <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">Craft Your Story</h2>

//                 {/* Error Message: Subtle red tones */}
//                 {error && (
//                     <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg relative text-base font-medium transition-all duration-300 ease-in-out opacity-100" role="alert">
//                         <strong className="font-semibold mr-1">Error:</strong>
//                         <span className="block sm:inline">{error}</span>
//                     </div>
//                 )}

//                 {/* Success Message: Subtle green tones */}
//                 {successMessage && (
//                     <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-lg relative text-base font-medium transition-all duration-300 ease-in-out opacity-100" role="alert">
//                         <strong className="font-semibold mr-1">Success:</strong>
//                         <span className="block sm:inline">{successMessage}</span>
//                     </div>
//                 )}

//                 <div className="relative">
//                     <textarea
//                         id="textArea"
//                         placeholder="What's on your mind? Share your thoughts, ideas, or updates here..."
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                         rows="7"
//                         // Textarea: Clean border, inviting amber focus ring
//                         className="w-full p-5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-500 text-lg resize-y leading-relaxed"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="userinput" className="block text-gray-700 text-base font-medium mb-3">Upload Media (Images or Videos):</label>
//                     <div className="relative">
//                         <input
//                             id="userinput"
//                             type="file"
//                             accept="image/*,video/*"
//                             onChange={(e) => {
//                                 setMedia(e.target.files[0]);
//                                 setSuccessMessage('');
//                             }}
//                             // File Input: Button styled with soft amber
//                             className="w-full text-gray-700 text-base file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200 file:cursor-pointer file:transition file:duration-300 file:ease-in-out border border-gray-300 rounded-xl cursor-pointer p-3"
//                         />
//                         {media && (
//                             <button
//                                 type="button"
//                                 onClick={clearMedia}
//                                 className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold opacity-80 hover:opacity-100 transition-opacity duration-200"
//                                 aria-label="Clear selected media"
//                             >
//                                 &times;
//                             </button>
//                         )}
//                     </div>
//                     {media && (
//                         <p className="mt-3 text-sm text-gray-600">Selected file: <span className="font-semibold text-gray-800">{media.name}</span></p>
//                     )}
//                 </div>

//                 <button
//                     type="submit"
//                     disabled={isSubmitDisabled}
//                     // Button: Solid inviting amber with refined hover and focus state
//                     className={`w-full bg-amber-500 text-white py-4 rounded-xl font-bold text-xl tracking-wide shadow-md hover:shadow-lg transition duration-300 ease-in-out transform ${isSubmitDisabled
//                             ? 'opacity-60 cursor-not-allowed'
//                             : 'hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 hover:-translate-y-0.5 active:scale-98'
//                         }`}
//                 >
//                     {isLoading ? (
//                         <span className="flex items-center justify-center">
//                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Publishing...
//                         </span>
//                     ) : (
//                         'Publish Post'
//                     )}
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default CreatePost;
import { useState } from "react";

function CreatePost({ onPostCreated , isAuthenticated}) {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title:content,
      description: content,
      social_image: media ? URL.createObjectURL(media) : "",
      user: {
        username: "you",
        profile_image: "https://via.placeholder.com/40"
      },
      positive_reactions_count: 0,
      comments_count: 0,
      url: "#"
    };
    { !isAuthenticated? onPostCreated(newPost) : alert("not Authorized") }
    
    setContent("");
    setMedia(null);
    const fileInput = document.getElementById("userinput");
    if (fileInput) fileInput.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md space-y-5">
      <h2 className="text-xl font-bold text-gray-800">✍️ Create a Post</h2>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        rows="5"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        id="userinput"
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setMedia(e.target.files[0])}
        className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 file:bg-amber-100 file:border-0 file:px-4 file:py-2 file:rounded-md file:text-amber-700 file:font-medium"
      />
      <button
        type="submit"
        className="w-full bg-amber-500 text-white font-semibold py-3 rounded-lg hover:bg-amber-600 transition"
      >
        Publish
      </button>
    </form>
  );
}

export default CreatePost;
