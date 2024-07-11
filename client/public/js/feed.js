document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        window.location.href = 'http://my.marist.edu';
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);
    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

currentStories.push({
    Title: 'Marist story 1',
    Body: 'Find out how they are going to build a new trampoline park ON CAMPUS !',
    linkUrl: 'https://www.collegeessayadvisors.com/wp-content/uploads/2021/06/Marist-College-15.jpg',
    imageUrl: 'images/image.png',
});

currentStories.push({
    Title: 'Marist Story 2',
    Body: 'The founder of marist was the one and only . . . Fr.Jean Claude Colin.',
    linkUrl: 'https://example.com/story2',
    imageUrl: 'images/hudsonriver.png'
});

currentStories.push({
    Title: 'Marist Story 3',
    Body: 'Find out whats on the menu for BREAKFAST,LUNCH, AND DINNER for 7/12/2024.',
    linkUrl: 'https://example.com/story3',
    imageUrl: 'images/hancock.jpeg'
})

function displayItem(feedItem) {
    let newsfeedElement = document.getElementById('newsfeed');

    let itemHtml = `
        <div class="feedItem">
            <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
            <p>${feedItem.Body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">
                <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 30%; height:30%;">
            </a>
            <hr>
        </div>
    `;
    newsfeedElement.innerHTML += itemHtml;
}

currentStories.forEach(function(item) {
    displayItem(item);
});