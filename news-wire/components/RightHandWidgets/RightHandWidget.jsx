import React from 'react'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import ImageSlider from './ImageSlider/ImageSlider'
import SnippetTab from './SnippetTab/SnippetTab'

const RightHandWidget = () => {
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
      <SnippetTab/>
      <ImageSlider/>
      <SpotlightNews  title={'Fast Facts'} articles={articles}/>
      <SnippetNews title={'Brief Bytes'} articles={articles} fulWidth/>
    </div>
  )
}

export default RightHandWidget