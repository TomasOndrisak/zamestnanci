<template>

  <b-modal class="modal" :id="'modalZamestnanecEdit'" title="Zamestnanec">
    <div class="container col-12">
      <br><br><br>
      <form @submit.prevent="Edit()" class="border container form-inline"><br>
        <div class="mb-2">
          <th>Meno</th>
          <input v-model="post.meno" type="text" class="form-control" id="meno">
        </div>
        <th>Priezvisko</th>
        <div class="mb-2">
         <input type="text" class="form-control" v-model="post.priezvisko">
        </div>
        <th>Adresa</th>
        <div class="mb-2">
          <input type="text" class="form-control" v-model="post.adresa">
        </div>
        <th>Dátum narodenia</th>
        <div class="mb-2">
        <input type="text" class="form-control" v-model="post.datumNarodenia">
        </div>
        <th> Dátum nastupu</th>
        <div class="mb-2">
          <input type="text" class="form-control" v-model="post.datumNastupu">
        </div>
        <th>Pozícia</th>
        <div class="input-group mb-3">
            <select class="form-select" v-model="post.poziciaId" required>
            <option value="" selected disabled hidden>Pozícia</option>
            <option v-for="(poz, index) in pozicie" :key="index" placeholder="Pozície" :value="poz.poziciaId">
              {{(pozicie, index, poz.nazovPozicie)}}</option>
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
          <tr v-for="(poz, index) in predoslePozicie" v-bind:key="index">
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
import IPozicie from '../Types/Pozicie';



export default defineComponent({
  name: "Modal_edit",
  updated(){
  this.GetPredosle(this.$props.zamestnanec.zamestnanecId);
  
  
  },
  beforeUpdate(){
  this.GetId();
  },
  mounted(){
      this.getPozicie();
  },

  data() {

    return {

  predoslePozicie: [] as Ipredosle[],
  pozicie: [] as IPozicie[],

  Zamestnanec: {} as zamestnanci,
  post: {
    zamestnanecId: "",
    meno: "",
    priezvisko: "",
    adresa: "",
    datumNarodenia: "",
    datumNastupu: "",
    poziciaId:"",
  }
};
  },

  props: {
    zamestnanec: {
      required: true,
      type: Object as PropType<zamestnanci>
    }

  },

  watch: {
    
    zamestnanec: function (newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  },

  methods: {

    
       refresh(){
        this.$emit("refresh");
      },
     GetPredosle(id: number) {

        predosle.getAll(id).then((response: ResponseData) => {
        this.predoslePozicie = response.data;

        console.log(response.data);
      }).catch((e: Error) => {
        console.log(e);
      });
    },

    GetId(){
      api.getId(this.zamestnanec.zamestnanecId).then((response: ResponseData) => {
        this.post = response.data;
        console.log(response.data);
      }).catch((e: Error) => {
        console.log(e);
      });
    },


    Edit() {
      api.Edit(this.post.zamestnanecId, this.post).then((response: ResponseData) => {
        console.log(response.data);
        this.refresh();
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
  }
});
</script>