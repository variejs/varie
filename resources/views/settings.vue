<style>
    html, body {
        color: #636b6f;
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }
    .full-height {
        height: 100vh;
    }
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .position-ref {
        position: relative;
    }
    .content {
        text-align: center;
    }
    .title {
        font-size: 84px;
    }
    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
    .m-b-md {
        margin-bottom: 30px;
    }
</style>
<template>
    <section>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300" rel="stylesheet">
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    Settings
                </div>
                <div class="links">
                    <router-link :to="{ name : 'home' }">Go back to the welcome page</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {

  }
</script>