import { useEffect, useState } from "react"

export const getData = (type: string, category: string) => {
    const [bindingData, setBindingData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/.netlify/functions/tmdb-proxy?type=${type}&category=${category}`);
                
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
                const response = await fetch(`/.netlify/functions/tmdb-proxy?type=${type}&id=${id}`);

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