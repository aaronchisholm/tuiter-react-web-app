import posts from './posts.js';
import PostSummaryItem from './PostSummaryItem.js'

const WhoToFollowList = () => {
    return (`
        ${posts.map(a => PostSummaryItem(a)).join('')}
    `);}

export default WhoToFollowList;