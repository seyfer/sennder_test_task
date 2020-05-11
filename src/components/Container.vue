<template>
  <b-container :class="$style.container">
    <b-row :class="$style.row">
      <b-col cols="12" md="12">
        <b-card no-body>
          <b-tabs card fill>
            <b-tab active>
              <template v-slot:title>
                <b-icon-building /> Employer-Tab
              </template>
              <b-card-body>Tab contents 1</b-card-body>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <b-icon-briefcase /> Employee-Tab
              </template>
              <b-card-body>Tab contents 2</b-card-body>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name: "Container",
};
</script>

<style module lang="scss">
.container {
  min-height: 500px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.row {
  width: 100%;
}
</style>
