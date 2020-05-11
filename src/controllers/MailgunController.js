
module.exports = {
    async send(request, response){
        return response.status(200).json({ msg: 'RESPONDENDO...'});
    }
}