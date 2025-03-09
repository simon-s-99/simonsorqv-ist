import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import GetMdFileText from "../scripts/GetMdFileText";

/**
 * Render a markdown file as a blog post in tsx/jsx
 * @param blogPostFileName full filename of markdown file you wish to render as blog post including .md, example.md
 * @returns a virtual dom with the markdown file rendered as react/html elements
 */
export default function BlogPostContent({
  blogPostFileName,
}: {
  blogPostFileName: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchSuccess, setFetchSuccess] = useState<boolean>(true);
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    GetMdFileText(blogPostFileName).then((result) => {
      if (result) {
        setMarkdown(result);
        setFetchSuccess(true);
      } else {
        setFetchSuccess(false);
      }
    });

    setIsLoading(false);
  }, [blogPostFileName]);

  return (
    <>
      {isLoading ? (
        <p>
          <i>Loading...</i>
        </p>
      ) : (
        <section className="max-w-xl">
          {fetchSuccess ? (
            <Markdown skipHtml>{markdown}</Markdown>
          ) : (
            <>
              <p className="mt-2 flex flex-col items-center gap-y-2">
                Failed to fetch content, please try again.
                <button
                  onClick={() => window.location.reload()}
                  className="cursor-pointer py-2 px-4
                rounded-md bg-green-400 border-2 border-transparent
                hover:bg-green-500 hover:border-green-800"
                >
                  Reload page
                </button>
              </p>
            </>
          )}
        </section>
      )}
    </>
  );
}
