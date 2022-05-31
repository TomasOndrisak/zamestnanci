<template>
<br>
<h1>Detail Archivovaného Zamestnanca</h1>
 <div class="container">
     <br><br><br>
<table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">Meno priezvisko</th>
      <th scope="col">Adresa</th>
      <th scope="col">Dátum Narodenia</th>
      <th scope="col">Dátum Prepustenia</th>
      <th scope="col">Posledná pozícia</th>
      <th scope="col">Plat</th>
    </tr>
    </thead>
  <tbody>
     <tr>
        <!-- <td> {{zamestnanec.Meno}} {{zamestnanec.priezvisko}}</td>   -->
       <!---  <td>{{zam.adresa}}</td> 
       <td>{{zam.datumNarodenia}}</td>
        <td>{{zam.datumNastupu}}</td>
        <td>{{zam.idPozicie}}</td>
        <td>{{zam.plat}}</td>    
        -->
        
      </tr>
  </tbody>

</table>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
            Zamestnanec.getArchivovany().then((response: ResponseData) => {
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