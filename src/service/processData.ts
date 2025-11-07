import { useEffect, useState } from "react"

// Use direct API in development if proxy fails, use proxy in production
const API_BASE = import.meta.env.DEV && import.meta.env.VITE_USE_DIRECT_API 
    ? 'https://api.themoviedb.org/3'
    : '/api/tmdb';
    
const USE_TOKEN_HEADER = import.meta.env.DEV && import.meta.env.VITE_USE_DIRECT_API;

export const getData = (type: string, category: string) => {
    const [bindingData, setBindingData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                const headers: HeadersInit = {
                    'accept': 'application/json'
                };
                
                // Add auth header only if using direct API in dev
                if (USE_TOKEN_HEADER && import.meta.env.VITE_TMDB_AUTH_KEY) {
                    headers['Authorization'] = `Bearer ${import.meta.env.VITE_TMDB_AUTH_KEY}`;
                }
                
                const response = await fetch(`${API_BASE}/${ type ? type : 'movie' }/${ category ? category : 'popular' }?language=en-US&page=1`, {
                    method: 'GET',
                    headers
                });
                
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

export const getCardImage = (type: string, id: number) => {
    const [image, setImage] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                setLoading(true);
                
                const headers: HeadersInit = {
                    'accept': 'application/json'
                };
                
                // Add auth header only if using direct API in dev
                if (USE_TOKEN_HEADER && import.meta.env.VITE_TMDB_AUTH_KEY) {
                    headers['Authorization'] = `Bearer ${import.meta.env.VITE_TMDB_AUTH_KEY}`;
                }
                
                const response = await fetch(`${API_BASE}/${ type ? type : 'movie' }/${ id ? id : 'popular' }/images`, {
                    method: 'GET',
                    headers
                });

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