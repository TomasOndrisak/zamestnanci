<template>

 <b-modal class="modal" :id="'modalZamestnanecEdit'+zamestnanecI.zamestnanecId" title="Zamestnanec">
           <!-- zac -->
        <div class="container col-12">
<br><br><br>
    <form @submit.prevent="put()" class="border container form-inline"><br>
  <div class="mb-2">
<th>Meno</th>
    <input type="text" class="form-control" id="meno" v-model="Zamestnanec.meno" placeholder="meno" required> 
  </div>
  <th>Priezvisko</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="priezvisko" v-model="Zamestnanec.priezvisko" placeholder="priezvisko" required>
 </div>
 <th>Adresa</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="adresa" v-model="Zamestnanec.adresa" placeholder="adresa">
  </div>
<th>Dátum narodenia</th>
<div class="mb-2">
<input v-model="Zamestnanec.datumNarodenia" placeholder="dátum narodenia" required  />
</div>
<th> Dátum nastupu</th>
<div class="mb-2">
<input v-model="Zamestnanec.datumNastupu" placeholder="dátum nástupu" required/>
</div>
<th>Pozícia</th>
<div class="input-group mb-3">
                
                <select class="form-select" v-model="Zamestnanec.idPozicie" required>
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
        putResult: null,
        zamestnanecI: {} as Zamestnanci,
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
        
        zamestnanecId: Number,
    

    },
   methods: {
    getTutorial() {
      api.getId(this.zamestnanecId)
        .then((response: ResponseData) => {
          this.zamestnanecI = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

     put(){
       
       this.Zamestnanec = {
        zamestnanecId: this.zamestnanecI.zamestnanecId,
        meno: this.zamestnanecI.meno, 
        priezvisko: this.zamestnanecI.priezvisko,
        adresa: this.zamestnanecI.adresa,
        datumNarodenia: this.zamestnanecI.datumNarodenia, 
        datumNastupu: this.zamestnanecI.datumNastupu,
        archivovany: this.zamestnanecI.archivovany,
        idPozicie: this.zamestnanecI.idPozicie
        }
        
       api.Edit(this.zamestnanecId, this.Zamestnanec).then((response: ResponseData) => {
               
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