<template>
  <div id="app">
    <h1>Vue Selectize Demo</h1>

    <div class="col-md-6">
      <div class="form-group">
        <select v-selectize="filterValue"
                v-model="filterValue"
                :options="filterValueOptions"
                :settings="selectizeSettings"
                class="form-control"
        >
          <option value="">Select value</option>
        </select>
      </div>

      <div class="form-group">
        <select v-selectize="filterValue2"
                v-model="filterValue2"
                :options="filterValueOptions2"
                :settings="selectizeSettings2"
                class="form-control"
        >
          <option value="">Select value</option>
        </select>
      </div>

    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  data: function () {
    return {
      filterValue: 1,
      filterValueOptions: [
        {key: 0, value: 'First'},
        {key: 1, value: 'Second'},
        {key: 2, value: 'Third'}
      ],
      filterValue2: [1,2],
      filterValueOptions2: [
        {key: '0', value: 'First'},
        {key: '1', value: 'Second'},
        {key: '2', value: 'Third'}
      ],
      selectizeSettings: {
        valueField: 'key',
        labelField: 'value',
        searchField: 'value',
        maxItems: 1,
        plugins: ['remove_button']
      },
      selectizeSettings2: {
        valueField: 'key',
        labelField: 'value',
        searchField: 'value',
        maxItems: 3,
        plugins: ['remove_button']
      }
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
  .data-display {
    clear: left;
  }
</style>
