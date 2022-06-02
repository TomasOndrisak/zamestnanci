<template>

 <b-modal class="modal" :id="'modalZamestnanecEdit'+zam.zamestnanecId" title="Zamestnanec" v-for:="(zam, index) in zamestnanci" v-bind:key="zam.zamestnanecId" >
           <!-- zac -->
        <div class="container col-12">
<br><br><br>
    <form @submit.prevent="put()" class="border container form-inline"><br>
  <div class="mb-2">
<th>Meno</th>
    <input type="text" class="form-control" id="meno" v-model="zam.meno" placeholder="meno" required> 
  </div>
  <th>Priezvisko</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="priezvisko" v-model="zam.priezvisko" placeholder="priezvisko" required>
 </div>
 <th>Adresa</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="adresa" v-model="zam.adresa" placeholder="adresa">
  </div>
<th>Dátum narodenia</th>
<div class="mb-2">
<input v-model="zam.datumNarodenia" placeholder="dátum narodenia" required  />
</div>
<th> Dátum nastupu</th>
<div class="mb-2">
<input v-model="zam.datumNastupu" placeholder="dátum nástupu" required/>
</div>
<th>Pozícia</th>
<div class="input-group mb-3">
                
                <select class="form-select" v-model="zam.idPozicie" required>
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
import Zamestnanci from '../Types/Zamestnanci';
import api from '../services/Zamestnanec';
import ResponseData from '../Types/ResponseData';

export default defineComponent({ 
    name: "Modal_put",

        data(){
        return{
      
        
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
             type: [] as PropType<Zamestnanci[]>
        },

    },
   methods: {
    getTutorial() {
      api.getId(this.Zamestnanec.zamestnanecId)
        .then((response: ResponseData) => {
          this.Zamestnanec = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

     put(){
        
       api.Edit(this.zamestnanci, this.Zamestnanec).then((response: ResponseData) => {
               
                console.log(response.data);
            })
                .catch((e: Error) => {
                console.log(e);
                 api.getAll();
            });
     },



   },
  
  
});
</script>