import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
               <li class="list-group-item mb-0 fw-bold fs-6"> Who to follow </li>
                ${who.map(a => WhoToFollowListItem(a)).join('')}
           </ul>
`); }

export default WhoToFollowList;