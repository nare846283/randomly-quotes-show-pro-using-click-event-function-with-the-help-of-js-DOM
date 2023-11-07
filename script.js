
// async function changeBackground(){
//     try {
//         const response = await fetch("https://source.unsplash.com/random");
//         const imageUrl = response.url;

//         const bgContainer = document.querySelector("#bg-container");

//         bgContainer.style.backgroundImage = `url(${imageUrl})`;

//     } catch (error) {
//         console.error("Error fetching background image:", error);
//     }
// };

function generate(){
    var quotes = {
        "- Deepak Chopra" : '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
        "― Virginia Woolf, A Room of Ones Own" : '"Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind."',
        "― Coco Chanel" : '"The most courageous act is still to think for yourself. Aloud."',
        "― John Green, The Fault in Our Stars" : '"Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin."',
        "― Mahatma Gandhi" : '"Freedom is not worth having if it does not include the freedom to make mistakes."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}