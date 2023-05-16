new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!',
        link: 'http://google.com.br'
    }, 
    methods: {
        saudacao: function(){
            return this.titulo
        }
    }
})