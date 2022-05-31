<template>
<br>
<h1>Zoznam pozícií vo firme</h1>
 <div class="container col-5">
 <br><br><br>
  
  <div class="Pozicie">
    <button class="btn btn-success btn-square-md float-end">Vytvorit pozíciu</button>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Názov pozície</th>
      
     
    </tr>
  </thead>
  <tbody>
   
      <tr v-for="(poz, index) in pozicie" :key="index">  
                   <td>{{poz.nazovPozicie}}</td>  
                
      <th></th>
      
      <td><button type="button" class="btn btn-danger" v-on:click="Delete(poz.poziciaId)">Zmazať</button></td>
   </tr>  

  </tbody>
</table>
</div>

<!-- <button class="btn btn-success btn-square-md float-end col-1">Vytvorit pozíciu</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pozicie from '../Types/Pozicie';
import ResponseData from "../Types/ResponseData";
import pozicie from "../services/Pozicie";


export default defineComponent({
    
  
        //popup
    data() {
        return {
            pozicie: [] as Pozicie[],   
        };
    },

    methods: {

     
        // GET ALL
        Get() {
            pozicie.getAll().then((response: ResponseData) => {
                this.pozicie = response.data;
                console.log(response.data);
            })
                .catch((e: Error) => {
                console.log(e);
            });
        },
        
        Delete(poziciaId:number){
          pozicie.delete(poziciaId).then((response: ResponseData) => {
          console.log(response.data);
          this.Get();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },

    mounted() {
        this.Get();
    },
    
})




</script>

