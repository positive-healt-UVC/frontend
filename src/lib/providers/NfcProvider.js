/**
 * Read data from an nfc chip and log information about it to the console.
 * 
 * @param {string|null} outputFieldId the id of the HTML field used for output.
 */
export default async function readNfc(outputFieldId) {
    // Get the instance of the output field, make it null if no id was provided
    const outputField = outputFieldId !== null
        ? document.getElementById(outputFieldId)
        : null;

    try {
        // Prepare an instance of the NFC Reader
        // CATION: VS Code and other editors well give an error here!
        // Thats because it's an experimental feature only supported on Android by Chrome!
        const ndef = new NDEFReader();

        // Start scanning and log that
        log(outputField, "Scanning...",);
        await ndef.scan();

        // Make sure that an error gets printed whenever one occurs
        ndef.addEventListener("readingerror", () => {
            log(outputField, "Argh! Cannot read data from the NFC tag. Try another one?");
        });

        // Log the content of the message
        ndef.addEventListener("reading", ({ message, serialNumber }) => {
            log(outputField, `> Serial Number: ${serialNumber}`);
            log(outputField, `> Records: (${message.records.length})`, false);
        });
    }

    // When uncaught errors appear, log them
    catch (error) {
        log(outputField, "Argh! " + error);
    }
}

/**
 * Log information to the console or a provided element.
 * The console is automatically selected when loggerField is null.
 * 
 * @param {HTMLElement|null} loggerField the field to log information to.
 * @param {string} message the information to log.
 * @param {boolean} clearLogBeforeLogging whether the log should be cleared before this message.
 */
function log(loggerField, message, clearLogBeforeLogging = true) {
    // Check whether a field was given as log field, if not; print to the console
    if (loggerField === null) {
        console.log(message);
    }

    else {
        // If so, create a message as p 
        const messageElement = document.createElement('p');
        messageElement.innerText = message;

        // Clear the log if required and add the message
        if (clearLogBeforeLogging) loggerField.innerHTML = "";
        loggerField.appendChild(messageElement);
    }
}