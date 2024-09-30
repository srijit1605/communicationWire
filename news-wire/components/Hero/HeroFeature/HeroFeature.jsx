import React from 'react'
import styles from './HeroFeature.module.css'

const HeroFeature = () => {
  const article = {
    title: 'This is the Feature News Section. The biggest news of the day will be here.',
    body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
    author: 'someone',
    date: 'Sep 5 2024',
    comments: '1',
    categories: 'Technology',
    img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg'
  }

  return (
    <div className={styles.heroFeatureModule}>
      <img className={styles.featureImage} src={article.img} alt='writers building' title='writers building' />
      <h5 className={styles.featureCategory}>{article.categories}</h5>
      <h2 className={styles.featureTitle}>{article.title}</h2>
      <div className={styles.detailsAlignment}>
        <img className={styles.newsDetailsIcon} src={'/static/img/user.png'} height={13} alt='author' title='Author' />
        <h6 className={styles.newsDetails}>{article.author}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
        <h6 className={styles.newsDetails}>{article.date}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/speech-bubble.png'} height={13} alt='comment' title='Comment' />
        <h6 className={styles.newsDetails}>{article.comments}</h6>
      </div>
      <div className={styles.twoColumn}>
        <p className={styles.newsExcerpt}>{article.body.substring(0,445)}</p>
        <p>Read Full article.</p>
      </div>
    </div>
  )
}

export default HeroFeature