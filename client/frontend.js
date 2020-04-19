import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

new Vue({
    el: '#app',
    data(){
        return {
            form: {
                name: '',
                value: ''
            },
            contacts:[
                {id: 1, name: 'Evgen', value: '+7-982-554-60-60', marked: false}
            ],
            disableValue: false
        }
    },
    methods: {
        CreateContact(){
            const {...contact} = this.form
            
            let lastId = this.contacts.length;

            this.contacts.push({...contact, id: ++lastId, marked: false})

            this.form.name = this.form.value = ''
        },
        markContact(id){
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true
        },
        removeContact(id){
            this.contacts = this.contacts.filter(contact => contact.id !== id)
        }
    },
    computed: {
        canCreate(){
            return this.form.value && this.form.name
        }
    },
})
