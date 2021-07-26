<template>
  <div class="manage">
    <h1>Verwaltung</h1>
    <article class="form">
      <div class="container">
        <p>Was gibt es?</p>
        <input type="text" class="formInput" v-model="food">
        <p>Welche Zutaten brauchen wir?</p>
        <div class='tag-input'>
                <div v-for='(tag, index) in ingredients' :key='tag' class='tag-input__tag'>
                <span @click='removeTag(index)'>x</span>
                {{ tag }}
                </div>
                <input type='text'  
                class='tag-input__text'
                @keydown.enter="addTag($event)"
                @keydown.delete="removeLastTag($event)"
                autocomplete="false"
                />
              </div>
              <p>An welchem Tag?</p>
              <select name="weekdays" id="weekday" class="formInput" v-model="weekday">
                <option value="monday">Montag</option>
                <option value="tuesday">Dienstag</option>
                <option value="wednesday">Mittwoch</option>
                <option value="thursday">Donnerstag</option>
                <option value="friday">Freitag</option>
                <option value="saturday">Samstag</option>
                <option value="sunday">Sonntag</option>
              </select>
              <button 
              class="btn btn-primary"
              v-on:click="send"
              >Speichern</button> 
              <button 
              v-on:click="clear" 
              class="btn btn-secondary">Zurücksetzen</button>
        </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Manage",
  components: {
  }, 
  methods: {
      removeTag (index) {
      this.ingredients.splice(index, 1)
      },
      addTag(event) {
          event.preventDefault()
          var val = event.target.value.trim()
          if (val.length > 0) {
            // Duplicate Entry prevention
            if (this.ingredients.includes(val)) {
              event.target.value = ''
              return; 
            }
            this.ingredients.push(val)
            event.target.value = ''
          } 
      },
      removeLastTag(event) {
        if (event.target.value.length === 0) {
          this.removeTag(this.ingredients.length - 1)
        }
      },
      send() {
        axios.post("http://localhost:3000/set", {
          weekday: this.weekday,
          food: this.food,
          ingredients: this.ingredients
        })

        this.weekday = "";
        this.food = "";
        this.ingredients = [];
      },
      clear() {
        axios.get("http://192.168.2.171:3001/clear")
      }
  },
  data() {
    return {
      food: "",
      ingredients: [],
      weekday: ""
    }
  }

  
}
</script>

<style lang="scss" scoped>
  * {
    margin-top: 10px;
  }

  .form {
    display:grid;
    place-items: center;
  }

  p {
    text-align:left;
    margin-top:10px;
    margin-bottom: 0px;
  }

  .tag-input {
    margin: 0;
    padding: 2px;
    width: 100%;
    border: 1px solid #eee;
    font-size: 1em;
    height: auto;
    box-sizing: border-box;
    text-align: left;

  }

  .tag-input__tag {
    height: 30px;
    float: left;
    margin-right: 5px;
    background-color: #007bff;
    color: white;
    line-height: 33px;
    padding: 0 7px;
    border-radius: 20px;
    margin-left: 5px;
  }

  .tag-input__tag > span {
    cursor: pointer;
    opacity: 0.75;
  }

  .formInput {
    width: 100%;
    border: 1px solid #eee;
    font-size: 1em;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    text-align: left;
    margin: 0;
  }

  .tag-input__text {
    border: none;
    outline: none;
    font-size: 1em;
    line-height: 35px;
    width: auto;
    background: none;
    margin-left: 5px;
  }

  .btn {
    margin: 5px;
  }
  
</style>