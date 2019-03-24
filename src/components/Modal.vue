<template>
  <b-container fluid id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div>
              <b-button
                variant="outline-primary"
                class="modal-default-button"
                @click="$emit('close')"
              >
                <i class="fas fa-times"></i>
              </b-button>
            </div>
            <div>
              <b-embed
                v-if="title==='SÉRAPHINE'"
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/dqZe-1eG9r8"
                allowfullscreen
              />
              <b-embed
                v-if="title==='DEMAIN DÈS L\'AUBE'"
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/zVZ5McbsEHs"
                allowfullscreen
              />
              <b-embed
                v-if="title==='LE FACTEUR CHEVAL'"
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/v8h4kI7gWxI"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </b-container>
</template>
<script>
export default {
  name: 'Modal',
  props: { title: String },
};
</script>
<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 80%;
  margin: 0px auto;
  padding: 0px;
  background-color: $dark-purple;
  border-radius: 5px;
  border: 1px solid $dark-purple;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>