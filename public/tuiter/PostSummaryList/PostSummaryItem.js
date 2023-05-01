function PostSummaryItem({topic, userName, time, title, image, tweets}) {
    return(`
    <div class="card-body p-2 d-inline-flex border-top align-items-center">
        <div class="">
            ${(topic !== '' ? `<p class="card-text mb-0 text-secondary post-text">${topic}</p>` : ``)}
            ${(userName !== '' ? `<h6 class="card-text mb-0 fw-bold d-inline-flex account-name">${userName}</h6>` : ``)}
            <i class="fa fa-sm fa-circle-check d-inline-flex></i>
            ${(time ? `<p class="card-text mb-0 text-secondary post-text d-inline-flex">- ${time}</p>` : ``)}
            ${(title !== '' ? `<p class="card-text mb-0 fw-bold post-text">${title}</p>` : ``)}
            ${(tweets ? `<p class="card-text mb-0 text-secondary post-text">${tweets}</p>` : ``)}
        </div>
        <div class="width-150 ms-auto">
            <img src="${image}" class="img-thumbnail float-right w-100 p-0 border-0">
        </div>
    </div>
    `);
}

export default PostSummaryItem;