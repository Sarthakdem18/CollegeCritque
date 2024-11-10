
const quotes = [
    "CollegeCritique is a great tool for researching colleges. The user-friendly interface makes it easy to find information on specific schools, and the reviews from current students provide valuable insights into campus life, academics, and more.",
    "I love the community aspect of CollegeCritique. It's a great place to connect with other students, ask questions, and get advice. The forums are especially helpful for prospective students.",
    "I trust the information on CollegeCritique. The reviews are honest and unbiased, and the college profiles are accurate and up-to-date. It's a reliable source of information that I can trust.",
    "CollegeCritique has truly revolutionized the college application process. The college comparison tool and personalized recommendations have helped me narrow down my choices and make informed decisions. I highly recommend this platform to any student looking to find their perfect college match.",
    "Your dreams are just a step away with College Critque."
];
function showRandomQuote() {
    const quoteElement = document.querySelector(".testimonial"); // Select the quote element
    const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
    quoteElement.textContent = quotes[randomIndex]; // Set the quote text
}

showRandomQuote();

setInterval(showRandomQuote, 4000);
