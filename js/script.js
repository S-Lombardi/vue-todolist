const { createApp } = Vue;

createApp({
    data(){
        return{
            list:[
                {
                    text:'Fare la spesa',
                    done: false,
                },
                {
                    text:'Andare in bici',
                    done: false,
                },
                {
                    text:'Studiare',
                    done: false,
                },
            ]
        }
       
    },

    indice: 0,

    methods:{

        
    },


}).mount('#app');