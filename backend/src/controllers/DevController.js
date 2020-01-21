const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// geralmente o Controller tem esses 5 funcoes no maximo
// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {  //async é pra sinalizar q essa função pode demorar
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({github_username});

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);//crase pode usar variaveis dentro da string
            //await é para esperar completar a funcao para o codigo continuar, se n ele ja executa o de bauxo
            const {name = login, avatar_url, bio} = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
            //aqui eu separo as strings pela virgula e tiro espaço do inicio e final da sttring se tiver
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],//longitude primeiro
            }
        
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

        //se o nome n existir la response ele preenche com login, porem pode ser reescrito de outra forma em JS
        //const {name = login, avatar_url, bio} = apiResponse.data;
        
        return response.json(dev);
    }
};