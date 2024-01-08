<template>
    <a-layout-header style="background: #ffffff; padding: 0">
        <a-row>
            <a-col :span="2" :push="20">
                <a href="#">
                    <img :src="header" style="width: 50px; height: 50px;" />
                </a>
            </a-col>
            <a-col :span="6" :pull="3">
                <div class="asc">


                </div>
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script setup>

    const header = "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
</script>

<style>
    .asc {
        font-size: 20px;
    }
</style>