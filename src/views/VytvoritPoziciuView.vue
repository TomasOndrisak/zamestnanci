<template>
<div class="container col-3">
 

 <br><br><br>

 <form @submit.prevent="Post" class="border container form-inline"><br>
  <div class="mb-2">
      
    <input type="text" class="form-control" id="pozicia"  placeholder="Názov pozície">   </div>

  <button type="submit" class="btn btn-success btn-square-md">Vytvoriť</button> <br> <br>
  </form>
  
    
  </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Pozicie from '../Types/Pozicie';
import ResponseData from "../Types/ResponseData";
import api from "../services/Pozicie";
import { setup } from 'vue-class-component';


export default defineComponent({
    
  
        // popup
     
    
    // data() {
      
      
    // },
    methods:{

      Post(pozicie:any){
        api.PostData(pozicie).then((resData:ResponseData) => {
          console.log(resData);
          this.$router.push('/pozicie')
        })
      }
    }
})

</script>