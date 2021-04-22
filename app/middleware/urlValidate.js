function urlValidate(image){
    const url = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
    const result = url.test(image)    

    return result;
}

module.exports = urlValidate;