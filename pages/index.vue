<template>
 <div>
   INSIDE MY APP

   <button @click="logOut()">LOGOUT</button>
 </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  mounted(){
    this.getData();
  },
  methods:{
    logOut() {
        console.log("logout")


        localStorage.removeItem('auth');


        const auth = {};
        this.$store.commit('setAuth', auth);


        window.location.href = "/login";


      },
    getData(){

      const axiosHeaders = {
          headers: {
            token: this.$store.state.auth.token
          },
          params: {
            itemId: "lfdskjhfsdlkjfh",
            temperatura: 21
          }
        }

        this.$axios.get("/data",  axiosHeaders)
          .then(res => {
            
            if (res.data.status == "success") {
              console.log(res.data);
              return;
            }

          })
          .catch(e => {
            
            this.$notify({ type: 'danger', icon: 'tim-icons icon-alert-circle-exc', message: 'Error' });
            console.log(e)
            return;
          });

      },
    
  }
}
</script>




