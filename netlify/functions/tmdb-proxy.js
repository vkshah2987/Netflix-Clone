// export const handler = async (event) => {
//   try {
//     const { type = "movie", category = "popular", id } = event.queryStringParameters || {};
//     const bearer = process.env.TMDB_BEARER;

//     if (!bearer) {
//       return { 
//         statusCode: 500, 
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ error: "Missing TMDB_BEARER env variable" })
//       };
//     }

//     const endpoint = id
//       ? `https://api.themoviedb.org/3/${type}/${id}/images`
//       : `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`;

//     const res = await fetch(endpoint, {
//       headers: { Authorization: bearer },
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       throw new Error(`TMDB API error: ${res.status} - ${errorText}`);
//     }

//     const data = await res.json();

//     return {
//       statusCode: 200,
//       headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     console.error("Function error:", error);
//     return {
//       statusCode: 500,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };


export const handler = async (event) => {
  try {
    const { type = "movie", category = "popular", id, endpoint } = event.queryStringParameters || {};
    const bearer = process.env.TMDB_BEARER;

    if (!bearer) {
      return { 
        statusCode: 500, 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing TMDB_BEARER env variable" })
      };
    }

    // Determine which endpoint to call based on parameters
    let apiEndpoint;
    
    if (endpoint === 'videos' && id) {
      // For video data: /movie/{id}/videos or /tv/{id}/videos
      apiEndpoint = `https://api.themoviedb.org/3/${type}/${id}/videos`;
    } else if (endpoint === 'images' && id) {
      // For images: /movie/{id}/images or /tv/{id}/images
      apiEndpoint = `https://api.themoviedb.org/3/${type}/${id}/images`;
    } else if (id) {
      // Default images endpoint when only id is provided (backward compatibility)
      apiEndpoint = `https://api.themoviedb.org/3/${type}/${id}/images`;
    } else {
      // For list data: /movie/popular, /tv/top_rated, etc.
      apiEndpoint = `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`;
    }

    const res = await fetch(apiEndpoint, {
      headers: { Authorization: bearer },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`TMDB API error: ${res.status} - ${errorText}`);
    }

    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
