<template>
    <div class="login-container">
        <div class="login-form">
            <a-card title="标题">
                <a-form ref="loginForm" :model="formState" name="normal_login" :labelCol="{ style: { width: '70px' } }"
                    :labelAlign="'left'">
                    <a-form-item label="用户名" name="username"
                        :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
                        <a-input v-model:value="formState.username">
                            <template #prefix>
                                <UserOutlined class="site-form-item-icon" />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item label="密码" name="password"
                        :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
                        <a-input-password v-model:value="formState.password">
                            <template #prefix>
                                <LockOutlined class="site-form-item-icon" />
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <div class="action-1">
                        <a-form-item name="remember" no-style>
                            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
                        </a-form-item>
                        <a-typography-link class="login-form-forgot" href="#">忘记密码</a-typography-link>
                    </div>
                    <div class="action-2">
                        <a-button :disabled="disabled" type="primary" class="form-button" @click="handleLogin">
                            登录
                        </a-button>
                        <a-button type="primary" class="form-button">
                            注册
                        </a-button>
                    </div>
                </a-form>
            </a-card>
        </div>
    </div>
</template>
<script setup>
import { reactive, computed, ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
const formState = reactive({
    username: 'admin',
    password: '123456',
    remember: false
});
const loginForm = ref()
const store = useStore()

const disabled = computed(() => {
    return !(formState.username && formState.password);
});

const handleLogin = () => {
    loginForm.value.validate().then(() => {
        // store.dispatch('user/login',formState)
        store.dispatch('user/logout')
    }).catch(error => {
        console.log(error)
    })
}
</script>
<style lang="scss" scoped>
::v-deep .ant-form-item-explain-error {
    text-align: left;
    font-size: 12px;
}

.login-container {
    height: 100%;
    width: 100%;
    background-image: url('~@/assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form {
        width: 400px;
    }

    @media screen and (max-width: 768px) {
        .login-form {
            width: 80%;
        }
    }

    .action-1 {
        display: flex;
        justify-content: space-between;
    }

    .action-2 {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        .form-button {
            padding: 0 30px;
        }
    }
}
</style> scoped>

  