export default function ThemeSwitcher({ setTheme }) {
  return (
    <div className="flex justify-center gap-4 mb-6">
  <button onClick={() => setTheme("bg-white text-black")}
    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 shadow">
    Light
  </button>
  <button onClick={() => setTheme("bg-gray-900 text-white")}
    className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 shadow">
    Dark
  </button>
  <button onClick={() => setTheme("bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900")}
    className="px-4 py-2 rounded-lg bg-blue-300 hover:bg-blue-400 shadow">
    Blue
  </button>
</div>

  );
}
