const userLikes = []

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Ho provato a fare una funzione per la differenza di date (post pubblicato x tempo fa) - senza successo

// function generatoreDifferenzaData() {
//     let differenzaData
//     posts.forEach((element) => {
//         let dataOdierna = new Date()
//         let dataCreato = element.created
//         differenzaData = dataOdierna - dataCreato
//     })
//     return differenzaData;
//   }

function generatorePostList(){
    let lista = document.querySelector(".posts-list")
    let post
    posts.forEach((elem) => {
        // console.log(generatoreDifferenzaData())
        post = document.createElement("div")
        post.classList.add("post")
        post.innerHTML = `<div class="post__header">
                                <div class="post-meta">                    
                                    <div class="post-meta__icon">
                                        <img class="profile-pic" src="${elem.author.image}" alt="Phil Mangione">                    
                                    </div>
                                    <div class="post-meta__data">
                                        <div class="post-meta__author">${elem.author.name}</div>
                                        <div class="post-meta__time">${elem.created}</div>
                                    </div>                    
                                </div>
                            </div>
                            <div class="post__text">${elem.content}</div>
                            <div class="post__image">
                                <img src="${elem.media}" alt="${elem.author.name}">
                            </div>
                            <div class="post__footer">
                                <div class="likes js-likes">
                                    <div class="likes__cta">
                                        <a class="like-button ${isPostLiked(elem.id) ? "like-button--liked" : ""} js-like-button" href="#" data-postid="${elem.id}">
                                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                            <span class="like-button__label">Mi Piace</span>
                                        </a>
                                    </div>
                                    <div class="likes__counter">
                                        Piace a <b id="like-counter-${elem.id}" class="js-likes-counter">${elem.likes}</b> persone
                                    </div>
                                </div> 
                            </div>`
        lista.appendChild(post)

    })
    
    return lista
}

generatorePostList()

function isPostLiked(postId){
    return userLikes.includes(postId)
}

const likeButtons = document.getElementsByClassName("js-like-button")
const likeCounters = document.getElementsByClassName("js-likes-counter")

for (let i = 0; i < likeButtons.length; i++){
    let element = likeButtons[i]
    element.addEventListener("click", function(e){

        e.preventDefault()

        if (!element.classList.contains("like-button--liked")){
            element.classList.add("like-button--liked")
            let contatoreCorrente = likeCounters[i]
            let numero = parseInt(contatoreCorrente.innerHTML)
            contatoreCorrente.innerHTML = numero + 1
            posts[i].likes++
        }
        else {
            element.classList.remove("like-button--liked")
            let contatoreCorrente = likeCounters[i]
            let numero = parseInt(contatoreCorrente.innerHTML)
            contatoreCorrente.innerHTML = numero - 1
            posts[i].likes--
        }
    }) 
}

        



// for (let i = 0; i < miPiace.length; i++){

//     miPiace[i].addEventListener('click',function(){

//         Element[i].cla
//         const postId = this.dataset.postid
//         const likes = document.getElementById(like-counter-${postId})
//         const likesNumber = parseInt(likes.innerText)

//         likes.innerText = likesNumber+1
//             console.log(likesNumber)
//     })
// }
// const miPiace = document.getElementsByClassName('js-like-button')