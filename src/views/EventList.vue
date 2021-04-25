<template>
<h4>Events For Good</h4>
<div class="event">
  <Event v-for="event in events" :key="event.id" :event="event"></Event>
</div>
</template>

<script>
import Event from "../components/Event.vue";
import EventServices from '../services/EventServices.js'
export default {
  name: "Home",
  components: {
    Event,
  },
  data() {
    return {
      events: null,
    }
  },
created(){
     EventServices.getEvents()
    .then(response => { this.events = response.data})
    .catch(error => {console.log(error)})
}
};
</script>

<style>
.event{
  display: flex;
  flex-direction: column;
  align-items : center;
}
</style>