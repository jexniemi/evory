import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-2xl mt-10 mb-5 font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl fon mt-8 mb-5 font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg mt-6 mb-4 font-semibold">{children}</h3>
    ),
    hr: ({ children }) => (
      <div className="flex w-full flex-col">
        <div className="divider">{children}</div>
      </div>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-5">
        <table className="table table-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-base-200">{children}</thead>,
    th: ({ children }) => <th className="text-sm font-semibold">{children}</th>,
    td: ({ children }) => <td>{children}</td>,
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-5 my-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 my-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700 leading-relaxed pl-1">{children}</li>
    ),
    p: ({ children }) => <p className="my-5">{children}</p>,
    a: ({ children, href }) => (
      <a href={href} className="link" target="_blank">
        {children}
      </a>
    ),
    ...components,
  };
}
