const log = (message) => {
    if (process.env.DEBUG !== 'true') {
        return;
    }

    console.log(message)
}

module.exports = log;