<template>
<div>
  <br>
<h1>Zoznam Zamestnancov</h1>

<div class="container">
       <br><br><br>
  
  <table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Meno priezvisko</th>
      <th scope="col">Pozícia</th>
      <th scope="col"></th>
    </tr>
    </thead>
  <tbody>
        <tr v-for="(zam, index) in zamestnanci" v-bind:key="index">
        <td>{{zam.zamestnanecId}}</td>
        <td><a v-b-modal="'modalZamestnanec' + zam.zamestnanecId">{{zam.meno}} {{zam.priezvisko}}</a></td>
        <td>{{zam.idPozicie}}</td> 
        <td><button class="btn btn-warning">Editovať</button></td>
        <td><button type="button" class="btn btn-danger">Zmazať</button></td> 
      </tr>
  </tbody>
</table>
  <!-- <button class="btn btn-success btn-square-md float-end">Pridať nového zamestnanca</button> -->
</div>

</div>
<div>
    
</div>

<Modal_pop :Zamestnanci="zamestnanci">
</Modal_pop>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Zamestnanci from '../Types/Zamestnanci';
import ResponseData from "../Types/ResponseData";
import Zamestnanec from "../services/Zamestnanec";
import Modal_pop from '../modal/Modal-Popup.vue';

export default defineComponent({

    
    name: "Zamestnanci-list",

    components: {
        Modal_pop
    },
    
    

    
        //popup
    data() {
        return {
            zamestnanci: [] as Zamestnanci[],
            
        
            
        };
    },
    methods: {

        
        // GET ALL
        Get() {
            Zamestnanec.getAll().then((response: ResponseData) => {
                this.zamestnanci = response.data;
                console.log(response.data);
            })
                .catch((e: Error) => {
                console.log(e);
            });
        },
        // GET ID 
        GetId(id: any) {
            Zamestnanec.getId(id).then((response: ResponseData) => {
                this.zamestnanci = response.data;
                console.log(response.data);
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
     