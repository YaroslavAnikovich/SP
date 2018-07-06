var user = "";

var users = [];

var Module = (function () {

    var postsArray = [
        {
            description: '1',
            createdAt: new Date(),
            author: 'Vi',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#winter'
            ],
            likes: [],
        },
        {
            description: '2',
            createdAt: new Date(),
            author: 'Y',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#summer'
            ],
            likes: [],
        },
        {
            description: '3',
            createdAt: new Date(),
            author: 'Yaraslau',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#authumn'
            ],
            likes: [],
        },
        {
            description: '4',
            createdAt: new Date(),
            author: 'V',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#spring'
            ],
            likes: [],
        },
        {
            description: '5',
            createdAt: new Date(),
            author: 'V',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#winter'
            ],
            likes: [],
        },
        {
            description: '6',
            createdAt: new Date(),
            author: 'Y',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#summer'
            ],
            likes: [],
        },
        {
            description: '7',
            createdAt: new Date(),
            author: 'Ed',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#authumn'
            ],
            likes: [],
        },
        {
            description: '8',
            createdAt: new Date(),
            author: 'Ed',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#spring'
            ],
            likes: [],
        },
        {
            description: '9',
            createdAt: new Date(),
            author: 'Y',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#winter',
                '#summer'
            ],
            likes: [],
        },
        {
            description: '10',
            createdAt: new Date(),
            author: 'AWh',
            photoLink: '../images/kit.JPG',
            hashTags: [
                '#summer'
            ],
            likes: [],
        },
        {
            description: 'Desc 11',
            createdAt: new Date(),
            author: 'Kate',
            photoLink: '../images/flowers.JPG',
            hashTags: [
                '#winter'
            ],
            likes: [],
        },
        {
            description: 'Desc 12',
            createdAt: new Date(),
            author: 'Vi',
            photoLink: '../images/lake.JPG',
            hashTags: [
                '#summer'
            ],
            likes: [],
        },
        {
            description: 'Desc 13',
            createdAt: new Date(),
            author: 'Ed',
            photoLink: '../images/mountains.JPG',
            hashTags: [
                '#authumn'
            ],
            likes: [],
        },
        {
            description: 'Desc 14',
            createdAt: new Date(),
            author: 'AWh',
            photoLink: '../images/plane.jpg',
            hashTags: [
                '#spring'
            ],
            likes: [],
        },
        {
            description: 'Desc 15',
            createdAt: new Date(),
            author: 'Vi',
            photoLink: '../images/sky.JPG',
            hashTags: [
                '#winter'
            ],
            likes: [],
        },
        {
            description: 'Desc 16',
            createdAt: new Date(),
            author: 'Y',
            photoLink: '../images/sky.JPG',
            hashTags: [
                '#summer'
            ],
            likes: [],
        },
        {
            description: 'Desc 17',
            createdAt: new Date(),
            author: 'Ed',
            photoLink: '../images/zont.JPG',
            hashTags: [
                '#authumn'
            ],
            likes: [],
        },
        {
            description: 'Desc 18',
            createdAt: new Date(),
            author: 'Kate',
            photoLink: '../images/legs.JPG',
            hashTags: [
                '#spring'
            ],
            likes: [],
        },
        {
            description: 'Desc 19',
            createdAt: new Date(),
            author: 'Vi',
            photoLink: '../images/flowers.JPG',
            hashTags: [
                '#winter',
                '#summer'
            ],
            likes: [],
        },
        {
            description: 'Desc 20',
            createdAt: new Date(),
            author: 'AWh',
            photoLink: '../images/sun.JPG',
            hashTags: [
                '#summer'
            ],
            likes: [],
        }
    ];

    function getPosts(filter, skip = 0, top = 10) {
        var result = Array.from(tape);
        // tape.forEach(post => result.push(post));
        if (filter) {
            if (filter.author) {
                result = result.filter(post => post.author === filter.author);
            }
            if (filter.createdAt) {
                result = result.filter(post => post.createdAt === filter.createdAt);
            }
            if (filter.hashTags) {
                if (filter.hashTags.every(tag => result.hashTags.find(tagInPost => tagInPost === tag))) ;
            }
        }
        result = result.splice(skip, top);
        return result;
    }

    function getPost(id) {
        return tape.find(post => post.id === id)
    }

    function validate(photoPost) {
        if (!photoPost || !photoPost.description || photoPost.description.length >= 200) {
            return false;
        }
        if (photoPost) {
            return Boolean(photoPost.description && photoPost.createdAt &&
                photoPost.author && photoPost.photoLink && Array.isArray(photoPost.hashTags));
        }
    }

    function add(photoPost) {
        if (validate(photoPost)) {
            const tape = JSON.parse(localStorage.getItem('tape'));
            const date = new Date(photoPost.createdAt);
            const m = date.getMonth();
            const d = date.getDate();
            const y = date.getFullYear();
            const h = date.getHours();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            const milli = date.getMilliseconds();
            const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "De"
            ];
            const addDate = d + " " + MONTH_NAMES[m] + ' ' + y;
            photoPost.createdAt = addDate;
            if (tape.length === 0) {
                photoPost.id = '1';
                tape.push(photoPost);
            } else {
                photoPost.id = parseInt(tape[tape.length - 1].id) + 1;
                tape.push(photoPost);
            }
            localStorage.setItem('tape',JSON.stringify(tape));
            return true;
        }
        return false;
    }

    function edit(id, photoPost) {
        const element = tape.find(post => post.id === id);
        if (element) {
            if (photoPost.description && photoPost.description.length < 200) {
                element.description = photoPost.description;
            }
            if (photoPost.photoLink) {
                element.photoLink = photoPost.photoLink;
            }
            if (photoPost.hashTags) {
                element.hashTags = photoPost.hashTags;
            }
        }
        return validate(element);
    }

    function remove(id) {
        const tape = JSON.parse(localStorage.getItem('tape'));
        const length = tape.length;
        tape = tape.filter(post => parseInt(post.id) !== parseInt(id));
        localStorage.setItem('tape', JSON.stringify(tape));
        return length !== tape.length;
    }

    function like(post) {
        if (post.likes.find(user) !== -1) {
            post.likes = post.likes.filter(el => el.likes.find(user) !== -1);
        } else {
            post.likes.push(user);
        }
    }

    return {
        i: 10,
        posts: postsArray,
        getPhotoPosts: getPosts,
        getPhotoPost: getPost,
        validatePhotoPost: validate,
        addPhotoPost: add,
        editPhotoPost: edit,
        removePhotoPost: remove,
        likePhotoPost: like
    }
}());

var Dom = (function () {

    function initializeStorage(){
        if(!localStorage.getItem('tape')){
            const tape = [];
            localStorage.setItem('tape', JSON.stringify(tape));
        }
        if(!localStorage.getItem('users')){
            const users = [];
            localStorage.setItem('user', "Kate");
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

    function redrawPage(){
        var username = localStorage.getItem('user');
        if(username){
            const body = document.getElementsByClassName('body');
            body[0].innerHTML = `
            <div class="header">
            <img class="logo" src="../images/logo.png" alt="">
            <div class="user">
                <h3 class="username">
                    Yaraslau
                </h3>
                <button class="exit">
                  <img src="../images/exit.png" alt="">
              </button>
          </div>
        </div>

        <div class="left-column">

            <form action="" method="" onsubmit="return false;" id="name-search">
               <h3>Search by Name</h3>
                <input id="name" type="text" placeholder="Enter name...">
                <button><img src="../images/loupe.png" alt=""></button>
            </form>

            <form action="" method="" onsubmit="return false;" id="date-search">
               <h3>Search by Date</h3>
               <input id="date" type="text" placeholder="DD-MM-YY">
                <button><img src="../images/loupe.png" alt=""></button>
            </form>
        
           <form action="" method="" onsubmit="return false;" id="tag-search">
               <h3>Search by Tag</h3>
                <input id="tag" type="text" placeholder="#Enter#Tags">
                <button><img src="../images/loupe.png" alt=""></button>
            </form>
        </div>
        <div class="center-column">
            <script>
               Dom.initialization();
                JSON.parse(localStorage.getItem('tape')).forEach((post) => Dom.drawPhotoPost(post));
            </script>
        </div>
        <div class="right-column">
           <button class="creating-button" onclick="Dom.addPhotoPost(Module.posts[Module.i++])">
              Create new post
          </button>
        </div>

        <button class="paggination"><img src="../images/reload.png" alt=""></button>

        <div class="footer">
            <p class="info">Collective_photo_portal_8g_2c ©Created by Yaraslau_Anikovich 01_02_2018</p>
           <p class="mail">yvanikovich@mail.ru</p>
        </div>

            `;
            const tape = JSON.parse(localStorage.getItem('tape'));
            tape.forEach((post) => Dom.drawPhotoPost(post));
        }
    }

    const user = localStorage.getItem('user');

    function draw(post){
        const posts = document.getElementsByClassName("center-column");
        let tags = "";
        let newPost;
        post.hashTags.forEach(tag => tags += " " + tag);
        if (user === post.author) {
            newPost = document.createElement('div');
            newPost.setAttribute("id", post.id.toString());
            newPost.setAttribute("class", "post");
            newPost.innerHTML = `<div class="post-up">
                    <h3 class="user-name">` + post.author + `</h3>
                    <h3 class="dateText">` + post.createdAt + `</h3>
                    <button class="delete-button" onclick="Dom.removePhotoPost(parentNode.parentNode.id.toString())"><img src="../images/x.png" alt="" class="delete-image"
                    ></button>
                </div>
                <img src=` + post.photoLink + ` alt="post-content" class="post-content">
                <div class="post-down">
                    <button class="like-button" onclick="Dom.likePhotoPost(parentNode.parentNode.id.toString())">
                        <img src="../images/not_liked.png" alt="heart" class="like-img">
                    </button>
                    <button class="edit-button" onclick="Dom.editPhotoPost(parentNode.parentNode.id.toString())">
                        <img src="../images/pencil.png" alt="pencil" class="edit-img">
                    </button>
                    <h3 class="post-comment">` + post.description + `</h3>
                    <h3 class="tags">` + tags + `</h3>
                </div>`;
        } else {
            newPost = document.createElement('div');
            newPost.setAttribute("class", "post");
            newPost.setAttribute("id", post.id.toString());
            newPost.innerHTML = `<div class="post-up">
                    <h3 class="user-name">` + post.author + `</h3>
                    <h3 class="dateText">` + post.createdAt + `</h3>
                </div>
                <img src=` + post.photoLink + ` alt="post-content" class="post-content">
                <div class="post-down">
                    <button class="like-button" onclick="Dom.likePhotoPost(parentNode.parentNode.id.toString())">
                        <img src="../images/not_liked.png" alt="heart" class="like-img">
                    </button>
                    <h3 class="post-comment">` + post.description + `</h3>
                    <h3 class="tags">` + tags + `</h3>
                </div>`;
        }
        const postLike = newPost.childNodes[4].childNodes[1].childNodes[1];
        if (post.likes.find(usr => usr === user)) {
            post.likes.push(user);
            postLike.setAttribute("src", "../images/liked.png");
        }
        posts[0].insertBefore(newPost, posts[0].childNodes[0]);
    }

    function add(post) {
        let newPost = true;
        if (Module.addPhotoPost(post)) {
            const posts = document.getElementsByClassName("center-column");
            let tags = "";
            post.hashTags.forEach(tag => tags += " " + tag);
            if (user === post.author) {
                newPost = document.createElement('div');
                newPost.setAttribute("id", post.id.toString());
                newPost.setAttribute("class", "post");
                newPost.innerHTML = `<div class="post-up">
                    <h3 class="user-name">` + post.author + `</h3>
                    <h3 class="dateText">` + post.createdAt + `</h3>
                    <button class="delete-button" onclick="Dom.removePhotoPost(parentNode.parentNode.id.toString())"><img src="../images/x.png" alt="" class="delete-image"
                    ></button>
                </div>
                <img src=` + post.photoLink + ` alt="post-content" class="post-content">
                <div class="post-down">
                    <button class="like-button" onclick="Dom.likePhotoPost(parentNode.parentNode.id.toString())">
                        <img src="../images/not_liked.png" alt="heart" class="like-img">
                    </button>
                    <button class="edit-button" onclick="Dom.editPhotoPost(parentNode.parentNode.id.toString())">
                        <img src="../images/pencil.png" alt="pencil" class="edit-img">
                    </button>
                    <h3 class="post-comment">` + post.description + `</h3>
                    <h3 class="tags">` + tags + `</h3>
                </div>`;
            } else {
                newPost = document.createElement('div');
                newPost.setAttribute("class", "post");
                newPost.setAttribute("id", post.id.toString());
                newPost.innerHTML = `<div class="post-up">
                    <h3 class="user-name">` + post.author + `</h3>
                    <h3 class="dateText">` + post.createdAt + `</h3>
                </div>
                <img src=` + post.photoLink + ` alt="post-content" class="post-content">
                <div class="post-down">
                    <button class="like-button" onclick="Dom.likePhotoPost(parentNode.parentNode.id.toString())">
                        <img src="../images/not_liked.png" alt="heart" class="like-img">
                    </button>
                    <h3 class="post-comment">` + post.description + `</h3>
                    <h3 class="tags">` + tags + `</h3>
                </div>`;
            }
            posts[0].insertBefore(newPost, posts[0].childNodes[0]);
        }
        return newPost;
    }

    function edit(id, photoPost) {
        var htmlPost = document.getElementById(id);
        if(photoPost){
            Module.tape.forEach(post => {
                if (parseInt(post.id) === parseInt(id)) {
                    if(photoPost.description){
                        post.description = photoPost.description;
                        htmlPost.childNodes[4].childNodes[5].innerHTML = photoPost.description;
                    }
                    if(photoPost.photoLink){
                        post.photoLink = photoPost.photoLink;
                        htmlPost.childNodes[2].setAttribute("src", photoPost.photoLink);
                    }
                    post.hashTags = [];
                    if(photoPost.hashTags){
                        photoPost.hashTags.forEach(pst => post.hashTags.push(pst));
                        htmlPost.childNodes[4].childNodes[7].innerHTML = photoPost.hashTags;
                    }
                }
            });
        }
    }

    function remove(id) {
        let tape = JSON.parse(localStorage.getItem('tape'));
        const length1 = tape.length;
        tape = tape.filter(post => parseInt(post.id) !== parseInt(id));
        const length2 = tape.length;
        if (length1 !== length2) {
            var element = document.getElementById(id);
            element.remove();
        }
        localStorage.setItem('tape', JSON.stringify(tape));
    }

    function like(id) {
        const tape = JSON.parse(localStorage.getItem('tape'));
        if (tape.find(post => parseInt(post.id) === parseInt(id))) {
            var postLike = document.getElementById(id).childNodes[4].childNodes[1].childNodes[1];
            tape.forEach(post => {
                if (parseInt(post.id) === parseInt(id)) {
                    if (post.likes.length === 0 || !post.likes.find(usr => usr === user)) {
                        post.likes.push(user);
                        postLike.setAttribute("src", "../images/liked.png");
                        tape.find(post => parseInt(post.id) == parseInt(id)).likes.push;
                    } else {
                        post.likes = post.likes.filter(el => el !== user);
                        postLike.setAttribute("src", "../images/not_liked.png");
                    }
                }
            })
        }
        localStorage.setItem('tape', JSON.stringify(tape));

    }

    return {
        user: user,
        drawPhotoPost: draw,
        addPhotoPost: add,
        editPhotoPost: edit,
        removePhotoPost: remove,
        likePhotoPost: like,
        initialization: initializeStorage,
        redraw: redrawPage,
    }
}());




