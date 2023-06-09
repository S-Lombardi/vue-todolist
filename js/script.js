const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Andare in bici',
                    done: false,
                },
                {
                    text: 'Studiare',
                    done: false,
                }
            ],

            task_nuova: '',
        };
    },
    methods: {

        //metodo per aggiungere task nuove
        aggiungiTask() {
            if (this.task_nuova != ''){
                let item = {
                    text: this.task_nuova,
                    done: false,
                };

                this.list.push(item);
                this.task_nuova = "";
            }
        },
    },


}).mount('#app');