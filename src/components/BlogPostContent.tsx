import { useEffect, useState } from "react";
import Markdown from "react-markdown";

// get base url for blog posts based on env
let baseUrlBlog: string;
if (import.meta.env.PROD) {
  baseUrlBlog = import.meta.env.BASE_URL + "blog"; // might need to prepend / to blog, evaluate in prod env
} else {
  baseUrlBlog = "http://localhost:5173/blog/";
}

/**
 * Get the markdown file used for the main content of the blog post.
 * @param mdFileName the full filename of the markdown file including file suffix, example.md
 * @returns the text contained in the markdown file as a string or null if the fetch call fails
 */
async function GetMdFileText(mdFileName: string): Promise<string | null> {
  const targetUrl: URL = new URL(mdFileName, baseUrlBlog);
  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        Accept: "text/markdown, text/plain", // disallows anything that does not fit as markdown content
      },
    });

    if (!response.ok) {
      throw new Error("Response outside ok-range."); // throw so that we return null
    }

    const parsedResponse: string = await response.text();
    return parsedResponse;
  } catch {
    return null; // signals error in fetch to calling component
  }
}

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
        <section>
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
