<template>

 <b-modal class="modal" :id="'modalZamestnanecEdit'+ z.zamestnanecId" v-for="(z, index) in zamestnanci" v-bind:key="z.zamestnanecId" title="Zamestnanec">
           <!-- zac -->
        <div class="container col-12">
<br><br><br>
    <form @submit.prevent="getTutorial(z.zamestnanecId, zamestnanci[index])" class="border container form-inline"><br>
  <div class="mb-2">
<th>Meno</th>
    <input type="text" class="form-control" id="meno" v-model="z.meno" :placeholder="''+ z.meno" required> 
  </div>
  <th>Priezvisko</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="priezvisko" v-model="z.priezvisko" :placeholder="''+ z.priezvisko" required>
 </div>
 <th>Adresa</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="adresa" v-model="z.adresa" :placeholder="''+ z.adresa">
  </div>
<th>Dátum narodenia</th>
<div class="mb-2">
<input v-model="z.datumNarodenia" :placeholder="''+ z.datumNarodenia" required  />
</div>
<th> Dátum nastupu</th>
<div class="mb-2">
<input v-model="z.datumNastupu" :placeholder="''+ z.datumNastupu" required/>
</div>
<th>Pozícia</th>
<div class="input-group mb-3">
                
                <select class="form-select" v-model="z.idPozicie" required>
                    <option v-for="(poz, index) in pozicie" :key="index" placeholder="Pozícia">{{pozicie[index].poziciaId}}</option>
                </select>
            </div>

<button type="submit" class="btn btn-success btn-square-md float-end m-1">Vytvoriť</button>

</form>
</div>
   <!-- koniec -->
           </b-modal>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import zamestnanci from '../Types/Zamestnanci';
import api from '../services/Zamestnanec';
import ResponseData from '../Types/ResponseData';
import Pozicie from '../Types/Pozicie';
import poz from '../services/Pozicie';

export default defineComponent({ 
    name: "Modal_put",

        data(){
        return{
      
        pozicie: [] as Pozicie[],
        Zamestnanec: {
         zamestnanecId: 0,
         meno: "",
         priezvisko: "",
         adresa: "",
         datumNarodenia: "",
         datumNastupu: "",
         archivovany: false,
         idPozicie: 0,
       },

       };
    },

     props: { 
        
        
         zamestnanci : {
            required: true,
             type: Array as PropType<zamestnanci[]>
        }
    },

   methods: {

    getTutorial(zamestnanecid: any, zamestnanec: any) {
    
    api.Edit(zamestnanecid , zamestnanec).then((response: ResponseData) => {
               
                console.log(response.data);
            })
                .catch((e: Error) => {
                console.log(e);
            });
    
    },

        get(){
       poz.getAll().then((response: ResponseData) => {
               this.pozicie = response.data;
                console.log(response.data);
            })
                .catch((e: Error) => {
                console.log(e);
            });
     },

   


   },

      mounted() {
        this.get();
    }
  
  
});
</script>