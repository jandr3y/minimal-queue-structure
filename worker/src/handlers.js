const handlers = {
    email: async () => {
        console.log(`Handling email - ${JSON.stringify(message)}`)
    },
    payment: async (message) => {
        console.log(`Handling payment - ${JSON.stringify(message)}`)
    }
}

module.exports = handlers