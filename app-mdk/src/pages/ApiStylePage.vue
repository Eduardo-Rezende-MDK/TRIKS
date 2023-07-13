<template>
  <q-page padding>
    <!-- content -->
    <h3>Api Style</h3>
    <p>Escrever em VUE sem entender o que significa isso realmente torna tudo mais confuso, eventualmente vc vai se
      encontrar naquele momento "Mas pq não funciona???" </p>
    <p>A Doc oficial esta aqui: <a href="https://vuejs.org/guide/introduction.html#api-styles"
        target="_blank">API-STYLE</a></p>
    <p>São 2 Tipos <b>Options API</b> e <b>Composition API</b><br>No final fazem a mesma coisa e não vou defender o uso de
      um ou outro<br>
      A real é que encontramos os 2 no desenvolvimento, e saber como manipular isso é importante</p>
    <p>Como não sou la muito de teoria (ou sera q sou?), vamos a forma que entendo isso</p>
    <p><b>Composition API</b>: <br>
      Quando vc encontra uma definição nesse formato é Composition, São 2 pontos que sao importantes:<br>
      O codigo aqui não tem "nenhuma herança automatica", vc pode escolher o que tem ou nao tem<br>
      Qualquer definição que vc deseja que seja encontrada em outras partes devem ser incluidas no <b>return{}</b>
      </p>
    <pre><code>
    setup () {
              const myVar1 = "var 1"
      return {
              myVar1
              }
            },
    </code></pre>
<div>
  <h4>IN ACTION</h4>
  <p>{{ myVar1 }} - {{ myVar11 }}</p>

  <div>
    <q-btn  label="BT1" @click="change1" />
  </div>
</div>

    <p>{{ myVar2 }}</p>
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ApiStylePage',
  setup() {

    const myVar1 = ref("var 1")
    const myVar11 = "var 11"
    return {
      myVar1,
      myVar11
    }
  },
  data() {
    return {
      myVar2: "var 2"
    }
  },
  methods:{
    change1(){
      this.myVar1= "11111"
      this.myVar11= "222222"
      console.log(this.myVar1, this.myVar11)
    }
  }
}
</script>
<style scoped>
pre{
  background-color: #eee;
}
</style>
