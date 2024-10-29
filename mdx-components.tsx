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
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    li: ({ children }) => <li className="list-disc">{children}</li>,
    p: ({ children }) => <p className="my-5">{children}</p>,
    a: ({ children, href }) => (
      <a href={href} className="link" target="_blank">
        {children}
      </a>
    ),
    ...components,
  };
}
