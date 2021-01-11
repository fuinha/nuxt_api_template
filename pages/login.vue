<template>
    <div>
       Email: <br> <input v-model="user.email" type="text"> <br>
       Password: <br> <input v-model="user.password" type="text"> <br>
       <button @click="login()">login</button>
    </div>
</template>


<script>
    export default {
      middleware: 'notAuthenticated',
      data() {
        return {
          user: {
            email: "",
            password: ""
          }
        };
      },
      mounted() {
    
      },
      methods: {
        login() {
          this.$axios
            .post("/login", this.user)
            .then(res => {
    
              //success! - Usuario creado.
              if (res.data.status == "success") {
    
                console.log(res.data)
    
                const auth = {
                  token: res.data.token,
                  userData: res.data.userData
                }
    
                //token to de store - token a la tienda
                this.$store.commit('setAuth', auth);
    
                //set auth object in localStorage - Grabamos el token en localStorage
                localStorage.setItem('auth', JSON.stringify(auth));
    
                $nuxt.$router.push('/');
    
                return;
              }
            })
            .catch(e => {
              console.log(e.response.data);
    
     
            });
        }
      }
    };
    </script>