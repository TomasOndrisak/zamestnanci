<template>

 <b-modal class="modal" id="ZamestnanecModal" title="Vytvorit/upravit">
          <!-- zac -->
        <div class="container col-12">
<br><br><br>
    <form @submit.prevent="Post()" class="border container form-inline"><br>
  <div class="mb-2">
<th>Meno</th>
    <input type="text" class="form-control" id="meno" v-model="zamestnanec.meno" placeholder="meno" required> 
  </div>
  <th>Priezvisko</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="priezvisko" v-model="zamestnanec.priezvisko" placeholder="priezvisko" required>
 </div>
 <th>Adresa</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="adresa" v-model="zamestnanec.adresa" placeholder="adresa">
  </div>
<th>Dátum narodenia</th>
<div class="mb-2">
<input v-model="zamestnanec.datumNarodenia" type="date" placeholder="dátum narodenia" required  />
</div>
<th> Dátum nastupu</th>
<div class="mb-2">
<input v-model="zamestnanec.datumNastupu" type="date" placeholder="dátum nástupu" required/>
</div>
<th>Pozícia</th>
<div class="input-group mb-3">
                
                <select class="form-select" v-model="zamestnanec.idPozicie" required>
                    <option value="" selected disabled hidden>Pozícia</option>
                    <option value="1" placeholder="Pozícia">1</option>
                    <option value="11" placeholder="Pozícia">11</option>
                 
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
import Zamestnanec from '../Types/Zamestnanci';
import api from '../services/Zamestnanec';
import ResponseData from '../Types/ResponseData';

export default defineComponent({
    name: "Modal_pop",
    
   data(){
     return {

       zamestnanec: {
         zamestnanecId: 0,
         meno: "",
         priezvisko: "",
         adresa: "",
         datumNarodenia: "",
         datumNastupu: "",
         archivovany: false,
         idPozicie: "",
       },

     };


   },
   methods: {
     Post(){
       api.Post(this.zamestnanec).then((response: ResponseData) => {
               
                console.log(response.data);
            })
                .catch((e: Error) => {
                console.log(e);
                 api.getAll();
            });
     },



   }
    

});
</script>