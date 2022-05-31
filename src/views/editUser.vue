<template>


<div class="container col-3">
<br><br><br>
    <form @submit.prevent="" class="border container form-inline"><br>

  <div class="mb-2">
    <th>Meno</th>
    <input type="text" class="form-control" id="meno"  placeholder="meno" required> 
  </div>
  <th>Priezvisko</th>
  <div class="mb-2">
    <input type="text" class="form-control" placeholder="priezvisko" required>
 </div>
 <th>Adresa</th>
  <div class="mb-2">
    <input type="text" class="form-control" placeholder="adresa" required>
  </div>
  <th>Dátum narodenia</th>
  <div class="mb-2">
   </div>
 <th>Dátum Nástupu</th>
 <div class="mb-2">
  </div>
<th>Pozícia</th>
<div class="input-group mb-3">
                
                <select class="form-select"  required>
                    <option>
                    </option>
                </select>
            </div>

<th>Plat</th>
<div class="mb-2">
  <input type="number" class="form-control" placeholder="plat" required>
</div>



<button type="submit" class="btn btn-success btn-square-md float-end m-1">Uložiť zmenu</button>
<router-link to="/" class="btn btn-warning btn-square-md float-end m-1">Zrušiť</router-link>

</form>

<table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">Pozicia</th>
      <th scope="col">datum nastupu</th>
      <th scope="col">datum ukoncenia</th>
    </tr>

    </thead>
    <tbody>
      <tr>  
        <td></td>
        <td></td>
        <td></td>
      </tr>
  </tbody>
    </table>


</div>
  
  
</template>
