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
export default async function GetMdFileText(mdFileName: string): Promise<string | null> {
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
