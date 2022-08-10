import React, { Component, useState } from 'react';
import './News.css';
import NewsItem from './NewsItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrevNextBar from '../UI/PrevNextBar';
import Spinner from 'react-bootstrap/Spinner';


export default class News extends Component {
    article = [
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Auto Desk",
            "title": "Honda Activa new generation model teased, to launch soon - HT Auto",
            "description": "Honda Motorcycle and Scooter India (HMSI) has teased the upcoming scooter, which appears to be new generation model of its flagship Activa.",
            "url": "https://auto.hindustantimes.com/auto/two-wheelers/honda-activa-new-generation-model-teased-to-launch-soon-41660031046674.html",
            "urlToImage": "https://images.hindustantimes.com/auto/img/2022/08/09/1600x900/Honda_Activa_2022_scooter_1660031191200_1660031191396_1660031191396.png",
            "publishedAt": "2022-08-09T08:29:03Z",
            "content": "Honda Motorcycle &amp; Scooter India (HMSI) is all set to launch a new scooter, days after the two-wheeler manufacturer introduced the new CB300F motorcycle in the country. On Tuesday, HMSI teased th… [+1836 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "Shubham Singh",
            "title": "RBI imposes penalty on 8 banks, got account in any of THESE? - Zee News",
            "description": "The Reserve Bank of India (RBI) has imposed monetary penalties on eight Indian banks.",
            "url": "https://zeenews.india.com/personal-finance/rbi-imposes-penalty-on-8-banks-got-account-in-any-of-these-2495179.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/08/09/1075362-rbi-3.jpg",
            "publishedAt": "2022-08-09T07:10:48Z",
            "content": "New Delhi: The Reserve Bank of India (RBI) has imposed monetary penalties on eight Indian banks. Chhattisgarh Rajya Sahakari Bank, The Goa State Co-operative Bank, Garhaa Co-Operative Bank, The Yavat… [+5608 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Ola Electric to launch a new EV on August 15 in India, Likely to be new model of Ola S1 or S1 Pro - Kalinga TV",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiiwFodHRwczovL2thbGluZ2F0di5jb20vYnVzaW5lc3MvYXV0b21vYmlsZS9vbGEtZWxlY3RyaWMtdG8tbGF1bmNoLWEtbmV3LWV2LW9uLWF1Z3VzdC0xNS1pbi1pbmRpYS1saWtlbHktdG8tYmUtbmV3LW1vZGVsLW9mLW9sYS1zMS1vci1zMS1wcm8v0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-08-09T06:11:59Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YourStory"
            },
            "author": "Sindhu Kashyaap",
            "title": "Fintech startup Jodo raises $15M in Series A round led by Tiger Global - YourStory",
            "description": "Fintech startup Jodo, which is building solutions to make education payments convenient,  will use the funds to accelerate product innovation and sales, and further grow the team.",
            "url": "https://yourstory.com/2022/08/funding-alert-jodo-raises-15m-series-tiger-global-edtech-fintech/amp",
            "urlToImage": "https://images.yourstory.com/cs/2/a9efa9c02dd911e9adc52d913c55075e/EditorialImages-1660005936529.jpeg",
            "publishedAt": "2022-08-09T05:13:00Z",
            "content": "Jodo, a fintech startup in the educational payments space, has raised $15 million in Series A funding led by Tiger Global. The round also saw participation from existing investors, Elevation Capital … [+1774 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Loans To Get Costlier As Banks Raise Lending Rates After RBI Hike - NDTV Profit",
            "description": "The equated monthly installments (EMIs) and borrowing costs on loans will get costlier as major Indian banks have raised their lending rates or will do so soon.",
            "url": "https://www.ndtv.com/business/loans-to-get-costlier-as-indian-banks-raise-lending-rates-after-rbi-hike-3238316",
            "urlToImage": "https://c.ndtvimg.com/2022-08/ibr6o6p8_image_625x300_09_August_22.jpg",
            "publishedAt": "2022-08-09T04:46:46Z",
            "content": "Equated monthly installments (EMIs) and borrowing costs on loans to get costlier\r\nThe equated monthly instalments (EMIs) and borrowing costs on loans will get costlier as major Indian banks have rais… [+3287 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "Syrma SGS Technology IPO opens this week. What GMP signals? | Mint - Mint",
            "description": "Syrma SGS Technology IPO will open for subscription on 12th August 2022 and it will remain open till 18th August 2022",
            "url": "https://www.livemint.com/market/ipo/syrma-sgs-technology-ipo-opens-this-week-what-gmp-signals-11660015960790.html",
            "urlToImage": "https://images.livemint.com/img/2022/08/09/600x338/Syrma_SGS_Technologies_IPO_GMP_1660016190532_1660016198087_1660016198087.JPG",
            "publishedAt": "2022-08-09T03:41:08Z",
            "content": "Syrma SGS Technology IPO: The Initial Public Offering (IPO) of the Chennai-based engineering and design company is going to hit primary markets this week. As per the Red Herring Prospectus (RHP) of S… [+2570 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CarToq.com"
            },
            "author": "Jayprashanth Mohanram",
            "title": "Maruti Baleno Cross (YTB): What the compact SUV will look like [Video] - CarToq.com",
            "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle. While there’s speculation that the YTB could get a coupe crossov…",
            "url": "https://www.cartoq.com/maruti-baleno-cross-ytb-what-the-compact-suv-will-look-like-video/",
            "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/08/maruti-baleno-based-ytb-crossover-render-featured.jpg",
            "publishedAt": "2022-08-09T03:15:34Z",
            "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle. Whil… [+2612 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Matt G. Southern",
            "title": "Google Experiences Rare, Widespread Outage - Search Engine Journal",
            "description": "Google experienced a rare, widespread outage on August 9. The cause of the outage is currently unknown.",
            "url": "https://www.searchenginejournal.com/google-experiencing-major-outages-cause-unknown/460692/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/b8d95af2-ceb0-4e74-ab69-5d8a56ba3db6-62f1bdc0811f5-sej.jpeg",
            "publishedAt": "2022-08-09T03:04:36Z",
            "content": "Reports flooded in from Twitter on Monday evening as Google experienced a rare, widespread outage.\r\nSearchers around the world were met with this error message for a brief period when using Google:\r\n… [+2233 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GaadiWaadi.com"
            },
            "author": "Surendhar M",
            "title": "5-door Maruti Jimny To Likely Launch In H1 2023 In India - GaadiWaadi.com",
            "description": "5-door Maruti Suzuki Jimny is expected to go on sale in the first quarter of the next financial year (April to June 2023 period)",
            "url": "https://gaadiwaadi.com/5-door-maruti-jimny-to-likely-launch-in-h1-2023-in-india/",
            "urlToImage": "https://gaadiwaadi.com/wp-content/uploads/2021/05/Suzuki-Jimny-LWB-5-door-illustration.jpg",
            "publishedAt": "2022-08-09T02:59:22Z",
            "content": "Maruti Suzuki is reportedly working on launching the long-awaited Jimny off-roader in the domestic market in mid-2023. Following the new Brezza a few weeks ago, Maruti Suzuki will launch the Grand Vi… [+1825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
            "description": "A round-up of the biggest articles from newspapers",
            "url": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg",
            "publishedAt": "2022-08-09T02:34:47Z",
            "content": "Indian stock markets at four-month high despite valuation concerns\r\nEquity markets have hit their highest in nearly four months as foreign investors returned and commodity prices fell. The benchmark … [+6086 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Bloomberg",
            "title": "India seeks to oust Chinese smartphone brands from Rs 12000 phone market - The Indian Express",
            "description": "India seeks to restrict Chinese smartphone makers from selling devices cheaper than 12,000 rupees ($150) to kickstart its faltering domestic industry, dealing a blow to brands including Xiaomi Corp",
            "url": "https://indianexpress.com/article/technology/mobile-tabs/india-seeks-to-oust-chinese-smartphone-brands-from-rs-12000-phone-market-8079174/",
            "urlToImage": "https://images.indianexpress.com/2022/08/Xiaomi_LOGO_Reuters.jpg",
            "publishedAt": "2022-08-09T02:32:24Z",
            "content": "India seeks to restrict Chinese smartphone makers from selling devices cheaper than 12,000 rupees ($150) to kickstart its faltering domestic industry, dealing a blow to brands including Xiaomi Corp. … [+3026 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CarToq.com"
            },
            "author": "CarToq Desk",
            "title": "MG Motor prepares to launch the facelifted Hector SUV - CarToq.com",
            "description": "The British automotive marque MG Motor India made its debut in the country with India’s first “Internet SUV” Hector in 2019 and since then it has amassed a huge fan following. The model became an instant hit and has been an instrumental element in MG’s explos…",
            "url": "https://www.cartoq.com/mg-motor-prepares-to-launch-the-facelifted-hector-suv/",
            "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/08/MG-Hector-Facelift-Featured.jpg",
            "publishedAt": "2022-08-09T02:18:30Z",
            "content": "The British automotive marque MG Motor India made its debut in the country with Indias first Internet SUV Hector in 2019 and since then it has amassed a huge fan following. The model became an instan… [+3024 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Joel Rebello",
            "title": "Yield surge erodes bank profits in Q1, SBI's the worst hit - Economic Times",
            "description": "After ending at 6.80% in March, the benchmark bond yield had touched a high of 7.50% in June, the highest in more than three years on fears that rising inflation will force the Reserve Bank of India (RBI) to hike rates. It has since eased to end Monday at 7.3…",
            "url": "https://economictimes.indiatimes.com/markets/bonds/yield-surge-erodes-bank-profits-in-q1-sbis-the-worst-hit/articleshow/93442066.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-93442136,width-1070,height-580,imgsize-706650,overlay-etmarkets/photo.jpg",
            "publishedAt": "2022-08-09T02:15:00Z",
            "content": "Mumbai: A surge in bond yields during the quarter ended June 2022 has impacted all large lenders with only two out of eight of the biggest banks escaping making losses. But the saving grace is that y… [+2865 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Bhavya Dua",
            "title": "Got a million bucks to spare? WhiteOak’s Aashish Somaiyaa tells you where to invest - Moneycontrol",
            "description": "As much as international diversification is necessary for portfolio diversification, India is clearly the investment destination today, he feels.",
            "url": "https://www.moneycontrol.com/news/business/personal-finance/got-a-million-bucks-to-spare-whiteoaks-aashish-somaiyaa-tells-you-where-to-invest-8980281.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/08/Aashish20Somaiyaa-770x433.jpg",
            "publishedAt": "2022-08-09T01:27:27Z",
            "content": "Aashish Somaiyaa, CEO and executive director, WhiteOak Capital Asset Management, is a strong believer in actively-managed funds. His newly-formed WhiteOak AMC specialises in them.\r\nSomaiyaa has seen … [+6535 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CarToq.com"
            },
            "author": "Jayprashanth Mohanram",
            "title": "Royal Enfield electric motorcycle confirmed by Eicher MD Siddhartha Lal - CarToq.com",
            "description": "On the sidelines of Royal Enfield’s latest launch – the Hunter 350 – Eicher MD Siddhartha Lal took questions about the retro motorcycle giant’s future plans. Some of the questions invariably veered towards Royal Enfield’s electrification plans given the fact …",
            "url": "https://www.cartoq.com/royal-enfield-electric-motorcycle-confirmed-by-eicher-md-siddhartha-lal/",
            "urlToImage": "https://www.cartoq.com/wp-content/uploads/2020/12/royal-enfield-classic-electric-bike.jpg",
            "publishedAt": "2022-08-09T01:18:17Z",
            "content": "On the sidelines of Royal Enfield’s latest launch – the Hunter 350 – Eicher MD Siddhartha Lal took questions about the retro motorcycle giant’s future plans. Some of the questions invariably veered t… [+3179 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YourStory"
            },
            "author": "Trisha Medhi",
            "title": "[YS Exclusive] Cloud kitchen startup Bigspoon raises Series A funding from IAN, NB Ventures, Mouni Roy, others - YourStory",
            "description": "Cloud kitchen startup Bigspoon will use the funds to expand to over 250 kitchens in 75 cities across India, add brands in top categories, hire for leadership positions, and more.",
            "url": "https://yourstory.com/2022/08/ys-exclusive-ahmedabad-cloud-kitchen-startup-bigspoon-funding-mouni-roy-nb-ventures/amp",
            "urlToImage": "https://images.yourstory.com/cs/2/e641e900925711e9926177f451727da9/CopyofImageTaggingnoframesEditorialTeamMaster1-1659969098999.jpg",
            "publishedAt": "2022-08-09T00:31:00Z",
            "content": "Ahmedabad-based cloud kitchen startup BigSpoon on Tuesday said it raised Rs 100 crore in a Series A funding round from IAN, NB Ventures, Go-Ventures, Lets Venture, Grip Invest, and Anicut Capital. Ce… [+2295 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "Stock market holiday: NSE, BSE to remain closed today on Muharram | Mint - Mint",
            "description": "Stock market holidays in August 2022: Trading in Currency Derivatives Segment and Interest Rate Derivatives segment will also remain suspended today",
            "url": "https://www.livemint.com/market/stock-market-news/stock-market-holiday-nse-bse-to-remain-closed-today-on-muharram-11660004337485.html",
            "urlToImage": "https://images.livemint.com/img/2022/08/09/600x338/bseabhijitbhatelkarmint_1558294539332_1660004539450_1660004539450.jpg",
            "publishedAt": "2022-08-09T00:26:03Z",
            "content": "Stock market holiday: On account of Muharram, there will be no trading activity at stock market today. As per the information available on the official BSE website, trading on BSE (Bombay Stock Excha… [+2222 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Suraksha P",
            "title": "Eight account aggregators await RBI licence to go live in a quarter or two - Economic Times",
            "description": "Account Aggregator is a data sharing protocol between financial institutions that is envisaged as a mechanism to reduce the need for individuals to wait in long bank branch queues, use complicated internet banking portals, share their passwords, or seek out p…",
            "url": "https://economictimes.indiatimes.com/tech/technology/eight-account-aggregators-await-rbi-licence-to-go-live-in-a-quarter-or-two/articleshow/93439029.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-93439033,width-1070,height-580,imgsize-171432,overlay-ettech/photo.jpg",
            "publishedAt": "2022-08-08T23:02:00Z",
            "content": "Eight fintech entities that have received in-principle approval from the Reserve Bank of India (RBI) to operate as account aggregators are confident of going live in the next one or two quarters.\r\nTh… [+5121 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Rajeev Jindal",
            "title": "Experts Explain: What it will take to fulfill India's solar power dream - The Indian Express",
            "description": "From less than 10 MW in 2010, India has added significant photovoltaics capacity over the past decade, achieving over 50 GW by 2022.",
            "url": "https://indianexpress.com/article/explained/experts-explain-what-it-will-take-to-fulfill-indias-solar-power-dream-8078876/",
            "urlToImage": "https://images.indianexpress.com/2022/08/solar-2.jpg",
            "publishedAt": "2022-08-08T23:00:17Z",
            "content": "Solar photovoltaics (PV) has driven Indias push towards the adoption of cleaner energy generation technologies. From less than 10 MW in 2010, India has added significant PV capacity over the past dec… [+5575 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Sharmistha Mukherjee",
            "title": "Passenger vehicle sales in 2022 set to beat record estimates - The Economic Times",
            "description": "India's passenger vehicle sales this year are expected to be about a quarter of a million units more than the initial projections that were themselves for record high volumes, industry executives said.",
            "url": "https://economictimes.indiatimes.com/industry/auto/auto-news/passenger-vehicle-sales-in-2022-set-to-beat-record-estimates/articleshow/93440429.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-93440517,width-1070,height-580,imgsize-114534,overlay-economictimes/photo.jpg",
            "publishedAt": "2022-08-08T22:33:00Z",
            "content": "India's passenger vehicle sales this year are expected to be about a quarter of a million units more than the initial projections that were themselves for record high volumes, industry executives sai… [+3452 chars]"
        }
    ];
    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page : 1
        }
    }

    onClickPrevious = async () => {
        console.log("Previous Button Clicked");
        this.setState({page : this.state.page - 1})

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=27fca5e3b11d4b839b66f146bc4aecca&pageSize=6&page=${this.state.page - 1}`;
        console.log(url);
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData.articles);
        this.setState({ articles: parsedData.articles, loading: false })
        console.log(this.state);
        console.log(this.articles);
        
    }
    
    onClickNext = async () => {
        console.log("Next Button Clicked");
        this.setState({page : this.state.page + 1})


        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=27fca5e3b11d4b839b66f146bc4aecca&pageSize=6&page=${this.state.page + 1}`;
        console.log(url);

        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData.articles);
        this.setState({ articles: parsedData.articles, loading: false })
        console.log(this.state);
        console.log(this.articles);
    }


    async componentDidMount() {
        console.log("Mount");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=27fca5e3b11d4b839b66f146bc4aecca&pageSize=6&${this.state.page}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData.articles);
        this.setState({ articles: parsedData.articles, loading: false })
        // let parsedData = this.article;
        // this.setState({ articles: parsedData, loading: false })
        console.log(this.state);
        console.log(this.articles);
    }

    render() {
        console.log("render")
        return (
            <>
                {this.state.loading &&
                    <Container fluid>
                        <Row className="justify-content-center">
                            <Spinner animation="grow"
                            // className="visually-hidden"
                            />
                        </Row>
                    </Container>
                }
                {!this.state.loading && <Container>
                    <Row>
                        {
                            this.state.articles.map((article) => {
                                return <Col lg={4} md={6} sm={12} key={article.url}>
                                    <NewsItem
                                        source={article.source.name}
                                        style={this.props.style}
                                        title={article.title}
                                        description={article.description}
                                        urlToImage={article.urlToImage}
                                        url={article.url}
                                        author={article.author}
                                        date={article.publishedAt}
                                    ></NewsItem>
                                </Col>
                            })
                        }
                        </Row>
                    <Row>
                        <PrevNextBar onClickPrevious={this.onClickPrevious} onClickNext={this.onClickNext} page={this.state.page}>
                        </PrevNextBar>
                    </Row>
                </Container>}

            </>
        )
    }
}
