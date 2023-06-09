1-Realizzare un markup statico con pulsanti, campo input e list item

2-Creare in data un array con gli elementi dela lista, i quali avranno due proprietà : text e done

3-Mostrare a schermo la lista con il ciclo v-for

Aggiungete  funzionalità cambio dello stato del task (cambiare il valore di done), eliminazione di una task ed aggiunta di una nuova task.

4-Aggiungere funzionalità "inserisci task nella lista"
4.1- Dichiaro una variabile vuota in data in cui verrà inserito il testo scritto nell'input
4.2- Con la direttiva v-model nel tag input recupero questo valore
4.3- Nel tag del pulsante "Inserisci"" aggiungo la direttiva @click
4.4- Con la direttiva @Key.enter nel tag input inserisce il valore premendo direttamnete il tasto invio su tastiera
4.5- CREO FUNZIONE AGGIUNGI TASK da collegare al dom grazie al punto 4.3 e/o al punto 4.4

5-Aggiungere funzionalità "Elimina task dalla lista"
5.1- Creare una funzione con metodo .splice. 
5.2 - Alla funzione dovrò passare nelle parantesi il valore per l'indice delle task
5.3- Richiamare la funzione nel tag del pulsante "Delete" con
@click

6-Aggiungere funzionalità cambio dello stato del task (valore done)
6.1- creo una classe nel file css che sbarra il testo della task
6.2- Creo una fuzione che cambia il valore false di done
6.3- Richiamo la funzione nel tag del pulsante "Done"
6.4- Aggiungo la classe con v-bind del tag del testo


