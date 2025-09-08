export default function MarkdownInput({ markdown, setMarkdown }) {
  return (
    <textarea
  className="w-full h-80 p-4 border-2 border-purple-300 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400 bg-white resize-none"
  value={markdown}
  onChange={(e) => setMarkdown(e.target.value)}
  placeholder="✨ Write your portfolio in Markdown..."
/>

  );
}
