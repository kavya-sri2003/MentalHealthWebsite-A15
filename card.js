const addButton = document.getElementById('addButton');addButton.addEventListener('click', addText);

// new function //
function addText() {
    let randNum = [
        'You\'re Inspirational!',
        'You\'re An Unstoppable Force Of Nature!',
        'You\'re Getting Better Everyday!',
        'There\'s No One Like ME!',
        'I Believe In Me!',
        'The Best Is Yet To Come!',
        'Today will be a great day!',
        'I Can Handle Anything!',
        'I Know You Can Accomplish Anything!',
        'I am a strong, capable person!',
        'I have done difficult things in the past, and I can do them again!',
        'I have experienced challenges in the past, and I am more resilient because of this!',
        'I am allowed to feel upset, angry, and sad sometimes—that’s part of being human!',
        'My personal boundaries are important and I’m allowed to express my needs to others!',
        '“No” is a complete sentence and I don’t have to explain or justify my boundaries!',
        'I am allowed to feel good and to experience pleasure in life!',
        'I am worthy of receiving good things and of accomplishing my goals in life!',
        'The past is the past, and my past doesn’t predict my future!',
        'I forgive myself for mistakes I made and I refuse to hold them against myself!',
        'I am allowed to take up space, to have desires, and to have a voice!',
        'I don’t have to give up my hopes and dreams!',
        'All this hard work I am putting into achieving my goals will pay off!',
        'I am capable of making healthy choices!',
        'I know my worth!',
        'I deserve to be loved and to love others!',
        'Growth is sometimes bumpy and isn’t always linear, but I will stay the course!',
        'Healing is within reach for me!',
        'I love my body, my mind, my dreams, and my goals!',
        'Negative thoughts do not serve me anymore!',
        'I will surround myself by people who love and support me unconditionally!',
        'I accept myself for who I am!',
        'With positive thoughts and self-confidence, I will be unstoppable!',
        'I am proud of myself and will continue to strive to do well!',
        'Today I will do my best!',
    ];

    let choosedText = randNum [(Math.floor(Math.random()* 12))];
    console.log(choosedText);
    document.getElementById('output').innerHTML = choosedText;
}







// old function //
// function addText() {
//     let randNum = Math.random();
//     if (randNum <= 0.1 && randNum <= .2) {
//         result = "You've Got This!";
//     } else if (randNum >= 0.3 && randNum <= 0.4) {
//         result = "You're Inspirational!";
//     } else if (randNum >= 0.5 && randNum <= 0.6) {
//         result = "You're An Unstoppable Force Of Nature!";
//     } else if (randNum >= 0.7 && randNum <= 0.8) {
//         result = "You're Getting Better Everyday!";
//     } else if (randNum <= 0.9) {
//         result = "There's No One Like You!";
//     }
//     else {
//         result = "I Believe In You!";
//     }
//     document.getElementById('output').innerHTML = result;
// }
