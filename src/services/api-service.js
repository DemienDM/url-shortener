export default class ApiService {

    response = {
        shortUrl: 'https://example.local/'
    };

    minifyUrlRequest(originalUrl) {
        return new Promise(resolve => {
            setTimeout(() => {
                let value = this.response.shortUrl + originalUrl;
                resolve({ shortUrl: value })
            }, 500)
        });
    };

    getLink(path) {
        return new Promise(resolve => {
            setTimeout(() => {
                const linkRow = {
                    id: 1,
                    short_url: 'sdfsdfsfds',
                    original_url: 'https://rozetka.com.ua/',
                };

                resolve(linkRow)
            }, 500)
        });
    }
};