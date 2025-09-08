import React from "react";
import ReactMarkdown from "react-markdown";

export default function Preview({ markdown, theme }) {
  return (
    <div className={`p-6 rounded-xl shadow-xl border-2 border-gray-200 ${theme}`}>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
