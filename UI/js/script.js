// var postsArray = [
//     {
//         id: '1',
//         description: 'When I decided to make a photo of something incomprehensible',
//         createdAt: new Date(),
//         author: 'Y',
//         photoLink: 'https://dpsfo.jpg',
//         hashTags: [
//             '#winter'
//         ],
//         likes: []
//     },
//     {
//         id: '2',
//         description: 'YAGUI',
//         createdAt: new Date(),
//         author: 'Y',
//         photoLink: 'https://docs.google.com/fir/home.jpg',
//         hashTags: [
//             '#summer'
//         ],
//         likes: []
//     },
//     {
//         id: '3',
//         description: 'SNZhR',
//         createdAt: new Date(),
//         author: 'Y',
//         photoLink: 'https://docs.google.com/fir/funnn.jpg',
//         hashTags: [
//             '#authumn'
//         ],
//         likes: []
//     },
//     {
//         id: '4',
//         description: 'SNZhR',
//         createdAt: new Date(),
//         author: 'V',
//         photoLink: 'https://docs.google.com/fir/funnn.jpg',
//         hashTags: [
//             '#spring'
//         ],
//         likes: []
//     },
//     {
//         id: '5',
//         description: 'SNZhR',
//         createdAt: new Date(),
//         author: 'V',
//         photoLink: 'https://docs.google.com/fir/funnn.jpg',
//         hashTags: [
//             '#winter'
//         ],
//         likes: []
//     },
//     {
//         id: '6',
//         description: 'SNZhR',
//         createdAt: new Date(),
//         author: 'Y',
//         photoLink: 'https://docs.google.com/fir/funnn.jpg',
//         hashTags: [
//             '#summer'
//         ],
//         likes: []
//     },
//     {
//         id: '7',
//         description: 'SNZhR',
//         createdAt: new Date(),
//         author: 'Ed',
//         photoLink: 'https://docs.google.com/fir/funnn.jpg',
//         hashTags: [
//             '#authumn'
//         ],
//         likes: []
//     },
//     {
//         id: '8',
//         description: 'SNZhR',
//         createdAt: new Date(),
//         author: 'Ed',
//         photoLink: 'https://docs.google.com/fir/funnn.jpg',
//         hashTags: [
//             '#spring'
//         ],
//         likes: []
//     }
// ];
// var photoPost = {
//     id: '2',
//     description: 'I am reach man',
//     createdAt: new Date(),
//     author: 'Y',
//     photoLink: 'https://dasdo.jpj'
// }

var Module = (function (){

    var body = document.getElementsByClassName("body");
    var centerColumn = document.createElement("div");
    centerColumn.className = "center-column";

    var postsArray = [];

    function getPosts(skip = 0, top = 10, filter) {
        var add = top;
        var skipping = skip;
        var result = postsArray;
        if(filter){
            if(filter.author){
                result = result.filter(post => post.author === filter.author);
            }
            if(filter.createdAt){
                result = result.filter(post => post.createdAt === filter.createdAt);
            }
            if(filter.hashTags){
                result = result.filter(post =>{
                    var x = 0;
                    filter.hashTags.forEach(tag =>{
                        x += post.hashTags.indexOf(tag)
                    });
                    if(x > -1 * filter.hashTags.length){
                        return post;
                    }
                });
            }
        }
        result = result.filter((post) =>{
            if(skipping-- <= 0){
                return post;
            }
        });
        result = result.filter((post) =>{
            if(add-- > 0){
                return post;
            }
        });
        return result;
    }

    function getPost(id) {
        return postsArray.find( post => post.id === id )
    }

    function validate(photoPost){
        if(photoPost && photoPost.description.length >= 200){
            return false;
        }
        return Boolean(photoPost.id && photoPost.description && photoPost.createdAt &&
            photoPost.author && photoPost.photoLink);
    }

    function add(photoPost){
        if(validatePhotoPost(photoPost)){
            postsArray.push(photoPost);
            return true;
        }else return false;
    }

    function edit(id, photoPost) {
        const element = postsArray.find(post => post.id === id);
        if(element){
            if(photoPost.description && photoPost.description.length < 200){
                element.description = photoPost.description;
            }
            if(photoPost.createdAt){
                element.createdAt = photoPost.createdAt;
            }
            if(photoPost.author){
                element.author = photoPost.author;
            }
            if(photoPost.photoLink){
                element.photoLink = photoPost.photoLink;
            }
            if(photoPost.hashTags){
                element.hashTags = photoPost.hashTags;
            }
        } else return false;
        return validatePhotoPost(element);
    }

    function remove(id) {
        postsArray = postsArray.filter(post => post.id !== id);
        postsArray.forEach((post) =>{
            if(post.id - '0' > id - '0'){
                post.id -= '1';
            }
        })
    }

    return{
        getPhotoPosts: function (skip = 0, top = 10, filter) {
            getPosts(skip = 0, top = 10, filter);
        },
        getPhotoPost: function (id) {
            getPost(id);
        },
        validatePhotoPost: function (photoPost) {
            validate(photoPost);
        },
        addPhotoPost: function (photoPost) {
            add(photoPost);
        },
        editPhotoPost: function (id, photoPost) {
            edit(id, photoPost);
        },
        removePhotoPost: function (id) {
            remove(id);
        }
    }
}());