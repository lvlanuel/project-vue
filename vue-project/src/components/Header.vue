<template>
  <div class="header">
    <!-- <h3>La temperatura actual es:<Weather></Weather></h3> -->
    {{ mensajeRecibido }}<Weather></Weather>
  </div>
</template>
<script setup>
import Weather from "./Weather.vue";
import { defineProps, ref, watch } from "vue";

const props = defineProps(["mensaje"]);
const mensajeRecibido = ref(props.mensaje);
watch(
  () => props.mensaje,
  (newValue) => {
    mensajeRecibido.value = newValue;
  }
);
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #333;
  color: white;
}
h3 {
  margin: 0;
}
</style>
