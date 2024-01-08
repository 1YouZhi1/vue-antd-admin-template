<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo-container">
            <div class="logo">
                <img src="../../assets/logo.png" style="width: 50px; height: 50px; margin-right: 10px;" />
                <div class="title" style="padding: 16px;">
                    {{ title }}
                </div>
            </div>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1">
                <pie-chart-outlined />
                <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <desktop-outlined />
                <span>Option 2</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #title>
                    <span>
                        <user-outlined />
                        <span>User</span>
                    </span>
                </template>
                <a-menu-item key="3">Tom</a-menu-item>
                <a-menu-item key="4">Bill</a-menu-item>
                <a-menu-item key="5">Alex</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #title>
                    <span>
                        <team-outlined />
                        <span>Team</span>
                    </span>
                </template>
                <a-menu-item key="6">Team 1</a-menu-item>
                <a-menu-item key="8">Team 2</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="9">
                <file-outlined />
                <span>File</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    import {
        PieChartOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined
    } from '@ant-design/icons-vue';
    const title = ref("标题")
    const collapsed = ref(false);
    const selectedKeys = ref(['1']);
</script>

<style scoped>
    .logo-container {
        display: flex;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        margin: 16px;
        background: rgba(255, 255, 255, 0.3);
    }

    .site-layout .site-layout-background {
        background: #fff;
    }

    [data-theme='dark'] .site-layout .site-layout-background {
        background: #141414;
    }

    .title {
        margin: 0;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
</style>