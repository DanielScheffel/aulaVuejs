new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!',
        link: 'http://google.com.br',
        linkHtml: '<a href="http://google.com">Google</a>'
    }, 
    methods: {
        saudacao: function(){
            this.titulo = 'Bom dia!!'
            return this.titulo
        }
    }
})