import { useNavigate } from "react-router-dom";

export default function Header({ title = "Blog Dashboard" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => alert("Profile Clicked")}
          className="text-sm text-gray-700 hover:underline"
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
