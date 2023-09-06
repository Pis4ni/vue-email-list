const { createApp } = Vue


createApp({
  data() {
    return {
      message:'deb-test',
      mails:[]
    }
  },
  methods:{
    getMails(){
        this.mails = []
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                const responseMail = response.data.response
                this.mails.push(responseMail)
                
            })
        }
    },
},
created(){
    console.log(axios);
    this.getMails()
    console.log(this.mails);
    console.log(this.message);
}
}).mount('#app')