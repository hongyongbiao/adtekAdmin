<template>
    <div>

        <index v-if="true" />
        <login v-else />
        
    </div>
</template>

<script>
import Login from '../src/pages/Login/Login'
import Index from '../src/pages/Index/Index'
export default {
    name:'App',
    components:{
        Login,
        Index
    }
}
</script>

<style lang="stylus" scoped>

</style>