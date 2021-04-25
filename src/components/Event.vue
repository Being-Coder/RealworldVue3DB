<template>
<router-link class="event-link" :to="{name : 'EventDetails', params : {  id : event.id}  }">
  <div class="event-card">
        <span>@{{event.date}} on {{event.location}}</span>
        <h3>{{event.title}}</h3>
</div>
</router-link>
</template>

<script>
export default {
  name: 'Event',
  props: {
    event: Object,
  },
  data(){
    return {
    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link{
  color : black;
  text-decoration: none;
}
</style>