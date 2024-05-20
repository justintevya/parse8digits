module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Input string from Power Automate (adjust as needed)
    const inputString = req.body.inputString || ""; 

    // Regex to match an 8-digit loan number
    const loanNumberRegex = /\b\d{8}\b/;

    // Find the match in the string
    const match = inputString.match(loanNumberRegex);

    // Prepare the response
    let response = {};
    if (match) {
        response = { loanNumber: match[0] }; // Return the extracted loan number
    } else {
        response = { loanNumber: null, error: "Loan number not found" };
    }

    context.res = {
        body: response
    };
};
