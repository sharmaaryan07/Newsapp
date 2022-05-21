import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Johnny Depp was jealous and controlling, ex-girlfriend Ellen Barkin says",
            "description": "Testimony from the actress, one of Johnny Depp's ex-girlfriends and co-stars, is played in court.",
            "url": "http://www.bbc.co.uk/news/entertainment-arts-61526110",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/47CE/production/_124828381_gettyimages-82754013.jpg",
            "publishedAt": "2022-05-21T09:37:16.8059651Z",
            "content": "Image caption, Ellen Barkin's testimony, recorded in 2019, was played in court\r\nJohnny Depp was controlling and jealous and once threw a wine bottle across a room, one of his ex-girlfriends and co-st… [+1831 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Tornado in Germany injures 43 people, police say",
            "description": "Officials said the tornado cut a path of destruction during violent storms in the west of the country.",
            "url": "http://www.bbc.co.uk/news/world-europe-61533713",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1538C/production/_124842968_hi076157855-1.jpg",
            "publishedAt": "2022-05-21T08:37:18.2747133Z",
            "content": "By Joseph LeeBBC News\r\nMedia caption, Watch: A tornado leaves a trail of destruction in the western German city of Paderborn\r\nA tornado left 43 people injured as it \"cut a path of destruction\" throug… [+1779 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine latest news: Russia declares complete victory at Mariupol steelworks",
            "description": "The final soldiers defending the last Ukrainian stronghold in Ukraine have surrendered, the Russian military says.",
            "url": "http://www.bbc.co.uk/news/live/world-europe-61518209",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
            "publishedAt": "2022-05-21T07:37:24.5404401Z",
            "content": "The fighters were left with no option. After weeks holed up\r\nin Mariupols Azovstal steelworks, they were ordered to surrender. Hundreds are\r\nnow in Russian hands. Their fate remains unknown.\r\nFor the… [+1161 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Australia election 2022: Millions head to polls as Morrison faces off against Albanese",
            "description": "It's the first election since 2019, and predicted to be tight - here's what's happening on the ground.",
            "url": "http://www.bbc.co.uk/news/live/world-australia-61532469",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
            "publishedAt": "2022-05-21T01:37:18.5563912Z",
            "content": "If you're a stranger to Australian politics (or an Aussie who tries to ignore it between elections - no judgement...), you can get up to speed on who is who, what they're offering and how it all work… [+1544 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Biden plan to end US migrant expulsion policy blocked",
            "description": "A US judge says the policy that allows migrants to be expelled over Covid fears must stay in place.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61532326",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/23A8/production/_123982190_mediaitem123981750.jpg",
            "publishedAt": "2022-05-21T01:07:21.7583748Z",
            "content": "Image source, Getty Images\r\nImage caption, More than 1.7 million people have been expelled under the controversial policy widely known as Title 42\r\nA US judge has blocked plans by Joe Biden's adminis… [+2324 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "'My terrifying 37 hours on a windsurf in deadly seas'",
            "description": "Elian Lopez hoped his life-changing journey would go smoothly - then the wind changed and sun went down.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61516794",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/71A5/production/_124839092_p0c844lp.jpg",
            "publishedAt": "2022-05-20T23:22:18.5871815Z",
            "content": "Elian Lopez hoped his life-changing journey would go smoothly - then the wind changed and the sun went down.\r\nHis harrowing ordeal in the deadly waters between Cuba and Florida highlights the risk re… [+335 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Topless woman protests against Ukraine sexual violence",
            "description": "The woman stripped on the Cannes red carpet to show the words \"stop raping us\" and the Ukrainian flag.",
            "url": "http://www.bbc.co.uk/news/world-europe-61532234",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A1B1/production/_124839314_p0c84hm7.jpg",
            "publishedAt": "2022-05-20T22:52:20.8527439Z",
            "content": "A woman ran onto the red carpet at the Cannes Film Festival, to protest against sexual violence in Ukraine.\r\nThe protester stripped off a gown to reveal the words \"stop raping us\" painted on her body… [+303 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Monkeypox: 80 cases confirmed in 11 countries, says WHO",
            "description": "Another 50 suspected cases of the rare disease are being investigated, the UN health agency says.",
            "url": "http://www.bbc.co.uk/news/health-61532083",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A4D1/production/_124839124_40880d22-f704-47a6-9eca-ced6f576c5d3.jpg",
            "publishedAt": "2022-05-20T22:07:22.399931Z",
            "content": "About 80 cases of monkeypox have been confirmed in 11 countries, the World Health Organization says, warning that more cases are likely to be reported.\r\nThe WHO says that another 50 suspected cases a… [+2431 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "California wildfires: Man gets 24 years for setting blaze that killed condors",
            "description": "Prosecutors say he set the Big Sur Dolan fire while illegally cultivating cannabis in the forest.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61526895",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/96F3/production/_124834683_gettyimages-1228178892.jpg",
            "publishedAt": "2022-05-20T15:07:18.5869615Z",
            "content": "Image source, Getty Images\r\nImage caption, \r\nA US man who started a wildfire that killed 12 endangered California condors and seriously injured a firefighter has been sentenced to 24 years in prison.… [+1839 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "The former prisoners tasked with patrolling San Francisco",
            "description": "Artie spent 26 years in jail for murder. He is now part of a controversial scheme to tackle drugs, homelessness and crime in San Francisco.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61514467",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4620/production/_124825971_p0c7ys7g.jpg",
            "publishedAt": "2022-05-20T02:52:17.48319Z",
            "content": "Artie spent 26 years in jail for murder. He is now part of a controversial scheme to tackle drugs, homelessness and crime in San Francisco. \r\nUrban Alchemy is a charity that looks to pacify the most … [+552 chars]"
        }
    ]

    constructor() {
        super();
        // console.log("Hello NewsToday");
        this.state = {
            articles: this.articles,
            loading: false

        }
    }


    render() {

        return (
            <div className='grid grid-cols-4 '>
                {this.state.articles.map((element) => {
                    return <div key={element.url} className="  w-[349px]">
                        <Newsitem   mode={this.props.mode} title={element.title.slice(0, 45)} discription={element.description.slice(0, 88)} imgUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
            </div>
        )
    }
}
