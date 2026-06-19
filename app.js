 // Question 1
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let fullName = firstName + " " + lastName;
    document.write("<h2>Question 1</h2>");
    document.write("Full Name: " + fullName + "<br><br>");

    // Question 2
    let favoritePhone = prompt("Enter your favorite mobile phone model:");
    document.write("<h2>Question 2</h2>");
    document.write("My favorite phone is: " + favoritePhone + "<br>");
    document.write("Length of string: " + favoritePhone.length + "<br><br>");

    // Question 3
    let word = "Pakistani";
    let index = word.indexOf('n');
    document.write("<h2>Question 3</h2>");
    document.write("String: " + word + "<br>");
    document.write("Index of 'n': " + index + "<br><br>");

    // Question 4
    let text = "Hello World";
    let lastIndex = text.lastIndexOf('l');
    document.write("<h2>Question 4</h2>");
    document.write("String: " + text + "<br>");
    document.write("Last index of 'l': " + lastIndex + "<br><br>");

    // Question 5
    let word2 = "Pakistani";
    let charAtIndex3 = word2.charAt(3);
    document.write("<h2>Question 5</h2>");
    document.write("String: " + word2 + "<br>");
    document.write("Character at index 3: " + charAtIndex3 + "<br><br>");

    // Question 6
    let firstName2 = prompt("Enter your first name:");
    let lastName2 = prompt("Enter your last name:");
    let fullName2 = firstName2.concat(" ", lastName2);
    document.write("<h2>Question 6</h2>");
    document.write("Full Name (using concat): " + fullName2 + "<br><br>");

    // Question 8
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    let newMessage = message.replace(/and/g, "&");
    document.write("<h2>Question 8</h2>");
    document.write("Original: " + message + "<br>");
    document.write("Modified: " + newMessage + "<br><br>");

    // Question 9
    let strNumber = "472";
    let convertedNumber = Number(strNumber);
    document.write("<h2>Question 9</h2>");
    document.write("Value: " + strNumber + " Type: " + typeof strNumber + "<br>");
    document.write("Value: " + convertedNumber + " Type: " + typeof convertedNumber + "<br><br>");

    // Question 11
    let userInput = prompt("Enter some text:");
    let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    document.write("<h2>Question 11</h2>");
    document.write("User input: " + userInput + "<br>");
    document.write("Title case: " + titleCase + "<br><br>");

    // Question 12
    var num = 35.36;
    let numToString = num.toString();
    let withoutDot = numToString.replace(".", "");
    document.write("<h2>Question 12</h2>");
    document.write("Original: " + num + "<br>");
    document.write("After conversion: " + withoutDot + "<br><br>");

    // Question 13
    let username = prompt("Enter username:");
    document.write("<h2>Question 13</h2>");
    if (username.includes('@') || username.includes('.') || username.includes('!')) {
        document.write("Please enter a valid username without special symbols (@ . !)<br><br>");
    } else {
        document.write("Valid username: " + username + "<br><br>");
    }

    // Question 14
    let A = ["cake", "apple pie", "cookie", "chips", "patties"];
    let searchItem = prompt("Enter item to search:").toLowerCase();
    let found = false;
    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === searchItem) {
            found = true;
            break;
        }
    }
    document.write("<h2>Question 14</h2>");
    if (found) {
        document.write(searchItem + " is available in the list<br><br>");
    } else {
        document.write(searchItem + " is NOT available in the list<br><br>");
    }

    // Question 15
    let password = prompt("Enter password:");
    let hasAlphabet = false;
    let hasNumber = false;
    let startsWithNumber = !isNaN(password[0]);
    let isValidLength = password.length >= 6;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasAlphabet = true;
        }
        if (!isNaN(char) && char !== ' ') {
            hasNumber = true;
        }
    }

    document.write("<h2>Question 15</h2>");
    if (hasAlphabet && hasNumber && !startsWithNumber && isValidLength) {
        document.write("Valid password: " + password + "<br><br>");
    } else {
        document.write("Invalid password. Requirements: Contains alphabets and numbers, Does not start with a number, At least 6 characters long<br><br>");
    }

    // Question 16
    var university = "University of Karachi";
    let universityArray = university.split(" ");
    document.write("<h2>Question 16</h2>");
    document.write("Original string: " + university + "<br>");
    document.write("Array elements: <br>");
    for (let i = 0; i < universityArray.length; i++) {
        document.write("Element " + i + ": " + universityArray[i] + "<br>");
    }
    document.write("<br>");

    // Question 17
    let userText = prompt("Enter some text:");
    let lastChar = userText.charAt(userText.length - 1);
    document.write("<h2>Question 17</h2>");
    document.write("User input: " + userText + "<br>");
    document.write("Last character: " + lastChar + "<br><br>");

    // Question 18
    let sentence = "The quick brown fox jumps over the lazy dog";
    let searchWord = "the";
    let lowerSentence = sentence.toLowerCase();
    let count = 0;
    let position = lowerSentence.indexOf(searchWord);

    while (position !== -1) {
        count++;
        position = lowerSentence.indexOf(searchWord, position + 1);
    }

    document.write("<h2>Question 18</h2>");
    document.write("Sentence: " + sentence + "<br>");
    document.write("Number of occurrences of 'the': " + count + "<br>");