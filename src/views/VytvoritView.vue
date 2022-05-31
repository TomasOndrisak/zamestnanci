<template>
<div class="container col-3">
<br><br><br>
<form>
    <!-- <form @submit.prevent="PostData" class="border container form-inline"><br> -->
  <div class="mb-2">
<th>Meno</th>
    <!-- <input type="text" class="form-control" id="meno" v-model="zamestnanec.meno" placeholder="meno" required>  -->
  </div>
  <th>Priezvisko</th>
  <div class="mb-2">
    <!-- <input type="text" class="form-control" id="priezvisko" v-model="zamestnanec.priezvisko" placeholder="priezvisko" required> -->
 </div>
 <th>Adresa</th>
  <div class="mb-2">
    <!-- <input type="text" class="form-control" id="adresa" v-model="zamestnanec.adresa" placeholder="adresa"> -->
  </div>
<th>Dátum narodenia</th>
<div class="mb-2">
<!-- <Datepicker v-model="zamestnanec.datumNarodenia" ref="datepicker" :enableTimePicker="false" :maxDate="new Date(2004, 3, 31)"  placeholder="dátum narodenia" required  /> -->
</div>
<th> Dátum nastupu</th>
<div class="mb-2">
<!-- <Datepicker v-model="zamestnanec.datumNastupu" ref="datepicker"  :enableTimePicker="false" :minDate="new Date()" placeholder="dátum nástupu" required/> -->
</div>
<th>Pozícia</th>
<div class="input-group mb-3">
                
                <select class="form-select" v-model="zamestnanec.pozicia" required>
                    <option value="" selected disabled hidden>Pozícia</option>
                    <option v-for="poz in Pozicie" :key="poz.Id" placeholder="Pozícia">
                    {{poz.nazov}}
                    </option>
                </select> 
</div>
<th>Plat</th>




<button type="submit" class="btn btn-success btn-square-md float-end m-1">Vytvoriť</button>
<router-link to="/" class="btn btn-warning btn-square-md float-end m-1">Zrušiť</router-link>
</form>
</div>
</template>

<script lang="ts">

</script>