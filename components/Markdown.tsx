import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-gree-500 underline" target="_blank" {...props} />
        ),
      }}
      className="space-y-3"
    >
      {children}
    </ReactMarkdown>
  );
}
