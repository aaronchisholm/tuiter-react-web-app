const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item d-inline-flex align-items-center">
        <img src="../../images/${who.avatarIcon}" class="rounded-circle ms-0 me-1 profile-image">
        <div>
            <p class="d-inline-flex mb-0 fw-bold">${who.userName}</p>
            <i class="fa fa-check-circle fa-sm d-inline-flex"></i>
            <p class="mb-0 wd-info-text">${who.handle}</p>
        </div>
        <button href="#" class="btn rounded-pill btn-primary ms-auto fs-6">Follow</button>
    </li>
    `);
}

export default WhoToFollowListItem;