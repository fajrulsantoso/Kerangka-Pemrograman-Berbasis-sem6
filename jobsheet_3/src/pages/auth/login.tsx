const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;