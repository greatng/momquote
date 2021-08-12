let qoute = [""]
let x = 0
var momqoute = function()
{
    qoute = ["MOM, I LOVE YOU, EVEN THOUGH I’LL NEVER ACCEPT YOUR FRIEND REQUEST", 
    "Happy Mother's Day Mum! You mean so much to me. I hope your day is as special as you are.", 
    "Words are never enough to thank you for all that you do … Happy Mother’s Day.", 
    "I may have never told you but I want you to know that I’m so proud to be your kid. I love you, mom. Happy Mother’s day !", 
    "To my first and favorite teacher ! Happy Mother’s Day !",
    "Thank you for always helping me to remember what is important in life. And today it is you! Wish you a happy Mother’s day.",
    "I’m so glad that you’re my mum !! Thanks for giving me the best chance in life. I love you. Happy Mother’s day.",
    "In my whole life I haven’t met a lady as elegant, beautiful, and kind as you are. I love you very much. Wish you a very happy Mother’s day.",
    "Thank you for always giving me a second chance I love you Mom Happy Mother’s Day.",
    "There’s never been a minute or even a second I wasn’t glad that you are my mom. Life is beautiful because I have you in it. Happy Mother’s Day.",
    "Thank you for always supporting me in my good and bad times and for giving right suggestions to me. Happy Mother’s day.",
    "I don’t say it as nearly enough but thank you, mom, for all you have done for me, and everything that you still do. Happy Mother’s day. I love you!",
    "I’m sorry for all the troubles I might have caused you, Mom. For this, I thank you for always forgiving me regardless of how much I have hurt you or disappointed you. I promise to be better for you. I love you. Happy Mother’s day.",
    "The love that you have given me has no boundaries. I want you to know that it is the same from me. My love for you has no limits. Happy Mother’s day.",
    "Thank you for teaching me right from wrong I love you Mom Happy Mother’s Day.",
    "Mom,You know.. I wouldn’t be standing here without you by my side. I love you more than my own life. Happy mother’s day.",
    "Mom, you have always been special to me and I hope that today is special for you.  Happy Mother’s day.",
    "I treasure our special relationship and share your warmth and love on this special day. Happy mother’s day.",
    "Thank you for being all these and more to me. Happy Mother’s Day.",
    "To a wonderful Mom and a very special friend to me. Happy Mother’s Day.",
    "To the world you are a mother but to me you are the world.",
    "Life has never been perfect. It probably never will be. But I will never lose hope, because I know I always have you standing by my side. I love you so much more than you even know. Happy Mother’s day to you."]

    x = qoute[Math.round(Math.random() * (qoute.length - 1))];
    document.getElementById("momQoute").innerHTML = x;
}

var copyText = function() {
    var text = document.getElementById("momQoute");
    text.select();
    text.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + text.value);
  }