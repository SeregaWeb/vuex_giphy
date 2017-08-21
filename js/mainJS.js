Api_key = "d03c2f2de6e44daf9696172a4a0b546d";
new Vue({
    el: "#app",
    data: {
        giphy: [],
        url: 'http://api.giphy.com/v1/gifs/trending?&api_key=d03c2f2de6e44daf9696172a4a0b546d&limit=100',
        loading: false
    },
    methods: {
        fetchPhotos: function() {
            this.loading = true
            this.$http.get(this.url).then(function(response) {
                var json = response.data,
                    giphy = json.data

                this.giphy = this.giphy.concat(giphy);
                console.log(giphy)
            }, function(error) {
                console.log(error);
            })
        }
    },
    components: ({
        gifsearch: {
            template: "#input_gif"
        },
        gifs: {
            template: "#conteiner_gif"
        }
    }),
    created: function() {
        this.fetchPhotos();

    }
})