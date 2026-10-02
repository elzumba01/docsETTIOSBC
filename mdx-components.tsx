import type { MDXComponents } from 'mdx/types'
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";

// Define custom MDX components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1 className={cn("text-4xl font-bold mt-8 mb-4", className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "text-3xl font-bold mt-8 mb-4 border-b pb-2",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3 className={cn("text-2xl font-bold mt-6 mb-3", className)} {...props} />
    ),
    h4: ({ className, ...props }) => (
      <h4 className={cn("text-xl font-bold mt-4 mb-2", className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn("my-4 leading-7", className)} {...props} />
    ),
    a: ({
      className,
      href,
      ...props
    }) => {
      // If it's an external link, use a regular anchor tag
      if (href?.startsWith("http") || href?.startsWith("mailto:")) {
        return (
          <a
            className={cn("text-primary underline underline-offset-4", className)}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        );
      }
      // For internal links, use Next.js Link component
      return (
        <Link
          className={cn("text-primary underline underline-offset-4", className)}
          href={href || "#"}
          {...props}
        />
      );
    },
    ul: ({ className, ...props }) => (
      <ul className={cn("list-disc pl-6 my-4", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("list-decimal pl-6 my-4", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("my-2", className)} {...props} />
    ),
    blockquote: ({
      className,
      ...props
    }) => (
      <blockquote
        className={cn(
          "pl-4 border-l-4 border-primary my-4 italic",
          className
        )}
        {...props}
      />
    ),
    img: ({
      className,
      alt,
      ...props
    }) => (
      // Wrap Image with div for styling
      <div className="my-6 flex justify-center">
        <img
          className={cn("rounded-md max-w-full", className)}
          alt={alt}
          {...props}
        />
      </div>
    ),
    hr: ({ ...props }) => <hr className="my-6 border-muted" {...props} />,
    table: ({ className, ...props }) => (
      <div className="my-6 overflow-x-auto">
        <table
          className={cn("w-full border-collapse border rounded-md", className)}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("bg-muted", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={className} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn("border-b", className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn("border px-4 py-2 text-left font-bold", className)}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td className={cn("border px-4 py-2", className)} {...props} />
    ),
    pre: ({ className, children, ...props }) => {
      // Extract the language from the className if it exists
      const language = children && typeof children === 'object' && 
        'props' in children && 
        typeof children.props.className === 'string' 
        ? children.props.className.replace('language-', '') 
        : '';
      
      return <CodeBlock language={language} className={className} children={children} {...props} />;
    },
    code: ({ className, ...props }) => {
      // Check if this is a code block or inline code
      const isInlineCode = !className || !className.includes('language-');
      
      if (isInlineCode) {
        return (
          <code
            className={cn(
              "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
              className
            )}
            {...props}
          />
        );
      }
      
      return <code className={className} {...props} />;
    },
    ...components,
  }
}
