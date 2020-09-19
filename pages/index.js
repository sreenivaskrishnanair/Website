import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

import Prismic from 'prismic-javascript'
import { Client } from "../prismic-configurations"
import {RichText} from "prismic-reactjs"
import Link from "next/link";



class IndexPage extends React.Component {
    
    constructor(props, {aboutme}) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading"
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>Sree UW-Madison</title>
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                        <link rel="shortcut icon" href=""></link>
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                    <div id="wrapper">
                        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                        />
                        <Footer timeout={this.state.timeout} />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}
// console.log("mee"); 
  


//function for handling Prismic
export default IndexPage

export async function getServerSideProps() {

    const aboutme = await Client().query(
        Prismic.Predicates.at("document.type", "about_me") 
    );
    console.log("here");
    console.log(aboutme); 

    return {
        props: {
            aboutme: aboutme
        }, 
    };
}


