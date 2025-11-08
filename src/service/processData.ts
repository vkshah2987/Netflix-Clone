import { useEffect, useState } from "react"

// Check if we're in production or development
const isDevelopment = import.meta.env.DEV;

export const getData = (type: string, category: string) => {
    const [bindingData, setBindingData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                let response;
                if (isDevelopment) {
                    // Development: Call TMDB API directly
                    response = await fetch(
                        `https://api.themoviedb.org/3/${type || 'movie'}/${category || 'popular'}?language=en-US&page=1`,
                        {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_AUTH_KEY}`,
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                } else {
                    // Production: Use Netlify serverless function
                    response = await fetch(`/.netlify/functions/tmdb-proxy?type=${type}&category=${category}`);
                }
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                setBindingData(result.results);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, category]);
    
    return { bindingData, loading, error };
}

export const getVideoData = (type: string, id: string) => {
    const [videoData, setVideoData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                let response;
                if (isDevelopment) {
                    // Development: Call TMDB API directly
                    response = await fetch(
                        `https://api.themoviedb.org/3/${type || 'movie'}/${id || '0'}/videos`,
                        {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_AUTH_KEY}`,
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                } else {
                    // Production: Use Netlify serverless function
                    response = await fetch(`/.netlify/functions/tmdb-proxy?type=${type}&id=${id}&endpoint=videos`);
                }
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                setVideoData(result.results);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, id]);
    
    return { videoData, loading, error };
}

export const getCardImage = (type: string, id: number) => {
    const [image, setImage] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                setLoading(true);
                
                let response;
                if (isDevelopment) {
                    // Development: Call TMDB API directly
                    response = await fetch(
                        `https://api.themoviedb.org/3/${type || 'movie'}/${id}/images`,
                        {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_AUTH_KEY}`,
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                } else {
                    // Production: Use Netlify serverless function
                    response = await fetch(`/.netlify/functions/tmdb-proxy?type=${type}&id=${id}&endpoint=images`);
                }

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log("Fetched Images: ", result);
                setImage(result.backdrops[2])
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }
        // Only attempt fetch if we have a valid id
        if (id) {
            fetchImage();
        } else {
            setImage(null);
        }
    }, [type, id]);

    return {image, loading, error};
}