<template>
    <div id="app">
        <notifications></notifications>
        <router-view></router-view>
    </div>
</template>

<script>
    import Notifications from 'varie/Notifications'
    export default {
      components : {
        Notifications
      }
    }
</script>
