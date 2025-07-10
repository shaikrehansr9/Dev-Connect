// import { useState } from "react";
// import  axios  from "axios";
// function Register() {
//     const [from,setForm]=useState({username:'',email:'',password:''});

//     const handleSubmit=async (e)=>{
//         e.preventDefault();
//         console.log(form);

//     };
//     return(
//         <form>
//             <input id="Regname" type="text" placeHolder="username" onChange={e => setForm({...form,username:e.target.value})}/>
//             <input type="text" id="Regmail" placeHolder="email" onChange={e => setForm({...form,email:e.target.value})}/>
//             <input type="password" id="Regpass" placeHolder="password" onChange={e => setForm({...form,password:e.target.value})}/>
//             <button type="submit" id="Regbtn">submit</button>
//         </form>

//     );
// }
// export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

function Register() {
    // Renamed 'from' state to 'form' for better readability and common convention
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState(''); // State for error messages
    const [successMessage, setSuccessMessage] = useState(''); // State for success messages
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setSuccessMessage(''); // Clear previous success messages

        // Basic validation
        if (!form.username || !form.email || !form.password) {
            setError("Please fill in all fields.");
            return;
        }

        setIsLoading(true); // Set loading state to true
        try {
            // Simulate an API call for registration
            // In a real app, you would send form data to your backend
            const response = await axios.post("http://localhost:4000/api/auth/register", form); 

            // Simulate a delay for the API call
            await new Promise(resolve => setTimeout(resolve, 1500)); 

            setSuccessMessage("Registration successful! You can now log in.");
            setForm({ username: '', email: '', password: '' }); // Clear form fields
            setTimeout(() => {
                navigate('/');
            }, 500);
            
        } catch (err) {
            // In a real app, handle specific registration errors (e.g., email already exists)
            setError('Registration failed. Please try again.');
            console.error("Registration error:", err);
        } finally {
            setIsLoading(false); // Always reset loading state
        }
    };

    // Disable button if loading or any field is empty
    const isSubmitDisabled = isLoading || !form.username || !form.email || !form.password;

    return (
        // Main container with consistent professional background and padding
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-200 p-4 font-sans text-gray-800">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl ring-1 ring-gray-100 w-full max-w-md space-y-7 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl">
                {/* Heading: Consistent professional styling */}
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">Join DevConnect!</h2>
                
                {/* Error Message: Consistent styling */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg relative text-base font-medium transition-all duration-300 ease-in-out opacity-100" role="alert">
                        <strong className="font-semibold mr-1">Error:</strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {/* Success Message: Consistent styling */}
                {successMessage && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-lg relative text-base font-medium transition-all duration-300 ease-in-out opacity-100" role="alert">
                        <strong className="font-semibold mr-1">Success:</strong>
                        <span className="block sm:inline">{successMessage}</span>
                    </div>
                )}

                {/* Username Input Field */}
                <div>
                    <label htmlFor="Regname" className="block text-gray-700 text-base font-medium mb-2">Username</label>
                    <input
                        id="Regname"
                        type="text"
                        placeholder="Enter your username"
                        value={form.username} // Controlled component
                        onChange={e => setForm({ ...form, username: e.target.value })}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-500 text-lg"
                        required
                    />
                </div>

                {/* Email Input Field */}
                <div>
                    <label htmlFor="Regmail" className="block text-gray-700 text-base font-medium mb-2">Email Address</label>
                    <input
                        type="email" // Use type="email" for better semantic meaning and validation
                        id="Regmail"
                        placeholder="your.email@example.com"
                        value={form.email} // Controlled component
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-500 text-lg"
                        required
                    />
                </div>

                {/* Password Input Field */}
                <div>
                    <label htmlFor="Regpass" className="block text-gray-700 text-base font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="Regpass"
                        placeholder="••••••••"
                        value={form.password} // Controlled component
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-500 text-lg"
                        required
                    />
                </div>
                
                {/* Submit Button: Consistent professional styling with loading indicator */}
                <button
                    type="submit"
                    id="Regbtn"
                    disabled={isSubmitDisabled} 
                    className={`w-full bg-amber-500 text-white py-4 rounded-xl font-bold text-xl tracking-wide shadow-md hover:shadow-lg transition duration-300 ease-in-out transform ${
                        isSubmitDisabled 
                            ? 'opacity-60 cursor-not-allowed' 
                            : 'hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 hover:-translate-y-0.5 active:scale-98'
                    }`}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Registering...
                        </span>
                    ) : (
                        'Register Now'
                    )}
                </button>
            </form>
        </div>
    );
}

export default Register;
