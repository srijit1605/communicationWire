import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import ImageCard from './ImageCard/ImageCard'

const BottomWidget = () => {
  const articles = [{
    title: 'News Article Title',
    body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
    author: 'someone',
    date: 'Sep 5 2024',
    comments: '1',
    img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    categories: 'Technology'
},
{
    title: 'News Article Title',
    body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
    author: 'someone',
    date: 'Sep 5 2024',
    comments: '1',
    img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    categories: 'Technology'
},
{
    title: 'News Article Title',
    body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
    author: 'someone',
    date: 'Sep 5 2024',
    comments: '1',
    img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    categories: 'Technology'
},
{
    title: 'News Article Title',
    body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
    author: 'someone',
    date: 'Sep 5 2024',
    img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    comments: '1',
    categories: 'Technology'
},
{
    title: 'News Article Title',
    body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
    author: 'someone',
    date: 'Sep 5 2024',
    img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    comments: '1',
    categories: 'Technology'
}]

  return (
    <div>
        <SnippetNews  title={'Snippet News'} articles={articles}/>
        <ImageCard/>
        <SpotlightNews title={'Local News'} articles={articles}/>
    </div>
  )
}

export default BottomWidget