import { useState } from "react";
import ReactMarkdown from "react-markdown";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

export default function Home() {
  const [markdown, setMarkdown] = useState("# Welcome to My Portfolio ✨\nWrite your story here...");
  const [theme, setTheme] = useState("bg-white text-black");

  // Function to generate PDF

  const downloadPDF = async () => {
  const element = document.getElementById("preview-section");

  if (!element) return;

  // Dynamically import so it only runs in browser
  const html2canvas = (await import("html2canvas")).default;
  const jsPDF = (await import("jspdf")).default;

  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("portfolio.pdf");
  });
};


  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-8">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-10 drop-shadow-lg">
        🌟 Developer Portfolio Generator 🌟
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setTheme("bg-white text-black")} className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 shadow-md">Light</button>
        <button onClick={() => setTheme("bg-gray-900 text-white")} className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 shadow-md">Dark</button>
        <button onClick={() => setTheme("bg-blue-200 text-blue-900")} className="px-5 py-2 rounded-lg bg-blue-300 hover:bg-blue-400 shadow-md">Blue</button>
        <button onClick={() => setTheme("bg-gradient-to-r from-pink-200 to-yellow-200 text-black")} className="px-5 py-2 rounded-lg bg-pink-300 hover:bg-pink-400 shadow-md">Gradient</button>
        <button onClick={downloadPDF} className="px-5 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 shadow-md">
          📥 Download PDF
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Editor */}
        <textarea
          className="w-full h-96 p-4 border-2 border-purple-300 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400 resize-none"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="✨ Write your portfolio in Markdown..."
        />

        {/* Preview */}
        <div id="preview-section" className={`p-6 rounded-xl shadow-xl border-2 border-gray-200 ${theme}`}>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        Made with ❤️ using Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
