// function to fetch aadhar details using UIDAI API
function getAadharDetails(aadharNumber) {
    return axios.get(`https://uidai.gov.in/verify-pan-aadhaar/pan-aadhaar/verifyaadhaar/verifyaadhaar.do?uid=${aadharNumber}`);
}

// function to build a calculator
function buildCalculator() {
    return {
        // function to add two numbers
        add: (a, b) => a + b,
        // function to subtract two numbers
        subtract: (a, b) => a - b,
        // function to multiply two numbers
        multiply: (a, b) => a * b,
        // function to divide two numbers
        divide: (a, b) => a / b
    }
}

// function to calculate mortality rate
function calculateMortalityRate(population, deaths) {
    return (deaths / population) * 100;
}

// function to validate email address
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// function to make an API call using axios
function getApiData() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

// Create a new function to call the GitHUb API
function getGitHubUser(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}

// function to create a Github issue using GitHub API
function createGitHubIssue(username, repo, title, body) {
    return axios.post(`https://api.github.com/repos/${username}/${repo}/issues`, {
        title,
        body
    });
}

// function to validate phone  number
function validatePhoneNumber(phoneNumber) {
    return /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
}

// function to validate zip code
function validateZipCode(zipCode) {
    return /^\d{5}$/.test(zipCode);
}

// function to validate password
function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}

// function to validate credit card number
function validateCreditCardNumber(creditCardNumber) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(creditCardNumber);

}

// function to validate AADHAR number
function validateAadharNumber(aadharNumber) {
    return /^\d{4}-\d{4}-\d{4}$/.test(aadharNumber);
}

// function to validate PAN number
function validatePanNumber(panNumber) {
    return /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(panNumber);

}


// function to fetch aadhar details using UIDAI API
function getAadharDetails(aadharNumber) {
    return axios.get(`https://uidai.gov.in/verify-pan-aadhaar/pan-aadhaar/verifyaadhaar/verifyaadhaar.do?uid=${aadharNumber}`);
}

// function to 



// function to validate valid email address
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function to validate zip code
function validateZipCode(zipCode) {
    return /^\d{5}$/.test(zipCode);
}

// function to create calculator
function createCalculator() {
    return {
        // function to add three numbers
        addThreeNumbers: (a, b, c) => a + b + c,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    }
}

// function to check if string is palindrome using character matching
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }       

    }       
    return true;
}

// function to check if string is palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// function to fetch aadhar card details using UIDAI API
function getAadharDetails(aadharNumber) {
    return axios.get(`https://uidai.gov.in/verify-pan-aadhaar/pan-aadhaar/verifyaadhaar/verifyaadhaar.do?uid=${aadharNumber}`);
}

