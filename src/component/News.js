import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export default class News extends Component {


    constructor() {
        super();
        // console.log("Hello NewsToday");
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e7162683b93441c9932e026d387c3f1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResult: parseData.totalResults,
            loading: false
        })

    }

    handelPrevButton = async () => {
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e7162683b93441c9932e026d387c3f1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }

    handelNextButton = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)) {

        } else {
            console.log("Next")
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e7162683b93441c9932e026d387c3f1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            })
        }

    }

    render() {

        return (
            <>
                   { this.state.loading && < Spinner/>}
                <div className='grid grid-cols-4 '>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="  w-[349px]">
                            <Newsitem mode={this.props.mode} title={element.title ? element.title.slice(0, 45) : ""} discription={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://st3.depositphotos.com/23594922/31822/v/1600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="containe px-10 m-4 justify-between flex">
                    <button disabled={this.state.page <= 1} onClick={this.handelPrevButton} className="disabled:cursor-not-allowed  bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">
                        &larr; {this.state.page === 1 ? " " : this.state.page - 1} Previous
                    </button>

                    <div className='mt-3  font-semibold text-lg'>Page {this.state.page}</div>

                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} onClick={this.handelNextButton} className="disabled:cursor-not-allowed bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">
                        Next {this.state.page === Math.ceil(this.state.totalResult / this.props.pageSize) ? " " : this.state.page + 1} &rarr;
                    </button>
                </div>
            </>
        )
    }
}
