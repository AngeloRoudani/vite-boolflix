<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <h3>{{ original }}</h3>
        <h3>{{ vote }}</h3>
        <h3>{{ language }}</h3>
      
    </div>
  </template>
  
  <script >
      export default {
          name: 'MoviesCard',

          props: {
            title: String,
            original: String,
            vote: String,
            language: String
          }
      }
  
  </script>
  
  <style scoped lang="scss">
    .card {
        width: calc(100% / 5);
    }
  
  
  
  
  </style>