export const handler = async (event) => {
  try {
    const { type = "movie", category = "popular", id } = event.queryStringParameters;
    const bearer = process.env.TMDB_BEARER;

    if (!bearer) {
      return { statusCode: 500, body: "Missing TMDB_BEARER env variable" };
    }

    const endpoint = id
      ? `https://api.themoviedb.org/3/${type}/${id}/images`
      : `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`;

    const res = await fetch(endpoint, {
      headers: { Authorization: bearer },
    });

    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
