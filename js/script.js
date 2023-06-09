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
                },
                {
                    text: 'Preparare una crostata',
                    done: false,
                },
                {
                    text: 'Rincorrere il gatto',
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

        //funzione per eliminare una task
        eliminaTask(index){
            this.list.splice(index,1);
        },

        statusTask(index){
            if(this.list[index].done){
                this.list[index].done = false;
            }
            else{
                this.list[index].done = true;
            }
        }
    },


}).mount('#app');