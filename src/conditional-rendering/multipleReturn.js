import React, {useState, useEffect} from 'react';

const Multiple = () => {
    
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [user, setUser] = useState('No user fetched');

    const url = 'https://api.github.com/users/QuincyLarson';

    useEffect(() => { 
        fetch(url)
            .then((resp) => {
                if (resp.status === 200) {
                    setLoading(false);
                    return resp.json();
                }
                else {
                    setLoading(false);
                    setError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            })
    }, []);
    if (isLoading) {
        return (
            <div style={{alignContent:'center'}}>
                <h1>Loading....</h1>
            </div>  
        );
    }
    if (isError) {
        return (
            <div style={{ alignContent: 'center' }}>
                <h1>Error....</h1>
            </div>  
        );
    }
    else {
        return (
            <div style={{ alignContent: 'center' }}>
                <h1>{user}</h1>
            </div>
        )   
    }
}

export default Multiple;