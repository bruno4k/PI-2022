const loadVideos = () => {
    const container = document.querySelector('.container');
    videos.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('card');
        let title = document.createElement('h1');
        title.classList.add('title');
        let author = document.createElement('p');
        author.classList.add('author');
        let redirect = document.createElement('button');
        redirect.classList.add('redirect');
        let ytID = element.youtubeId;
        let ifrm = document.createElement('iframe');
        ifrm.setAttribute("src", `https://www.youtube.com/embed/${ytID}`);
        ifrm.style.width = '400px';
        ifrm.style.height = '300px';
        redirect.innerHTML = '<a href="http://www.youtube.com/watch?v=' + ytID + '" target="_blank" style="text-decoration:none">REDIRECT</a>';
        author.appendChild(document.createTextNode(element.author));
        title.appendChild(document.createTextNode(element.title)); 
        div.appendChild(title);
        div.appendChild(ifrm); 
        div.appendChild(author);
        div.appendChild(redirect);
        container.appendChild(div); 
    })
}

window.addEventListener('load', loadVideos);