/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

// Declare an array to store the quotes.
const quoteArr = [];
quoteArr.push("There is always light. If only we're brave enough to see it. If only we're brave enough to be it.");
quoteArr.push("If you want to lift yourself up, lift up someone else.");
quoteArr.push("I have learned not to allow rejection to move me.");
quoteArr.push("You’re braver than you believe, stronger than you seem, and smarter than you think.");
quoteArr.push("You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.");

// Declare an array to store the sourses.
const sourceArr = [];
sourceArr.push("Amanda Gorman");
sourceArr.push("Booker T. Washington");
sourceArr.push("Cicely Tyson");
sourceArr.push("A.A. Milne");
sourceArr.push("Lupita Nyong'o");

// Declare an array to store the objects.
const quotes = [];
for(let i=0;i<5;i++) {
    quotes.push({});
}

// Push the elements in quotes and sources array to the object.
for(let i=0;i<sourceArr.length;i++) {
    quotes[i].quote = quoteArr[i];
    quotes[i].source = sourceArr[i];
}

// Add a citation property.
quotes[0].citation = "goodhousekeeping.com";
quotes[0].year = 2022;

/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes) {
    const quotesLength = quotes.length;
    const ranNum = Math.floor(Math.random() * (quotesLength));
    return quotes[ranNum];
}

/***
 * `printQuote` function
***/

function printQuote() {
    const myQuote = getRandomQuote(quotes);
    var htmlStr = '<p class="quote">' + myQuote.quote + 
                  '</p><br><p class="source">' + myQuote.source;
    if(myQuote.citation) {
        htmlStr += '<span class="citation">' + myQuote.citation + '</span>';
    }        
    if(myQuote.year) {
        htmlStr += '<span class="year">' + myQuote.year + '</span>'
    }
    htmlStr += '</p>';
    document.querySelector('.quote-box').innerHTML = htmlStr;    
} 

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click",printQuote)