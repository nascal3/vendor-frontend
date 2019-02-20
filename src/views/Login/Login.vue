<template>
    <div class="Login">
      <v-card class="Login__container">
        <div class="Login__container-left">

          <div class="Login__container-form">
            <div class="Login__container-form--title">
              Sign In
            </div>
            <form class="Login__container-form--container">
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
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              <div class="formBtns">
                <span><a href="#">Forgot password?</a></span>
                <v-btn color="info">Sign in</v-btn>
              </div>
            </form>
          </div>
        </div>
        <div class="Login__container-right">
          <v-card-title primary-title>
            <div>
              <h3 class="headline ">Vendor Portal System</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>

          </v-card-title>
        </div>
      </v-card>
    </div>
</template>

<script>
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
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "Login";
</style>
