import React, { useEffect, useState } from 'react';
import DataLoader from './DataLoader';



export interface Data{

    author:string,
    story_title:string,
    comment_text:string,
    created_at:string,
    name:string,
}

const Home:React.FC = () => {
    const [datas, setdata] = useState<Data[]>([])
    console.log(datas);

    useEffect(() => {

        const timer = setInterval(() => 
        fetch('https://hn.algolia.com/api/v1/search_by_date')
        .then((res)=>res.json())
        // eslint-disable-next-line array-callback-return
        .then((data)=>setdata([...data.hits,...datas])),10000)

         return () => clearInterval(timer);
       
    }, [datas])
    return (
        <div>

            <h1>Fetching Data from api with Interval.</h1>

            {

                <DataLoader data={datas}/>

            }

            
        </div>
    );
};

export default Home;