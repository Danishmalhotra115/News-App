import { useEffect,useState } from "react";

function fetchNews(newsType){
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=${newsType}&from=2024-12-07&sortBy=publishedAt&apiKey=1a91016f3a1b43c09ec2e40f9bfb48d7`)
        .then((res)=>res.json())
        .then((res)=>setNews(res.articles))
    },[newsType])

    return news;
}
export default fetchNews;