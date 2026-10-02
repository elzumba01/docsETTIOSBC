import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";

interface CalloutProps {
  children: React.ReactNode;
  type?: "default" | "info" | "warning" | "error" | "success";
  icon?: string;
}

const Callout = ({
  children,
  type = "default",
  icon = "💡",
}: CalloutProps) => {
  return (
    <div
      className={cn(
        "callout flex items-start p-4 border rounded-md my-6",
        {
          "bg-muted": type === "default",
          "callout-info": type === "info",
          "callout-warning": type === "warning",
          "callout-error": type === "error",
          "callout-success": type === "success",
        }
      )}
    >
      <div className="mr-4 text-xl">{icon}</div>
      <div>{children}</div>
    </div>
  );
};

interface StepProps {
  children: React.ReactNode;
  number: number;
}

const Step = ({ children, number }: StepProps) => {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-lg">
        {number}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

// Define custom MDX components
export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("text-4xl font-bold mt-8 mb-4", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "text-3xl font-bold mt-8 mb-4 border-b pb-2",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("text-2xl font-bold mt-6 mb-3", className)} {...props} />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className={cn("text-xl font-bold mt-4 mb-2", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("my-4 leading-7", className)} {...props} />
  ),
  a: ({
    className,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
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
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("list-disc pl-6 my-4", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("list-decimal pl-6 my-4", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("my-2", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
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
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
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
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table
        className={cn("w-full border-collapse border rounded-md", className)}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("bg-muted", className)} {...props} />
  ),
  tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={className} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("border-b", className)} {...props} />
  ),
  th: ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn("border px-4 py-2 text-left font-bold", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn("border px-4 py-2", className)} {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className={cn("overflow-x-auto", className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // Determine if this is a code block or inline code
    const isInlineCode =
      !props.children ||
      typeof props.children === "string" ||
      (Array.isArray(props.children) && props.children.length === 0) ||
      (typeof props.children === "object" &&
        "props" in props.children &&
        !props.children.props.className?.includes("language-"));

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

    // Extract language from className (e.g., language-javascript)
    const language =
      typeof props.children === "object" &&
      props.children !== null &&
      "props" in props.children &&
      typeof props.children.props.className === "string"
        ? props.children.props.className.replace("language-", "")
        : "";

    return <CodeBlock language={language} {...props}>{props.children}</CodeBlock>;
  },
  // Custom components
  Callout,
  Step,
};
