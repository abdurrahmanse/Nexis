import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

export default function Card({
  title,
  description,
  demo,
  large,
  icon,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
  icon?: ReactNode;
}) {
  return (
    <div
      className={`relative col-span-1 flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-md ${
        large ? "sm:col-span-2 md:col-span-2 lg:col-span-2" : "sm:col-span-1"
      }`}
    >
      <div className="flex flex-1 aspect-video items-center justify-center p-6">{demo}</div>
      <div className="mx-auto max-w-md text-center p-6">
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
            {icon}
          </div>
        </div>
        <h2 className="bg-linear-to-br from-black to-stone-500 dark:from-white dark:to-stone-400 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="prose-sm mt-3 leading-normal text-gray-500 dark:text-gray-400 md:prose">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-gray-800 dark:text-gray-200 underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 font-mono font-medium text-gray-800 dark:text-gray-200"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
