// netlify/functions/tmdb.js
const https = require('https');

const TMDB_BASE = 'api.themoviedb.org';

/**
 * Make HTTPS request using Node's built-in https module
 */
function makeRequest(path, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: TMDB_BASE,
      path: path,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          body: data,
          headers: res.headers,
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

exports.handler = async (event) => {
  console.log('Function invoked!');
  console.log('Event path:', event.path);
  console.log('Raw query:', event.rawQuery);
  
  try {
    const token = process.env.TMDB_V4_TOKEN;
    
    if (!token) {
      console.error('TMDB_V4_TOKEN not found in environment');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'TMDB_V4_TOKEN not configured' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // Extract the path after the function name
    let apiPath = event.path;
    
    // Remove the function prefix if present
    if (apiPath.includes('/.netlify/functions/tmdb')) {
      apiPath = apiPath.replace('/.netlify/functions/tmdb', '');
    }
    // Also handle the /api/tmdb prefix in case it comes through
    if (apiPath.includes('/api/tmdb')) {
      apiPath = apiPath.replace('/api/tmdb', '');
    }
    
    // Ensure we have a path
    if (!apiPath || apiPath === '/') {
      apiPath = '/configuration';
    }
    
    // Build the full path with query string
    const queryString = event.rawQuery ? `?${event.rawQuery}` : '';
    const fullPath = `/3${apiPath}${queryString}`;

    console.log('Proxying request to: https://' + TMDB_BASE + fullPath);

    const response = await makeRequest(fullPath, token);
    
    console.log('TMDB response status:', response.statusCode);

    const contentType = response.headers['content-type'] || 'application/json; charset=utf-8';

    return {
      statusCode: response.statusCode,
      body: response.body,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=60',
      },
    };
  } catch (err) {
    console.error('TMDB proxy error:', err);
    return {
      statusCode: 502,
      body: JSON.stringify({ 
        error: 'TMDB proxy error', 
        detail: err && err.message ? err.message : String(err),
        stack: err && err.stack ? err.stack : undefined
      }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
