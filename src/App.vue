<template>
  <div class="app">
    <TopBar></TopBar>
    <div class="main-container" v-bind:class="{ toggled: sidebarToggled }">
      <div class="side-menu-touch-detector" v-on:click="closeSidebar"></div>
      <div class="navbar" >
        <img src="https://ipfs.infura.io/ipfs/QmZ1ZFEPt6eQcYZSMX6umB8AzFwQt7kSaptHGMs3QNfk7f" height="20px" style="
            position: absolute;
            left: 10px;
            margin-top: 11opx;
            padding-top: 10p;
            height: 47px;
        ">
        <div class="home-menu">
          <router-link to="/" class="app-title" style="margin-left: 50px;">Katinrun Plasma Block Explorer</router-link>
          <div class="hamburger-icon" v-on:click="toggleSidebar">
            <font-awesome-icon icon="bars" class="hidden-desktop" />
          </div>
          <ul class="hidden-mobile main-menu">
            <li>
              <router-link to="/" exact>Dashboard</router-link>
            </li>
            <li>
              <router-link to="/blocks">Blocks</router-link>
            </li>
            <li>
              <router-link to="/transactions">Transactions</router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <div class="side-menu-container" id="side-menu" v-bind:class="{ toggled: sidebarToggled }">
      <ul class="side-menu hidden-desktop">
        <li><router-link to="/" exact>Dashboard</router-link></li>
        <li><router-link to="/blocks">Blocks</router-link></li>
        <li><router-link to="/transactions">Transactions</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
require('@/assets/css/pure.min.css')
require('@/assets/css/pure-grid.min.css')
require('@/assets/css/main.scss')
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  metaInfo: {
    title: 'Katinrun Plasma Block Explorer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    TopBar
  },
  data () {
    return {
      sidebarToggled: false
    }
  },
  methods: {
    toggleSidebar () {
      this.sidebarToggled ? this.closeSidebar() : this.openSidebar();
    },
    openSidebar () {
      this.sidebarToggled = true
    },
    closeSidebar () {
      this.sidebarToggled = false
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.active {
  color: #42b983;
}
.navbar {
  position: fixed;
  top: 72px;
}
</style>
<style>
.mobile-view-header {
  position: fixed;
  top: 127px;
}
</style>
