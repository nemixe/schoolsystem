<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'hello' }">Hello World</router-link>
            <router-link :to="{ name: 'login' }">Login</router-link>
        </p>
        <li v-if="$auth.check()">
            <a href="#" @click.prevent="$auth.logout()">Logout</a>
        </li>
        <button class="button">awdawd</button>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
