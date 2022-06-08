<template>

  <b-modal class="modal busy-true" :id="'modalZamestnanecEdit' + z.zamestnanecId" v-for="(z, index) in zamestnanci" v-bind:key="z.zamestnanecId" title="Zamestnanec">
    <div class="container col-12">
      <br><br><br>
      <form @submit.prevent="Edit(z.zamestnanecId, zamestnanci[index])" class="border container form-inline"><br>
        <div class="mb-2">
          <th>Meno</th>
          <input type="text" class="form-control" id="meno" v-model="z.meno" :placeholder="'' + z.meno" required>
        </div>
        <th>Priezvisko</th>
        <div class="mb-2">
          <input type="text" class="form-control" id="priezvisko" v-model="z.priezvisko" :placeholder="'' + z.priezvisko" required>
        </div>
        <th>Adresa</th>
        <div class="mb-2">
          <input type="text" class="form-control" id="adresa" v-model="z.adresa" :placeholder="'' + z.adresa">
        </div>
        <th>Dátum narodenia</th>
        <div class="mb-2">
          <input v-model="z.datumNarodenia" :placeholder="'' + z.datumNarodenia" required />
        </div>
        <th> Dátum nastupu</th>
        <div class="mb-2">
          <input v-model="z.datumNastupu" :placeholder="'' + z.datumNastupu" required />
        </div>
        <th>Pozícia</th>
        <div class="input-group mb-3">

          <select class="form-select" v-model="z.poziciaId" required>
            <option value="" selected disabled hidden>Pozícia</option>
            <option v-for="(poz, index) in pozicie" :key="index" placeholder="Pozície" :value="poz.poziciaId">
              {{ (pozicie[index].nazovPozicie) }}</option>
          </select>
        </div>

        <button type="submit" class="btn btn-success btn-square-md float-end m-1">Uložiť zmenu</button>

      </form>
      <table class="table">

        <thead class="thead-light">
          <tr>
            <th scope="col">Predosla Pozicia</th>
            <th scope="col">Datum Nastupu</th>
            <th scope="col">Datum Ukoncenia</th>
          </tr>
        </thead>


        <tbody>
          <tr v-for="poz in predoslePozicie" v-bind:key="poz.zamestnanecId">
            <td>{{ poz.pozicie.nazovPozicie }}</td>
            <td>{{ poz.datumNastupu }}</td>
            <td>{{ poz.datumUkoncenia }}</td>
          </tr>
        </tbody>
      </table>


    </div>
    <!-- koniec -->
  </b-modal>

</template>

<script lang="ts">

import { defineComponent, PropType, ref } from 'vue';

import api from '../services/Zamestnanec';
import poz from '../services/Pozicie';
import predosle from '../services/Predosle';
import zamestnanci from '../Types/Zamestnanci';
import ResponseData from '../Types/ResponseData';
import Ipredosle from '../Types/Predosle';
import Pozicie from '../Types/Pozicie';



export default defineComponent({
  name: "Modal_put",




  data() {

    return {

      predoslePozicie: [] as Ipredosle[],
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

      showModal: false
    };
  },

  props: {

    id: Number,
    
    zamestnanci: {
      required: true,
      type: Array as PropType<zamestnanci[]>
    }
    
  },

  methods: {



    GetPredosle(id:number) {

      predosle.getAll(id).then((response: ResponseData) => {
        this.predoslePozicie = response.data;
        
        console.log(response.data);
      }).catch((e: Error) => {
        console.log(e);
      });
    },


    Edit(zamestnanecid: any, zamestnanec: any) {

      api.Edit(zamestnanecid, zamestnanec).then((response: ResponseData) => {
        console.log(response.data);
      }).catch((e: Error) => { console.log(e); });

    },

    getPozicie() {
      poz.getAll().then((response: ResponseData) => {
        this.pozicie = response.data;
        console.log(response.data);
      }).catch((e: Error) => {
          console.log(e);
        });

      
    },
  },

  mounted() {
    
    this.getPozicie();
    this.GetPredosle(this.Zamestnanec.idPozicie);
  },
});
</script>