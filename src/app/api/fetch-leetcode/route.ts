function getSlug(title: string) {
    // Remove trailing and leading whitespace and make lowercase
    const lowerCaseTitle = title.toLowerCase().trim();
    // Replace intermediate spaces with hyphens
    const titleSlug = lowerCaseTitle.replace(/\s+/g, '-');
    return titleSlug;
}

const query = `
    query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        title
        difficulty
        topicTags {
          name
        }
      }
    }
  `;

export async function POST(req: Request) {
    const { title } = await req.json();

    const titleSlug = getSlug(title);
    const variables = { titleSlug };
    try {
        const res = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });

        const data = await res.json();

        return Response.json(data);
    } catch (err) {
        return new Response('Request Refused', { status: 403 });
    }
}
