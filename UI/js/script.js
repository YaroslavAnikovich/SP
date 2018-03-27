var user = 'Ed';

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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
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
            userPhoto: '../images/userInHeader.png'
        }
    ];

    var tape = [
    ];

    function getPosts(filter, skip = 0, top = 10) {
        var result = [];
        tape.forEach(post => result.push(post));
        if (filter) {
            if (filter.author) {
                result = result.filter(post => post.author === filter.author);
            }
            if (filter.createdAt) {
                result = result.filter(post => post.createdAt === filter.createdAt);
            }
            if (filter.hashTags) {
                result = result.filter(post => {
                    var x = 0;
                    filter.hashTags.forEach(tag => {
                        x += post.hashTags.indexOf(tag)
                    });
                    if (x >= 0) {
                        return post;
                    }
                });
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
            var date = photoPost.createdAt;
            var m = date.getMonth();
            var d = date.getDate();
            var y = date.getFullYear();
            var h = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var milli = date.getMilliseconds();
            const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "De"
            ];
            var addDate = d + " " + MONTH_NAMES[m] + ' ' + y;
            photoPost.createdAt = addDate;
            if (tape.length === 0) {
                photoPost.id = '1';
            } else {
                photoPost.id = tape[tape.length - 1].id - (-'1');
            }
            tape.push(photoPost);
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
        var length = tape.length;
        tape = tape.filter(post => post.id != id);
        console.log(tape);
        return length !== tape.length;
    }

    function like(post) {
        if (post.likes.find(user) !== -1) {
            post.likes = post.likes.filter(el => el.likes.find(user) !== -1);
        } else {
            post.likes.push(user);
        }
    }

    function getT(){
        return tape;
    }

    return {
        i: 10,
        tape: tape,
        posts: postsArray,
        getPhotoPosts: getPosts,
        getPhotoPost: getPost,
        validatePhotoPost: validate,
        addPhotoPost: add,
        editPhotoPost: edit,
        removePhotoPost: remove,
        likePhotoPost: like,
        getTape: getT,
    }
}());

var Dom = (function(){

    function setUser(){
        if(user){
            document.getElementsByClassName('username')[0].textContent = user;
        } else{

        }
    }
    function add(post){
        var newPost = true;
        var flag = Module.addPhotoPost(post);
        if(flag){
            var posts = document.getElementsByClassName("center-column");
            var tags ="";
            post.hashTags.forEach(tag => tags += " " + tag);
            if(user === post.author){
                newPost = document.createElement('div');
                newPost.setAttribute("id", post.id.toString());
                newPost.setAttribute("class", "post");
                newPost.innerHTML = `<div class="post-up">
                    <img src=` + post.userPhoto + ` class="user-photo" alt="">
                    <h3 class="user-name">` + post.author + `</h3>
                    <h3 class="dateText">` + post.createdAt + `</h3>
                    <button class="delete-button" onclick="Dom.removePhotoPost(parentNode.parentNode.id)"><img src="../images/x.png" alt="" class="delete-image"
                    ></button>
                </div>
                <img src=` + post.photoLink + ` alt="post-content" class="post-content">
                <div class="post-down">
                    <button class="like-button" onclick="Dom.likePhotoPost(parentNode.parentNode.id)">
                        <img src="../images/not_liked.png" alt="heart" class="like-img">
                    </button>
                    <button class="edit-button" onclick="Dom.editPhotoPost(parentNode.parentNode.id)"><img src="../images/pencil.png" alt="pencil" class="edit-img"></button>
                    <h3 class="post-comment">` + post.description + `</h3>
                    <h3 class="tags">` + tags + `</h3>
                </div>`;
            }else{
                newPost = document.createElement('div');
                newPost.setAttribute("class", "post");
                newPost.setAttribute("id", post.id.toString());
                newPost.innerHTML = `<div class="post-up">
                    <img src="../images/userInHeader.png" class="user-photo" alt="">
                    <h3 class="user-name">` + post.author + `</h3>
                    <h3 class="dateText">` + post.createdAt + `</h3>
                </div>
                <img src=` + post.photoLink + ` alt="post-content" class="post-content">
                <div class="post-down">
                    <button class="like-button" onclick="Dom.likePhotoPost(parentNode.parentNode.id)">
                        <img src="../images/not_liked.png" alt="heart" class="like-img">
                    </button>
                    <h3 class="post-comment">` + post.description + `</h3>
                    <h3 class="tags">` + tags + `</h3>
                </div>`;
            }
            posts[0].insertBefore(newPost,posts[0].childNodes[0]);
        }
        return newPost;
    }

    function edit(id, photoPost){
        console.log(10);
        var flag = Module.validatePhotoPost(photoPost);
        if(flag){
            Module.tape.forEach(post =>{
                if(post.id == id){
                    post.description = photoPost.description;
                    post.photoLink = photoPost.photoLink;
                    post.hashTags = [];
                    photoPost.hashTags.forEach(pst => post.hashTags.push(pst));
                }
            })
            var post = document.getElementById(id);
            post.childNodes[2].setAttribute("src", photoPost.photoLink);
            post.childNodes[4].childNodes[3].innerHTML = photoPost.description;
            post.childNodes[4].childNodes[5].innerHTML = photoPost.hashTags;
        }
    }

    function remove(id){
        var flag = Module.removePhotoPost(id);
        if(flag){
            Module.tape = Module.tape.filter(post => post.id != id);
            var element = document.getElementById(id);
            element.remove();
        }
        console.log()
    }

    function like(id){
        if(Module.tape.find(post => post.id == id)){
            var postLike = document.getElementById(id).childNodes[4].childNodes[1].childNodes[1];
            Module.tape.forEach(post => {
                if(post.id == id){
                    if(post.likes.length === 0 || !post.likes.find(usr => usr == user)){    
                        post.likes.push(user);
                        postLike.setAttribute("src", "../images/liked.png");
                        Module.tape.find(post => post.id == id).likes.push;
                    } else{
                        post.likes = post.likes.filter(el => el !== user);
                        postLike.setAttribute("src", "../images/not_liked.png");
                    }
                }
            })
        }

    }

    return{
        user : user,
        setUserName: setUser,
        addPhotoPost: add,
        editPhotoPost: edit,
        removePhotoPost: remove,
        likePhotoPost: like,
    }
}());




