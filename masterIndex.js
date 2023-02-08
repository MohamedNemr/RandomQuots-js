var authorName = document.getElementById("name")
var authorPhoto = document.getElementById("photo")
var autherQuat = document.getElementById("quot")




 const author_list = [
    {
        Name:  "Albert Einstein",
        Quat:  `“If you can't explain it to a six year old, you don't understand it yourself.”`,
        Photo:  "./imgs/Albert.jpg"
    }
    ,
    {
        Name:  "Oscar Wilde",
        Quat:  `“Be yourself; everyone else is already taken.”`,
        Photo:  "./imgs/Oscar.jpg"
    },
    {
        Name:  "Mahatma Gandhi",
        Quat:  `““Be the change that you wish to see in the world.”`,
        Photo:  "./imgs/Gabdhi.jpg"
    },
    {
        Name:  "Mae West",
        Quat:  `“If you can't explain it to a six year old, you don't understand it yourself.”`,
        Photo:  "./imgs/Mae.jpg"
    },
    {
        Name:  "Ralph Waldo Emerson",
        Quat:  `“To be yourself in a world that is constantly
        trying to make you something else is the greatest accomplishment.”`,
        Photo:  "./imgs/Ralph.jpg"
    }
]


function display() {





    var index=Math.floor(Math.random()*author_list.length)
    authorName.innerHTML=author_list[index].Name;
    autherQuat.innerHTML=author_list[index].Quat;
    authorPhoto.src=author_list[index].Photo
   



    

}
