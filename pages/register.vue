<template>
    <div>
       Name:<br> <input v-model="user.name" type="text"> <br>
       Email: <br> <input v-model="user.email" type="text"> <br>
       Password: <br> <input v-model="user.password" type="text"> <br>
       <button @click="register()">register</button>
    </div>
</template>

  <script>
  export default {
    middleware: 'notAuthenticated',
    data() {
      return {
        user: {
          name: "",
          email: "",
          password: ""
        }
      };
    },
    methods: {
      register() {

        this.$axios
          .post("/register", this.user)
          .then(res => {

            //success! - Usuario creado.
            if (res.data.status == "success") {
              
              this.user.name = "";
              this.user.password = "";
              this.user.email = "";
                
              return;
            }
  
          })
          .catch(e => {
            console.log(e.response.data);
  
            if (e.response.data.error.errors.email.kind == "unique") {

             //aquí es un buen momento para desplegar notificacion
             //que diga que el user ya existe
  
              return;
  
            } else {
  
              //aquí es un buen momento para desplegar notificacion
             //que diga que tuvimos un error (desconocido)
  
              return;

            }
  
  
          });
  
  
      }
    }
  };
  </script>
  