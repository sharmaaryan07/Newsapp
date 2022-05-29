import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropsTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {

    const[articles, setarticles]=useState([])
    const[loading, setloading]=useState(true)
    const[page, setpage]=useState(1)
    const[totalResult, settotalResult]=useState(0)
    
        document.title = `NewsToday- Top Headlines- ${props.category}`;

    const upadteNews= async ()=> {
        props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=2e7162683b93441c9932e026d387c3f1&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(60)
        let parseData = await data.json()
        props.setProgress(80)
        setarticles(parseData.articles)
        settotalResult(parseData.totalResults)
        setloading(false)
        props.setProgress(100)

    }

    // In Replace of componentDidMount()
    useEffect(()=>{
        upadteNews();
    },[]/* jis change maii ye effect run ho voo idher ayega */)


    const fetchMoreData = async () => {
        setpage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=2e7162683b93441c9932e026d387c3f1&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        setarticles(articles.concat(parseData.articles))
        settotalResult(parseData.totalResults)
    };



    

 

        return (
            <>
                <div className='text-center text-4xl mt-6 '>
                    <h1>Top Headlines - <span className='text-indigo-500'>{props.category}</span></h1>
                </div>
                {loading && < Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResult}
                    loader={<h3 className='w-20 ml-[40rem]'><Spinner /></h3>}
                >
                    <div className='grid grid-cols-4 '>
                        {articles.map((element) => {
                            return <div key={element.url} className="  w-[349px]">
                                <Newsitem mode={props.mode} title={element.title ? element.title/*.slice(0, 45)*/ : ""}
                                    discription={element.description ? element.description.slice(0, 88) : ""}
                                    imgUrl={element.urlToImage ? element.urlToImage : "https://st3.depositphotos.com/23594922/31822/v/1600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"}
                                    newsUrl={element.url} date={element.publishedAt} author={element.author ? element.author : "Unknown"} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>

            </>
        )
    
}
News.defaultProps = {
    page: 16,
    category: 'general'
}

News.propsTypes = {
    page: PropsTypes.number,
    category: PropsTypes.string,
}

export default News;