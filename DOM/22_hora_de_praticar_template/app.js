new Vue({
    el:'#desafio',
    data: {
        nome: 'Daniel Scheffel',
        idade: 18,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        age: function(){
            return this.idade * 3
        },
        aleatorio: function(){
            return Math.random()
        }
    },
})