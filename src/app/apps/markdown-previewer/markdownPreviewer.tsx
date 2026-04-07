"use client";
import { useState, useMemo } from "react";

function parseMarkdown(md: string): string {
  let html = md;
  // Code blocks (must come before inline code)
  html = html.replace(
    /```(\w*)\n([\s\S]*?)```/g,
    '<pre class="bg-base-300 p-3 rounded-lg overflow-x-auto my-2"><code>$2</code></pre>',
  );
  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="bg-base-300 px-1 rounded text-sm">$1</code>',
  );
  // Headings
  html = html.replace(
    /^#### (.+)$/gm,
    '<h4 class="text-base font-bold mt-3 mb-1">$1</h4>',
  );
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="text-lg font-bold mt-4 mb-1">$1</h3>',
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>',
  );
  html = html.replace(
    /^# (.+)$/gm,
    '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>',
  );
  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  // Strikethrough
  html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");
  // Blockquote
  html = html.replace(
    /^> (.+)$/gm,
    '<blockquote class="border-l-4 border-primary pl-4 my-2 opacity-80">$1</blockquote>',
  );
  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="my-4 border-base-300" />');
  // Unordered list
  html = html.replace(/^[*-] (.+)$/gm, '<li class="ml-4 list-disc">$1</li>');
  // Ordered list
  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="ml-4 list-decimal">$1</li>',
  );
  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary underline" target="_blank" rel="noopener noreferrer">$1</a>',
  );
  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="max-w-full rounded my-2" />',
  );
  // Line breaks (double newline = paragraph)
  html = html.replace(/\n\n/g, '</p><p class="my-2">');
  html = '<p class="my-2">' + html + "</p>";
  return html;
}

const defaultText = `# Hello World

This is a **Markdown previewer**. Type on the left and see the rendered output on the right.

## Features

- **Bold text** and *italic text*
- ~~Strikethrough~~
- ***Bold and italic***

### Code

Inline \`code\` looks like this.

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> This is a blockquote.

### Links and Lists

1. First item
2. Second item
3. Third item

[Visit ewory.com](https://www.ewory.com)

---

*Happy writing!*`;

export default function MarkdownPreviewer() {
  const [text, setText] = useState(defaultText);

  const rendered = useMemo(() => parseMarkdown(text), [text]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Markdown Input</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full font-mono text-sm"
            style={{ minHeight: "400px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your Markdown here..."
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Preview</span>
          </label>
          <div
            className="prose prose-sm max-w-none bg-base-200 rounded-lg p-4 overflow-auto"
            style={{ minHeight: "400px" }}
            dangerouslySetInnerHTML={{ __html: rendered }}
          />
        </div>
      </div>
      <div className="text-sm opacity-60 text-center">
        {text.length} characters · {text.split(/\s+/).filter(Boolean).length}{" "}
        words · {text.split("\n").length} lines
      </div>
    </div>
  );
}
