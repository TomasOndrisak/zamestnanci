<template>

 <b-modal class="modal-dialog modal-fullscreen" :id="'modalZamestnanec'+zam.zamestnanecId" title="Zamestnanec" v-for="zam in Zamestnanci" v-bind:key="zam.zamestnanecId">
           <h1><p> {{zam.meno}} {{zam.priezvisko}}<br></p></h1>   
           <p class="my-4">
                           Adresa: <b>{{zam.adresa}}</b> <br>
                           Pozicia: <b>{{zam.idPozicie}}</b> Plat: <b>12 345 €</b><br>
                           Datum Narodenia: <b>{{zam.datumNarodenia}}</b><br>
                            Datum Nastupu: <b>{{zam.datumNastupu}}</b>
       
                </p></b-modal>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Zamestnanci from '../Types/Zamestnanci';
export default defineComponent({
    name: "Modal_pop",
    props: { 
        
        Zamestnanci : {
            required: true,
            type: Array as PropType<Zamestnanci[]>
        }
    

    },

    

});
</script>