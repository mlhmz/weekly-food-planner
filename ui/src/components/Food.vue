<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-sm" v-for="(entry, index) of food" :key="entry.weekday">
                    <div class="row title bg-light">
                        
                        <h3 v-if="index === 'monday'">Montag</h3>
                        <h3 v-else-if="index === 'tuesday'">Dienstag</h3>
                        <h3 v-else-if="index === 'wednesday'">Mittwoch</h3>
                        <h3 v-else-if="index === 'thursday'">Donnerstag</h3>
                        <h3 v-else-if="index === 'friday'">Freitag</h3>
                        <h3 v-else-if="index === 'saturday'">Samstag</h3>
                        <h3 v-else-if="index === 'sunday'">Sonntag</h3>
                    </div>
                    <div class="row">
                    <p v-if="entry.food === null">/</p>
                    <p v-else-if="entry.food != null">{{ entry.food }}</p>
                    </div>
                    <div class="row">
                        <p v-if="entry.ingredients === null">/</p>
                        <div v-else>
                            <p v-for="(ingredient, index) of entry.ingredients" :key="index" class="ingredients">
                                {{ingredient}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Food",
    data() {
        return {
            food: []
        }
    },

    created() {
        axios.get("http://192.168.2.171:3001/get").then(res => {
            this.food = res.data
        }).catch(err => {
            throw err;
        })
  }
}
</script>

<style lang="scss" scoped>
    $primary: #0d6efd;

  .container {
    margin-top: 15px;
  }

  h3 {
    display: inline-block;
    vertical-align: middle;
    color: black;
    margin: 0;
    line-height: 1.7;
    font-size: 1.5em;
    font-weight: bold;
    
  }

  .row {
      height: auto;
  }
  
  .ingredients {
      display: inline-block;
      margin: 5px;
      background: $primary;
      color: white;
      padding: 5px;
      border-radius: 20px;
  }

  .row {
    box-shadow: -.5px -.5px 0 .5px #dadada, inset -1px -1px 0 0 #dadada;
  }

  .title {
  }

  .col-lg {
  }
</style>
