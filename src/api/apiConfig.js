const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '982681fd34cfba874aa0336ae06b5e64',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;