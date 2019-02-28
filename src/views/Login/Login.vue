<template>
    <div class="Login">
      <v-card elevation="7" class="Login__container">
        <div class="Login__container-left">

          <div class="Login__container-form">
            <div class="Login__container-form--title">
              Sign In
            </div>
            <transition
              name="zoomUp"
              enter-active-class="bounceLeft-enter"
              leave-active-class="bounceRight-leave"
            >
              <div v-if="loginError" class="Login__container-form--error">
                <v-icon>warning</v-icon>
                Wrong Username or Password!
              </div>
            </transition>
            <form class="Login__container-form--container" @submit.prevent="onSubmit">
              <v-text-field
                v-model="username"
                label="Username"
                color="info"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="password"
                color="info"
                :append-icon="show1 ? 'visibility_off' : 'visibility'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 6 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              <div class="formBtns">
                <span><a href="#">Forgot password?</a></span>
                <v-btn
                  type="submit"
                  color="info"
                  :disabled="showLoader"
                >
                  <v-progress-circular
                    v-if="showLoader"
                    indeterminate
                    :width="3"
                    color="primary"
                  ></v-progress-circular>
                  <span v-if="!showLoader">Sign in</span>
                </v-btn>
              </div>
            </form>
          </div>
        </div>
        <div class="Login__container-right">
          <v-card-title primary-title>
            <div>
              <h3 class="headline ">Vendor Portal System</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              <div class="Login__container-logo">
                <v-icon color="white">local_shipping</v-icon>
              </div>
            </div>
          </v-card-title>
          <v-btn color="success">
            Try out
            <i class="material-icons">
              arrow_right_alt
            </i>
          </v-btn>
        </div>
      </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      username: '',
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters'
      }
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('loginUser', formData)
    }
  },
  computed: {
    ...mapGetters({
      loginError: 'loginError',
      showLoader: 'showLoader',
      loggedIn: 'loggedIn'
    })
  },
  watch: {
    loggedIn (newValue, oldValue) {
      if (newValue) {
        this.$router.push('home')
      }
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('home')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "Login";
</style>
