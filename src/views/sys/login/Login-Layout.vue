<!-- src/views/sys/login/Login-Layout.vue -->
<template>
    <div class="login-layout">
        <!-- 整个页面的背景图 -->
        <div class="background">
            <!-- 放置整个页面的背景图 -->
            <img src="../../../assets/background.jpg" alt="Background" />
        </div>


        <!-- 右边登录窗口 -->
        <div class="login-content">
            <a-form :form="form" @submit="handleSubmit" class="login-form">
                <h3 class="title"> {{ title }} </h3>
                <a-input v-model="formData.username" placeholder="账号" style=" min-height: 40px;">
                    <!-- 用户名输入框的图标 -->
                    <template #prefix>
                        <UserOutlined />
                    </template>
                    <!-- 用户名输入框的额外信息提示 -->
                    <template #suffix>
                        <a-tooltip title="Extra information">
                            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                        </a-tooltip>
                    </template>
                </a-input>
                <br>
                <a-input type="password" v-model="formData.password" placeholder="密码" style="margin-top: 20px; min-height: 40px;">
                    <!-- 密码输入框的图标 -->
                    <template #prefix>
                        <lock-outlined />
                    </template>
                    <!-- 密码输入框的额外信息提示 -->

                </a-input>
                <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-button"  style="margin-top: 20px; min-height: 40px;">
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    import {
        UserOutlined,
        LockOutlined
    } from '@ant-design/icons-vue';
    const form = ref(null);
    const title = ref("标题")


    const formData = ref({
        username: '',
        password: '',
    });

    const handleSubmit = () => {
        form.value.validateFields().then(() => {
            // 处理登录逻辑
            console.log('Form submitted:', formData.value);
            
        });
    };
</script>

<style scoped>
    .title {
        margin: 0 auto 30px auto;
        text-align: center;
        color: #707070;
        font-size: 2vmin;
    }

    /* 设置外层容器的高度为百分比 */
    .login-layout {
        height: 100%;
    }

    /* 设置整个页面的背景图样式 */
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .background img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* 保持比例填充 */
    }

    /* 设置登录窗口的样式 */
    .login-content {
        padding: 20px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-form {
        /* ... 其他样式 ... */
        width: 400px;
        padding: 25px 25px 5px 25px;

        /* 新增样式 */
        margin: 0 auto;
        margin-right: 10vw;
        border-radius: 6px;
        background: #fff;
        padding: 25px 25px 5px 25px;
    }


    .login-button {
        width: 100%;
    }
</style>