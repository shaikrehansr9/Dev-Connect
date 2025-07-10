// import { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// function Login(){

//     const [login,SetLogin]=useState({email:'',password:''});
//     const navigate=useNavigate();

//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         console.log(form);
//         localStorage.setItem('token','demon_token');
//         navigate('/');
//     };
//     return(
//         <form>
//             <input type="text" id="usernameLogin"placeholder="email" onChange={e =>SetLogin({...form,email:e.target.value,})} />
//             <input type="password" id="userpass" placeholder="password" onChange={e =>SetLogin({...form,password:e.target.value})}/>
//             <button type="submit" id="submitBtn">login</button>
//         </form>
//     );
// }
// export default Login;
import axios from "axios";
import { useState } from "react";
// Removed useNavigate as it requires a Router context, which might not be available
import { useNavigate } from "react-router-dom"; 

function Login() {
    const [login, setLogin] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // Removed useNavigate hook to resolve the error
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!login.email || !login.password) {
            setError("Please enter both email and password.");
            return;
        }

        setIsLoading(true);
        try {
            // Simulate an API call for login
            const response=await axios.get('http://localhost:4000/api/auth/login',{
                params:{
                    email:login.email,
                    password:login.password
                }
            });
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            

            // Simulate successful login
            localStorage.setItem('token', 'demon_token'); // Store a dummy token
            setSuccessMessage("Login successful! Welcome to DevConnect."); // Updated success message
            
            // Clear form fields after successful login
            setLogin({ email: '', password: '' });

            //Removed navigation logic to prevent the Router context error
            setTimeout(() => {
                navigate('/');
            }, 500); 

        } catch (err) {
            setError('Invalid email or password. Please try again.');
            console.error("Login error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const isLoginDisabled = isLoading || !login.email || !login.password;

    return (
        // Main container with consistent professional background and padding
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-200 p-4 font-sans text-gray-800">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl ring-1 ring-gray-100 w-full max-w-md space-y-7 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl">
                {/* Heading: Consistent professional styling */}
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">Welcome Back!</h2>
                
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

                {/* Email Input Field */}
                <div>
                    <label htmlFor="emailLogin" className="block text-gray-700 text-base font-medium mb-2">Email Address</label>
                    <input
                        type="email"
                        id="emailLogin"
                        placeholder="your.email@example.com"
                        value={login.email} // Controlled component: input value tied to state
                        onChange={e => setLogin({ ...login, email: e.target.value })}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-500 text-lg"
                        required
                    />
                </div>

                {/* Password Input Field */}
                <div>
                    <label htmlFor="passwordLogin" className="block text-gray-700 text-base font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="passwordLogin"
                        placeholder="••••••••"
                        value={login.password} // Controlled component: input value tied to state
                        onChange={e => setLogin({ ...login, password: e.target.value })}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-500 text-lg"
                        required
                    />
                </div>
                
                {/* Login Button: Consistent professional styling with loading indicator */}
                <button
                    type="submit"
                    disabled={isLoginDisabled}
                    className={`w-full bg-amber-500 text-white py-4 rounded-xl font-bold text-xl tracking-wide shadow-md hover:shadow-lg transition duration-300 ease-in-out transform ${
                        isLoginDisabled 
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
                            Logging In...
                        </span>
                    ) : (
                        'Log In'
                    )}
                </button>
            </form>
        </div>
    );
}

export default Login;
