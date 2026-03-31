import type { MDXComponents } from "mdx/types";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        id={slugify(String(children))}
        className="text-2xl mt-10 mb-5 font-bold"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={slugify(String(children))}
        className="text-xl mt-8 mb-5 font-bold"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(String(children))}
        className="text-lg mt-6 mb-4 font-semibold"
      >
        {children}
      </h3>
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
    a: ({ children, href }) => {
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          className="link link-primary"
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
    ...components,
  };
}
