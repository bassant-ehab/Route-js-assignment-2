function getquote() {
    var author = ["Oscar Wilde", "Albert Einstein", "Frank Zappa", " Marcus Tullius Cicero", "Mae West", "Mahatma Gandhi"]
    var text = ["“Be yourself; everyone else is already taken.”", "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”", "“You only live once, but if you do it right, once is enough.”", "“Be the change that you wish to see in the world.”"]

    var num = Math.floor(Math.random() * author.length)

    document.getElementById("author").innerHTML = author[num];
    document.getElementById("text").innerHTML = text[num]

}



