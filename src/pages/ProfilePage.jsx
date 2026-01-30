import { FaGoogle, FaGithub } from "react-icons/fa";
import { auth, googleProvider, githubProvider, signInWithPopup } from "../firebase";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Authenticated user:", result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-start px-6 py-20"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2023/04/040823_chatgpt_feat.gif')",
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-2xl rounded-xl p-10 max-w-xl w-full text-center border border-white border-opacity-30 ml-10">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to AuraLearn</h1>
        <p className="text-gray-200 mb-8">
          Sign in to sync your progress, save courses, and continue where you left off.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleLogin(googleProvider)}
            className="flex items-center justify-center hover:scale-105 gap-3 bg-white bg-opacity-80 border border-gray-300 shadow-md hover:shadow-lg text-gray-800 font-medium py-3 rounded-lg transition"
            aria-label="Sign in with Google"
          >
            <FaGoogle className="text-xl" />
            Sign in with Google
          </button>

          <button
            onClick={() => handleLogin(githubProvider)}
            className="flex items-center justify-center hover:scale-105 gap-3 bg-black bg-opacity-90 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition"
            aria-label="Sign in with GitHub"
          >
            <FaGithub className="text-xl" />
            Sign in with GitHub
          </button>
        </div>

        <p className="mt-10 text-sm text-gray-300">
          By signing in, you agree to our{" "}
          <span className="underline cursor-pointer hover:text-white">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer hover:text-white">Privacy Policy</span>.
        </p>
      </div>
    </section>
  );
}

export default ProfilePage;
